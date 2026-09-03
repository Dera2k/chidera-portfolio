import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Stack", "Projects", "Architecture", "Experience", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-mono text-xs font-bold text-foreground uppercase tracking-[0.16em]">
          CN<span className="text-primary">//</span>Systems
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 font-mono text-[11px] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <div className="ml-2 pl-2 border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-9 w-9 place-items-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 font-mono text-xs uppercase text-muted-foreground hover:text-primary hover:bg-accent transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;