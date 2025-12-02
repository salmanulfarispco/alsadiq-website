import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Column: About Us */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
                    <p className="text-gray-400 mb-4">
                        Our provides professional document preparation, visa assistance, translation, and administrative services to ensure smooth and hassle-free processes for all our clients in Qatar.
                    </p>

                </div>

                {/* Right Column: Links & Contact */}
                <div className="flex flex-col md:items-end">
                    <div className="mb-4 space-x-4">
                        <a href="/" className="hover:text-white transition">Home</a>
                        <a href="/about" className="hover:text-white transition">About</a>
                        <a href="/services" className="hover:text-white transition">Services</a>
                        <a href="/blog" className="hover:text-white transition">Blog</a>
                        <a href="/contact" className="hover:text-white transition">Contact</a>
                    </div>

                    <div className="mb-2 text-gray-400">
                        📞
                        +974-7727-2786
                        &nbsp; | &nbsp; ✉ alsadiqtypings@gmail.com
                    </div>
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} AlwadalSadiq. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
