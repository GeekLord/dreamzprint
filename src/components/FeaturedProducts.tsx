import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Custom T-Shirts",
    image: "/lovable-uploads/dc2f0fbc-fc84-4794-a96b-5955c6856d1d.png",
    price: "From $24.99",
    description: "Create your own unique t-shirt designs"
  },
  {
    id: 2,
    name: "Wall Art",
    image: "/lovable-uploads/3f42ebae-864e-4426-8d7a-ddb93e730189.png",
    price: "From $29.99",
    description: "Transform your space with custom wall art"
  },
  {
    id: 3,
    name: "Photo Print",
    image: "/lovable-uploads/a26aebd2-4e0f-4e4e-a7b6-7620de01a937.png",
    price: "From $39.99",
    description: "High-quality photo prints for your memories"
  },
  {
    id: 4,
    name: "Custom Mugs",
    image: "/lovable-uploads/b4b5797f-84b0-4bc6-9b1b-005e48ebb1ae.png",
    price: "From $14.99",
    description: "Start your day with personalized drinkware"
  },
  {
    id: 5,
    name: "Phone Cases",
    image: "/lovable-uploads/a1c80e3a-0452-42df-8e42-69551c603d94.png",
    price: "From $19.99",
    description: "Protect your device with style"
  },
  {
    id: 6,
    name: "Canvas Prints",
    image: "/lovable-uploads/2fee0ab4-28bb-4210-84fc-707196506dba.png",
    price: "From $49.99",
    description: "Gallery-quality canvas prints"
  },
  {
    id: 7,
    name: "Hoodies",
    image: "/lovable-uploads/efdf0dd8-9cd6-4877-afca-60882343d831.png",
    price: "From $39.99",
    description: "Cozy custom hoodies for any occasion"
  },
  {
    id: 8,
    name: "Tote Bags",
    image: "/lovable-uploads/2f09b0d0-5202-48df-8a6f-0866a7dd2cb7.png",
    price: "From $16.99",
    description: "Eco-friendly custom tote bags"
  }
];

const FeaturedProducts = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover our most popular customizable products
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group relative"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;