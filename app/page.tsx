"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu, X, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function LifeGateLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.svg"
                alt="LifeGate Logo"
                className="w-8 h-8"
                style={{ objectFit: "contain" }}
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  LifeGate
                </span>
                <span className="text-xs text-gray-500 -mt-1">by dshub</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  How it works
                </button>
              </div>
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact us
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-gray-700 hover:text-teal-600 transition-colors"
                >
                  How it works
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Contact us
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
                Empowering Nurses, Doctors and ICU Managers
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Harness real-time AI assistance to reduce medical errors,
                improve patient care, streamline decisions, and save critical
                time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-8 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Request for a Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white  px-12 py-8 text-lg font-semibold rounded-lg transition-all duration-200 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/undraw_medicine_hqqg_2.png"
                alt="Medical professionals with healthcare technology"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LifeGate Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-teal-600 mb-16">
            Why Choose LifeGate
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-teal-100 border-0 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto border border-gray-200">
                  <img
                    src="/tracking.svg"
                    alt="Patient Care Tracking"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Patient Care Tracking
                </h3>
                <p className="font-medium text-[#04364C]">
                  Stay up-to-date with every patient's vitals, treatments, and
                  progress all in real time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal-100 border-0 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto border">
                  <img
                    src="/Chatbot.svg"
                    alt="Smart Assistance"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Smart Assistance For ICU Decisions
                </h3>
                <p className="font-medium text-[#04364C]">
                  Leverage AI-powered insights and alerts to support faster,
                  more accurate decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal-100 border-0 p-6">
              <CardContent className="text-center space-y-4 p-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto border border-gray-200">
                  <img
                    src="/Stethescope.svg"
                    alt="ICU Tools"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tools for Every ICU Role
                </h3>
                <p className="font-medium text-[#04364C]">
                  Whether you're a Nurse, Doctor, or ICU Manager, LifeGate
                  provides tailored tools that make your work easier and more
                  effective.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 lg:py-24 bg-gradient-to-br from-teal-500 to-cyan-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <img
            src="/objects.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Features
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Harness the power of AI to reduce medical errors, save valuable
              time, and deliver better patient care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/system.png"
                alt="LifeGate Dashboard Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-teal-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Reduced Workload For Nurses and Doctors
                  </h3>
                  <p className="text-teal-100">
                    Streamline workflows and reduce administrative burden with
                    intelligent automation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-teal-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Get real-time snapshot of patient status across the ICU
                  </h3>
                  <p className="text-teal-100">
                    Monitor all patients simultaneously with comprehensive
                    real-time dashboards.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-teal-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Improved patient care Efficiency
                  </h3>
                  <p className="text-teal-100">
                    Enhance care quality through data-driven insights and
                    predictive analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect Your Systems
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing hospital management
                systems and medical devices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI continuously monitors patient data and provides
                intelligent insights and alerts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Better Outcomes
              </h3>
              <p className="text-gray-600">
                Make faster, more informed decisions that lead to improved
                patient care and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 to-cyan-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="/objects.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white lg:py-15 lg:px-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Contact Us
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-lg text-teal-100">
                  Have questions or want to see LifeGate in action?
                </p>
                <p className="text-teal-100">
                  Our team is ready to help. Reach out to us for demos, support,
                  or partnership opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-200" />
                  <span className="text-teal-100">dinsoft.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-200" />
                  <span className="text-teal-100">
                    +2349013453490 +2349110192583
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-200" />
                  <span className="text-teal-100">
                    No 3 Macedo Crescent Malali GRA Kaduna
                  </span>
                </div>
              </div>
            </div>

            <Card className="bg-white p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                You can reach out to us anytime. Send Us a Message
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-gray-300" />
                  <Input placeholder="Last Name" className="border-gray-300" />
                </div>
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="border-gray-300"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="+234" className="border-gray-300" />
                  <Input
                    placeholder="Phone number"
                    className="border-gray-300"
                  />
                </div>
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="border-gray-300 resize-none"
                />
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-7 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 md:py-5 sm:py-3.5">
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.svg"
                  alt="LifeGate Logo"
                  className="w-8 h-8"
                />
                <div className="flex flex-col ">
                  <span className="text-0.75xl font-bold lowercase text-white">
                    lifegate
                  </span>
                  <span className="text-xs text-teal-200 -mt-1 lowercase">
                    by dshub
                  </span>
                </div>
              </div>
              <p className="text-white text-sm lowercase">
                www.lifegate.dshub.com.ng
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 lowercase text-white">
                quick links
              </h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="hover:text-teal-200 transition-colors lowercase"
                  >
                    home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-teal-200 transition-colors lowercase"
                  >
                    how it works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-teal-200 transition-colors lowercase"
                  >
                    features
                  </button>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1yLKAOGRPHzaeXXf53bYGXAqrqckUtbvf/view?usp=drivesdk" target="_blank"
                    className="hover:text-teal-200 transition-colors lowercase"
                  >
                    privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#" target="_blank"
                    className="hover:text-teal-200 transition-colors lowercase"
                  >
                    terms of service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 lowercase text-white">
                compliance & security
              </h4>
              <ul className="space-y-2 text-sm text-white">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="lowercase">ndpr compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="lowercase">
                    hipaa inspired data security
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="lowercase">
                    encrypted & confidential patient records
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 lowercase text-white">
                contact info
              </h4>
              <div className="space-y-2 text-sm text-white">
                <p className="lowercase">
                  no 3 macedo crescent malali gra kaduna
                </p>
                <p className="lowercase">dinsoft.dev@gmail.com</p>
                <p>+2349013453490</p>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-700 mt-6 pt-6 text-center text-sm text-white">
            <p className="lowercase">© lifegate by dshub copyright 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
