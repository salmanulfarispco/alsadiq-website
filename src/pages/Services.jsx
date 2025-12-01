import React from "react";

// Import all your images
import typingImg from "../assets/12.jpg";
import printingImg from "../assets/application.jpg";
import documentImg from "../assets/BLS Registration.jpg";
import computerImg from "../assets/Certificate.jpg";
import Company from "../assets/Company Classification Certificate.jpg";
import Formation from "../assets/Company Formation.jpg";
import Contract from "../assets/Contract Baladiya Registration.jpg";
import CP from "../assets/CP Amendments.jpg";
import CR from "../assets/CR Amendments.jpg";
import Custom from "../assets/Custom.jpg";
import DataFLow from "../assets/DataFlow.jpg";
import Document from "../assets/Document Attestation.jpg";
import Event from "../assets/Events Approval.jpg";
import Health from "../assets/Health Card Renewal.jpg";
import Hukoomi from "../assets/HUKOOMI.jpg";
import Labour from "../assets/Labour Contract Attestation.jpg";
import License from "../assets/LICENSE discount.jpg";
import MOPH from "../assets/MOPH Appointmment.jpg";
import PanCard from "../assets/Pan Card.jpg";
import Passport from "../assets/Passport.jpg";
import PCC from "../assets/PCC Certificate.jpg";
import Pravasi from "../assets/Pravasi.jpg";
import profession from "../assets/profession change.jpg";
import Prometric from "../assets/Prometric.jpg";
import QCHP from "../assets/QCHP.jpg";
import Saudi from "../assets/Saudi.jpg";
import Signage from "../assets/Signage.jpg";
import Sponsor from "../assets/Sponsor.jpg";
import SponsorShip from "../assets/SponsorShip.jpg";
import studio from "../assets/studio.jpg";
import Tax from "../assets/TAX Card.jpg";
import Traffic from "../assets/Traffic Services.jpg";
import Translation from "../assets/TRANSLATION.jpg";
import UPDA from "../assets/UPDA.jpg";
import Vehicle from "../assets/Vehicle.jpg";
import visa from "../assets/visa.jpg";
import Waste from "../assets/Waste.jpg";
import work from "../assets/work.jpg";
import frame from '../assets/frame.jpg'
import printing from '../assets/printing.jpg'

export default function Services() {
  const services = [
    { title: "e-Migrate System", description: "A digital platform to manage employee migration, work permits, and labor approvals efficiently and securely.", image: typingImg },
    { title: "Application Forms", description: "Streamlined support for submitting application forms, whether online or offline, making processes fast and hassle-free.", image: printingImg },
    { title: "ILS/BLS Registration", description: "Professional ILS and BLS registration made easy. We guide you through documentation to certification", image: documentImg },
    { title: "Certificate Of equivalency", description: "We help you obtain Certificates of Equivalency quickly, ensuring your qualifications are officially recognized.", image: computerImg },
    { title: "Company Classification", description: "Get your company classified officially.", image: Company },
    { title: "Company Formation", description: "Complete process of company registration and formation.", image: Formation },
    { title: "Contract Registration", description: "Register Baladiya contracts efficiently.", image: Contract },
    { title: "CP Amendments", description: "Amend your Commercial Permits quickly.", image: CP },
    { title: "CR Amendments", description: "Update your Commercial Registration information.", image: CR },
    { title: "Custom Services", description: "Expert guidance for all customs procedures.", image: Custom },
    { title: "Data Flow Services", description: "Manage data flow certificates easily.", image: DataFLow },
    { title: "Document Attestation", description: "Official document attestation services.", image: Document },
    { title: "Event Approvals", description: "Get approvals for corporate and personal events.", image: Event },
    { title: "Health Card Renewal", description: "Renew your health cards hassle-free.", image: Health },
    { title: "Hukoomi Services", description: "Access government e-services with ease.", image: Hukoomi },
    { title: "Labour Contract Attestation", description: "Authenticate labour contracts legally.", image: Labour },
    { title: "License Discount", description: "Avail discounts on official licenses.", image: License },
    { title: "MOPH Appointments", description: "Book Ministry of Public Health appointments.", image: MOPH },
    { title: "PAN Card Services", description: "Apply and manage PAN cards.", image: PanCard },
    { title: "Passport Services", description: "Renew or apply for new passports easily.", image: Passport },
    { title: "PCC Certificate", description: "Obtain Police Clearance Certificates efficiently.", image: PCC },
    { title: "Pravasi Services", description: "Support for expatriates and their documents.", image: Pravasi },
    { title: "Profession Change", description: "Update your profession in official records.", image: profession },
    { title: "Prometric Exams", description: "Book and manage Prometric exams.", image: Prometric },
    { title: "QCHP Registration", description: "Healthcare professional licensing services.", image: QCHP },
    { title: "Saudi Services", description: "Documentation and services related to Saudi requirements.", image: Saudi },
    { title: "Signage Approvals", description: "Get approvals for your business signage.", image: Signage },
    { title: "Sponsor Services", description: "Manage sponsor documentation easily.", image: Sponsor },
    { title: "Sponsorship Services", description: "Complete sponsorship registration support.", image: SponsorShip },
    { title: "Photo Studio Services", description: "Professional studio photography services.", image: studio },
    { title: "Tax Card Services", description: "Apply or renew your tax card effortlessly.", image: Tax },
    { title: "Traffic Services", description: "Manage traffic-related documentation and approvals.", image: Traffic },
    { title: "Translation Services", description: "Certified document translation services.", image: Translation },
    { title: "UPDA Services", description: "Professional support for UPDA processes.", image: UPDA },
    { title: "Vehicle Services", description: "Vehicle registration, insurance, and documentation.", image: Vehicle },
    { title: "Visa Services", description: "Visa application, renewal, and support services.", image: visa },
    { title: "Waste Management", description: "Efficient waste management services.", image: Waste },
    { title: "Work Permit Services", description: "Apply for and manage work permits.", image: work },
    { title: "Frame works", description: "Custom Photo Framing – Designed to match your style and space.", image: frame},
    { title: "Photo Printing Services", description: "HD Photo Printing – High-quality prints with sharp, vibrant colors.", image: printing }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black">
        Our Services
      </h1>

      <p className="text-center text-gray-700 text-lg md:text-xl font-medium mb-8">
        Discover our wide range of professional services, crafted to meet every client’s needs with excellence and care.
      </p>

      <div className="flex justify-center mb-10">
        <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
            <div className="w-full bg-gray-100 flex justify-center items-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-h-48 object-contain transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-700 transition duration-300">
  Read More
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
