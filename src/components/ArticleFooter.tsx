"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import {
  XIcon,
  BlueskyIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
  TelegramIcon,
  PinterestIcon,
  GithubIcon,
  LeetCodeIcon,
} from "@/components/BrandIcons";

interface ArticleFooterProps {
  articleTitle: string;
  articleSlug: string;
  prevArticle?: { slug: string; title: string } | null;
  nextArticle?: { slug: string; title: string } | null;
  /** Tier 2 sub-blog back-link (overrides prev/next when present) */
  backLink?: { slug: string; title: string } | null;
  basePath?: string;
}

export function ArticleFooter({
  articleTitle,
  articleSlug,
  prevArticle,
  nextArticle,
  backLink,
  basePath = "/writing",
}: ArticleFooterProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [articleSlug]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(articleTitle);

  const shareLinks = [
    {
      name: "X",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: XIcon,
    },
    {
      name: "Bluesky",
      href: `https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`,
      icon: BlueskyIcon,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedinIcon,
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: WhatsappIcon,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: TelegramIcon,
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      icon: PinterestIcon,
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="space-y-8 pt-8 border-t border-slate-800/80">
      {/* 1. Article Navigation */}
      {(nextArticle || prevArticle || backLink) && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Back Link (Tier 2) or Next Article (LEFT) */}
            <div>
              {backLink ? (
                <Link
                  href={`${basePath}/${backLink.slug}`}
                  className="text-sm font-bold text-copper hover:underline transition-all block"
                >
                  &lt;&lt; {backLink.title}
                </Link>
              ) : nextArticle ? (
                <Link
                  href={`${basePath}/${nextArticle.slug}`}
                  className="text-sm font-bold text-copper hover:underline transition-all block"
                >
                  &lt;&lt; {nextArticle.title}
                </Link>
              ) : null}
            </div>

            {/* Previous Article (RIGHT) — only for Tier 1 */}
            <div className="sm:text-right">
              {!backLink && prevArticle ? (
                <Link
                  href={`${basePath}/${prevArticle.slug}`}
                  className="text-sm font-bold text-copper hover:underline transition-all block"
                >
                  {prevArticle.title} &gt;&gt;
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* 2. Share Section & Back to Top */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        (nextArticle || prevArticle || backLink) ? "border-t border-dashed border-slate-800/80 pt-6" : ""
      }`}>
        {/* Share this post on */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Share this post on:
          </span>
          <div className="flex items-center gap-3">
            {shareLinks.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${platform.name}`}
                  title={`Share on ${platform.name}`}
                  className="text-slate-400 hover:text-sky-400 transition-colors focus:outline-none"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors cursor-pointer focus:outline-none"
          >
            &#x2303; Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
