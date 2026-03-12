"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      meetingDate: formData.get("meetingDate") as string,
      meetingTime: formData.get("meetingTime") as string,
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-satoshi font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-text mb-3 sm:mb-4">
          Get in touch
        </h1>
        <p className="font-inter text-lg text-secondary-text mb-12">
          Start a project or just say hello. Add a preferred meeting time if
          you&apos;d like—otherwise I&apos;ll reply to your message directly.
        </p>
      </motion.div>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block font-inter text-sm text-secondary-text mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 
                text-primary-text placeholder:text-secondary-text/50
                focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                transition-all duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-inter text-sm text-secondary-text mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 
                text-primary-text placeholder:text-secondary-text/50
                focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="meetingDate"
              className="block font-inter text-sm text-secondary-text mb-2"
            >
              Preferred date <span className="text-secondary-text/60">(optional)</span>
            </label>
            <input
              id="meetingDate"
              name="meetingDate"
              type="date"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 
                text-primary-text placeholder:text-secondary-text/50
                focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                transition-all duration-200 [color-scheme:dark]"
            />
          </div>
          <div>
            <label
              htmlFor="meetingTime"
              className="block font-inter text-sm text-secondary-text mb-2"
            >
              Preferred time <span className="text-secondary-text/60">(optional)</span>
            </label>
            <input
              id="meetingTime"
              name="meetingTime"
              type="time"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 
                text-primary-text placeholder:text-secondary-text/50
                focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                transition-all duration-200 [color-scheme:dark]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-inter text-sm text-secondary-text mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project inquiry"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 
              text-primary-text placeholder:text-secondary-text/50
              focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
              transition-all duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-inter text-sm text-secondary-text mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 
              text-primary-text placeholder:text-secondary-text/50
              focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
              transition-all duration-200 resize-none"
          />
        </div>

        <AnimatePresence mode="wait">
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-400"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="pt-4">
          <MagneticButton
            type="submit"
            variant="primary"
            disabled={status === "loading"}
            className="w-full sm:w-auto min-w-[160px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send message"
            )}
          </MagneticButton>
        </div>
      </motion.form>

      <SuccessPopup
        isOpen={status === "success"}
        onClose={() => setStatus("idle")}
      />
    </section>
  );
}

function SuccessPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background border border-white/10
                shadow-2xl shadow-accent/10 pointer-events-auto"
            >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6"
              >
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h3 className="font-satoshi font-bold text-xl text-primary-text mb-2">
                Message sent!
              </h3>
              <p className="font-inter text-secondary-text mb-6">
                I&apos;ll get back to you soon. Check your inbox.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-accent text-white font-inter font-medium
                  hover:bg-accent/90 transition-colors"
              >
                Done
              </button>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
