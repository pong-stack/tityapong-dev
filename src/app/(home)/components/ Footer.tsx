export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p className="tracking-tight">
          © {new Date().getFullYear()} Sok Tityapong. All rights reserved.
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-foreground/80">Tel:</span>
          <a href="tel:+85515758787" className="text-foreground hover:text-primary transition-colors">
            015 758 787
          </a>
        </p>
      </div>
    </footer>
  );
}
