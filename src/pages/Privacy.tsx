import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Learn how RingRemind collects, uses, and protects your personal information. Our privacy policy explains data collection, storage, and your rights."
        canonical="https://ringremind.com/privacy"
        noindex={true}
      />
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last Updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                RingRemind ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. What User Data We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Form Submissions</h3>
              <p>When you submit a form on our website, we collect:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message or inquiry details</li>
                <li>Company information (for partnership inquiries)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Website Analytics</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul>
                <li>Page views and navigation patterns</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Geographic location (city/country level)</li>
                <li>IP address</li>
                <li>Timestamps of visits</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Cookies</h3>
              <p>We use cookies and similar tracking technologies:</p>
              <ul>
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
              <p>We use the collected information for:</p>
              <ul>
                <li>Processing inquiries and partnership applications</li>
                <li>Storing data in our centralized database (shared across all company websites including OneTriage, CareChakra, RegribMind, and RingRemind)</li>
                <li>Sending internal notifications to our team in Panama via Microsoft Teams</li>
                <li>Improving our services and website functionality</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Marketing communications (with opt-out options)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Where Data Is Stored</h2>
              <p>Your data is stored securely in:</p>
              <ul>
                <li>A centralized Supabase database that serves all our company websites</li>
                <li>Microsoft Teams for internal team notifications</li>
                <li>Cloud storage providers with enterprise-grade security</li>
              </ul>
              <p>
                All data transmission is encrypted using HTTPS/SSL protocols. We implement
                industry-standard security measures including encryption at rest and in transit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
              <p>
                We do not sell your personal information to third parties. We may share your
                information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Supabase, Microsoft Teams, and analytics
                  providers who assist in our operations
                </li>
                <li>
                  <strong>Internal Teams:</strong> Our team members who need access to process
                  your inquiries
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our
                  rights
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Protection</h2>
              <p>We implement comprehensive security measures:</p>
              <ul>
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Secure database with Row Level Security policies</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a className="text-accent hover:underline">
                  support@panvatech.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Cookies Policy</h2>
              <p>
                We use cookies to enhance your experience. You can control cookie preferences
                through your browser settings. Note that disabling cookies may affect website
                functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary for the purposes outlined
                in this policy or as required by law. Contact form submissions are typically
                retained for 7 years for business record-keeping purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>For privacy-related questions or concerns, contact us at:</p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong>{" "}
                  <a className="text-accent hover:underline">
                    support@panvatech.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a className="text-accent hover:underline">
                    1-800-916-2459
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> 14269 Danielson St, Suite 400, Poway, CA 92064
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
