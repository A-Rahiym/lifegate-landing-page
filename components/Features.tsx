import Image from "next/image";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";

export default function Features() {
  const features = [
    "Reduced Workload For Nurses and Doctors",
    "Get real-time snapshot of patient status across the ICU",
    "Improved Patient Care Efficiency",
  ];

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-[#00A6A3] to-[#037F7D] overflow-hidden"
    >
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('/object.png')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* Left image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/nurse.png"
            alt="Nurse using LifeGate app"
            width={1100}
            height={1000}
            className="rounded-2xl object-contain lg:scale-110"
            priority
          />
        </div>

        {/* Right content */}
        <div className="flex-1 space-y-0.5 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Features
          </h2>

          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-xl">
            Harness the power of AI to reduce medical errors, save valuable time,
            and deliver better patient care.
          </p>

          <ul className="space-y-5">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start space-x-4">
                <Image
                  src="/tick.svg"
                  height={36}
                  width={36}
                  alt="tick icon"
                  className="mt-1 flex-shrink-0"
                />
                <span className="text-lg space-y-0.5 md:text-xl lg:text-2xl leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
