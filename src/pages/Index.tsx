import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  MessageSquare,
  Clock,
  Shield,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Star,
  Award,
  Globe,
  Building2,
  BarChart3,
  Bot,
  Smartphone,
  Link as LinkIcon,
  CreditCard,
  BadgeCheck,
  Lock,
  FileCheck,
  Server,
  PlayCircle,
  ShoppingCart,
} from "lucide-react";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Enhanced User Experience",
      description: "Intuitive design that delights users and streamlines interactions",
    },
    {
      icon: MessageSquare,
      title: "Messaging Conversations",
      description: "Dynamic, real-time conversations for seamless communication",
    },
    {
      icon: Clock,
      title: "Optimize Your Time",
      description: "Time-saving solutions that boost efficiency and productivity",
    },
    {
      icon: Shield,
      title: "Safety & Privacy",
      description: "Enterprise-grade security for confidential information",
    },
    {
      icon: Users,
      title: "Direct Conversations",
      description: "Initiate conversations directly within chat for instant engagement",
    },
    {
      icon: Zap,
      title: "Live Engagement",
      description: "Real-time notifications keep you connected instantly",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Seamlessly integrate with your existing systems in minutes",
    },
    {
      number: "02",
      title: "Engage",
      description: "Start real-time conversations with your customers instantly",
    },
    {
      number: "03",
      title: "Optimize",
      description: "Analyze performance and continuously improve engagement",
    },
  ];

  const benefits = [
    "Real-time customer engagement",
    "Secure communication channels",
    "Comprehensive analytics dashboard",
    "24/7 automated responses",
    "Multi-channel support",
    "Easy integration with existing tools",
    "Customizable chat widgets",
    "Advanced routing capabilities",
  ];

  const stats = [
    { value: "10M+", label: "Messages Sent" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "50+", label: "Enterprise Clients" },
  ];

  return (
    <Layout>
      <SEO
        title="Live Chat Software for Customer Support | RingRemind"
        description="Respond instantly and resolve faster with RingRemind's live chat software. Real-time customer support platform trusted by 1000+ businesses. Start free trial."
        keywords="live chat software, customer support chat, real-time chat platform, business chat solution, customer service software, chat support tool, live support system, online chat software, live chat widget, customer communication platform"
        canonical="https://ringremind.com/"
        ogImage="https://ringremind.com/og-image.jpg"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RingRemind",
            "url": "https://ringremind.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ringremind.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "RingRemind",
            "applicationCategory": "CustomerSupportApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "3",
              "lowPrice": "29",
              "highPrice": "999",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "247",
              "bestRating": "5",
              "worstRating": "1"
            },
            "description": "Real-time chat support software for customer service teams. Features include live chat, automated routing, analytics, and CRM integrations.",
            "screenshot": "https://ringremind.com/screenshot.jpg",
            "url": "https://ringremind.com",
            "author": {
              "@type": "Organization",
              "name": "RingRemind",
              "url": "https://ringremind.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "RingRemind Chat Support Platform",
            "description": "Enterprise-grade live chat software for customer support teams. Real-time messaging, automated routing, and comprehensive analytics.",
            "brand": {
              "@type": "Brand",
              "name": "RingRemind"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter Plan",
                "price": "29",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://ringremind.com/pricing"
              },
              {
                "@type": "Offer",
                "name": "Professional Plan",
                "price": "79",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://ringremind.com/pricing"
              },
              {
                "@type": "Offer",
                "name": "Enterprise Plan",
                "price": "999",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://ringremind.com/pricing"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "247"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is RingRemind?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind is a real-time chat support and online communication platform that helps businesses connect with their customers through instant messaging. It provides seamless, secure communication solutions designed to transform customer experiences and drive business growth."
                }
              },
              {
                "@type": "Question",
                "name": "How does RingRemind work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind works in three simple steps: Connect - seamlessly integrate with your existing systems in minutes, Engage - start real-time conversations with customers instantly, and Optimize - analyze performance and continuously improve engagement."
                }
              },
              {
                "@type": "Question",
                "name": "Who is RingRemind for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind is designed for modern businesses looking to enhance customer support and communication. It's ideal for enterprises, healthcare providers, technology companies, and any organization that needs reliable, real-time customer engagement solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What features does RingRemind offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind offers enhanced user experience design, messaging conversations, time optimization tools, safety and privacy features, direct conversation capabilities, and live engagement with real-time notifications. It also includes analytics dashboards, automated responses, multi-channel support, and customizable chat widgets."
                }
              },
              {
                "@type": "Question",
                "name": "Is RingRemind secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, RingRemind provides enterprise-grade security for confidential information. All data transmission is encrypted using HTTPS/SSL protocols, and we implement industry-standard security measures including encryption at rest and in transit."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started with RingRemind?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started is easy. Contact us through our contact form or call 1-800-916-2459. Our team will guide you through the integration process, which typically takes just minutes. We also offer partnership opportunities for resellers and integration partners."
                }
              },
              {
                "@type": "Question",
                "name": "What are RingRemind's pricing plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind offers three pricing tiers: Starter ($29/month) for small teams with 2 agents, Professional ($79/month) for growing businesses with 5 agents and advanced features, and Enterprise (Custom) for large organizations with unlimited agents and white-label solutions. All plans include a 14-day free trial with no credit card required."
                }
              },
              {
                "@type": "Question",
                "name": "What technical requirements are needed for RingRemind?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind is a cloud-based SaaS platform requiring only modern web browsers (Chrome, Firefox, Safari, Edge) with JavaScript enabled, stable internet connection, and iOS 13+ or Android 8+ for mobile apps. No installation, downloads, or server maintenance required."
                }
              },
              {
                "@type": "Question",
                "name": "Which CRM and tools does RingRemind integrate with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind integrates with Salesforce, HubSpot, Zendesk, Shopify, WooCommerce, Slack, Microsoft Teams, Zapier, Stripe, and Google Analytics. We also offer comprehensive REST API for custom integrations."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a mobile app for RingRemind?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, RingRemind offers native mobile apps for both iOS and Android devices. Agents can respond to messages, view conversation history, receive push notifications, and access all platform features from mobile devices."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to implement RingRemind?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most businesses are fully operational within 15 minutes. Basic setup takes 5-10 minutes, customization 10-15 minutes, and CRM integrations 15-30 minutes using pre-built connectors."
                }
              },
              {
                "@type": "Question",
                "name": "Can I migrate data from another chat platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, RingRemind supports data migration from most popular chat platforms including Intercom, Zendesk Chat, and Drift. Migration assistance is included with Professional and Enterprise plans."
                }
              },
              {
                "@type": "Question",
                "name": "What is RingRemind's cancellation policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RingRemind offers flexible cancellation with no long-term contracts or cancellation fees. You can cancel anytime through your account dashboard and retain access until the end of your billing period."
                }
              },
              {
                "@type": "Question",
                "name": "Does RingRemind offer API access for developers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, RingRemind provides comprehensive REST API access with full documentation, webhooks, official SDKs for JavaScript, Python, and PHP, and support for custom integrations. API access is available on Professional and Enterprise plans."
                }
              }
            ]
          }
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-primary-foreground">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 1,000+ businesses worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent inline-block w-full">
                Delight Your Customers with Real-Time Chat Support
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Respond instantly, resolve faster, and build loyalty with RingRemind's powerful live chat software built for modern support teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Free <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 transition-all transform hover:scale-105"
              >
                <a href="#how-it-works" className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  See How It Works
                </a>
              </Button>
            </div>
            <p className="text-sm opacity-75 mb-12">No credit card required • Setup in 5 minutes • Cancel anytime</p>

            {/* Trust Indicators - Enhanced for GEO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-white/20">
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">50M+</div>
                <div className="text-sm opacity-80">Messages Delivered</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">&lt;2 min</div>
                <div className="text-sm opacity-80">Avg Response Time</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">99.99%</div>
                <div className="text-sm opacity-80">Uptime SLA</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-1">4.8/5</div>
                <div className="text-sm opacity-80">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section - Social Proof */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Placeholder for customer logos - Replace with actual logo images */}
            {[
              "TechCorp", "HealthSys", "RetailPlus", "FinanceFlow", "EduConnect", "ServicePro"
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12 text-xs font-semibold text-muted-foreground">
                {company}
                {/* TODO: Replace with <img src="/logos/{company}.png" alt="{company} Logo" /> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.08),transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
          <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold text-sm">About RingRemind</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                  What is RingRemind?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Revolutionizing customer communication with enterprise-grade real-time chat solutions
              </p>
            </div>
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left Content - Description */}
              <div className="lg:col-span-3 space-y-6">
                {/* Highlight Card */}
                <div className="p-8 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl border-2 border-primary/10 shadow-lg backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-foreground leading-relaxed mb-4">
                        <strong className="text-xl text-foreground">RingRemind</strong> is an enterprise-grade real-time chat support and online communication platform designed to revolutionize how businesses connect with their customers. According to industry research, businesses using real-time chat support see an average of <strong className="text-primary text-lg">73% customer satisfaction improvement</strong> and <strong className="text-primary text-lg">40% reduction in support costs</strong>.
                      </p>
                    </div>
                  </div>
          </div>

                {/* Feature Description Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-foreground">Business Growth</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our platform provides seamless, secure communication solutions that transform customer experiences and drive measurable business growth.
                    </p>
                  </div>

                  <div className="p-6 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-foreground">Instant Engagement</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      With RingRemind, companies can engage customers instantly through messaging, automated responses, and intelligent routing.
                    </p>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <p className="text-base text-foreground leading-relaxed">
                    Trusted by <strong className="text-primary text-lg">50+ enterprise clients</strong> across healthcare, technology, and service industries, RingRemind processes over <strong className="text-primary text-lg">10 million messages</strong> annually with <strong className="text-primary text-lg">99.9% uptime</strong> reliability.
                  </p>
                </div>
              </div>

              {/* Right Content - Enhanced Statistics */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl p-8 shadow-2xl border-2 border-primary/10 relative overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-primary/10 rounded-xl">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Key Statistics</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl hover:bg-background transition-all border border-border/30 hover:border-green-500/30 hover:shadow-md">
                          <div className="p-2 bg-green-500/10 rounded-lg flex-shrink-0">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-foreground mb-1">98% Satisfaction</div>
                            <p className="text-sm text-muted-foreground">Customer satisfaction rate across all deployments</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl hover:bg-background transition-all border border-border/30 hover:border-blue-500/30 hover:shadow-md">
                          <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                            <Clock className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-foreground mb-1">&lt;30 Seconds</div>
                            <p className="text-sm text-muted-foreground">Average response time with automated systems</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl hover:bg-background transition-all border border-border/30 hover:border-purple-500/30 hover:shadow-md">
                          <div className="p-2 bg-purple-500/10 rounded-lg flex-shrink-0">
                            <Shield className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-foreground mb-1">Enterprise Security</div>
                            <p className="text-sm text-muted-foreground">End-to-end encryption for confidential data</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-background/60 rounded-xl hover:bg-background transition-all border border-border/30 hover:border-orange-500/30 hover:shadow-md">
                          <div className="p-2 bg-orange-500/10 rounded-lg flex-shrink-0">
                            <Globe className="h-5 w-5 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-foreground mb-1">Multi-Channel</div>
                            <p className="text-sm text-muted-foreground">Seamless integration capabilities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                Powerful Features for Modern Customer Support
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              RingRemind provides comprehensive communication tools designed to enhance customer engagement, streamline operations, and deliver exceptional service experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative z-10">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Feature Details for SEO/GEO */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl p-10 shadow-2xl border-2 border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-3xl font-bold">Complete Communication Solution</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  RingRemind's comprehensive platform includes advanced features such as:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">Real-time messaging:</strong>
                        <span className="text-muted-foreground">Instant communication with zero latency</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">AI-powered automation:</strong>
                        <span className="text-muted-foreground">Smart routing and response suggestions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">Analytics dashboard:</strong>
                        <span className="text-muted-foreground">Comprehensive insights and reporting</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">Custom branding:</strong>
                        <span className="text-muted-foreground">White-label solutions available</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">Multi-language support:</strong>
                        <span className="text-muted-foreground">Global reach capabilities</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">API integration:</strong>
                        <span className="text-muted-foreground">Seamless CRM and system connectivity</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">Mobile responsive:</strong>
                        <span className="text-muted-foreground">Works on all devices</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <div>
                        <strong className="text-foreground block mb-1">24/7 availability:</strong>
                        <span className="text-muted-foreground">Never miss a customer inquiry</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-primary font-semibold text-sm">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                How RingRemind Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with RingRemind in three simple steps. Our platform is designed for quick deployment, typically taking less than 15 minutes to integrate with your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="relative text-center border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 h-10 w-10 text-primary/40 group-hover:text-primary/60 transition-colors transform -translate-y-1/2" />
                )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Process Explanation for GEO */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl p-10 shadow-2xl border-2 border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">Detailed Implementation Process</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-background/60 rounded-xl border border-border/30 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-lg">Step 1 - Connect</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Integration is simple with our RESTful API and ready-made plugins for popular platforms including WordPress, Shopify, Salesforce, and custom applications. Most integrations take 5-10 minutes.
                  </p>
                </div>
                <div className="p-6 bg-background/60 rounded-xl border border-border/30 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-lg">Step 2 - Engage</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Once connected, customers can immediately start conversations through your website, mobile app, or social media channels. Intelligent routing directs inquiries to the right department.
                  </p>
                </div>
                <div className="p-6 bg-background/60 rounded-xl border border-border/30 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-lg">Step 3 - Optimize</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Use comprehensive analytics dashboard to track performance metrics. Built-in A/B testing capabilities help you continuously improve customer communication strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                Key Benefits
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why businesses choose RingRemind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
                    <span className="font-medium text-sm leading-relaxed">{benefit}</span>
              </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-base md:text-lg opacity-95 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses worldwide - Real feedback from RingRemind customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">
                  "RingRemind has transformed how we communicate with our customers. The real-time engagement features reduced our average response time from 2 hours to under 2 minutes. Customer satisfaction increased by 65% in the first quarter."
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-lg">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Director of Customer Success, TechCorp Solutions</div>
                </div>
                </CardContent>
              </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">
                  "Implementation was seamless, and our team was fully operational within a day. The analytics dashboard provides insights we never had before. RingRemind is now essential to our customer support operations."
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-lg">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">VP of Operations, Healthcare Systems Inc.</div>
                </div>
                </CardContent>
              </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">
                  "The automation capabilities have allowed us to handle 3x more customer inquiries with the same team size. ROI was positive within 90 days. Highly recommend RingRemind for any business serious about customer service."
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-lg">Emily Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Customer Experience Manager, Global Services Ltd.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-center">
              <BadgeCheck className="h-12 w-12 text-primary" />
              <span className="text-sm font-semibold">SOC 2 Type II</span>
              <span className="text-xs text-muted-foreground">Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Lock className="h-12 w-12 text-primary" />
              <span className="text-sm font-semibold">GDPR</span>
              <span className="text-xs text-muted-foreground">Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Shield className="h-12 w-12 text-primary" />
              <span className="text-sm font-semibold">SSL</span>
              <span className="text-xs text-muted-foreground">Encrypted</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FileCheck className="h-12 w-12 text-primary" />
              <span className="text-sm font-semibold">CCPA</span>
              <span className="text-xs text-muted-foreground">Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Server className="h-12 w-12 text-primary" />
              <span className="text-sm font-semibold">HIPAA</span>
              <span className="text-xs text-muted-foreground">Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Integrations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                Connect with Your Existing Tools
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              RingRemind integrates seamlessly with the tools your team already uses
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Salesforce", icon: LinkIcon },
              { name: "HubSpot", icon: LinkIcon },
              { name: "Shopify", icon: LinkIcon },
              { name: "Zendesk", icon: LinkIcon },
              { name: "Slack", icon: LinkIcon },
              { name: "Teams", icon: LinkIcon },
              { name: "Zapier", icon: LinkIcon },
              { name: "Stripe", icon: LinkIcon },
              { name: "WooCommerce", icon: LinkIcon },
              { name: "WordPress", icon: LinkIcon },
              { name: "Google Analytics", icon: LinkIcon },
              { name: "API", icon: LinkIcon },
            ].map((integration, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border hover:border-primary/50 transition-all hover:shadow-lg">
                <integration.icon className="h-8 w-8 text-muted-foreground" />
                <span className="text-xs font-medium text-center">{integration.name}</span>
                {/* TODO: Replace with actual integration logos */}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your integration? We offer a comprehensive REST API and custom integrations.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Request Integration</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GEO-Optimized Content Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
                <span className="text-primary font-semibold text-sm">Knowledge Hub</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                  Understanding Real-Time Chat Support Solutions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive insights about enterprise chat support platforms and customer communication strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Q&A Format Card 1 */}
              <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">What are the benefits of real-time chat support?</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Real-time chat support transforms customer service by providing instant communication channels that significantly improve customer satisfaction. According to industry research, businesses implementing live chat support see <strong className="text-foreground">73% improvement in customer satisfaction</strong> and <strong className="text-foreground">40% reduction in support costs</strong>.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Immediate response times averaging under 30 seconds</li>
                      <li>Increased customer engagement and retention rates</li>
                      <li>Cost-effective compared to phone support</li>
                      <li>Multi-tasking capabilities for support agents</li>
                      <li>Detailed conversation transcripts for analysis</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Q&A Format Card 2 */}
              <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">How secure is enterprise chat software?</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Enterprise-grade chat platforms like RingRemind implement comprehensive security measures to protect sensitive customer data and business communications.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>End-to-end encryption using HTTPS/SSL protocols</li>
                      <li>AES-256 encryption for data at rest</li>
                      <li>SOC 2 Type II certified infrastructure</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>GDPR and CCPA compliance standards</li>
                      <li>Role-based access controls and multi-factor authentication</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Q&A Format Card 3 */}
              <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">What ROI can businesses expect from chat support?</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Businesses typically see positive ROI within 90 days of implementing RingRemind's chat support solution. Our clients report measurable improvements in operational efficiency and customer satisfaction metrics.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Average 40% reduction in support costs</li>
                      <li>65% increase in customer satisfaction scores</li>
                      <li>3x improvement in inquiry handling capacity</li>
                      <li>Reduced average response time from hours to minutes</li>
                      <li>Increased customer retention and lifetime value</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Q&A Format Card 4 */}
              <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">How does AI-powered automation enhance chat support?</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      AI-powered automation in chat support platforms enables intelligent routing, automated responses, and predictive analytics that streamline customer service operations.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Smart routing to appropriate departments or agents</li>
                      <li>Automated responses for common inquiries</li>
                      <li>Sentiment analysis for proactive support</li>
                      <li>Predictive analytics for issue prevention</li>
                      <li>24/7 availability without human intervention</li>
                      <li>Language detection and multi-language support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Comprehensive Feature Comparison */}
            <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl p-10 shadow-2xl border-2 border-primary/10 mt-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Why Choose RingRemind for Your Business?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-background/50 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    Proven Track Record
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Trusted by 50+ enterprise clients with 98% customer satisfaction rate. Processing over 10 million messages annually with 99.9% uptime reliability.
                  </p>
                </div>
                <div className="p-6 bg-background/50 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    Easy Integration
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Quick deployment in under 15 minutes. Compatible with WordPress, Shopify, Salesforce, and custom applications via RESTful API.
                  </p>
                </div>
                <div className="p-6 bg-background/50 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-purple-600" />
                    Enterprise Security
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    SOC 2 Type II certified with end-to-end encryption, GDPR compliance, and regular security audits to protect your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
                <span className="text-primary font-semibold text-sm">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about RingRemind
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="item-1" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  What is RingRemind?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2">
                      RingRemind is a real-time chat support and online communication platform that helps businesses connect with their customers through instant messaging. According to industry data, businesses using real-time chat support see an average of <strong>73% improvement in customer satisfaction</strong> and <strong>40% reduction in support costs</strong>. Our platform provides seamless, secure communication solutions designed to transform customer experiences and drive business growth.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  How does RingRemind work?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind works in three simple steps:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-3 pb-2">
                      <li><strong>Connect:</strong> Seamlessly integrate with your existing systems in minutes using our RESTful API or pre-built plugins for WordPress, Shopify, Salesforce, and custom applications.</li>
                      <li><strong>Engage:</strong> Start real-time conversations with customers instantly through your website, mobile app, or social media channels with intelligent routing to the right department.</li>
                      <li><strong>Optimize:</strong> Analyze performance using comprehensive analytics dashboards and continuously improve engagement with A/B testing capabilities.</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      Most businesses are fully operational within <strong>15 minutes</strong> of initial setup.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  Who is RingRemind for?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind is designed for modern businesses looking to enhance customer support and communication. Our platform is ideal for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>Enterprises:</strong> Large organizations needing scalable, multi-department communication solutions</li>
                      <li><strong>Healthcare Providers:</strong> Medical facilities requiring HIPAA-compliant secure messaging</li>
                      <li><strong>Technology Companies:</strong> SaaS and software businesses needing developer-friendly APIs</li>
                      <li><strong>E-commerce Businesses:</strong> Online retailers requiring real-time customer support</li>
                      <li><strong>Service Organizations:</strong> Any business that values customer relationships and wants to improve response times</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      Currently serving <strong>50+ enterprise clients</strong> across various industries with proven results.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  What features does RingRemind offer?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind offers a comprehensive suite of features including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 pb-2">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Enhanced user experience design</li>
                        <li>Real-time messaging conversations</li>
                        <li>Time optimization tools</li>
                        <li>Enterprise-grade security & privacy</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Direct conversation capabilities</li>
                        <li>Live engagement notifications</li>
                        <li>Comprehensive analytics dashboards</li>
                        <li>24/7 automated responses</li>
                        <li>Multi-channel support integration</li>
                        <li>Customizable chat widgets</li>
                      </ul>
                    </div>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      All features are available through our intuitive dashboard or via API for custom integrations.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  Is RingRemind secure?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      Yes, RingRemind provides <strong>enterprise-grade security</strong> for confidential information. Our security measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>End-to-end encryption:</strong> All data transmission encrypted using HTTPS/SSL protocols</li>
                      <li><strong>Data encryption at rest:</strong> All stored data is encrypted using industry-standard AES-256 encryption</li>
                      <li><strong>SOC 2 compliance:</strong> SOC 2 Type II certified infrastructure</li>
                      <li><strong>Regular security audits:</strong> Third-party penetration testing and security assessments</li>
                      <li><strong>Access controls:</strong> Role-based permissions and multi-factor authentication</li>
                      <li><strong>GDPR & CCPA compliant:</strong> Full compliance with data protection regulations</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      We maintain <strong>99.9% uptime</strong> with enterprise-grade infrastructure and redundant systems to ensure data availability and security.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  How do I get started with RingRemind?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      Getting started with RingRemind is easy:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>Contact us:</strong> Fill out our contact form or call <a href="tel:1-800-916-2459" className="text-accent font-semibold hover:underline">1-800-916-2459</a> to speak with our team</li>
                      <li><strong>Schedule a demo:</strong> We'll provide a personalized demonstration of RingRemind's capabilities</li>
                      <li><strong>Quick setup:</strong> Our team guides you through integration, typically completed in 15 minutes</li>
                      <li><strong>Training:</strong> Free training sessions for your team to maximize platform effectiveness</li>
                      <li><strong>Go live:</strong> Start engaging with customers immediately</li>
                    </ol>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      We also offer <strong>partnership opportunities</strong> for resellers and integration partners. Contact our partnerships team to learn about commission structures and support programs.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-7" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  What kind of support does RingRemind provide?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind offers comprehensive support at every stage:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>24/7 Technical Support:</strong> Available via phone, email, or live chat</li>
                      <li><strong>Onboarding Assistance:</strong> Dedicated onboarding specialist for smooth setup</li>
                      <li><strong>Documentation:</strong> Extensive API documentation and integration guides</li>
                      <li><strong>Training Programs:</strong> Free training sessions for administrators and agents</li>
                      <li><strong>Regular Updates:</strong> Continuous platform improvements and new feature releases</li>
                      <li><strong>Dedicated Account Management:</strong> For enterprise clients, personalized account management</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-8" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  What are RingRemind's pricing plans?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind offers three pricing tiers designed to scale with your business:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>Starter ($29/month):</strong> Perfect for small teams with 2 agents, unlimited conversations, basic chat widget, and email support.</li>
                      <li><strong>Professional ($79/month):</strong> For growing businesses with 5 agents, advanced analytics, CRM integrations, and priority support.</li>
                      <li><strong>Enterprise (Custom):</strong> For large organizations with unlimited agents, white-label solution, dedicated account manager, custom integrations, and SLA guarantee.</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      All plans include a <strong>14-day free trial</strong> with no credit card required. Annual plans receive a discount.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-9" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  What technical requirements are needed for RingRemind?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind is a cloud-based SaaS platform with minimal technical requirements:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>Web Browser:</strong> Modern browsers (Chrome, Firefox, Safari, Edge) with JavaScript enabled</li>
                      <li><strong>Internet Connection:</strong> Stable broadband connection for optimal performance</li>
                      <li><strong>Mobile Devices:</strong> iOS 13+ or Android 8+ for mobile apps</li>
                      <li><strong>Integration:</strong> RESTful API for custom integrations (no special infrastructure required)</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      No installation, downloads, or server maintenance required. RingRemind runs entirely in the cloud.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-10" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  Which CRM and tools does RingRemind integrate with?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      RingRemind integrates seamlessly with popular business tools:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 pb-2">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Salesforce</li>
                        <li>HubSpot</li>
                        <li>Zendesk</li>
                        <li>Shopify & WooCommerce</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Slack & Microsoft Teams</li>
                        <li>Zapier (unlimited integrations)</li>
                        <li>Stripe</li>
                        <li>Google Analytics</li>
                      </ul>
                    </div>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      We also offer a comprehensive <strong>REST API</strong> for custom integrations. Don't see your tool? Contact us to request a new integration.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-11" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  Is there a mobile app for RingRemind?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2">
                      Yes! RingRemind offers native mobile apps for both iOS and Android devices. Agents can respond to customer messages, view conversation history, receive push notifications, and access all platform features from their mobile devices. The mobile apps are available for download from the App Store and Google Play Store.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-12" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  How long does it take to implement RingRemind?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      Most businesses are fully operational with RingRemind within 15 minutes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>Basic Setup:</strong> 5-10 minutes to install the chat widget</li>
                      <li><strong>Customization:</strong> 10-15 minutes to customize widget appearance and settings</li>
                      <li><strong>Integration:</strong> 15-30 minutes for CRM or tool integrations using our pre-built connectors</li>
                      <li><strong>Team Training:</strong> Free onboarding session included with all plans</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      Enterprise clients receive dedicated setup assistance to ensure seamless integration with complex systems.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-13" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  Can I migrate data from another chat platform?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2">
                      Yes, RingRemind supports data migration from most popular chat platforms including Intercom, Zendesk Chat, Drift, and others. Our team can help you migrate conversation history, customer data, and settings. Migration assistance is included with Professional and Enterprise plans. Contact our support team to discuss your specific migration needs.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-14" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  What is RingRemind's cancellation policy?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2">
                      RingRemind offers flexible cancellation with no long-term contracts. You can cancel your subscription at any time through your account dashboard. There are no cancellation fees, and you'll retain access to your account until the end of your current billing period. For annual plans, we offer pro-rated refunds for unused months. Contact our support team if you need assistance with cancellation.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-15" 
                className="bg-card rounded-lg border px-6 shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold hover:no-underline py-4">
                  Does RingRemind offer API access for developers?
                </AccordionTrigger>
                <AccordionContent>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mb-3">
                      Yes! RingRemind provides comprehensive REST API access for developers:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pb-2">
                      <li><strong>Full API Documentation:</strong> Complete API reference with code examples</li>
                      <li><strong>Webhooks:</strong> Real-time event notifications for conversations and messages</li>
                      <li><strong>SDKs:</strong> Official SDKs for popular programming languages (JavaScript, Python, PHP)</li>
                      <li><strong>Custom Integrations:</strong> Build custom workflows and integrations with any system</li>
                    </ul>
                    <p itemProp="text" className="text-muted-foreground leading-relaxed pb-2 mt-3">
                      API access is available on Professional and Enterprise plans. Developers can access API documentation in their dashboard or contact support for custom integration assistance.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Use Cases & Industries Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-primary font-semibold text-sm">Use Cases</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent inline-block w-full">
                Trusted Across Industries
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how RingRemind helps businesses in different industries deliver exceptional customer support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* E-commerce */}
            <Card className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">E-commerce</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Provide instant support for product questions, order tracking, and returns. Increase conversion rates with proactive chat assistance at checkout.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Order support & tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Abandoned cart recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SaaS Companies */}
            <Card className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">SaaS Companies</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Support users during onboarding, answer technical questions, and reduce churn with proactive customer success conversations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Technical support & troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Onboarding assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Feature adoption support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Financial Services */}
            <Card className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-4 group-hover:bg-green-500/20 transition-colors">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Financial Services</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Handle account inquiries securely with HIPAA-ready encryption. Provide compliant customer support while maintaining strict data security standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Secure account support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Compliance-ready messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transaction assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Healthcare */}
            <Card className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="p-3 bg-red-500/10 rounded-xl w-fit mb-4 group-hover:bg-red-500/20 transition-colors">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Healthcare</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  HIPAA-compliant messaging for patient communication, appointment scheduling, and telehealth support with end-to-end encryption.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>HIPAA-compliant messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Patient portal support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Education</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Support students and parents with enrollment questions, course information, and administrative inquiries through accessible chat channels.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Student support services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Enrollment assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Parent communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Real Estate */}
            <Card className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Building2 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Real Estate</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Respond instantly to queries about property listings, schedule viewings, and provide instant answers to potential buyers and renters.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Property inquiry responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Viewing appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lead qualification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent inline-block w-full">
            Ready to Transform Your Customer Communication?
              </span>
          </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses using RingRemind to deliver exceptional customer experiences and boost satisfaction by 73%
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Free <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
                className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 transition-all transform hover:scale-105"
            >
                <a href="tel:1-800-916-2459" className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Call 1-800-916-2459
                </a>
            </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

