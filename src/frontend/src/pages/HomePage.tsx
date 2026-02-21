import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Shield, Gamepad2, Factory, Banana } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
            RedVelvet Productions
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Welcome to the official hub for Chimp Factory and BananaSplit - fan games inspired by Gorilla Tag
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="border-2 border-primary/30 hover:shadow-lg transition-shadow bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Factory className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-2xl text-foreground">Chimp Factory</CardTitle>
                  <CardDescription className="text-foreground/80">Swing, climb, and explore!</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">
                Experience the thrill of being a chimp in a vibrant factory setting. Join the community and start your adventure!
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/30 hover:shadow-lg transition-shadow bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Banana className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-2xl text-foreground">BananaSplit</CardTitle>
                  <CardDescription className="text-foreground/80">Split the fun, double the action!</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">
                A fresh twist on the classic gameplay. Gather bananas, compete with friends, and climb the leaderboards!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Link to="/privacy">
            <Button variant="outline" size="lg" className="gap-2">
              <Shield className="h-5 w-5" />
              Privacy Policy
            </Button>
          </Link>
          <Button size="lg" className="gap-2" asChild>
            <a 
              href="https://www.meta.com/en-gb/experiences/chimp-factory/25694325243600813/?srsltid=AfmBOopTfM4KbYVw3sF3J36aq3QWgPDUT0W2PgqF3OIlTJEfW63azUvs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gamepad2 className="h-5 w-5" />
              Play Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
