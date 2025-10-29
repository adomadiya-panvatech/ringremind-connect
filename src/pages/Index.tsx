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
        title="RingRemind - Real-Time Chat Support & Online Communication Platform"
        description="Transform customer support with RingRemind's real-time chat platform. Engage customers instantly with seamless messaging and secure communication. Trusted by 50+ enterprises."
        keywords="online chat support, real-time messaging, customer communication platform, live chat software, customer engagement, business communication, chat support solutions, instant messaging, customer service platform, AI chat support"
        canonical="https://ringremind.com/"
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
              }
            ]
          }
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              RingRemind - Real-Time Chat Support & Online Communication Platform
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is RingRemind?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong>RingRemind</strong> is an enterprise-grade real-time chat support and online communication platform designed to revolutionize how businesses connect with their customers. According to industry research, businesses using real-time chat support see an average of <strong>73% customer satisfaction improvement</strong> and <strong>40% reduction in support costs</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our platform provides seamless, secure communication solutions that transform customer experiences and drive measurable business growth. With RingRemind, companies can engage customers instantly through instant messaging, automated responses, and intelligent routing capabilities.
                </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
                  Trusted by <strong>50+ enterprise clients</strong> across healthcare, technology, and service industries, RingRemind processes over <strong>10 million messages</strong> annually with <strong>99.9% uptime</strong> reliability.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Key Statistics</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>98% customer satisfaction rate</strong> across all deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Average response time under 30 seconds</strong> with automated systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Enterprise-grade security</strong> with end-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Multi-channel support</strong> integration capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Customer Support</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              RingRemind provides comprehensive communication tools designed to enhance customer engagement, streamline operations, and deliver exceptional service experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

          {/* Additional Feature Details for SEO/GEO */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Complete Communication Solution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RingRemind's comprehensive platform includes advanced features such as:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Real-time messaging:</strong> Instant communication with zero latency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>AI-powered automation:</strong> Smart routing and response suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Analytics dashboard:</strong> Comprehensive insights and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Custom branding:</strong> White-label solutions available</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Multi-language support:</strong> Global reach capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>API integration:</strong> Seamless CRM and system connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Mobile responsive:</strong> Works on all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>24/7 availability:</strong> Never miss a customer inquiry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How RingRemind Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with RingRemind in three simple steps. Our platform is designed for quick deployment, typically taking less than 15 minutes to integrate with your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
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

          {/* Detailed Process Explanation for GEO */}
          <div className="max-w-4xl mx-auto bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Detailed Implementation Process</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Step 1 - Connect:</strong> Integration is simple with our RESTful API and ready-made plugins for popular platforms including WordPress, Shopify, Salesforce, and custom applications. Most integrations take 5-10 minutes using our documentation and support team guidance.
              </p>
              <p>
                <strong>Step 2 - Engage:</strong> Once connected, your customers can immediately start conversations through your website, mobile app, or social media channels. Our intelligent routing system automatically directs inquiries to the right department or agent based on keywords, department tags, or availability.
              </p>
              <p>
                <strong>Step 3 - Optimize:</strong> Use our comprehensive analytics dashboard to track response times, customer satisfaction scores, conversation volumes, and agent performance. Built-in A/B testing capabilities help you continuously improve your customer communication strategies.
              </p>
            </div>
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
              Trusted by businesses worldwide - Real feedback from RingRemind customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "RingRemind has transformed how we communicate with our customers. The real-time engagement features reduced our average response time from 2 hours to under 2 minutes. Customer satisfaction increased by 65% in the first quarter."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Director of Customer Success, TechCorp Solutions</div>
              </CardContent>
            </Card>

            <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Implementation was seamless, and our team was fully operational within a day. The analytics dashboard provides insights we never had before. RingRemind is now essential to our customer support operations."
                  </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">VP of Operations, Healthcare Systems Inc.</div>
                </CardContent>
              </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The automation capabilities have allowed us to handle 3x more customer inquiries with the same team size. ROI was positive within 90 days. Highly recommend RingRemind for any business serious about customer service."
                </p>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Customer Experience Manager, Global Services Ltd.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
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
            </Accordion>
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
