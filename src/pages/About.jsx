import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../assets/about-banner.jpg";

// Top cards (CEO & Manager)
import shareefImg from "../assets/Shareef1.jpg";
import thwayyibImg from "../assets/Thwayyib.jpg";

// Team members (4 cards)
import afzarImg from "../assets/Afzar.jpg";
import jaleelImg from "../assets/Jaleel.jpg";
import khaderImg from "../assets/Khader.jpg";
import riyasImg from "../assets/Riyas.jpg";

import { FaPhoneAlt } from "react-icons/fa";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Hero / Banner */}
      <section
        className="relative text-white text-center py-44 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl mb-6">
            Welcome to <strong>Al Sadiq Typing & Studio Center</strong>, your trusted partner in providing efficient document handling and administrative support for individuals and businesses across Qatar.
          </p>
        </div>
      </section>

      {/* Two cards: CEO & Manager */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card - CEO */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transition flex flex-col sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-full sm:w-1/3 flex-shrink-0">
              <img
                src={shareefImg}
                alt="Mohammed Shareef"
                className="w-full h-64 sm:h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-1">Mohammed Shareef</h3>
              <p className="text-blue-600 font-medium mb-3">CEO</p>
              <p className="text-gray-700">
                Founder and CEO of Al Sadiq. Mohammed leads the company’s strategy and ensures quality service delivery for all clients.
              </p>
            </div>
          </motion.div>

          {/* Card - Manager */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transition flex flex-col sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-full sm:w-1/3 flex-shrink-0">
              <img
                src={thwayyibImg}
                alt="Mohammed Thwayyib"
                className="w-full h-64 sm:h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-1">Mohammed Thwayyib</h3>
              <p className="text-blue-600 font-medium mb-3">Manager</p>
              <p className="text-gray-700">
                Operations Manager overseeing day-to-day processes and client relations, ensuring efficient and timely service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working Team - 4 cards */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black-900 mb-8">Our Working Team</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: afzarImg, name: "Mohammed Afzar", role: "Graphic Designer", desc: "Creative designer handling visual content, banners, and promotional material for the center." },
            { img: jaleelImg, name: "Abdul Jaleel", role: "Banking Specialist", desc: "Expert in bank documentation and procedures — helps clients with bank-related paperwork and verifications." },
            { img: khaderImg, name: "Abdul Khader", role: "Document Expert", desc: "Handles document preparation, attestation, and verification to ensure accuracy and compliance." },
            { img: riyasImg, name: "Muhammed Riyas", role: "English / Arabic Translation Expert", desc: "Professional translator providing accurate English–Arabic translation for documents and communications." },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src={member.img} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-700 text-sm">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Details */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-gray-700 space-y-6">
        <h2 className="text-3xl font-bold text-center text-black-900 mb-6">Who We Are</h2>
        <p>
          Welcome to Al Sadiq Typing & Studio Center. We provide professional document preparation and administrative services for all our clients. Our goal is to make official processes, paperwork, and documentation hassle-free and convenient.
        </p>
        <p>
          Established in Qatar, our center has assisted hundreds of customers with visas, certificates, forms, and more. We combine experience with modern tools to ensure smooth, efficient service.
        </p>
        <p>
          Our team is dedicated, skilled, and always ready to help you with your document and administrative needs, providing support at every step.
        </p>
      </section>

      {/* Have Any Questions Section */}
      <section className="py-16 px-4 bg-blue-50 text-center rounded-lg max-w-6xl mx-auto mt-12 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-black-900">Have Any Questions?</h2>
        <p className="text-gray-700 mb-6 text-lg">
          We are here to help you with all your queries and provide professional guidance.
        </p>
        <p className="text-xl font-semibold flex justify-center items-center text-blue-700">
          <FaPhoneAlt className="mr-3 text-blue-600" /> +974-7727-2786
        </p>
      </section>
    </div>
  );
}
