import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const DesignStudioCTA = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-primary to-blue-600">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
            Ready to Create Something Amazing?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Transform your ideas into stunning designs with our AI-powered Design Studio. 
            No design experience needed!
          </p>
          
          <div className="flex justify-center items-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Link to="/design">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition-all duration-200 text-lg"
              >
                Try Design Studio Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex justify-center animate-float">
            <Sparkles className="h-12 w-12 text-yellow-300 opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStudioCTA;