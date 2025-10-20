import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Connect your systems",
      description:
        "Harness the power of AI to reduce medical errors, save valuable time, and deliver better patient care.",
    },
    {
      number: "2",
      title: "AI Analysis",
      description:
        "Harness the power of AI to reduce medical errors, save valuable time, and deliver better patient care.",
    },
    {
      number: "3",
      title: "Better Outcomes",
      description:
        "Harness the power of AI to reduce medical errors, save valuable time, and deliver better patient care.",
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-16">
          How it Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-teal-700 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
