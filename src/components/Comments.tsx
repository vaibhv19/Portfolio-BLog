"use client";

import { useState } from "react";
import { MessageSquare, Send, User, CheckCircle2 } from "lucide-react";

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
    <div className="space-y-8 pt-8 border-t border-slate-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-amber-400" />
          <h2 className="text-xl font-bold text-slate-100">Visitor Comments</h2>
        </div>
        <span className="text-xs font-mono text-slate-400">{comments.length} Discussion {comments.length === 1 ? "entry" : "entries"}</span>
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 p-5 rounded-xl bg-[#131b2e]/80 border border-slate-800">
        <div className="text-xs font-semibold text-slate-200">Join the discussion</div>
        
        {submitted && (
          <div className="flex items-center gap-2 p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Thank you! Your comment has been posted to this session.</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name / Handle (optional)"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[#0d1322] border border-slate-700/80 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        <textarea
          rows={3}
          placeholder="Share your thoughts, engineering observations, or questions..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
          className="w-full px-3 py-2 rounded-lg bg-[#0d1322] border border-slate-700/80 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
        />

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors"
        >
          <span>Post Comment</span>
          <Send className="w-3 h-3" />
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-xl bg-[#131b2e]/50 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-semibold text-amber-300">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{comment.author}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">{comment.date}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pl-5 border-l border-slate-700/60">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
