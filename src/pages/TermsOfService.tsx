import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <section className="mb-8">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using DreamzPrint's services, you agree to be bound by these Terms of
              Service and all applicable laws and regulations. If you do not agree with any of these terms, you
              are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2>Account Registration and Security</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
              <li>Ensuring your account information is up to date</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Intellectual Property Rights</h2>
            <p>
              Our platform and its original content, features, and functionality are owned by DreamzPrint and are protected by:
            </p>
            <ul>
              <li>International copyright laws</li>
              <li>Trademark laws</li>
              <li>Other intellectual property rights</li>
            </ul>
            <p>
              When you upload designs or content to our platform:
            </p>
            <ul>
              <li>You retain ownership of your original designs</li>
              <li>You grant us a license to use them for order fulfillment</li>
              <li>You warrant that you have the right to use all content</li>
              <li>You agree not to violate others' intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Product Orders and Payment</h2>
            <p>
              When placing orders through our platform:
            </p>
            <ul>
              <li>All prices are subject to change without notice</li>
              <li>We reserve the right to refuse any order</li>
              <li>Payment must be made in full before production begins</li>
              <li>Shipping costs are calculated at checkout</li>
              <li>Taxes will be applied according to local regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Custom Orders and Design Services</h2>
            <p>
              For custom design services:
            </p>
            <ul>
              <li>All designs must be approved before production</li>
              <li>Revisions may be limited based on the service package</li>
              <li>Rush orders may incur additional fees</li>
              <li>Design files are provided in specified formats only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Prohibited Activities</h2>
            <p>
              You may not engage in any of the following activities:
            </p>
            <ul>
              <li>Uploading illegal or offensive content</li>
              <li>Attempting to breach website security</li>
              <li>Using the service for unauthorized commercial purposes</li>
              <li>Impersonating others or providing false information</li>
              <li>Interfering with service operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Limitation of Liability</h2>
            <p>
              DreamzPrint shall not be liable for:
            </p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Service interruptions</li>
              <li>Third-party actions</li>
              <li>Circumstances beyond our reasonable control</li>
            </ul>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
              Continued use of our services constitutes acceptance of the modified terms.
            </p>
            <p>
              For questions about these terms, contact us at: legal@dreamzprint.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;