
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, FileSpreadsheet, Brain, FileText, Zap, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <header className="w-full py-4 px-6 bg-background border-b">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-insight-600" />
            <span className="text-xl font-bold">InsightFlow</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
            <Link to="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20 px-6">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Visualize</span> Your Data <br />
                with <span className="gradient-text">AI-Powered</span> Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Upload your data and instantly get beautiful charts, actionable insights, and ready-to-share reports.
                No code required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/dashboard">
                  <Button size="lg" className="gap-2">
                    Start For Free <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="#features">
                  <Button size="lg" variant="outline" className="gap-2">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
                <img src="https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Interactive+Dashboard+Demo" 
                     alt="InsightFlow Dashboard Preview" 
                     className="w-full h-auto rounded-lg" />
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-white dark:bg-insight-900 rounded-full p-3 shadow-lg animate-float">
                    <Brain className="h-10 w-10 text-insight-600" />
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-insight-400/30 dark:bg-insight-800/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Turn Data into Decisions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              InsightFlow handles the entire process from data upload to 
              actionable insights in seconds, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FileSpreadsheet className="h-10 w-10" />}
              title="Multi-format Data Import"
              description="Upload CSV, Excel, or connect to Google Sheets, APIs, and SQL databases with no configuration needed."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10" />}
              title="Instant Visualizations"
              description="Get beautiful charts and dashboards automatically generated based on your data structure."
            />
            <FeatureCard 
              icon={<Brain className="h-10 w-10" />}
              title="AI-Powered Insights"
              description="Discover patterns, correlations, and anomalies with our advanced AI analysis engine."
            />
            <FeatureCard 
              icon={<Zap className="h-10 w-10" />}
              title="Natural Language Queries"
              description="Ask questions about your data in plain English and get instant answers and visuals."
            />
            <FeatureCard 
              icon={<FileText className="h-10 w-10" />}
              title="Shareable Reports"
              description="Export dashboards as PDFs or links to share with your team or clients in one click."
            />
            <FeatureCard 
              icon={<Database className="h-10 w-10" />}
              title="Team Collaboration"
              description="Work together with role-based permissions, comments, and shared workspaces."
            />
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works for you and your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Free"
              price="$0"
              description="Perfect for trying out InsightFlow"
              features={[
                "2 datasets",
                "Basic charts",
                "Limited insights",
                "7-day history",
                "Single user"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            <PricingCard 
              title="Pro"
              price="$15"
              description="For professionals and small teams"
              features={[
                "Unlimited datasets",
                "Advanced charts",
                "Full AI insights",
                "30-day history",
                "Up to 5 users",
                "Export to PDF/Excel",
                "Priority support"
              ]}
              buttonText="Start Free Trial"
              buttonVariant="default"
              highlighted={true}
            />
            <PricingCard 
              title="Enterprise"
              price="Custom"
              description="For organizations with advanced needs"
              features={[
                "Everything in Pro",
                "Unlimited users",
                "White labeling",
                "API access",
                "On-premise option",
                "Dedicated support",
                "Custom features"
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 px-6 bg-insight-50 dark:bg-insight-900/20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your data?</h2>
            <p className="text-xl text-muted-foreground">
              Start your free trial today. No credit card required.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-100 dark:bg-slate-900 mt-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <BarChart3 className="h-6 w-6 text-insight-600" />
              <span className="text-xl font-bold">InsightFlow</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="#" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">Features</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">Blog</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} InsightFlow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="mb-4 text-insight-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonVariant = "default", 
  highlighted = false 
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[], 
  buttonText: string, 
  buttonVariant?: "default" | "outline" | "ghost", 
  highlighted?: boolean 
}) => {
  return (
    <div className={`rounded-xl overflow-hidden flex flex-col ${highlighted ? 'ring-2 ring-insight-500 scale-105' : 'border'}`}>
      <div className={`p-6 text-center ${highlighted ? 'bg-insight-600 text-white' : 'bg-card'}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-sm ml-1">/month</span>}
        </div>
        <p className={`mt-2 ${highlighted ? 'text-insight-100' : 'text-muted-foreground'}`}>{description}</p>
      </div>
      <div className="p-6 bg-card flex-grow flex flex-col">
        <ul className="space-y-3 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-insight-100 flex items-center justify-center">
                <ArrowRight className="h-3 w-3 text-insight-600" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to="/dashboard" className="w-full">
            <Button variant={buttonVariant} className="w-full" size="lg">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
