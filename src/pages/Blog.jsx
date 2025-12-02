import React from "react";

// Replace these with your actual blog images
import typingBlog from "../assets/typing-blog.jpg";
import documentsBlog from "../assets/documents-blog.jpg";
import visaBlog from "../assets/visa-blog.jpg";

export default function Blog() {
  const blogs = [
    {
      title: "Importance of a Typing Center",
      date: "Nov 15, 2025",
      summary:
        " A typing center makes official paperwork easy by helping with forms, visas, translations, and document services quickly and correctly. It ensures accuracy, saves time, and guides clients through all administrative processes efficiently. Their services help avoid mistakes and make official procedures hassle-free. With expert assistance, clients can complete tasks smoothly, and all documents are handled professionally and reliably.",
      image: typingBlog,
      category: "Online Form Services",
    },
    {
      title: "Importance of Attestation & Translation Services in Qatar",
      date: "Nov 10, 2025",
      summary:
      "Attestation and translation services are important in Qatar because they make your documents officially valid and accepted by government offices, embassies, and companies. Proper attestation confirms authenticity, while accurate translation ensures your paperwork is clear, correct, and ready for any legal or professional process.",
      image: documentsBlog,
      category: "Attestation",
    },
    {
      title: "Various Types of Visas in Qatar",
      date: "Nov 5, 2025",
      summary:
        "Explore the different visa types available in Qatar and understand the specific requirements for each category. Our services guide you through the application process, ensuring all documents are correctly prepared and submitted for a smooth and hassle-free experience. We help clients avoid common errors and provide expert advice at every step.",
      image: visaBlog,
      category: "Visa Info",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black-900">
        Our Blog
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Centered Image */}
            <div className="flex justify-center items-center overflow-hidden h-48 bg-gray-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover object-center w-full h-full transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-sm text-blue-600 font-semibold mb-2">
                {blog.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
              <p className="text-gray-700 flex-1">{blog.summary}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
