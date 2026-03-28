import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface Toast {
  type: "success" | "error";
  message: string;
}

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Show success/error message
  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  // Validate form inputs
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.name.trim() || form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.message.trim() || form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Prevent URLs
    if (form.message.match(/https?:\/\/|www\./gi)) {
      newErrors.message = "URLs not allowed in messages";
    }

    // Prevent spam (too many special characters)
    const specialChars = (form.message.match(/[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]/g) || []).length;
    if (specialChars / form.message.length > 0.3) {
      newErrors.message = "Too many special characters";
    }

    return newErrors;
  };

  // Prevent rapid submissions
  const isRateLimited = (): boolean => {
    const now = Date.now();
    if (now - lastSubmitTime < 3000) {
      showToast("error", "Wait a few seconds before sending again");
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRateLimited()) return;

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement
      );

      setForm({ name: "", email: "", message: "" });
      setLastSubmitTime(Date.now());
      showToast("success", "Message sent! I'll get back to you soon.");
    } catch (error) {
      console.error("Error sending email:", error);
      showToast("error", "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name as keyof FormState]: value });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section id="contact" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Contact" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind, want to collaborate, or just want to say hello? 
                Feel free to reach out.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:chideranwogu2003@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  chideranwogu2003@gmail.com
                </a>
                <a
                  href="mailto:dera_nwogu@yahoo.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  dera_nwogu@yahoo.com
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://github.com/Dera2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chidera-nwogu-93944a258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-card text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 transition-colors disabled:opacity-50 ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-ring"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-card text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 transition-colors disabled:opacity-50 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-ring"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-card text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 resize-none transition-colors disabled:opacity-50 ${
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-ring"
                  }`}
                  placeholder="What's on your mind?"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg border ${
          toast.type === "success"
            ? "bg-green-500/10 border-green-500/30 text-green-700"
            : "bg-red-500/10 border-red-500/30 text-red-700"
        }`}>
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}
    </section>
  );
};

export default ContactSection;