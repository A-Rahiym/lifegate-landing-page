"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";
import { features } from "./utils/Items";

export default function Features() {

  // Animations
  const imageMotion = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // delays between list items
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when ~30% of section enters view
      variants={sectionVariants}
      className="relative py-14 lg:py-20 bg-gradient-to-b from-[#00A6A3] to-[#037F7D] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('/object.png')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* Image - Animates when visible */}
        <motion.div
          className="flex-1 flex justify-center"
          variants={imageMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/nurse.png"
            alt="Nurse using LifeGate app"
            width={350}
            height={300}
            className="rounded-2xl object-contain"
            priority
          />
        </motion.div>

        {/* Text + Feature List */}
        <motion.div
          className="flex-1 space-y-0.5 text-white"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            variants={textItem}
          >
            Features
          </motion.h2>

          <motion.p
            className="text-white/90 text-lg md:text-xl lg:text-xl leading-relaxed mb-10 max-w-xl"
            variants={textItem}
          >
            Harness the power of AI to reduce medical errors, save valuable time,
            and deliver better patient care.
          </motion.p>

          <motion.ul className="space-y-5">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start space-x-4"
                variants={textItem}
              >
                <Image
                  src="/tick.svg"
                  height={36}
                  width={36}
                  alt="tick icon"
                  className="mt-1 flex-shrink-0"
                />
                <span className="text-lg md:text-xl lg:text-xl leading-snug">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
