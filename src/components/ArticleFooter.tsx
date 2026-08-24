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
}

export function ArticleFooter({
  articleTitle,
  articleSlug,
  prevArticle,
  nextArticle,
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
      {/* 1. Share Section & Back to Top */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                  className="text-slate-400 hover:text-copper transition-colors focus:outline-none"
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
            className="text-xs font-mono text-slate-400 hover:text-copper transition-colors cursor-pointer focus:outline-none"
          >
            &#x2303; Back to Top
          </button>
        </div>
      </div>

      {/* 2. Dotted Divider & Previous / Next Navigation */}
      {(prevArticle || nextArticle) && (
        <div className="border-t border-dashed border-slate-800/80 pt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Previous Post */}
            <div>
              {prevArticle ? (
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-slate-500">
                    &lsaquo; Previous Post
                  </div>
                  <Link
                    href={`/writing/${prevArticle.slug}`}
                    className="text-sm font-bold text-copper hover:text-copper-hover hover:underline transition-colors block"
                  >
                    {prevArticle.title}
                  </Link>
                </div>
              ) : (
                <div />
              )}
            </div>

            {/* Next Post */}
            <div className="sm:text-right">
              {nextArticle ? (
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-slate-500">
                    Next Post &rsaquo;
                  </div>
                  <Link
                    href={`/writing/${nextArticle.slug}`}
                    className="text-sm font-bold text-copper hover:text-copper-hover hover:underline transition-colors block"
                  >
                    {nextArticle.title}
                  </Link>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
