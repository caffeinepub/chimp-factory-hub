import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Shield, Map, Package, Sparkles, Mountain } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-banana-dark via-primary to-banana-peel bg-clip-text text-transparent">
            Banana Split
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-medium">
            Swing through the jungle as a mighty gorilla! Explore tons of maps, grab cool items, and go bananas!
          </p>
          
          {/* Jungle Banner */}
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-banana-lg">
            <img 
              src="/assets/SampleScene_Custom..._16.02.2026_14-33-01.png" 
              alt="Jungle Adventure" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Game Description Section */}
        <Card className="border-4 border-primary/40 shadow-banana-lg bg-gradient-to-br from-card/95 to-banana-light/20 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Play as a Gorilla!
              </h2>
              <div className="space-y-4 text-lg text-foreground">
                <p className="leading-relaxed">
                  <strong className="text-primary">Banana Split</strong> puts you in control of a powerful gorilla exploring vibrant, interactive worlds. Use your strength and agility to swing, climb, and navigate through diverse environments!
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Map className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary">Multiple Maps:</strong> Discover caves, wooden structures, outdoor landscapes, and more unique environments
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-accent">Grabbable Items:</strong> Interact with tons of cool objects scattered throughout each map
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mountain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-primary">Exploration:</strong> Climb, swing, and explore every corner of the jungle world
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Game Environment Showcase */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Explore Amazing Environments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cave Environment */}
            <Card className="card-game-bg border-3 border-secondary/40 hover:shadow-banana transition-all duration-300 hover:scale-[1.02] bg-card/90 backdrop-blur-sm">
              <div 
                className="absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/SampleScene_Custom..._16.02.2026_14-33-26.png')" }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  Cave Systems
                </CardTitle>
                <CardDescription className="text-foreground/90 text-base">
                  Navigate mysterious underground caverns with hidden passages and secrets
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Outdoor Landscape */}
            <Card className="card-game-bg border-3 border-accent/40 hover:shadow-banana transition-all duration-300 hover:scale-[1.02] bg-card/90 backdrop-blur-sm">
              <div 
                className="absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/SampleScene_Custom..._16.02.2026_14-44-43.png')" }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-accent flex items-center gap-2">
                  <Mountain className="h-6 w-6" />
                  Open Landscapes
                </CardTitle>
                <CardDescription className="text-foreground/90 text-base">
                  Swing through vast outdoor areas with stunning views and challenging terrain
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Wooden Structures */}
            <Card className="card-game-bg border-3 border-jungle-wood/60 hover:shadow-banana transition-all duration-300 hover:scale-[1.02] bg-card/90 backdrop-blur-sm">
              <div 
                className="absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/SampleScene_Custom..._16.02.2026_14-45-00.png')" }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-jungle-wood flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  Wooden Structures
                </CardTitle>
                <CardDescription className="text-foreground/90 text-base">
                  Climb intricate wooden platforms and structures built throughout the jungle
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Wood Floor Areas */}
            <Card className="card-game-bg border-3 border-primary/40 hover:shadow-banana transition-all duration-300 hover:scale-[1.02] bg-card/90 backdrop-blur-sm">
              <div 
                className="absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/SampleScene_Custom..._16.02.2026_14-47-50.png')" }}
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Map className="h-6 w-6" />
                  Interactive Arenas
                </CardTitle>
                <CardDescription className="text-foreground/90 text-base">
                  Play in specially designed areas filled with grabbable items and obstacles
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <Link to="/privacy">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-3 text-lg px-8 py-6 h-auto border-2 border-primary/50 hover:bg-primary/10 hover:border-primary"
            >
              <Shield className="h-6 w-6" />
              Privacy Policy
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-sm text-muted-foreground">
            Also check out <strong className="text-primary">Chimp Factory</strong> - our other gorilla adventure game!
          </p>
        </div>
      </div>
    </div>
  );
}
