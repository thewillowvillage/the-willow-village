import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function WorkshopPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenWorkshopPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenWorkshopPopup", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            // max-w-md and h-auto ensures it fits phone widths
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={closePopup} 
              className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white text-[#6B7A3A] rounded-full shadow-md transition-colors"
            >
              <X size={20} />
            </button>

            {/* Responsive Image Container */}
            <div className="w-full flex justify-center bg-gray-50">
              <img 
                src="/workshop-flyer.jpg" 
                alt="Workshop Flyer" 
                // max-h-[60vh] ensures it doesn't push the button off-screen on phones
                className="w-full h-auto max-h-[60vh] object-contain" 
              />
            </div>

            {/* Bottom Content Area */}
            <div className="p-5 text-center bg-white">
              <h3 className="text-lg font-bold text-[#6B7A3A] mb-3">
                Autism Awareness Workshop
              </h3>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTNvuiVZ9cHnsLztIDHtDh3Q5QwHohtmSicOGBRWpBQHBVyA/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#7A9B3A] text-white py-3 rounded-xl font-bold hover:bg-[#6B7A3A] transition-all active:scale-95 shadow-lg"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}