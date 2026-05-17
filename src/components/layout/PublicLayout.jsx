// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Menu, X, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

// const MARKETLY_LOGO = "https://ik.imagekit.io/j0xzq9pns/Marketly-removebg-preview.png?updatedAt=1770099778703";

// const NAV = [
//   { to: "/", label: "Home" },
//   { to: "/services", label: "Services" },
//   { to: "/work", label: "Work" },
//   { to: "/portfolio", label: "Portfolio" },
//   { to: "/blog", label: "Blog" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// export default function PublicLayout({ children }) {
//   useEffect(() => {
//     document.body.style.background = "#FFFFFF";
//     document.body.style.fontFamily = "Manrope, system-ui, sans-serif";
//     document.body.style.color = "#0F1212";
//     return () => {
//       document.body.style.background = "";
//       document.body.style.fontFamily = "";
//       document.body.style.color = "";
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white text-[#0F1212] font-sans antialiased flex flex-col">
//       <PublicHeader />
//       <main className="flex-1 pt-16">{children}</main>
//       <PublicFooter />
//     </div>
//   );
// }

// function PublicHeader() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 16);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => { setMenuOpen(false); }, [pathname]);

//   const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 backdrop-blur border-b border-zinc-200" : "bg-white border-b border-transparent"
//       }`}
//       data-testid="public-header"
//     >
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2.5 group" data-testid="nav-logo">
//           <div className="h-9 w-9 grid place-items-center rounded-sm bg-white border border-zinc-200 group-hover:border-[#134E35]/40 transition-colors overflow-hidden">
//             <img src={MARKETLY_LOGO} alt="Marketly logo" className="h-7 w-7 object-contain" />
//           </div>
//           <span className="font-bold text-xl tracking-tight text-[#0F1212]">Marketly</span>
//         </Link>

//         <nav className="hidden lg:flex items-center gap-1">
//           {NAV.map((n) => (
//             <Link
//               key={n.to}
//               to={n.to}
//               className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
//                 isActive(n.to) ? "text-[#134E35] bg-[#134E35]/5" : "text-zinc-600 hover:text-[#0F1212]"
//               }`}
//               data-testid={`nav-${n.label.toLowerCase()}`}
//             >
//               {n.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden lg:flex items-center gap-3">
//           <Link
//             to="/admin"
//             className="text-xs font-medium text-zinc-500 hover:text-[#134E35] transition-colors"
//             data-testid="nav-admin-link"
//           >
//             Client login
//           </Link>
//           <Button
//             asChild
//             data-testid="header-cta"
//             className="rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white text-sm font-semibold h-10 px-5 transition-colors"
//           >
//             <Link to="/contact">Book a call <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
//           </Button>
//         </div>

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="lg:hidden h-10 w-10 grid place-items-center rounded-sm text-zinc-700 hover:bg-zinc-100"
//           data-testid="nav-menu-toggle"
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="lg:hidden bg-white border-t border-zinc-200" data-testid="mobile-menu">
//           <div className="px-5 py-4 space-y-1">
//             {NAV.map((n) => (
//               <Link
//                 key={n.to}
//                 to={n.to}
//                 className={`block px-4 py-3 text-base font-medium rounded-sm ${
//                   isActive(n.to) ? "text-[#134E35] bg-[#134E35]/5" : "text-[#0F1212] hover:bg-zinc-50"
//                 }`}
//               >
//                 {n.label}
//               </Link>
//             ))}
//             <Link to="/admin" className="block px-4 py-3 text-sm text-zinc-500">Client login →</Link>
//             <Link
//               to="/contact"
//               className="mt-2 block text-center px-5 py-3 bg-[#0F1212] text-white text-sm font-semibold rounded-sm"
//             >
//               Book a call
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// function PublicFooter() {
//   return (
//     <footer className="bg-[#0F1212] text-zinc-400" data-testid="public-footer">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16">
//         <div className="grid md:grid-cols-12 gap-10">
//           <div className="md:col-span-4">
//             <div className="flex items-center gap-2.5">
//               <div className="h-9 w-9 grid place-items-center rounded-sm bg-white overflow-hidden">
//                 <img src={MARKETLY_LOGO} alt="Marketly logo" className="h-7 w-7 object-contain" />
//               </div>
//               <span className="font-bold text-xl text-white">Marketly</span>
//             </div>
//             <p className="mt-5 text-[15px] leading-relaxed max-w-sm">
//               A Bengaluru-based agency building the growth stack for brands that want to compound — paid, organic, local, creative and offline.
//             </p>
//             <div className="mt-6 flex items-center gap-2.5">
//               {[
//                 { Icon: Instagram, href: "https://instagram.com/marketly.tech" },
//                 { Icon: Linkedin, href: "https://linkedin.com" },
//                 { Icon: Youtube, href: "https://youtube.com" },
//                 { Icon: Twitter, href: "https://twitter.com" },
//               ].map(({ Icon, href }) => (
//                 <a key={href} href={href} className="h-9 w-9 grid place-items-center rounded-sm border border-zinc-800 hover:border-[#C87A50] hover:text-[#C87A50] transition-colors">
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#C87A50] mb-4">Company</div>
//             <ul className="space-y-2.5 text-sm">
//               <li><Link to="/about" className="hover:text-white">About</Link></li>
//               <li><Link to="/work" className="hover:text-white">Work</Link></li>
//               <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
//               <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
//               <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//             </ul>
//           </div>

//           <div className="md:col-span-2">
//             <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#C87A50] mb-4">Services</div>
//             <ul className="space-y-2.5 text-sm">
//               <li><Link to="/services" className="hover:text-white">Performance</Link></li>
//               <li><Link to="/services/seo" className="hover:text-white">SEO</Link></li>
//               <li><Link to="/services" className="hover:text-white">GMB Local</Link></li>
//               <li><Link to="/services" className="hover:text-white">Websites</Link></li>
//               <li><Link to="/services" className="hover:text-white">Creative</Link></li>
//               <li><Link to="/services" className="hover:text-white">Offline / OOH</Link></li>
//             </ul>
//           </div>

//           <div className="md:col-span-4">
//             <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#C87A50] mb-4">Contact</div>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2.5">
//                 <Mail className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
//                 <a href="mailto:ramya@marketly.tech" className="hover:text-white">ramya@marketly.tech</a>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <Phone className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
//                 <a href="tel:+919606334692" className="hover:text-white">+91 96063 34692</a>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
//                 <span>3rd floor, Indiranagar 100ft Rd,<br />Bengaluru — 560 038</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-14 pt-6 border-t border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-zinc-500">
//           <span>© {new Date().getFullYear()} Marketly Technologies. All rights reserved.</span>
//           <div className="flex gap-6">
//             <Link to="/privacy" className="hover:text-white" data-testid="footer-privacy">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white" data-testid="footer-terms">Terms & Conditions</Link>
//             <Link to="/admin" className="hover:text-white" data-testid="footer-admin-link">Client portal</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

const MARKETLY_LOGO = "https://ik.imagekit.io/j0xzq9pns/Marketly-removebg-preview.png?updatedAt=1770099778703";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function PublicLayout({ children }) {
  useEffect(() => {
    document.body.style.background = "#FFFFFF";
    document.body.style.fontFamily = "Manrope, system-ui, sans-serif";
    document.body.style.color = "#0F1212";
    return () => {
      document.body.style.background = "";
      document.body.style.fontFamily = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F1212] font-sans antialiased flex flex-col">
      <PublicHeader />
      <main className="flex-1 pt-16">{children}</main>
      <PublicFooter />
    </div>
  );
}

function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-zinc-200" : "bg-white border-b border-transparent"
      }`}
      data-testid="public-header"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        
        {/* Updated Logo Section */}
        <Link to="/" className="flex items-center group" data-testid="nav-logo">
          <img 
            src={MARKETLY_LOGO} 
            alt="Marketly logo" 
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                isActive(n.to) ? "text-[#134E35] bg-[#134E35]/5" : "text-zinc-600 hover:text-[#0F1212]"
              }`}
              data-testid={`nav-${n.label.toLowerCase()}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admin"
            className="text-xs font-medium text-zinc-500 hover:text-[#134E35] transition-colors"
            data-testid="nav-admin-link"
          >
            Client login
          </Link>
          <Button
            asChild
            data-testid="header-cta"
            className="rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white text-sm font-semibold h-10 px-5 transition-colors"
          >
            <Link to="/contact">Book a call <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden h-10 w-10 grid place-items-center rounded-sm text-zinc-700 hover:bg-zinc-100"
          data-testid="nav-menu-toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200" data-testid="mobile-menu">
          <div className="px-5 py-4 space-y-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`block px-4 py-3 text-base font-medium rounded-sm ${
                  isActive(n.to) ? "text-[#134E35] bg-[#134E35]/5" : "text-[#0F1212] hover:bg-zinc-50"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/admin" className="block px-4 py-3 text-sm text-zinc-500">Client login →</Link>
            <Link
              to="/contact"
              className="mt-2 block text-center px-5 py-3 bg-[#0F1212] text-white text-sm font-semibold rounded-sm"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function PublicFooter() {
  return (
    <footer className="bg-[#0F1212] text-zinc-400" data-testid="public-footer">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            
            {/* Updated Footer Logo Section */}
            <div className="flex items-center">
              <img 
                src={MARKETLY_LOGO} 
                alt="Marketly logo" 
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert" 
              />
            </div>
            
            <p className="mt-5 text-[15px] leading-relaxed max-w-sm">
              A Bengaluru-based agency building the growth stack for brands that want to compound — paid, organic, local, creative and offline.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { Icon: Instagram, href: "https://instagram.com/marketly.tech" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Youtube, href: "https://youtube.com" },
                { Icon: Twitter, href: "https://twitter.com" },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} className="h-9 w-9 grid place-items-center rounded-sm border border-zinc-800 hover:border-[#C87A50] hover:text-[#C87A50] transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#C87A50] mb-4">Company</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/work" className="hover:text-white">Work</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#C87A50] mb-4">Services</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-white">Performance</Link></li>
              <li><Link to="/services/seo" className="hover:text-white">SEO</Link></li>
              <li><Link to="/services" className="hover:text-white">GMB Local</Link></li>
              <li><Link to="/services" className="hover:text-white">Websites</Link></li>
              <li><Link to="/services" className="hover:text-white">Creative</Link></li>
              <li><Link to="/services" className="hover:text-white">Offline / OOH</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#C87A50] mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
                <a href="mailto:ramya@marketly.tech" className="hover:text-white">ramya@marketly.tech</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
                <a href="tel:+919606334692" className="hover:text-white">+91 96063 34692</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-zinc-500" />
                <span>3rd floor, Indiranagar 100ft Rd,<br />Bengaluru — 560 038</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Marketly Technologies. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white" data-testid="footer-privacy">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white" data-testid="footer-terms">Terms & Conditions</Link>
            <Link to="/admin" className="hover:text-white" data-testid="footer-admin-link">Client portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
