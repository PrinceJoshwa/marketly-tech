import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ClientDetail from "@/pages/ClientDetail";
import Team from "@/pages/Team";
import ProtectedRoute from "@/components/ProtectedRoute";

// Public subpages
import Work from "@/pages/public/Work";
import CaseStudyDetail from "@/pages/public/CaseStudyDetail";
import Blog from "@/pages/public/Blog";
import BlogPost from "@/pages/public/BlogPost";
import Services from "@/pages/public/Services";
import SeoServices from "@/pages/public/SeoServices";
import Portfolio from "@/pages/public/Portfolio";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Privacy from "@/pages/public/Privacy";
import Terms from "@/pages/public/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App min-h-screen">
      <Toaster richColors position="top-right" />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public marketing site */}
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SeoServices />} />
          <Route path="/best-seo-services" element={<SeoServices />} />
          <Route path="/best-seo-services/" element={<SeoServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Internal Marketly admin app (under /admin) */}
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/clients/:clientId"
            element={
              <ProtectedRoute>
                <ClientDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/team"
            element={
              <ProtectedRoute>
                <Team />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
