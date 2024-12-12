import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About DreamzPrint Studio
          </h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600">
                Welcome to DreamzPrint Studio, where creativity meets custom apparel and merchandise. 
                Founded with a passion for making custom design accessible to everyone, we've combined 
                cutting-edge AI technology with high-quality printing services to bring your ideas to life.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We believe that everyone has a creative spark waiting to be unleashed. Our mission is to 
                provide the tools and technology that make custom design accessible, enjoyable, and 
                rewarding for everyone – whether you're an artist, business owner, or someone who wants 
                to wear something truly unique.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>AI-Powered Design Generation: Create unique artwork with our cutting-edge AI tools</li>
                <li>Premium Quality: We use only the finest materials and printing techniques</li>
                <li>Sustainable Practices: Eco-friendly materials and responsible production methods</li>
                <li>Customer Support: Dedicated team to assist you throughout your creative journey</li>
                <li>Fast Turnaround: Quick processing and shipping of your custom orders</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Design</h3>
                  <p className="text-gray-600">
                    Use our AI-powered design studio to create unique artwork or upload your own designs.
                    Our intuitive tools make it easy to bring your vision to life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Production</h3>
                  <p className="text-gray-600">
                    Your designs are printed using state-of-the-art equipment and premium materials,
                    ensuring vibrant colors and lasting quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;