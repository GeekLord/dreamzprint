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
              At DreamzPrint, we collect various types of information to provide you with the best possible service. This includes:
            </p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Design files and artwork you upload</li>
              <li>Communication preferences</li>
              <li>Device information and browsing data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Sending order updates and shipping notifications</li>
              <li>Improving our products and services</li>
              <li>Personalizing your shopping experience</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Analyzing website usage and performance</li>
              <li>Preventing fraud and maintaining security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We take your privacy seriously and do not sell your personal information to third parties. However, we may share your information with:
            </p>
            <ul>
              <li>Shipping partners to deliver your orders</li>
              <li>Payment processors to handle transactions</li>
              <li>Service providers who assist with our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>
              All third-party service providers are contractually obligated to protect your information and use it only for the specified purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2>Data Security</h2>
            <p>
              We implement robust security measures to protect your personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Secure storage of personal data</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information by employees</li>
              <li>Strict data handling procedures</li>
            </ul>
            <p>
              While we take all reasonable precautions, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to protecting your information using industry-standard practices.
            </p>
          </section>

          <section className="mb-8">
            <h2>Your Rights and Choices</h2>
            <p>
              You have several rights regarding your personal information:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Update your preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Provide personalized experiences</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings, although this may affect some website functionality.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li>Email: privacy@dreamzprint.com</li>
              <li>Phone: 1-800-DREAMZ-PRINT</li>
              <li>Address: 123 Creative Avenue, Design District, CA 94105</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;