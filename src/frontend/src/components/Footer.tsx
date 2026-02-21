import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'banana-split-game';

  return (
    <footer className="border-t-2 border-primary/30 bg-gradient-to-br from-muted/80 to-banana-light/20 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-foreground font-medium">
            <span>© {currentYear} RedVelvet Productions - Chimp Factory & BananaSplit</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-secondary text-secondary animate-glow" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-secondary transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
