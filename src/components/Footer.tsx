const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/70">
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Chidera Nwogu
        </p>
        <div className="flex items-center gap-6 font-mono uppercase">
          <a
            href="https://github.com/Dera2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chidera-nwogu-93944a258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:chideranwogu2003@gmail.com"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;