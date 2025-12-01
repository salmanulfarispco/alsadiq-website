import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // en or ar

  // Working hours for TopBar
  const schedules = [
    { day: "Sat - Wed", time: "7:30 AM - 10:00 PM" },
    { day: "Thursday", time: "7:30 AM - 8:00 PM" },
    { day: "Friday", time: "4:00 PM - 8:00 PM" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % schedules.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: { en: "Home", ar: "الرئيسية" }, path: "/" },
    { name: { en: "About", ar: "حول" }, path: "/about" },
    { name: { en: "Services", ar: "الخدمات" }, path: "/services" },
    { name: { en: "Blog", ar: "مدونة" }, path: "/blog" },
    { name: { en: "Contact", ar: "اتصل بنا" }, path: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
    document.documentElement.dir = language === "en" ? "rtl" : "ltr";
  };

  return (
    <header className="relative z-20">
      {/* TopBar */}
      <div className="bg-[#001F3F] text-white text-sm font-medium font-sans flex flex-wrap md:flex-nowrap justify-between items-center px-4 py-2">
        {/* Left Section: Contact + Language */}
        <div className="flex flex-wrap md:flex-nowrap items-center space-x-3 md:space-x-5 text-sm">
          {/* Phone */}
          <a
            href="tel:+97431169313"
            className="flex items-center space-x-1 hover:text-green-400 transition-colors duration-300"
          >
            📞 <span>+974-7727-2786</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9743116-9313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-green-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.913 11.913 0 0012 0C5.372 0 0 5.373 0 12c0 2.12.555 4.084 1.52 5.78L0 24l6.52-1.52A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12 0-3.22-1.27-6.21-3.48-8.52zM12 22c-1.9 0-3.72-.52-5.26-1.48l-.38-.23-3.87.9.92-3.77-.25-.39C2.54 15.7 2 13.87 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.19-7.68c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.33-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.46-.16 0-.35-.02-.54-.02s-.48.07-.73.33c-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.1-.25-.16-.52-.3z" />
            </svg>
            <span>+974‑7727-2786</span>
          </a>

          {/* Email */}
          <div className="flex items-center space-x-1">
            ✉ <span>alsadiqtypings@gmail.com</span>
          </div>

          {/* Language Toggle */}
         
            {/* Sliding Circle */}
        
            {/* Labels */}
           
          
        </div>

        {/* Right Section: Rotating Working Hours */}
        <div className="flex flex-col md:text-right w-full md:w-64 relative h-6 mt-1 md:mt-0 overflow-hidden text-sm">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" px-3 py-1 rounded text-center md:text-right"
            >
              <span className="font-semibold">{schedules[current].day}:</span>{" "}
              {schedules[current].time}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white text-black shadow-md relative z-20">
        <div className="max-w-full mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-24 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <li key={link.name.en}>
                <Link
                  to={link.path}
                  className={`text-lg font-medium hover:text-green-400 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-green-400 font-semibold"
                      : ""
                  }`}
                >
                  {link.name[language]}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white text-black space-y-2 px-4 pb-4">
            {links.map((link) => (
              <li key={link.name.en}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-2 rounded hover:bg-gray-200 transition-colors ${
                    location.pathname === link.path
                      ? "bg-gray-200 font-semibold"
                      : ""
                  }`}
                >
                  {link.name[language]}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
