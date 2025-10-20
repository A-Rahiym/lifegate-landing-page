import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { sectionVariants, imageVariants } from "@/components/utils/animations";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryData = [
  {
    src: "/img1.jpg",
    alt: "LifeGate dashboard showing real-time ICU vitals",
    caption: "Real-time monitoring at Lagos General Hospital",
  },
  {
    src: "/img1.jpg",
    alt: "LifeGate team training nurses and doctors",
    caption: "Staff training at Kaduna Medical Center",
  },
  {
    src: "/img1.jpg",
    alt: "Doctor using LifeGate to review patient data",
    caption: "Enhancing care at Abuja Clinic",
  },
];


export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="relative py-20 lg:py-28 bg-white text-gray-900 overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/object.png')] bg-cover bg-center mx-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#037F7D] mb-2">
          LifeGate Impact Showcase
        </h2>
        <p className="italic text-gray-600 text-center mb-12 text-lg">
          Here’s LifeGate in Action
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {galleryData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03 }}
                className="transition-transform duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-center mt-4 text-gray-700 font-medium italic text-sm md:text-base">
                  {item.caption}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}