"use client";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";
import { MapPin, Globe } from "lucide-react";
import { navItems } from "@/components/utils/Items"; // 

const Footer = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="bg-[#087676] font text-white py-12 font-lexend relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-teal-700/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-8 border-b border-white/20">
          {/* Address & Website */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>No 3 Maccido Crescent Malali GRA<br />Kaduna</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 flex-shrink-0" />
              <a href="https://www.lifegate.dshub.com.ng" className="hover:underline">
                www.lifegate.dshub.com.ng
              </a>
            </div>
          </div>

          {/* Quick Links — Dynamically Generated */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className="hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Security */}
          <div>
            <h4 className="font-bold text-lg mb-4">Compliance & Security</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-xl">🔒</span> NDPR Compliant
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🔒</span> HIPAA Inspired Data Security
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🔒</span> Encrypted & Confidential Patient Records
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-white/90">
          <p className="text-sm">LIFEGATE BY DSHUB COPYRIGHT 2025</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
