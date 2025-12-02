import Footer from "../components/Footer";
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import Services from "../pages/Services";
import Feedback from "../pages/Feedback";
import Blog from "../pages/Blog";

// Banner images
import { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export default function Home() {
  // Slider logic
  const slides = [
    {
      image: banner1,
      title: "Professional Typing & Studio Center in Qatar",
      text: "Visa services, document typing, photo studio & more — all under one roof.",
    },
    {
      image: banner2,
      title: "Fast & Accurate Document Typing",
      text: "Qatar visa typing, passport renewal, applications & all PRO services.",
    },
    {
      image: banner3,
      title: "Photo Studio & Digital Services",
      text: "Passport photos, ID photos, printing, scanning & lamination services.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">

        {/* ===================== HERO SLIDER ===================== */}
        <section className="relative w-full h-[500px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.text}</p>

                  <button
                    className="
                      px-5 py-3 rounded-lg font-semibold 
                      bg-gradient-to-r from-blue-500 to-blue-700 
                      text-white 
                      transition-all duration-300 
                      hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-800
                    "
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ===================== MISSION & VISION ===================== */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Mission Box */}
            <div
              className="relative text-white text-left h-80 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end p-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${missionImg})` }}
            >
              <h3 className="text-2xl font-semibold mb-2">Mission</h3>
              <p className="bg-black/50 p-3 rounded text-sm">
                Al Sadiq is dedicated to providing the highest quality of services 
                to its clients. Our mission is to provide smooth, transparent, 
                professional and reliable services that meet the needs of our 
                customers. We strive to deliver exceptional customer service while 
                maintaining a commitment to excellence.
              </p>
            </div>

            {/* Vision Box */}
            <div
              className="relative text-white text-left h-80 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end p-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${visionImg})` }}
            >
              <h3 className="text-2xl font-semibold mb-2">Vision</h3>
              <p className="bg-black/50 p-3 rounded text-sm">
                Al Sadiq evolved with the vision to empower aspiring people to 
                position themselves globally. We ensure visa and documentation 
                services are efficient, streamlined, and accessible to all.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES, FEEDBACK, BLOG ===================== */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <Services />
          <Feedback />
          <Blog />
        </section>

      </main>

      <Footer />
    </div>
  );
}
