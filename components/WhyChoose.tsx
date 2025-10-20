import { motion } from "framer-motion";
import Image from "next/image";
import { sectionVariants } from "@/components/utils/animations";

const WhyChoose = () => {
  const reasons = [
    {
      title: "Patient Care Tracking",
      description:
        "Stay up-to-date with every patient’s vitals, treatments, and progress – all in real time.",
      icon: "/tracking.svg",
    },
    {
      title: "Smart Assistance For ICU Decisions",
      description:
        "Access intelligent insights that help doctors and nurses make better, faster decisions.",
      icon: "/chatbot.svg",
    },
    {
      title: "Tools for Every ICU Role",
      description:
        "Empower nurses, doctors, and managers with AI tools designed for their specific roles.",
      icon: "/Stethescope.svg",
    },
  ];

  return (
    <motion.section
      id="why-choose"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-20 lg:py-28 bg-gradient-to-b from-[#E6F8F7] to-white font-lexend"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* --- Section Title --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-[#034F4D] mb-14"
        >
          Why Choose <span className="text-[#00A6A3]">LifeGate</span>
        </motion.h2>

        {/* --- Feature Grid --- */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-2xl shadow-lg bg-gradient-to-b from-[#00B4B0] to-[#006E6B] p-10 text-center text-white hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={40}
                  height={40}
                  className=""
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;
