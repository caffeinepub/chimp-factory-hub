import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'chimp-factory-hub';

  return (
    <footer className="border-t bg-muted/50 backdrop-blur">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span>© {currentYear} RedVelvet Productions - Chimp Factory & BananaSplit</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:text-accent transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
