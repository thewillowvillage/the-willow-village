import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

function DropdownMenu({ items }: { items: { path: string; label: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
    >
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E8DCC4] hover:text-[#6B7A3A] transition-colors"
        >
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveDropdown = (items: { path: string }[]) =>
    items.some((item) => location.pathname === item.path);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="The Willow Village" className="h-12 sm:h-16 w-auto" />
            <div className="block">
              <div className="font-bold text-[#6B7A3A] text-lg">The Willow Village</div>
              <div className="text-sm text-[#A67C52] italic">Shaping Independent Thinkers</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navConfig.map((item) => {
              if (item.dropdown) {
                const isActive = isActiveDropdown(item.dropdown);
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-0.5 px-2.5 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                        isActive || openDropdown === item.label
                          ? "bg-[#7A9B3A] text-white"
                          : "text-gray-700 hover:bg-[#E8DCC4] hover:text-[#6B7A3A]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && <DropdownMenu items={item.dropdown} />}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`px-2.5 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    location.pathname === item.path
                      ? "bg-[#7A9B3A] text-white"
                      : "text-gray-700 hover:bg-[#E8DCC4] hover:text-[#6B7A3A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              {navConfig.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium mb-1 text-gray-700 hover:bg-[#E8DCC4]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mb-1"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-[#E8DCC4] hover:text-[#6B7A3A] mb-1"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path!}
                    className={`block px-3 py-2 rounded-md text-base font-medium mb-1 ${
                      location.pathname === item.path
                        ? "bg-[#7A9B3A] text-white"
                        : "text-gray-700 hover:bg-[#E8DCC4]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}