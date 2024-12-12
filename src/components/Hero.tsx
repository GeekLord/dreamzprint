import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroAnimation from "./hero/HeroAnimation";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20">
      <HeroAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Ideas into</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Beautiful Prints
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create stunning designs with AI-powered tools and bring them to life on premium products.
            From t-shirts to wall art, make your imagination tangible.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/design"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative blob shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <div className="absolute w-full h-full bg-primary/20 rounded-full filter blur-3xl animate-float" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96">
        <div className="absolute w-full h-full bg-secondary/20 rounded-full filter blur-3xl animate-float" />
      </div>
    </div>
  );
};

export default Hero;