import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, AlertTriangle, Users, Baby, FileText, CheckCircle, XCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4 shadow-banana">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Privacy Policy</h1>
          <p className="text-lg text-foreground">
            For <span className="font-semibold text-primary">Chimp Factory</span> and{' '}
            <span className="font-semibold text-primary">BananaSplit</span>
          </p>
          <p className="text-sm text-foreground/80">
            By RedVelvet Productions. Your privacy and safety matter to us.
          </p>
        </div>

        <div className="space-y-6">
          {/* Section 1: Information We Collect */}
          <Card className="border-3 border-primary/40 bg-card/90 backdrop-blur-sm shadow-banana">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">Information We Collect</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  We may collect:
                </h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Username / display name</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Platform ID (Meta / Steam)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Basic gameplay data (cosmetics, stats, currency, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Crash logs for fixing bugs</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  We do not collect:
                </h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Passwords</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Payment information (handled by platform providers)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Personal addresses or private real-world data</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <h3 className="font-semibold mb-2 text-foreground">All data is used only to:</h3>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Improve gameplay</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Fix bugs</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Prevent cheating</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Moderate the community</span>
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-center py-2 text-foreground">
                We do not sell or share your personal data with third parties.
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Asset Ripping & IP */}
          <Card className="border-3 border-red-200 dark:border-red-900/30 bg-card/90 backdrop-blur-sm shadow-banana">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">2. Asset Ripping & Intellectual Property</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium text-foreground">
                All game assets (models, maps, sounds, cosmetics, UI, logos, etc.) belong to Chimp Factory.
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-2 border-red-200 dark:border-red-900/50">
                <div className="flex items-start gap-2 mb-3">
                  <Badge variant="destructive" className="text-sm">PROHIBITED</Badge>
                </div>
                <p className="font-semibold mb-2 text-foreground">
                  Asset ripping, copying, redistributing, or reuploading our content without permission is strictly prohibited.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">If you:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Steal assets</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Reupload our game</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Modify and redistribute our content</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Use our assets in your own projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900/50">
                <p className="font-semibold text-foreground">
                  We will take legal action, including DMCA takedowns and potential lawsuits.
                </p>
              </div>

              <p className="text-sm text-foreground/80">
                If you want to create content (videos, streams, fan art), that's awesome! Just don't steal or redistribute our game files.
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Community & Moderation */}
          <Card className="border-3 border-primary/40 bg-card/90 backdrop-blur-sm shadow-banana">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">3. Community & Moderation</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                We want everyone to have fun, but we have rules to keep the community safe and enjoyable.
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Prohibited Behavior:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Harassment, bullying, or hate speech</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Cheating, hacking, or exploiting bugs</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Impersonating developers or staff</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Spamming or advertising</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Sharing inappropriate content</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <h3 className="font-semibold mb-2 text-foreground">Consequences:</h3>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Warnings</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Temporary bans</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Permanent bans</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Reporting to platform providers (Meta, Steam, etc.)</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-foreground/80">
                We reserve the right to ban anyone for any reason if they violate our rules or harm the community.
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Age Requirements */}
          <Card className="border-3 border-secondary/40 bg-card/90 backdrop-blur-sm shadow-banana">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Baby className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">4. Age Requirements & Parental Guidance</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/30">
                <p className="font-semibold text-foreground mb-2">
                  Our games are designed for players aged 13 and older.
                </p>
                <p className="text-foreground/90">
                  If you are under 13, you must have parental permission to play.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">For Parents:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-secondary mt-1">•</span>
                    <span>Our games include online multiplayer with voice chat</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-secondary mt-1">•</span>
                    <span>We moderate the community, but cannot monitor all interactions</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-secondary mt-1">•</span>
                    <span>Players can report inappropriate behavior</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-secondary mt-1">•</span>
                    <span>We recommend parental supervision for younger players</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-foreground/80">
                If you have concerns about your child's safety, please contact us or use platform-specific parental controls.
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Changes & Contact */}
          <Card className="border-3 border-accent/40 bg-card/90 backdrop-blur-sm shadow-banana">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">5. Changes to This Policy & Contact</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this page.
              </p>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Contact Us:</h3>
                <p className="text-foreground/90 mb-2">
                  If you have questions, concerns, or want to request data deletion, please reach out:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Through our official Discord server</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>Via the platform store pages (Meta, Steam)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent/30 text-center">
                <p className="font-semibold text-foreground">
                  Thank you for playing Chimp Factory and BananaSplit!
                </p>
                <p className="text-sm text-foreground/80 mt-2">
                  We're committed to providing a fun, safe, and fair experience for everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
