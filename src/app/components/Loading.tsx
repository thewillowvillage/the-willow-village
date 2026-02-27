import { motion } from "motion/react";
<img src="logo.jpeg" alt="logo" />

export function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#7A9B3A] to-[#6B7A3A] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.img
          src="logo.jpeg"
          alt="The Willow Village"
          className="w-32 h-32 mx-auto mb-6"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="text-white text-xl font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.div>
      </motion.div>
    </div>
  );
}
