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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
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
          <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur">
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
          <Card className="border-2 border-red-200 dark:border-red-900/30 bg-card/80 backdrop-blur">
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
                    <span>Use our cosmetics/models in another project without permission</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">We reserve the right to:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-1" />
                    <span>DMCA your content</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-1" />
                    <span>Issue takedown notices</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-1" />
                    <span>Permanently ban you</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-1" />
                    <span>Pursue legal action if necessary</span>
                  </li>
                </ul>
              </div>

              <p className="text-center font-bold text-lg py-2 text-primary">
                Respect creators. Don't steal.
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Community Rules */}
          <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">3. Community Rules</CardTitle>
                  <p className="text-foreground/80">To keep the game fun and safe:</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">No toxic behavior</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">No harassment</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">No racism or hate speech</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">No cheating or hacking</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">No spamming</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">No impersonation</span>
                </div>
              </div>

              <Separator />

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <h3 className="font-semibold mb-2 text-foreground">Violations may result in:</h3>
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
                </ul>
              </div>

              <p className="text-center font-semibold py-2 text-foreground">
                Be respectful. Have fun. Play fair.
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Age & Safety */}
          <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Baby className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">4. Age Requirements & Safety</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <p className="font-semibold text-lg text-foreground">
                  Our games are intended for players aged 13 and older.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">For younger players:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Parental supervision is recommended</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Parents should review privacy settings</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Report any inappropriate behavior immediately</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Safety features:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                    <span>In-game reporting system</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                    <span>Active moderation team</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                    <span>Player blocking options</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1" />
                    <span>Privacy controls</span>
                  </li>
                </ul>
              </div>

              <p className="text-center font-semibold py-2 text-foreground">
                Your safety is our priority. Report concerns to our support team.
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Changes to Policy */}
          <Card className="border-2 border-primary/30 bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2 text-foreground">5. Changes to This Policy</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
              </p>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <p className="font-semibold mb-2 text-foreground">We will notify you of significant changes via:</p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>In-game announcements</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Email notifications (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <span className="text-primary">→</span>
                    <span>Social media updates</span>
                  </li>
                </ul>
              </div>

              <p className="text-foreground">
                Continued use of our games after changes indicates acceptance of the updated policy.
              </p>

              <Separator />

              <div className="text-center space-y-2">
                <p className="font-semibold text-foreground">Questions or concerns?</p>
                <p className="text-foreground/80">
                  Contact us through our official support channels.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-foreground/70">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">© {new Date().getFullYear()} RedVelvet Productions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
