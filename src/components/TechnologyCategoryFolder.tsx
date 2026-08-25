"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  TechnologyCategory,
  TechnologyItem,
} from "@/data/technologyInventory";

interface TechnologyCategoryFolderProps {
  category: TechnologyCategory;
  defaultOpen?: boolean;
}

/**
 * Pre-flatten all items across subcategories so we can compute
 * a running sequence number without mutable closures.
 */
function flattenItems(
  category: TechnologyCategory
): { subcategoryTitle: string; item: TechnologyItem; globalSeq: number }[] {
  const result: {
    subcategoryTitle: string;
    item: TechnologyItem;
    globalSeq: number;
  }[] = [];
  let idx = 1;
  for (const sub of category.subcategories) {
    for (const item of sub.items) {
      result.push({
        subcategoryTitle: sub.title,
        item,
        globalSeq: idx,
      });
      idx++;
    }
  }
  return result;
}

export function TechnologyCategoryFolder({
  category,
  defaultOpen = true,
}: TechnologyCategoryFolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const flatItems = flattenItems(category);

  // Group flat items back into subcategory sections for rendering
  const sections: {
    title: string;
    entries: { item: TechnologyItem; seqNum: number }[];
  }[] = [];

  let currentTitle: string | null = null;
  for (const flat of flatItems) {
    if (flat.subcategoryTitle !== currentTitle) {
      currentTitle = flat.subcategoryTitle;
      sections.push({ title: flat.subcategoryTitle, entries: [] });
    }
    sections[sections.length - 1].entries.push({
      item: flat.item,
      seqNum: flat.globalSeq,
    });
  }

  return (
    <div className="space-y-4">
      {/* Editorial Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2.5 py-2.5 border-b border-slate-800 hover:border-slate-700 text-left transition-colors focus:outline-none group"
      >
        <ChevronRight
          className={`w-4 h-4 text-copper transition-transform duration-150 flex-shrink-0 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <span className="font-mono uppercase tracking-widest text-xs font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
          {category.title}
        </span>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="space-y-6 pt-2">
          {sections.map((section) => (
            <div key={section.title || "default"} className="space-y-4">
              {/* Subcategory label – only render if not empty */}
              {section.title && (
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold pl-1">
                  {section.title}
                </div>
              )}

              {/* Technology items */}
              <div className="space-y-4">
                {section.entries.map(({ item, seqNum }) => (
                  <TechnologyEntry
                    key={item.name}
                    item={item}
                    sequenceNum={seqNum}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * A single technology item — clickable title linking to dedicated article page.
 */
function TechnologyEntry({
  item,
  sequenceNum,
}: {
  item: TechnologyItem;
  sequenceNum: number;
}) {
  const indexStr = `${sequenceNum} /`;
  const slug =
    item.articleSlug ||
    item.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <div className="group border-b border-slate-800/60 pb-3 last:border-b-0 last:pb-0">
      {/* Title & Sequence Number */}
      <h3 className="text-base sm:text-lg font-bold">
        <Link
          href={`/technology/${slug}`}
          className="text-slate-100 hover:underline transition-all inline-flex items-center gap-2"
        >
          <span>
            {indexStr} {item.name}
          </span>
        </Link>
      </h3>
    </div>
  );
}
