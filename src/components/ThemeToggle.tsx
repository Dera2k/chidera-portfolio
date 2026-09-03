import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative grid h-9 w-9 place-items-center border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary transition-colors"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;