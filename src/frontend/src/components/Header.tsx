import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Shield, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/30 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Banana Split
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link to="/">
            <Button
              variant={currentPath === '/' ? 'default' : 'ghost'}
              size="sm"
              className={cn(
                'gap-2 transition-all',
                currentPath === '/' && 'btn-banana shadow-banana'
              )}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <Link to="/privacy">
            <Button
              variant={currentPath === '/privacy' ? 'default' : 'ghost'}
              size="sm"
              className={cn(
                'gap-2 transition-all',
                currentPath === '/privacy' && 'btn-banana shadow-banana'
              )}
            >
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy Policy</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
