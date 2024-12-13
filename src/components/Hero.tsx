import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#9b87f5] via-[#E5DEFF] to-[#FDE1D3] animate-gradient-x pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center relative z-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Transform Your Ideas into</span>
            <span className="block bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Beautiful Prints
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-[#222226] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-semibold bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            Create stunning designs with AI-powered tools and bring them to life on premium products.
            From t-shirts to wall art, make your imagination tangible.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
            <Link
              to="/design"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
            <Link
              to="/products"
              className="mt-3 sm:mt-0 inline-flex items-center px-8 py-3 border-2 border-[#8B5CF6] text-base font-medium rounded-full text-[#8B5CF6] bg-white/90 hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
        <div className="absolute w-full h-full bg-[#D946EF]/20 rounded-full filter blur-3xl animate-float" />
      </div>
      <div className="absolute top-3/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64">
        <div className="absolute w-full h-full bg-[#0EA5E9]/20 rounded-full filter blur-3xl animate-float" />
      </div>
    </div>
  );
};

export default Hero;