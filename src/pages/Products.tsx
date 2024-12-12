import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product cards will be added here */}
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Custom T-Shirts</h3>
            <p className="text-muted-foreground mb-4">Create your own unique t-shirt designs</p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Hoodies</h3>
            <p className="text-muted-foreground mb-4">Comfortable and stylish custom hoodies</p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Accessories</h3>
            <p className="text-muted-foreground mb-4">Personalized accessories for every occasion</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;