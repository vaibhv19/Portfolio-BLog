"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface CommentItem {
  id: string;
  author: string;
  date: string;
  text: string;
}

export function Comments({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "comment-1",
      author: "Engineering Reviewer",
      date: "2026-08-18",
      text: "Extremely insightful breakdown of consistent hashing and virtual threads. The latency trade-off comparison between Java and Python is super clear!"
    }
  ]);
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: CommentItem = {
      id: `comment-${Date.now()}`,
      author: authorName.trim() || "Visitor Engineer",
      date: new Date().toISOString().split("T")[0],
      text: commentText.trim()
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    setAuthorName("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="space-y-6 pt-10 border-t border-slate-800">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">Discussion ({comments.length})</h2>
        <span className="text-[11px] font-mono text-slate-500">Public Comments</span>
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-3 pt-2">
        {submitted && (
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono py-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Comment submitted successfully.</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Name or Handle (optional)"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-3 py-1.5 bg-[#0e131f] border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
          />
        </div>

        <textarea
          rows={3}
          placeholder="Share your thoughts or engineering observations..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
          className="w-full px-3 py-2 bg-[#0e131f] border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
        />

        <button
          type="submit"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-colors"
        >
          <span>Post Comment</span>
          <Send className="w-3 h-3 text-amber-400" />
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-4 pt-4 border-t border-slate-800/60">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-1 text-xs border-b border-slate-800/40 pb-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">{comment.author}</span>
              <span className="text-[10px] font-mono text-slate-500">{comment.date}</span>
            </div>
            <p className="text-slate-300 leading-relaxed pt-0.5">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
