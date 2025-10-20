import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, setIsLoading }) => {
  const logoVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { type: "spring", duration: 1.5 }, opacity: { duration: 0.5, delay: 0.5 }, delay: i * 0.3 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 1.2 } },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          onAnimationComplete={() => !isLoading && setIsLoading(false)}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="text-teal-500">
            {/* Stethoscope shape */}
            <motion.path
              d="M80 120 Q90 100 100 120 Q110 100 120 120 L120 140 Q110 160 100 140 Q90 160 80 140 Z M100 80 Q110 60 120 80 L130 90 Q140 100 130 110"
              stroke="currentColor"
              strokeWidth="8"
              variants={logoVariants}
              custom={0}
              initial="hidden"
              animate="visible"
            />
            <motion.text
              x="50"
              y="160"
              fontSize="20"
              fontWeight="bold"
              fill="currentColor"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              LifeGate
            </motion.text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
