"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { sectionVariants } from "@/components/utils/animations";
export default function Hero() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="relative bg-gradient-to-br from-[#E6F8F7] to-[#D9F9F8] py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('/object.png')] bg-cover bg-center mx-0"></div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left: Text Section */}
        <div className="text-center lg:text-left space-y-6 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-700 leading-tight"
          >
            Empowering Nurses, Doctors{" "}
            <br className="hidden sm:block" />
            <span className="text-[#00A6A3]">and ICU Managers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-base md:text-lg max-w-lg mx-auto lg:mx-0"
          >
            Harness real-time AI assistance to reduce medical errors, improve
            patient care, streamline decisions, and save critical time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button className="px-6 py-3 bg-[#087676] text-white rounded-full font-semibold hover:bg-[#008b8a] transition">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-[#00A6A3] text-[#00A6A3] rounded-full font-semibold hover:bg-[#00A6A3] hover:text-white transition">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right: Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:w-1/2 mb-10 lg:mb-0"
        >
          <Image
            src="/product.png"
            alt="ICU Monitoring Dashboard"
            width={550}
            height={400}
            className="mx-auto"
          />
        </motion.div>
      </div>

      {/* Floating shapes for subtle motion */}
      <motion.div
        className="absolute top-10 left-10 w-10 h-10 bg-[#00A6A3]/20 rounded-full"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute bottom-10 right-16 w-14 h-14 bg-[#00A6A3]/10 rounded-full"
        animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </motion.section>
  );
}
