import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-12 text-center text-blue-900">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Left Column: Address & Map */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Address</h2>
          <p className="flex items-start text-gray-700">
            <FaMapMarkerAlt className="mr-3 mt-1 text-blue-600" />
            <span>
              Al Sadiq Services,Building Number 138, Ain Khaled Street, Zone 56 Doha, Qatar
            </span>
          </p>

          {/* Embedded Google Map */}
          <div className="w-full h-64 mt-4 rounded overflow-hidden shadow">
            <iframe
              title="Sadiq Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.229725486146!2d51.44769361500001!3d25.224201183890538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d1a1264cdc39%3A0x12cb9e8222accb36!2sSadiq%20Services!5e0!3m2!1sen!2sqa!4v1701383266345!5m2!1sen!2sqa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Get in Touch</h2>
          <p className="flex items-center text-gray-700">
            <FaPhoneAlt className="mr-3 text-blue-600" /> +974‑3116-9313
          </p>
          <p className="flex items-center text-gray-700">
            <FaWhatsapp className="mr-3 text-green-500" /> +974‑7727-2786
          </p>
          <p className="flex items-center text-gray-700">
            <FaEnvelope className="mr-3 text-red-500" /> alsadiqtypings@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}