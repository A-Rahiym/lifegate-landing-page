"use client";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";
import {steps} from '@/components/utils/Items';

const HowItWorks = () => {
  return (
    <motion.section
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#E6F8F7] to-[#D9F9F8] opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl lg:text-5xl font-bold text-teal-700 mb-16"
        >
          How It <span className="text-[#00A6A3]">Works</span>
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Connecting line (visible only on large screens) */}
          <motion.div
            className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-teal-300"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left center" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                y: 30,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Animated number circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.3,
                }}
                className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md"
              >
                {step.number}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.1 }}
                className="text-xl lg:text-2xl font-semibold text-teal-700 mb-3"
              >
                {step.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                className="text-gray-600 max-w-xs"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
