"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";
import Fuse, { FuseResult } from "fuse.js";
import { buildSearchIndex, SearchDocument } from "@/lib/searchIndex";

interface RankedResult {
  doc: SearchDocument;
  score: number;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Pre-build static search index
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Initialize Fuse.js with a strict threshold for typo fallback only
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      includeScore: true,
      threshold: 0.2,
      distance: 50,
      minMatchCharLength: 2,
      keys: ["title"],
    });
  }, [searchIndex]);

  // Autofocus input on load
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Debounce input updates by 175ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 175);
    return () => clearTimeout(timer);
  }, [query]);

  // Compute and rank search results
  const results = useMemo<RankedResult[]>(() => {
    const trimmed = debouncedQuery.trim().toLowerCase();
    if (!trimmed) {
      return [];
    }

    // 1. First Pass: Substring & Word Prefix Matching (Highest Relevance)
    const substringMatches: RankedResult[] = [];
    const seenIds = new Set<string>();

    for (const doc of searchIndex) {
      const titleLower = doc.title.toLowerCase();
      const words = titleLower.split(/[\s\-_/·:]+/);

      // Exact title match
      if (titleLower === trimmed) {
        substringMatches.push({ doc, score: 0 });
        seenIds.add(doc.id);
      }
      // Word prefix match (e.g. "trajec" -> "Trajectory", "djan" -> "Django")
      else if (words.some((w) => w.startsWith(trimmed))) {
        substringMatches.push({ doc, score: 0.05 });
        seenIds.add(doc.id);
      }
      // Contained substring match (e.g. "script" -> "TypeScript")
      else if (titleLower.includes(trimmed)) {
        substringMatches.push({ doc, score: 0.1 });
        seenIds.add(doc.id);
      }
    }

    // If direct substring/prefix matches exist, return them immediately
    if (substringMatches.length > 0) {
      substringMatches.sort((a, b) => {
        if (a.doc.isPage !== b.doc.isPage) {
          return a.doc.isPage ? -1 : 1;
        }
        return a.score - b.score;
      });
      return substringMatches;
    }

    // 2. Second Pass: Strict Fuzzy Matching (Only if NO substring matches exist anywhere)
    const fuseResults = fuse.search(trimmed);
    const fuzzyMatches: RankedResult[] = fuseResults
      .filter((res) => (res.score ?? 1) <= 0.2 && !seenIds.has(res.item.id))
      .map((res) => ({
        doc: res.item,
        score: res.score ?? 0.5,
      }));

    fuzzyMatches.sort((a, b) => {
      if (a.doc.isPage !== b.doc.isPage) {
        return a.doc.isPage ? -1 : 1;
      }
      return a.score - b.score;
    });

    return fuzzyMatches;
  }, [debouncedQuery, fuse, searchIndex]);

  const isSearching = debouncedQuery.trim().length > 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 space-y-6">
      {/* Page Header */}
      <header className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
          Search
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed italic">
          Search writings, my work and technology I've worked with...
        </p>
      </header>

      {/* Search Input Box */}
      <div className="relative">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. distributed systems"
            className="w-full px-3.5 py-2.5 pr-10 text-sm sm:text-base text-slate-100 bg-transparent border-2 border-copper/35 focus:border-copper rounded-sm placeholder:text-slate-500/40 focus:placeholder:text-slate-400/80 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60"
            autoComplete="off"
            spellCheck="false"
          />
          {query ? (
            <button
              onClick={() => {
                setQuery("");
                setDebouncedQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search query"
              className="absolute right-3 p-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="absolute right-3 pointer-events-none text-slate-500">
              <SearchIcon className="w-4 h-4 text-copper/70" />
            </div>
          )}
        </div>
      </div>

      {/* Results Area — Completely empty by default until user types */}
      {isSearching && (
        <div className="space-y-3 pt-2">
          {results.length > 0 ? (
            <>
              <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                {results.length} result{results.length === 1 ? "" : "s"} found
              </div>
              <div className="divide-y divide-slate-800/60 border-t border-b border-slate-800/60">
                {results.map(({ doc }) => {
                  return (
                    <Link
                      key={doc.id}
                      href={doc.url}
                      className="group block py-3.5 sm:py-4 px-2 hover:bg-slate-900/40 rounded transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 min-w-0 flex-1">
                          {doc.category && (
                            <div className="text-xs text-slate-400 font-mono">
                              {doc.category}
                            </div>
                          )}

                          <h2 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-copper transition-colors">
                            {doc.title}
                          </h2>

                          {doc.tagline && (
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2 italic">
                              {doc.tagline}
                            </p>
                          )}
                        </div>

                        <div className="shrink-0 pt-1 text-slate-600 group-hover:text-copper transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-300">
                No results found for &ldquo;<span className="text-copper">{debouncedQuery}</span>&rdquo;
              </p>
              <p className="text-xs text-slate-500">
                Try searching for broader keywords like <span className="text-slate-400">Python</span>,{" "}
                <span className="text-slate-400">LangGraph</span>,{" "}
                <span className="text-slate-400">Docker</span>, or{" "}
                <span className="text-slate-400">RAG</span>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
