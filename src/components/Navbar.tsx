import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToogle";

const links = ["About", "Stack", "Projects", "Architecture", "Experience", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-14">
        <a href="#" className="font-mono text-sm font-semibold text-foreground tracking-tight px-4 sm:px-6 lg:px-8">
          chidera<span className="text-muted-foreground">.dev</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-all duration-200"
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
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-all"
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
