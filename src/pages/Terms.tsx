import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms and Conditions"
        description="Read RingRemind's terms and conditions for using our communication platform services. Understand your rights and responsibilities."
        canonical="https://ringremind.com/terms"
        noindex={true}
      />
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last Updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the RingRemind website and services, you accept and agree
                to be bound by these Terms and Conditions. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Website Usage Terms</h2>
              
              <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
              <p>You may use our website for:</p>
              <ul>
                <li>Accessing information about our services</li>
                <li>Submitting inquiries through contact forms</li>
                <li>Exploring partnership opportunities</li>
                <li>Legitimate business purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4">Prohibited Use</h3>
              <p>You may not:</p>
              <ul>
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit malicious code or viruses</li>
                <li>Scrape or harvest data without permission</li>
                <li>Impersonate another person or entity</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
              <p>
                RingRemind provides online communication and chat support solutions for
                businesses. Our services include real-time messaging, customer engagement tools,
                and related communication platform features. Service specifications and features
                are subject to change without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos,
                images, software, and design elements, is the property of RingRemind or its
                licensors and is protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="mt-4">
                © 2025 RingRemind. All rights reserved. Unauthorized use, reproduction, or
                distribution is strictly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, RingRemind shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of
                or related to your use of our website or services. This includes, but is not
                limited to, damages for loss of profits, data, or other intangible losses.
              </p>
              <p className="mt-4">
                Our total liability for any claims shall not exceed the amount paid by you, if
                any, for accessing our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Communication Platform Disclaimer
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                <p className="font-semibold text-yellow-800">IMPORTANT NOTICE:</p>
                <p className="text-yellow-800">
                  RingRemind's communication platform is intended for general business
                  communication and customer support. It is NOT designed for emergency services,
                  life-threatening situations, or critical medical communications. If you
                  experience an emergency, immediately call 911 or your local emergency services.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Payment Terms</h2>
              <p>
                If applicable, all fees for services are due as specified in your service
                agreement. Payment terms, pricing, and billing cycles will be clearly
                communicated prior to purchase. We reserve the right to modify pricing with
                reasonable notice to existing customers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Termination Rights</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately,
                without prior notice or liability, for any reason, including but not limited to
                breach of these Terms. Upon termination, your right to use the services will
                immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of California, United States, without regard to its conflict of law
                provisions. Our failure to enforce any right or provision of these Terms will not
                be considered a waiver of those rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or use of our services shall be resolved
                through binding arbitration in accordance with the rules of the American
                Arbitration Association. The arbitration shall be conducted in San Diego County,
                California.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective
                immediately upon posting to this page. Your continued use of the website after
                changes constitutes acceptance of the modified Terms. We encourage you to review
                these Terms periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p>For questions about these Terms and Conditions, contact us at:</p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong>{" "}
                  <a  className="text-accent hover:underline">
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
