import Footer from "../components/Footer";
import bannerImg from "../assets/arabic.jpg"; // <-- your hero image
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import Services from "../pages/Services";
import Feedback from '../pages/Feedback';
import Blog from '../pages/Blog';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">

                {/* Hero / Banner with Image */}
                <section
                    className="relative text-white text-center py-24 px-4 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerImg})`,
                    }}
                >
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional Typing & Studio Center in Qatar
                        </h1>

                        <p className="text-lg mb-6">
                            Visa services, document typing, photo studio & more — all under one roof.
                        </p>

<button
  className="
    px-4 py-2 rounded-lg font-semibold 
    bg-gradient-to-r from-blue-500 to-blue-700 
    text-white 
    transition-all duration-300 
    hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-800
  "
>
  Explore More
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="white"
    className="w-4 h-4 inline ml-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

                    </div>
                </section>

                {/* Mission & Vision / About‑Style Section */}
                <section className="py-16 px-4 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Mission & Vision</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Mission Box */}
                        <div
                            className="relative text-white text-left h-80 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end p-6 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${missionImg})`,
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-2">Mission</h3>
                            <p className="bg-black/50 p-3 rounded text-sm">
                                Al Sadiq is dedicated to providing the highest quality of services to its clients. Our mission is to provide smooth, transparent, professional and reliable services that meet the needs of our customers. We strive to deliver exceptional customer service, while maintaining a commitment to excellence in all aspects of our operations. We provide a wide spectrum of services that suits every demand of our clients that they can get with unmatchable hassle‑free experience.
                            </p>
                        </div>

                        {/* Vision Box */}
                        <div
                            className="relative text-white text-left h-80 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end p-6 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${visionImg})`,
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                            <p className="bg-black/50 p-3 rounded text-sm">
                                Al Sadiq evolved with the vision to empower aspiring people to position themselves in the global landscape. The company’s vision is to make the process of obtaining visas more efficient and streamlined, while also ensuring that all customers have access to the highest quality of service possible. By providing excellent customer service, we aim to create a positive experience for all our clients and ensure that their needs are met.Empowering global talents
                            </p>
                        </div>
                    </div>
                    
                </section>
                 {/* Services Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          
          <Services />
          {/* Feedback Section */}
  <Feedback />
  <Blog/>
        </section>

            </main>

            <Footer />
        </div>
    );
}
