import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Shield, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold text-primary">
            RedVelvet Productions
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link to="/">
            <Button
              variant={currentPath === '/' ? 'default' : 'ghost'}
              size="sm"
              className={cn('gap-2')}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <Link to="/privacy">
            <Button
              variant={currentPath === '/privacy' ? 'default' : 'ghost'}
              size="sm"
              className={cn('gap-2')}
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
