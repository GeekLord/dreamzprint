import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";

const queryClient = new QueryClient();

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
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Additional routes will be added as we implement more pages */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;