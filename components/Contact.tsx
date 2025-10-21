"use client";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";
import { Mail, Phone} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+234",
    phone: "",
  });
  const maxLength = 200;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, message });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-16 lg:py-24 bg-teal-700 relative overflow-hidden"
      style={{
        backgroundImage: "url('/object.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-teal-700/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg">
                Have questions or want to see LifeGate in action?
              </p>
              <p className="text-lg">
                Our team is ready to help. Reach out to us for demos,
              </p>
              <p className="text-lg">support, or partnership opportunities.</p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <a
                  href="mailto:dinsoft.dev@gmail.com"
                  className="text-base sm:text-lg hover:underline"
                >
                  dinsoft.dev@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-base sm:text-lg">
                  <a
                    href="tel:+2349013453490"
                    className="hover:underline block sm:inline"
                  >
                    +2349013453490
                  </a>
                  <span className="mx-2 hidden sm:inline">•</span>
                  <br className="block sm:hidden" />
                  <a
                    href="tel:+2349110192583"
                    className="hover:underline block sm:inline"
                  >
                    +2349110192583
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <h3 className="text-3xl font-bold text-[#00A6A3]">
                Get in <span className="text-[#00A6A3]">Touch</span>
              </h3>
              <p className="text-gray-600 mb-8">
                You can reach out to us anytime. Send Us a Message
              </p>

              <div className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <input
                      type="text"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={maxLength}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg h-32 resize-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all outline-none"
                  ></textarea>
                  <div className="absolute bottom-3 right-4 text-sm text-gray-400">
                    {message.length}/{maxLength}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-teal-700 text-white px-6 py-4 rounded-lg hover:bg-teal-800 transition-colors font-semibold text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
