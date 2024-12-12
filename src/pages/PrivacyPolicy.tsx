import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including when you:
            </p>
            <ul>
              <li>Create an account</li>
              <li>Place an order</li>
              <li>Contact our customer service</li>
              <li>Sign up for our newsletter</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Process your orders and payments</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your
              information with service providers who assist us in operating our business.
            </p>
          </section>

          <section className="mb-8">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              support@dreamzprint.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;