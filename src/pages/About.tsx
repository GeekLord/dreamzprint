import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Welcome to DreamzPrint Studio, where creativity meets custom apparel. We specialize in
            bringing your unique design ideas to life through state-of-the-art AI-powered design
            generation and high-quality printing services.
          </p>
          <p className="text-lg mb-6">
            Our mission is to make custom apparel design accessible to everyone, whether you're
            an artist, business owner, or someone who wants to wear something truly unique.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Process</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Design Generation: Use our AI-powered design studio to create unique artwork</li>
            <li>Customization: Refine your design with our easy-to-use tools</li>
            <li>Quality Printing: Get your design printed on high-quality materials</li>
            <li>Fast Delivery: Receive your custom apparel quickly and securely</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;