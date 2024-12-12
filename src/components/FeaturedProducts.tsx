import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Custom T-Shirts",
    image: "/placeholder.svg",
    price: "From $24.99",
  },
  {
    id: 2,
    name: "Wall Art",
    image: "/placeholder.svg",
    price: "From $29.99",
  },
  {
    id: 3,
    name: "Photo Books",
    image: "/placeholder.svg",
    price: "From $39.99",
  },
  {
    id: 4,
    name: "Custom Mugs",
    image: "/placeholder.svg",
    price: "From $14.99",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-24">
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
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;