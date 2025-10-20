import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { sectionVariants } from "@/components/utils/animations";

const testimonials = [
  {
    quote:
      "LifeGate has revolutionized our ICU operations, cutting response times by 25% with its real-time insights.",
    author: "Dr. A. Danladi",
    hospital: "Yobe State University Teaching Hospital",
  },
  {
    quote:
      "LifeGate has revolutionized our ICU operations, cutting response times by 25% with its real-time insights.",
    author: "Dr. A. Danladi",
    hospital: "Yobe State University Teaching Hospital",
  },
  {
    quote:
      "LifeGate has revolutionized our ICU operations, cutting response times by 25% with its real-time insights.",
    author: "Dr. A. Danladi",
    hospital: "Yobe State University Teaching Hospital",
  },
];

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
      {/* Dotted background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/object.png')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2">Testimonials</h2>
        <p className="italic text-white/90 mb-16">What Experts Say About Us</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md text-left flex flex-col justify-between"
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
        </div>
      </div>
    </motion.section>
  );
}
