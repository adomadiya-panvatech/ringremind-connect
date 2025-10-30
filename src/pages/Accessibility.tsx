import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function Accessibility() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <SEO
        title="Accessibility & Information Notice"
        description="RingRemind's commitment to web accessibility (WCAG 2.1 Level AA) and detailed information about data collection, usage, and visitor rights."
        canonical="https://ringremind.com/accessibility"
      />
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold mb-8">Accessibility & Information Notice</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last Updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Accessibility Commitment</h2>
              <p>
                RingRemind is committed to ensuring digital accessibility for people with
                disabilities. We are continually improving the user experience for everyone and
                applying the relevant accessibility standards.
              </p>
              <p className="mt-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                standards. These guidelines explain how to make web content more accessible for
                people with disabilities and user-friendly for everyone.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Website Accessibility Features</h2>
              <p>Our website includes the following accessibility features:</p>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">Keyboard Navigation</h3>
              <ul>
                <li>All interactive elements are accessible via keyboard</li>
                <li>Logical tab order throughout the site</li>
                <li>Visible focus indicators on interactive elements</li>
                <li>Skip navigation links for main content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Screen Reader Compatibility</h3>
              <ul>
                <li>Semantic HTML structure</li>
                <li>ARIA labels on interactive components</li>
                <li>Alternative text for all images</li>
                <li>Proper heading hierarchy</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Visual Design</h3>
              <ul>
                <li>Text resizing up to 200% without loss of functionality</li>
                <li>Sufficient color contrast (minimum 4.5:1 ratio)</li>
                <li>Clear, readable fonts</li>
                <li>Information not conveyed by color alone</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Navigation</h3>
              <ul>
                <li>Clear and consistent navigation structure</li>
                <li>Descriptive link text</li>
                <li>Breadcrumb trails where applicable</li>
                <li>Search functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Detailed Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold mb-3">Form Data</h3>
              <p>When you submit forms on our website, we collect:</p>
              <ul>
                <li>Name (personal or business contact)</li>
                <li>Email address</li>
                <li>Phone number (formatted as (XXX) XXX-XXXX)</li>
                <li>Message or inquiry details</li>
                <li>Company information (for partnership inquiries)</li>
                <li>Partnership preferences (for partner applications)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Analytics Data</h3>
              <p>We automatically collect information about your visit:</p>
              <ul>
                <li>Pages viewed and time spent on each page</li>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Operating system</li>
                <li>Geographic location (city and country level)</li>
                <li>IP address (anonymized)</li>
                <li>Referral source (how you found our website)</li>
                <li>Language preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Technical Data</h3>
              <ul>
                <li>Timestamps of visits and interactions</li>
                <li>Click patterns and navigation paths</li>
                <li>Form submission data and timestamps</li>
                <li>Error messages and technical issues</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Cookies and Tracking</h3>
              <ul>
                <li>Session cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Visitor Data</h2>
              <p>Your information is used for the following purposes:</p>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">Inquiry Processing</h3>
              <ul>
                <li>Respond to your inquiries within 24 hours</li>
                <li>Process partnership applications</li>
                <li>Provide requested information about our services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Data Storage</h3>
              <ul>
                <li>
                  Store data in a centralized database shared across all company websites
                  (OneTriage, CareChakra, RegribMind, RingRemind)
                </li>
                <li>Maintain contact history for continuity of service</li>
                <li>Ensure data integrity and backup procedures</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Internal Notifications</h3>
              <ul>
                <li>Send real-time notifications to our team in Panama via Microsoft Teams</li>
                <li>Track lead source and attribution</li>
                <li>Assign inquiries to appropriate team members</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Website Optimization</h3>
              <ul>
                <li>Analyze user behavior to improve website functionality</li>
                <li>Identify and fix technical issues</li>
                <li>Enhance user experience based on analytics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Marketing (Opt-in)</h3>
              <ul>
                <li>Send service updates and announcements</li>
                <li>Provide information about new features</li>
                <li>Share relevant industry insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Storage & Protection</h2>
              <p>
                All visitor data is stored securely using enterprise-grade infrastructure:
              </p>
              <ul>
                <li>Centralized Supabase database with Row Level Security (RLS)</li>
                <li>End-to-end encryption for data in transit (HTTPS/TLS)</li>
                <li>Encryption at rest for stored data</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Automated backup and disaster recovery procedures</li>
                <li>Compliance with data protection regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Assistive Technology Compatibility
              </h2>
              <p>Our website is designed to be compatible with:</p>
              <ul>
                <li>JAWS (Job Access With Speech)</li>
                <li>NVDA (NonVisual Desktop Access)</li>
                <li>VoiceOver (macOS and iOS)</li>
                <li>TalkBack (Android)</li>
                <li>ZoomText and other screen magnifiers</li>
                <li>Dragon NaturallySpeaking and other speech recognition software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Known Limitations</h2>
              <p>
                Despite our best efforts, some content may not yet be fully accessible. We are
                actively working to address these limitations:
              </p>
              <ul>
                <li>Some third-party embedded content may have accessibility limitations</li>
                <li>Complex interactive features are continually being improved</li>
                <li>Older documents may not meet current accessibility standards</li>
              </ul>
              <p className="mt-4">
                We are committed to addressing these issues and appreciate your patience as we
                work to improve accessibility across all aspects of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Accessibility Assistance</h2>
              <p>
                If you experience any difficulty accessing any part of our website or would like
                to request information in an alternative format, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong>{" "}
                  <a  className="text-accent hover:underline">
                    support@panvatech.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a  className="text-accent hover:underline">
                    1-800-916-2459
                  </a>{" "}
                  (Available 24/7)
                </p>
                <p>
                  <strong>Address:</strong> 14269 Danielson St, Suite 400, Poway, CA 92064
                </p>
                <p >
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
              </div>
              <p className="mt-4">
                We welcome feedback on how we can improve accessibility and will make every effort
                to accommodate your needs promptly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
