import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-[#F9F7F3] to-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-[#7A9B3A] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B7A3A] mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-[#7A9B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6B7A3A] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-white text-[#7A9B3A] border-2 border-[#7A9B3A] px-8 py-4 rounded-full font-semibold hover:bg-[#E8DCC4] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
