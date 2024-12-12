import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Returns Policy</h1>
          
          <section className="mb-8">
            <h2>Return Window</h2>
            <p>
              We accept returns within 30 days of delivery for most items. Items must be unused and
              in their original packaging with all tags attached.
            </p>
          </section>

          <section className="mb-8">
            <h2>Custom Orders</h2>
            <p>
              Due to the personalized nature of custom-designed products, we cannot accept returns
              unless the item is damaged or defective. Please review your design carefully before
              placing your order.
            </p>
          </section>

          <section className="mb-8">
            <h2>Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact our customer service within
              48 hours of delivery. We will provide a prepaid return label and process a replacement
              or refund once we receive the item.
            </p>
          </section>

          <section className="mb-8">
            <h2>Refund Process</h2>
            <p>
              Refunds will be processed to the original payment method within 5-7 business days after
              we receive your return. Shipping costs are non-refundable unless the return is due to
              our error.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our returns policy, please contact our customer service
              team at returns@dreamzprint.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnsPolicy;