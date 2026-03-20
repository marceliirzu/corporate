import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const SECTORS = [
  { name: "Strategy & Consulting", models: 18, icon: "🎯" },
  { name: "Product Management", models: 15, icon: "📋" },
  { name: "Marketing", models: 16, icon: "📣" },
  { name: "SaaS & Technology", models: 14, icon: "💻" },
  { name: "Finance & Accounting", models: 17, icon: "📊" },
  { name: "Healthcare", models: 10, icon: "🏥" },
  { name: "Real Estate", models: 9, icon: "🏢" },
  { name: "Manufacturing", models: 11, icon: "🏭" },
  { name: "Energy & Utilities", models: 8, icon: "⚡" },
  { name: "Retail & E-Commerce", models: 13, icon: "🛒" },
  { name: "Transportation & Logistics", models: 10, icon: "🚚" },
  { name: "Education", models: 9, icon: "🎓" },
  { name: "Hospitality & Tourism", models: 11, icon: "🏨" },
  { name: "Legal & Compliance", models: 8, icon: "⚖️" },
  { name: "Human Resources", models: 14, icon: "👥" },
  { name: "Operations & Supply Chain", models: 11, icon: "🔧" },
];

const PRICING_TIERS = [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Try it out",
    features: ["3 lifetime credits", "All sectors & models", "Excel + PowerPoint"],
    cta: "Try Free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "28",
    period: "/mo",
    description: "For individual professionals",
    features: [
      "20 generations/month",
      "All sectors & models",
      "Excel + PowerPoint",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Premium",
    price: "70",
    period: "/mo",
    description: "For power users & teams",
    features: [
      "50 generations/month",
      "All sectors & models",
      "Excel + PowerPoint",
      "Priority support",
      "Early access to new models",
    ],
    cta: "Go Premium",
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">Corporate</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Try Free</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The best models,{" "}
            <span className="text-muted-foreground">made for you</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Generate professional business models as polished Excel and
            PowerPoint deliverables in under 60 seconds. Replace 10+ hours of
            weekly production work with three-click generation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="text-base">
                Try Free
              </Button>
            </Link>
            <a href="#sectors">
              <Button variant="outline" size="lg" className="text-base">
                Browse Models
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            3 free credits — no credit card required
          </p>
        </section>

        {/* Value Proposition */}
        <section className="border-y bg-muted/50">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-3xl font-bold">194+</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Model types across 16 sectors
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">&lt; 60s</div>
              <div className="mt-1 text-sm text-muted-foreground">
                From data input to download
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">85-90%</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Presentation-ready on first generation
              </div>
            </div>
          </div>
        </section>

        {/* Sector Overview */}
        <section id="sectors" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              16 sectors. 194+ models.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From strategy frameworks to financial models, find the right
              deliverable for any business challenge.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((sector) => (
              <Card key={sector.name} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="text-2xl">{sector.icon}</div>
                  <CardTitle>{sector.name}</CardTitle>
                  <CardDescription>
                    {sector.models} model{sector.models !== 1 ? "s" : ""}{" "}
                    available
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Start free. Upgrade when you&apos;re ready.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              {PRICING_TIERS.map((tier) => (
                <Card
                  key={tier.name}
                  className={
                    tier.highlight
                      ? "ring-2 ring-primary shadow-lg"
                      : ""
                  }
                >
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">${tier.price}</span>
                      {tier.period && (
                        <span className="text-muted-foreground">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <div className="px-4 pb-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="text-primary">&#10003;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/sign-up" className="mt-4 block">
                      <Button
                        variant={tier.highlight ? "default" : "outline"}
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to save 10+ hours a week?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join professionals who generate presentation-ready business models
            in seconds, not hours.
          </p>
          <div className="mt-8">
            <Link href="/sign-up">
              <Button size="lg" className="text-base">
                Start Generating — It&apos;s Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <span>&copy; {new Date().getFullYear()} Corporate</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
