"use client";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className=" rounded-lg p-6 shadow-md h-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">Have questions or want to see LifeGate in action?</p>
            <p className="text-gray-600 mb-2">Email: <a href="mailto:dinsoft.dev@gmail.com" className="text-teal-600 hover:underline">dinsoft.dev@gmail.com</a></p>
            <p className="text-gray-600 mb-2">Phone: <a href="tel:+2349013453490" className="text-teal-600 hover:underline">+2349013453490 +2349110192583</a></p>
            <p className="text-gray-600 mb-4">Address: No 3 Macedo Crescent Malali GRA Kaduna</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-6">You can reach out to us anytime. Send Us a Message</p>
            <form className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">+234</label>
                  <input
                    type="text"
                    id="countryCode"
                    placeholder="+234"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="w-full p-2 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;