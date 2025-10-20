import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";

const Footer = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="bg-teal-600 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">LifeGate</div>
        <div className="space-x-4 mb-4">
          {["home", "features", "how-it-works", "about", "testimonials", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className="hover:text-teal-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </a>
          ))}
        </div>
        <p className="text-sm text-teal-100">
          Compliant with NDPR and HIPAA-inspired standards. © 2025 LifeGate by DSHub.
        </p>
        <p className="text-sm text-teal-100">Contact: info@lifegate.com | +234 800 123 4567</p>
      </div>
    </motion.footer>
  );
};

export default Footer;