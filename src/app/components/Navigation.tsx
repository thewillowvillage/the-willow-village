import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navConfig = [
  { path: "/", label: "Home" },
  {
    label: "About",
    dropdown: [
      { path: "/about/our-story", label: "Our Story" },
      { path: "/about/our-team", label: "Our Team" },
      { path: "/about/our-mission", label: "Our Mission" },
      { path: "/about/community-service", label: "Community Service" },
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

// Social Links Component
const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1B7ytF6Z5u/?mibextid=wwXIfr"
      target="_blank"
      rel="noreferrer"
      className="transition-transform active:scale-90"
    >
      <svg
        className="w-6 h-6 lg:w-5 lg:h-5"
        viewBox="0 0 24 24"
        fill="#1877F2"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/thewillowvillage"
      target="_blank"
      rel="noreferrer"
      className="transition-transform active:scale-90 flex items-center justify-center"
    >
      <div className="w-6 h-6 lg:w-5 lg:h-5 rounded-[6px] flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
        <svg
          viewBox="0 0 24 24"
          className="w-[70%] h-[70%] text-white fill-current"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>
    </a>
  </div>
);

function DropdownMenu({
  items,
}: {
  items: { path: string; label: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
    >
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-[#E8DCC4] hover:text-[#6B7A3A] transition-colors"
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
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location]);

  return (
    <>
      {/* FIXED NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 mr-4 sm:mr-10 transition-transform active:scale-95"
            >
              <img
                src="/logo.png"
                alt="The Willow Village"
                className="h-10 sm:h-12 w-auto"
              />

              <div className="flex flex-col">
                <span className="font-bold text-[#6B7A3A] text-sm sm:text-lg leading-tight">
                  The Willow Village
                </span>

                <span className="text-[9px] sm:text-[11px] text-[#A67C52] italic leading-tight">
                  Shaping Independent Thinkers
                </span>
              </div>
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-4">

              {/* Desktop Navigation */}
              <div
                className="hidden lg:flex items-center gap-5"
                ref={dropdownRef}
              >
                {navConfig.map((item) => (
                  <div key={item.label} className="relative">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label
                                ? null
                                : item.label
                            )
                          }
                          className={`flex items-center gap-1 px-1 py-1 text-[13px] font-medium transition-colors ${
                            openDropdown === item.label
                              ? "text-[#7A9B3A]"
                              : "text-gray-700 hover:text-[#6B7A3A]"
                          }`}
                        >
                          {item.label}

                          <ChevronDown className="w-3 h-3" />
                        </button>

                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <DropdownMenu items={item.dropdown} />
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path!}
                        className={`px-1 py-1 text-[13px] font-medium transition-colors ${
                          location.pathname === item.path
                            ? "text-[#7A9B3A] font-bold"
                            : "text-gray-700 hover:text-[#6B7A3A]"
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
              <SocialLinks className="lg:hidden" />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[72px] left-0 w-full lg:hidden bg-white border-t px-6 py-6 shadow-xl overflow-y-auto max-h-[80vh]"
            >
              {navConfig.map((item) => (
                <div key={item.label} className="mb-3">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="w-full flex justify-between items-center text-gray-700 font-semibold py-2"
                      >
                        {item.label}

                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openMobileDropdown === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {openMobileDropdown === item.label && (
                        <div className="mt-1 pl-4 border-l-2 border-[#E8DCC4] space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block py-2 text-sm text-gray-600 active:text-[#6B7A3A]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path!}
                      className="block text-gray-700 font-semibold py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

    </>
  );
}
