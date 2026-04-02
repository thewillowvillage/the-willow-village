import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navConfig = [
  { path: "/", label: "Home" },
  {
    label: "About",
    dropdown: [
      { path: "/about/our-story", label: "Our Story" },
      { path: "/about/our-team", label: "Our Team" },
      { path: "/about/our-mission", label: "Our Mission" },
    ],
  },
  { path: "/programs", label: "Programs" },
  { path: "/therapy", label: "Therapy" },
  {
    label: "Admissions",
    dropdown: [
      { path: "/admissions", label: "Admissions Overview" },
      { path: "/admissions/apply", label: "Apply Now" },
      { path: "/admissions/requirements", label: "Requirements" },
      { path: "/admissions/fees", label: "Fees & Scholarships" },
    ],
  },
  { path: "/gallery", label: "Gallery" },
  {
    label: "Future Goals",
    dropdown: [
      { path: "/future-goals", label: "Our Vision" },
      { path: "/future-goals/expansion", label: "Expansion Plans" },
      { path: "/future-goals/programs", label: "Upcoming Programs" },
    ],
  },
  { path: "/our-partners", label: "Our Partners" },
  { path: "/contact", label: "Contact" },
];

// Reusable Social Links Component with your actual links
const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <a 
      href="https://www.facebook.com/share/1B7ytF6Z5u/?mibextid=wwXIfr" 
      target="_blank" 
      rel="noreferrer" 
      className="text-[#6B7A3A] hover:text-[#A67C52] transition-colors"
    >
      <Facebook className="w-5 h-5" />
    </a>
    <a 
      href="https://www.instagram.com/thewillowvillage" 
      target="_blank" 
      rel="noreferrer" 
      className="text-[#6B7A3A] hover:text-[#A67C52] transition-colors"
    >
      <Instagram className="w-5 h-5" />
    </a>
  </div>
);

function DropdownMenu({ items }: { items: { path: string; label: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
    >
      {items.map((item) => (
        <Link key={item.path} to={item.path} className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-[#E8DCC4] hover:text-[#6B7A3A] transition-colors">
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location]);

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-1" : "bg-white/95 backdrop-blur-sm py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Increased size on Mobile (sm:text-lg) */}
          <Link to="/" className="flex items-center gap-2 mr-6 sm:mr-10 transition-transform active:scale-95">
            <img src="/logo.png" alt="The Willow Village" className="h-11 sm:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-[#6B7A3A] text-base sm:text-lg leading-tight">
                The Willow Village
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#A67C52] italic leading-tight">
                Shaping Independent Thinkers
              </span>
            </div>
          </Link>

          {/* Right Section: Navigation & Socials */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Desktop Navigation - Small text (13px) and wide gaps (gap-5) */}
            <div className="hidden lg:flex items-center gap-5" ref={dropdownRef}>
              {navConfig.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <>
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-1 py-1 text-[13px] font-medium transition-colors ${
                          openDropdown === item.label ? "text-[#7A9B3A]" : "text-gray-700 hover:text-[#6B7A3A]"
                        }`}
                      >
                        {item.label} <ChevronDown className="w-3 h-3" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && <DropdownMenu items={item.dropdown} />}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={item.path!} 
                      className={`px-1 py-1 text-[13px] font-medium transition-colors ${
                        location.pathname === item.path ? "text-[#7A9B3A] font-bold" : "text-gray-700 hover:text-[#6B7A3A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="ml-2 border-l pl-4 border-gray-200">
                <SocialLinks />
              </div>
            </div>

            {/* Mobile Socials */}
            <SocialLinks className="lg:hidden scale-90" />

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="lg:hidden bg-white border-t mt-2 px-6 py-6 shadow-inner"
          >
            {navConfig.map((item) => (
              <div key={item.label} className="mb-3">
                {item.dropdown ? (
                  <>
                    <button 
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                      className="w-full flex justify-between items-center text-gray-700 font-semibold"
                    >
                      {item.label} <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="mt-2 pl-4 border-l-2 border-[#E8DCC4] space-y-2">
                        {item.dropdown.map(sub => (
                          <Link key={sub.path} to={sub.path} className="block py-1 text-sm text-gray-600 active:text-[#6B7A3A]">{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path!} className="block text-gray-700 font-semibold">{item.label}</Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}