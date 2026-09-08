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
      className="space-y-3.5 bg-[#0d111a]/80 p-3.5 sm:p-4 rounded-sm border border-copper/35 shadow-sm"
    >
      {/* Descriptive Lead-in Inside Box */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        If you&apos;d like to connect or have questions about my work, feel free to reach out through any of the links below or send a message directly.
      </p>

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

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Name Field */}
        <div className="space-y-1">
          <label
            htmlFor="contact-name"
            className="block text-xs font-mono font-bold tracking-wider text-slate-300 uppercase"
          >
            Name <span className="text-copper">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={status === "loading"}
            className={`w-full px-3 py-1.5 text-sm text-slate-100 bg-transparent border rounded-sm placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
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
        <div className="space-y-1">
          <label
            htmlFor="contact-email"
            className="block text-xs font-mono font-bold tracking-wider text-slate-300 uppercase"
          >
            Email <span className="text-copper">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            disabled={status === "loading"}
            className={`w-full px-3 py-1.5 text-sm text-slate-100 bg-transparent border rounded-sm placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
              fieldErrors.email
                ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                : "border-copper/35 focus:border-copper"
            }`}
          />
          {fieldErrors.email && (
            <p className="text-xs text-rose-400 font-sans">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label
          htmlFor="contact-message"
          className="block text-xs font-mono font-bold tracking-wider text-slate-300 uppercase"
        >
          Message <span className="text-copper">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, opportunity, or thoughts..."
          disabled={status === "loading"}
          className={`w-full px-3 py-2 text-sm text-slate-100 bg-transparent border rounded-sm placeholder:text-slate-500 transition-colors resize-y min-h-[90px] focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
            fieldErrors.message
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
              : "border-copper/35 focus:border-copper"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-400 font-sans">{fieldErrors.message}</p>
        )}
      </div>

      {/* Submit Button & Secondary Response Note */}
      <div className="pt-1 flex flex-col items-end gap-1.5">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-4.5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-950 bg-copper hover:bg-copper-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-sm shadow-sm transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/50"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5 text-slate-950" />
            </>
          )}
        </button>
        <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
          I typically respond within a couple of days.
        </p>
      </div>
    </form>
  );
}
