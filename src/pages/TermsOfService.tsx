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
              Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2>Use of Service</h2>
            <p>
              You agree to use our service only for lawful purposes and in accordance with these Terms.
              You are responsible for maintaining the confidentiality of your account information.
            </p>
          </section>

          <section className="mb-8">
            <h2>Intellectual Property</h2>
            <p>
              All content, designs, and materials created through our service are protected by
              copyright and other intellectual property laws. You retain ownership of your original
              designs but grant us license to use them for order fulfillment.
            </p>
          </section>

          <section className="mb-8">
            <h2>Payment and Pricing</h2>
            <p>
              All prices are subject to change without notice. You agree to pay all charges at the
              prices in effect when you place your order. Payment must be made in full before order
              processing begins.
            </p>
          </section>

          <section>
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of our
              services following any changes constitutes acceptance of those changes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;