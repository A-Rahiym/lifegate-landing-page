"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
// import About from "@/components/About";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function LifeGateLanding() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      <Header scrollToSection={scrollToSection} />
      <Hero />
      <WhyChoose />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
