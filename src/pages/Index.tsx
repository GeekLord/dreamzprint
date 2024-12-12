import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedProducts from "../components/FeaturedProducts";
import KnowledgeBase from "../components/KnowledgeBase";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <section className="py-16 px-4 bg-accent/10">
          <KnowledgeBase />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;