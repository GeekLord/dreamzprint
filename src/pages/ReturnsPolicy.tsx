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
              We want you to be completely satisfied with your purchase. Our return policy includes:
            </p>
            <ul>
              <li>30-day return window from delivery date</li>
              <li>Items must be unused and in original packaging</li>
              <li>Original receipt or proof of purchase required</li>
              <li>Return shipping labels provided for defective items</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Custom and Personalized Orders</h2>
            <p>
              Due to the personalized nature of our products:
            </p>
            <ul>
              <li>Custom-designed items cannot be returned unless defective</li>
              <li>Design approval is final and binding</li>
              <li>Color variations within industry standards are not considered defects</li>
              <li>Sizing issues for approved designs are not eligible for returns</li>
            </ul>
            <p>
              We strongly recommend reviewing your designs carefully before approval and checking size charts
              before placing orders.
            </p>
          </section>

          <section className="mb-8">
            <h2>Defective Items</h2>
            <p>
              For items received with defects:
            </p>
            <ul>
              <li>Report defects within 48 hours of delivery</li>
              <li>Provide clear photos of the defect</li>
              <li>Describe the issue in detail</li>
              <li>Keep all original packaging</li>
            </ul>
            <p>
              We will provide a prepaid return label and process either:
            </p>
            <ul>
              <li>Full replacement of the item</li>
              <li>Full refund including original shipping costs</li>
              <li>Store credit with additional 10% bonus value</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Return Process</h2>
            <p>
              To initiate a return:
            </p>
            <ul>
              <li>Log into your account and select the order</li>
              <li>Fill out the return request form</li>
              <li>Wait for return authorization</li>
              <li>Package item securely with all original materials</li>
              <li>Attach provided return label</li>
              <li>Drop off at authorized shipping location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Refund Processing</h2>
            <p>
              Once we receive your return:
            </p>
            <ul>
              <li>Items are inspected within 2 business days</li>
              <li>Refunds are processed to original payment method</li>
              <li>Processing time: 5-7 business days</li>
              <li>Email confirmation sent when refund is issued</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Non-Returnable Items</h2>
            <p>
              The following items cannot be returned:
            </p>
            <ul>
              <li>Custom-designed products (unless defective)</li>
              <li>Downloadable digital products</li>
              <li>Personal care items</li>
              <li>Sale or clearance items</li>
              <li>Gift cards</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              For questions about returns or to report issues:
            </p>
            <ul>
              <li>Email: returns@dreamzprint.com</li>
              <li>Phone: 1-800-DREAMZ-PRINT</li>
              <li>Live Chat: Available 24/7 on our website</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnsPolicy;