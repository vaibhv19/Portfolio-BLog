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
      className="space-y-4 bg-[#0d111a]/80 p-5 sm:p-6 rounded-lg border border-slate-800/90 shadow-sm"
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
        <div className="flex items-start gap-3 p-3.5 bg-emerald-950/40 border border-emerald-800/70 rounded-md text-emerald-300 text-sm">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-200">Message sent successfully!</p>
            <p className="text-xs text-emerald-300/90 mt-0.5">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {/* Inline Error Notification */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-3.5 bg-rose-950/40 border border-rose-800/70 rounded-md text-rose-300 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
          <div>
            <p className="font-semibold text-rose-200">Failed to send message</p>
            <p className="text-xs text-rose-300/90 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="space-y-1.5">
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
            className={`w-full px-3.5 py-2 text-sm text-slate-100 bg-slate-900/60 border rounded-md placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
              fieldErrors.name
                ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                : "border-slate-800 focus:border-copper"
            }`}
          />
          {fieldErrors.name && (
            <p className="text-xs text-rose-400 font-sans">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
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
            className={`w-full px-3.5 py-2 text-sm text-slate-100 bg-slate-900/60 border rounded-md placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
              fieldErrors.email
                ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
                : "border-slate-800 focus:border-copper"
            }`}
          />
          {fieldErrors.email && (
            <p className="text-xs text-rose-400 font-sans">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-xs font-mono font-bold tracking-wider text-slate-300 uppercase"
        >
          Message <span className="text-copper">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, opportunity, or thoughts..."
          disabled={status === "loading"}
          className={`w-full px-3.5 py-2.5 text-sm text-slate-100 bg-slate-900/60 border rounded-md placeholder:text-slate-500 transition-colors resize-y min-h-[100px] focus:outline-none focus:ring-1 focus:ring-copper/60 focus:border-copper ${
            fieldErrors.message
              ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/40"
              : "border-slate-800 focus:border-copper"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-400 font-sans">{fieldErrors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-1 flex items-center justify-end">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-950 bg-copper hover:bg-copper-hover disabled:opacity-60 disabled:cursor-not-allowed rounded-md shadow-sm transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/50 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5 text-slate-950" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
