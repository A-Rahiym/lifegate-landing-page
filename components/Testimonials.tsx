"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { sectionVariants } from "@/components/utils/animations";
import { testimonials } from "./utils/Items";

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#00A6A3] to-[#037F7D] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/object.png')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-2">Testimonials</h2>
        <p className="italic text-white/90 mb-16">What Experts Say About Us</p>

        {/* Auto-sliding container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 40, // adjust for speed
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials to create seamless loop */}
            {[...testimonials, ...testimonials].map((t, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl min-w-[300px] md:min-w-[360px] p-6 shadow-md text-left flex flex-col justify-between hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00A6A3]/10 rounded-full p-3">
                    <Quote className="w-8 h-8 text-[#00A6A3]" />
                  </div>
                </div>

                <p className="text-gray-700 italic text-sm md:text-base mb-6 text-center">
                  “{t.quote}”
                </p>

                <div className="text-right">
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-600">{t.hospital}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
