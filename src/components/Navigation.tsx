import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { CurrencySwitcher } from "./CurrencySwitcher";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            DreamzPrint Studio
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link to="/products" className="text-foreground/60 hover:text-foreground">
              Products
            </Link>
            <Link to="/design" className="text-foreground/60 hover:text-foreground">
              Design Studio
            </Link>
            <Link to="/about" className="text-foreground/60 hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-foreground/60 hover:text-foreground">
              Contact
            </Link>
            <Link to="/blog" className="text-foreground/60 hover:text-foreground">
              Blog
            </Link>
            <Link to="/faq" className="text-foreground/60 hover:text-foreground">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <CurrencySwitcher />
            <ThemeToggle />
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;