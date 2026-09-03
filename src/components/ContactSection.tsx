import { useState } from "react";
import type { FormEvent } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:chideranwogu2003@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
          <SectionHeader label="Initialize_Contact" index="08" />
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            {/* Info */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground leading-tight">Let's build something reliable_</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind, want to collaborate, or just want to say hello?
                Feel free to reach out.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:chideranwogu2003@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group break-all"
                >
                  <Mail size={16} className="shrink-0" />
                  chideranwogu2003@gmail.com
                </a>
                <a
                  href="mailto:dera_nwogu@yahoo.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
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
                  className="grid h-10 w-10 place-items-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chidera-nwogu-93944a258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 blueprint-surface border border-border p-5 sm:p-8">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring resize-none transition-colors"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 font-mono text-xs font-bold uppercase bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;