import { Link } from "react-router-dom";
import { useCurrency } from "@/contexts/CurrencyContext";

const products = [
  {
    id: 1,
    name: "Custom T-Shirts",
    image: "/lovable-uploads/c5678c08-dbf5-4839-9ef5-e93b7419d162.png",
    price: "From $24.99",
    description: "Create your own unique t-shirt designs"
  },
  {
    id: 2,
    name: "Wall Art",
    image: "/lovable-uploads/2dc945e6-b664-46da-8a5c-24e2926fd585.png",
    price: "From $29.99",
    description: "Transform your space with custom wall art"
  },
  {
    id: 3,
    name: "Photo Print",
    image: "/lovable-uploads/665af363-6ed2-47d8-9e19-1485a5605af7.png",
    price: "From $39.99",
    description: "High-quality photo prints for your memories"
  },
  {
    id: 4,
    name: "Custom Mugs",
    image: "/lovable-uploads/556d287d-9c39-40b9-93dd-bd74c6af757b.png",
    price: "From $14.99",
    description: "Start your day with personalized drinkware"
  },
  {
    id: 5,
    name: "Phone Cases",
    image: "/lovable-uploads/3a6714e1-2dc9-4471-bb5e-1b0f53496728.png",
    price: "From $19.99",
    description: "Protect your device with style"
  },
  {
    id: 6,
    name: "Canvas Prints",
    image: "/lovable-uploads/6138f197-d611-4c41-8ce5-a621360dfaa7.png",
    price: "From $49.99",
    description: "Gallery-quality canvas prints"
  },
  {
    id: 7,
    name: "Hoodies",
    image: "/lovable-uploads/aa2fcc27-196a-4ef7-91f9-01332cbb6a9e.png",
    price: "From $39.99",
    description: "Cozy custom hoodies for any occasion"
  },
  {
    id: 8,
    name: "Tote Bags",
    image: "/lovable-uploads/823ad244-bbd5-4d5c-9ccc-78deda4feaa7.png",
    price: "From $16.99",
    description: "Eco-friendly custom tote bags"
  }
];

const FeaturedProducts = () => {
  const { formatPrice } = useCurrency();

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
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 transition-opacity">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {formatPrice(product.price.replace("From ", ""))}
                </p>
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