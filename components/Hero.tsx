import Image from "next/image";
import { motion } from "framer-motion";
import { sectionVariants } from "@/components/utils/animations";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="relative font-lexend bg-gradient-to-br from-[#E6F8F7] to-[#D9F3F2] overflow-hidden py-16 lg:py-24"
    >
      {/* --- PNG Background Overlay --- */}
      <div
        className="absolute inset-0 bg-no-repeat  bg-center opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/object.png')",
        }}
      />

      {/* --- Hero Content --- */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* --- Left Content --- */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00A6A3] mb-4 leading-tight">
            <span className="text-[#00A6A3]">Empowering Nurses, Doctors</span>{" "}
            <br className="hidden md:block" />
            and ICU Managers
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
            Harness real-time AI assistance to reduce medical errors, improve patient care,
            streamline decisions, and save critical time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#087676] text-white font-medium px-6 py-3 rounded-md shadow hover:bg-[#00908F] transition">
              Request for a Demo
            </button>
            <button className="border border-[#087676] text-[#087676] bg-white font-medium px-8 py-3 rounded-md hover:bg-[#E0F7F6] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* --- Right Image --- */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-[85%] md:w-[90%] lg:w-full h-auto drop-shadow-xl z-10">
            <Image
              src="/product.png"
              alt="LifeGate dashboard"
              width={500}
              height={400}
              priority
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
