import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Feedback() {
  const feedbacks = [
    {
      name: "John Doe",
      role: "Customer",
      comment:
        "Excellent service! The team was professional and helpful throughout the process. Highly recommend to anyone seeking reliable solutions. Truly satisfied with the results.",
    },
    {
      name: "Jane Smith",
      role: "Client",
      comment:
        "Fast, reliable, and efficient service. The staff was very supportive and guided us at every step. Exceptional customer experience. Definitely coming back!",
    },
    {
      name: "Ahmed Khan",
      role: "Customer",
      comment:
        "Handled everything smoothly and accurately. Communication was clear and timely. The process was hassle-free. Very happy with the overall service.",
    },
    {
      name: "Sara Ali",
      role: "Client",
      comment:
        "Professional team with excellent support. They made everything easy to understand. Quick response to queries. I am extremely pleased with their help.",
    },
    {
      name: "Michael Lee",
      role: "Customer",
      comment:
        "Great experience from start to finish. The team is skilled and attentive. Process was smooth and fast. Highly recommend their services.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  // Limit each comment to 4 sentences/lines
  const processedFeedbacks = feedbacks.map((f) => ({
    ...f,
    comment: f.comment.split(". ").slice(0, 4).join(". ") + ".",
  }));

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto overflow-hidden relative">
        <motion.div
          className="flex gap-6 transition-transform duration-1000"
          animate={{
            x: `-${currentIndex * (100 / processedFeedbacks.length)}%`,
          }}
          style={{ width: `${processedFeedbacks.length * 25}%` }} // 4 cards per view
        >
          {processedFeedbacks.map((feedback, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 border border-gray-200 rounded-lg p-6 bg-white shadow-md"
            >
              <p className="text-gray-700 mb-4 italic">{feedback.comment}</p>
              <h3 className="font-semibold text-lg">{feedback.name}</h3>
              <span className="text-sm text-gray-500">{feedback.role}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
