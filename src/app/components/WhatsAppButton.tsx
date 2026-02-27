import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923220277871"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-[#25D366] px-4 py-2 rounded-lg font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us!
      </span>
    </motion.a>
  );
}
