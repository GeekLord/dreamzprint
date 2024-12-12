import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import DesignStudio from "./pages/DesignStudio";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import TermsOfService from "./pages/TermsOfService";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/design" element={<DesignStudio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* Other admin routes will be added here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;