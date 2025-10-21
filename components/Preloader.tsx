"use client";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, setIsLoading }) => {
  // Animation variant for dots
  const dotVariants = {
    animate: {
      y: [0, -10, 0], // vertical bounce
      opacity: [0.3, 1, 0.3], // fade in/out
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => !isLoading && setIsLoading(false)}
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
        >
          {/* Logo or text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#00A6A3] mb-8"
          >
            LifeGate
          </motion.h1>

          {/* Three Dots Animation */}
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                variants={dotVariants}
                animate="animate"
                transition={{
                  delay: i * 0.2, // stagger each dot
                }}
                className="w-4 h-4 rounded-full bg-[#00A6A3]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
