"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // Honeypot field for bot detection
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear individual field error on change
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          honeypot: formData.website,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
      setFieldErrors({});
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3.5 bg-transparent p-3.5 sm:p-4 rounded-sm border-2 border-copper/35 shadow-sm"
    >
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Inline Success Notification */}
      {status === "success" && (
        <div className="flex items-start gap-3 p-3 bg-emerald-950/40 border border-emerald-800/70 rounded-sm text-emerald-300 text-sm">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-200 text-xs sm:text-sm">Message sent successfully!</p>
            <p className="text-xs text-emerald-300/90 mt-0.5">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {/* Inline Error Notification */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-3 bg-rose-950/40 border border-rose-800/70 rounded-sm text-rose-300 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400 mt-0.5" />
          <div>
            <p className="font-semibold text-rose-200 text-xs sm:text-sm">Failed to send message</p>
            <p className="text-xs text-rose-300/90 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Top Introductory Note Inside Box */}
      <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
        Reach out, straight to my inbox.
      </p>

      {/* Message Field (First / Top) */}
      <div className="space-y-1">
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          aria-label="Message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Let's hear it..."
          disabled={status === "loading"}
          className={`w-full px-3 py-2 text-sm text-slate-100 bg-transparent border-2 rounded-sm placeholder:text-slate-500/40 focus:placeholder:text-slate-400/80 transition-colors resize-y min-h-[90px] focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
            fieldErrors.message
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
              : "border-copper/35 focus:border-copper"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-400 font-sans">{fieldErrors.message}</p>
        )}
      </div>

      {/* Three-Column Row: Name / Email / Send Button */}
      <div className="flex flex-col sm:flex-row gap-3.5 sm:items-start">
        {/* Name Field */}
        <div className="flex-1 space-y-1">
          <input
            type="text"
            id="contact-name"
            name="name"
            aria-label="Your Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={status === "loading"}
            className={`w-full px-3 py-1.5 text-sm text-slate-100 bg-transparent border-2 rounded-sm placeholder:text-slate-500/40 focus:placeholder:text-slate-400/80 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
              fieldErrors.name
                ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                : "border-copper/35 focus:border-copper"
            }`}
          />
          {fieldErrors.name && (
            <p className="text-xs text-rose-400 font-sans">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="flex-1 space-y-1">
          <input
            type="email"
            id="contact-email"
            name="email"
            aria-label="Your Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            disabled={status === "loading"}
            className={`w-full px-3 py-1.5 text-sm text-slate-100 bg-transparent border-2 rounded-sm placeholder:text-slate-500/40 focus:placeholder:text-slate-400/80 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
              fieldErrors.email
                ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                : "border-copper/35 focus:border-copper"
            }`}
          />
          {fieldErrors.email && (
            <p className="text-xs text-rose-400 font-sans">{fieldErrors.email}</p>
          )}
        </div>

        {/* Send Button */}
        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto h-[34px] inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-950 bg-copper hover:bg-copper-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-sm shadow-sm transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/50 shrink-0"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <Send className="w-3.5 h-3.5 text-slate-950" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Secondary Response Note Inside Box */}
      <div className="flex justify-start pt-0.5">
        <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
          I typically respond within a couple of days.
        </p>
      </div>
    </form>
  );
}
