import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedProducts from "../components/FeaturedProducts";
import DesignStudioCTA from "../components/DesignStudioCTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <DesignStudioCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;