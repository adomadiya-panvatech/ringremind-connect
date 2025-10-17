import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

const Index = () => {
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
        title="Real-Time Chat Support & Online Communication Platform"
        description="Transform customer support with RingRemind's real-time chat platform. Engage customers instantly with seamless messaging and secure communication."
        keywords="online chat support, real-time messaging, customer communication platform, live chat software, customer engagement, business communication, chat support solutions"
        canonical="https://ringremind.com/"
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Seamless Online Communication for Modern Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your gateway to exceptional customer support through real-time chat and instant
              messaging
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
              >
                <Link to="/partner">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to RingRemind</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RingRemind is your trusted partner in delivering exceptional online communication
              solutions. We empower businesses to connect with their customers through cutting-edge
              chat support technology, providing seamless, real-time engagement that transforms
              customer experiences and drives business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to deliver exceptional customer support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-secondary text-secondary-foreground w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-12 h-8 w-8 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Why businesses choose RingRemind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "RingRemind has transformed how we communicate with our customers. The
                    real-time engagement features are outstanding!"
                  </p>
                  <div className="font-semibold">Client Name</div>
                  <div className="text-sm text-muted-foreground">Company Position</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Customer Communication?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses using RingRemind to deliver exceptional customer
            experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <a href="tel:1-800-916-2459">Call 1-800-916-2459</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
