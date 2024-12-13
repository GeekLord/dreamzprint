import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import DesignStudio from "./pages/DesignStudio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MetaUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      let title = "DreamzPrint Studio";
      let description = "Create unique custom designs with AI-powered tools.";

      switch (location.pathname) {
        case "/":
          title = "DreamzPrint Studio - Custom Design & Printing Services";
          description = "Create unique custom designs with AI-powered tools. Premium quality printing on t-shirts, hoodies, canvas prints, and more.";
          break;
        case "/products":
          title = "Custom Products - DreamzPrint Studio";
          description = "Browse our collection of customizable products including t-shirts, hoodies, canvas prints, and more.";
          break;
        case "/design":
          title = "AI Design Studio - DreamzPrint Studio";
          description = "Create unique designs with our AI-powered design studio. Easy to use, unlimited possibilities.";
          break;
        case "/about":
          title = "About Us - DreamzPrint Studio";
          description = "Learn about DreamzPrint Studio's mission to make custom design accessible to everyone.";
          break;
        case "/contact":
          title = "Contact Us - DreamzPrint Studio";
          description = "Get in touch with DreamzPrint Studio. We're here to help with your custom printing needs.";
          break;
        case "/blog":
          title = "Blog - DreamzPrint Studio";
          description = "Latest news, design tips, and insights from DreamzPrint Studio.";
          break;
        default:
          if (location.pathname.startsWith("/blog/")) {
            title = "Blog Post - DreamzPrint Studio";
            description = "Read our latest insights on custom design and printing.";
          }
      }

      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    };

    updateMetaTags();
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Check for system preference and stored theme
    const storedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    
    if (storedTheme === 'dark' || 
        (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = root.classList.contains('dark');
          document.body.style.backgroundColor = isDark ? 'hsl(222.2 84% 4.9%)' : 'white';
          document.body.style.color = isDark ? 'hsl(210 40% 98%)' : 'hsl(222.2 84% 4.9%)';
        }
      });
    });

    observer.observe(root, {
      attributes: true
    });

    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <MetaUpdater />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/design" element={<DesignStudio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/returns" element={<ReturnsPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;