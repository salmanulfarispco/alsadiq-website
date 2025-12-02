import React from "react";
import { useParams, Link } from "react-router-dom";

// Import all your images again (same as Services.jsx)
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
import DataFLow from "../assets/Dataflow.jpg";
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
import SponsorShip from "../assets/Sponsorship.jpg";
import studio from "../assets/studio.jpg";
import Tax from "../assets/TAX Card.jpg";
import Traffic from "../assets/Traffic Services.jpg";
import Translation from "../assets/TRANSLATION.jpg";
import UPDA from "../assets/UPDA.jpg";
import Vehicle from "../assets/Vehicle.jpg";
import visa from "../assets/visa.jpg";
import Waste from "../assets/Waste.jpg";
import work from "../assets/work.jpg";
import frame from "../assets/frame.jpg";
import printing from "../assets/printing.jpg";

export default function ServiceDetails() {
    const { id } = useParams();

    const services = [
        {
            id: 1,
            title: "e-Migrate System",
            description: `Manage all employee migration processes efficiently with e-Migrate System.  
This platform handles work permits, labor approvals, and document submissions securely.  
Save time by tracking approvals digitally without multiple visits.  
Our experts guide you to complete all procedures correctly.  
Perfect for companies and HR managers needing hassle-free migration management.`,
            requirements: `Required Documents: Passport copy, Employment contract, Company ID, Visa copy`,
            image: typingImg
        },
        {
            id: 2,
            title: "Application Forms",
            description: `Submit application forms for government and corporate services quickly.  
Our team ensures all forms are filled correctly and submitted on time.  
Available both online and offline for your convenience.  
Track the status of submitted applications easily through our platform.  
Avoid mistakes and delays with professional assistance.`,
            requirements: `Required Documents: ID copy, Supporting documents related to application`,
            image: printingImg
        },
        {
            id: 3,
            title: "ILS/BLS Registration",
            description: `Professional ILS and BLS certification made simple.  
We guide you through registration, document preparation, and submission.  
Get certified without facing procedural delays.  
Our team ensures compliance with all standards and requirements.  
Ideal for healthcare professionals needing quick registration.`,
            requirements: `Required Documents: Passport, Professional license, Training certificates`,
            image: documentImg
        },
        {
            id: 4,
            title: "Certificate Of Equivalency",
            description: `Obtain your Certificates of Equivalency quickly and officially.  
We handle verification, submission, and follow-up with educational authorities.  
Ensure your qualifications are recognized in your target country.  
Avoid delays or rejection with expert guidance.  
Fast, reliable, and fully compliant with official standards.`,
            requirements: `Required Documents: Original certificates, Transcripts, ID copy`,
            image: computerImg
        },
        {
            id: 5,
            title: "Company Classification",
            description: `Get your company officially classified for business compliance.  
We assist with the required documents, classification forms, and approvals.  
Ensure your company meets all legal requirements in Qatar.  
Professional guidance to avoid mistakes and rejections.  
Supports startups, SMEs, and large enterprises alike.`,
            requirements: `Required Documents: Trade license, Company ownership documents, ID`,
            image: Company
        },
        {
            id: 6,
            title: "Company Formation",
            description: `Complete company registration and formation made easy.  
Our team guides you through legal, documentation, and licensing procedures.  
Set up your business quickly and correctly.  
Avoid common mistakes and unnecessary delays.  
Supports all business types: LLC, Sole proprietorship, Branch offices.`,
            requirements: `Required Documents: Passport, ID, Business plan, NOC from sponsor`,
            image: Formation
        },
        {
            id: 7,
            title: "Contract Registration",
            description: `Register your Baladiya contracts without hassle.  
We handle submission, verification, and approvals from local authorities.  
Ensure contracts are legally binding and compliant.  
Our experts check documents to prevent errors.  
Quick process for both individuals and companies.`,
            requirements: `Required Documents: Contract copy, ID, Signatures of parties`,
            image: Contract
        },
        {
            id: 8,
            title: "CP Amendments",
            description: `Update or amend your Commercial Permits quickly and accurately.  
We guide you through all required procedures and documentation.  
Avoid delays and fines with proper amendment submissions.  
Our team ensures all changes comply with government regulations.  
Suitable for business owners needing permit updates.`,
            requirements: `Required Documents: Existing CP, ID copy, Relevant amendment forms`,
            image: CP
        },
        {
            id: 9,
            title: "CR Amendments",
            description: `Modify your Commercial Registration details professionally.  
We handle document preparation, submission, and follow-up.  
Ensure all changes are recognized officially without delays.  
Avoid rejection due to incorrect paperwork.  
Perfect for businesses needing updates to their CR details.`,
            requirements: `Required Documents: Existing CR, Updated company documents, ID`,
            image: CR
        },
        {
            id: 10,
            title: "Custom Services",
            description: `Expert assistance for all customs procedures.  
We provide guidance for import, export, and customs clearance.  
Avoid fines and delays with proper documentation.  
Our team ensures compliance with Qatar customs regulations.  
Fast, efficient, and reliable support for businesses and individuals.`,
            requirements: `Required Documents: Commercial invoice, Packing list, ID copy, Import/export license`,
            image: Custom
        },
        {
            id: 11,
            title: "Data Flow Services",
            description: `Manage Data Flow Certificates easily with our expert guidance.  
We assist in submission, verification, and follow-up with authorities.  
Ensure timely approval without errors.  
Ideal for healthcare professionals needing licensing verification.  
We handle both corporate and individual requests.`,
            requirements: `Required Documents: Degree certificate, License copy, Passport`,
            image: DataFLow
        },
        {
            id: 12,
            title: "Document Attestation",
            description: `Official attestation for personal and corporate documents.  
We handle embassy, government, and ministry attestation efficiently.  
Ensure all your documents are legally recognized abroad.  
Our experts verify every step to avoid delays.  
Quick and reliable service for certificates, contracts, and licenses.`,
            requirements: `Required Documents: Original document, Passport copy, ID`,
            image: Document
        },
        {
            id: 13,
            title: "Event Approvals",
            description: `Get approvals for corporate or private events in Qatar.  
We assist in document submission and compliance checks.  
Ensure all safety and legal requirements are met.  
Our team communicates with authorities on your behalf.  
Perfect for weddings, corporate events, and exhibitions.`,
            requirements: `Required Documents: Event proposal, Venue approval, ID copy`,
            image: Event
        },
        {
            id: 14,
            title: "Health Card Renewal",
            description: `Renew your Qatar health card hassle-free.  
We guide you through submission, medical checks, and verification.  
Avoid queues and long delays at health centers.  
Our team ensures all documents meet MoPH requirements.  
Perfect for employees and residents needing fast renewals.`,
            requirements: `Required Documents: Existing health card, Passport, ID copy, Medical test reports`,
            image: Health
        },
        {
            id: 15,
            title: "Hukoomi Services",
            description: `Access Qatar e-government services easily with our support.  
We guide you in online applications, renewals, and approvals.  
Save time and avoid mistakes in submitting documents digitally.  
Our team ensures full compliance with official regulations.  
Perfect for residents needing government services online.`,
            requirements: `Required Documents: ID copy, Passport, Service-specific forms`,
            image: Hukoomi
        },
        {
            id: 16,
            title: "Labour Contract Attestation",
            description: `Authenticate your labor contracts legally and officially.  
We handle submission, verification, and stamping with authorities.  
Avoid legal issues by ensuring contracts are attested correctly.  
Our experts guide you step-by-step.  
Essential for employees, companies, and freelancers.`,
            requirements: `Required Documents: Employment contract, Passport copy, Company ID`,
            image: Labour
        },
        {
            id: 17,
            title: "License Discount",
            description: `Avail discounts on government-issued licenses.  
We guide you through eligibility, submission, and approvals.  
Save money while ensuring all licenses are valid and legal.  
Our team ensures quick processing and verification.  
Suitable for business owners renewing multiple licenses.`,
            requirements: `Required Documents: Existing license, ID copy, Business documents`,
            image: License
        },
        {
            id: 18,
            title: "MOPH Appointments",
            description: `Book Ministry of Public Health appointments easily.  
We handle scheduling, submission of documents, and reminders.  
Avoid long waits and missed appointments.  
Our team ensures your documents meet all requirements.  
Perfect for visa medicals, professional licensing, and renewals.`,
            requirements: `Required Documents: Passport, ID copy, Medical forms`,
            image: MOPH
        },
        {
            id: 19,
            title: "PAN Card Services",
            description: `Apply for or manage your PAN cards efficiently.  
We guide you through submission, documentation, and verification.  
Avoid errors that could delay processing.  
Our experts ensure compliance with all government rules.  
Suitable for NRIs, business owners, and employees.`,
            requirements: `Required Documents: Passport, ID proof, Address proof`,
            image: PanCard
        },
        {
            id: 20,
            title: "Passport Services",
            description: `Renew or apply for new passports with professional help.  
We handle forms, documentation, and submission efficiently.  
Track the process until delivery without hassle.  
Avoid errors and delays with our step-by-step guidance.  
Perfect for residents needing fast and reliable service.`,
            requirements: `Required Documents: Passport copy, ID, Photographs, Old passport if renewing`,
            image: Passport
        },
        {
            id: 21,
            title: "PCC Certificate",
            description: `Obtain Police Clearance Certificates quickly and reliably.  
We guide you through forms, verification, and approvals.  
Ensure all your documents meet legal requirements.  
Our team tracks progress to avoid delays.  
Suitable for visa, employment, or residency purposes.`,
            requirements: `Required Documents: Passport copy, ID, Fingerprints (if required)`,
            image: PCC
        },
        {
            id: 22,
            title: "Pravasi Services",
            description: `Support for expatriates in documentation and approvals.  
We handle visa, legal, and government-related requirements.  
Save time and avoid mistakes in official processes.  
Our team ensures full compliance with Qatar regulations.  
Perfect for NRIs and expats needing professional guidance.`,
            requirements: `Required Documents: Passport, ID, Visa copy, Relevant certificates`,
            image: Pravasi
        },
        {
            id: 23,
            title: "Profession Change",
            description: `Update your profession in official records seamlessly.  
We guide you through required forms, approvals, and submissions.  
Avoid rejection due to incomplete documentation.  
Our team ensures changes are updated with relevant authorities.  
Perfect for employees needing official profession updates.`,
            requirements: `Required Documents: Employment contract, Passport, Current work permit`,
            image: profession
        },
        {
            id: 24,
            title: "Prometric Exams",
            description: `Book and manage Prometric exams with ease.  
We handle registration, document verification, and scheduling.  
Ensure eligibility and avoid delays in booking exams.  
Our experts provide guidance for required documents.  
Ideal for professionals preparing for licensing exams.`,
            requirements: `Required Documents: Passport, Qualification certificates, ID copy`,
            image: Prometric
        },
        {
            id: 25,
            title: "QCHP Registration",
            description: `Obtain Qatar Council for Healthcare Practitioners registration.  
We manage document submission, verification, and approvals.  
Ensure compliance with all professional and legal standards.  
Our team tracks progress and updates you on completion.  
Perfect for healthcare professionals entering Qatar.`,
            requirements: `Required Documents: Degree certificate, License, Passport, Experience letters`,
            image: QCHP
        },
        {
            id: 26,
            title: "Saudi Services",
            description: `Professional assistance for Saudi-related documentation and approvals.  
We guide you through embassy, legal, and licensing requirements.  
Avoid delays and legal issues with proper documentation.  
Our team provides complete support from start to finish.  
Ideal for individuals or companies needing Saudi services.`,
            requirements: `Required Documents: Passport, Visa, Relevant official letters, ID copy`,
            image: Saudi
        },
        {
            id: 27,
            title: "Signage Approvals",
            description: `Get official approvals for your business signage.  
We handle submission, verification, and government approvals.  
Ensure compliance with safety and regulatory requirements.  
Avoid fines and rejections with our professional guidance.  
Perfect for shops, offices, and commercial establishments.`,
            requirements: `Required Documents: Signage design, Property documents, ID copy`,
            image: Signage
        },
        {
            id: 28,
            title: "Sponsor Services",
            description: `Manage all sponsor-related documentation with ease.  
We assist in approvals, renewals, and compliance checks.  
Ensure legal sponsorship without delays.  
Our team guides you step-by-step through official procedures.  
Ideal for companies and individuals dealing with sponsorship matters.`,
            requirements: `Required Documents: Sponsor ID, Passport copy, Employment documents`,
            image: Sponsor
        },
        {
            id: 29,
            title: "Sponsorship Services",
            description: `Complete support for sponsorship registration and transfers.  
We handle government submissions, documentation, and approvals.  
Ensure compliance with Qatar labor laws and regulations.  
Avoid delays or penalties with our professional assistance.  
Suitable for businesses and individuals managing sponsorships.`,
            requirements: `Required Documents: Sponsor and employee IDs, Passport, Contracts`,
            image: SponsorShip
        },
        {
            id: 30,
            title: "Photo Studio Services",
            description: `Professional photography services for personal and official needs.  
We offer studio sessions, passport photos, and event photography.  
High-quality images with modern equipment and professional editing.  
Flexible timings and packages to suit your requirements.  
Perfect for documents, portfolios, and special occasions.`,
            requirements: `Required Documents: ID (for official photos), Appointment confirmation`,
            image: studio
        },
        {
            id: 31,
            title: "Tax Card Services",
            description: `Apply or renew your tax card quickly and legally.  
We handle forms, submissions, and follow-up with authorities.  
Ensure compliance with Qatar taxation rules.  
Avoid errors and rejections with our guidance.  
Suitable for employees, businesses, and freelancers.`,
            requirements: `Required Documents: Passport, ID, Previous tax card (if applicable)`,
            image: Tax
        },
        {
            id: 32,
            title: "Traffic Services",
            description: `Manage traffic-related documentation, fines, and approvals.  
We provide guidance for driving license, vehicle registration, and permits.  
Ensure legal compliance and avoid penalties.  
Our team assists with submission and tracking.  
Perfect for residents needing hassle-free traffic services.`,
            requirements: `Required Documents: Passport, Vehicle documents, Driving license`,
            image: Traffic
        },
        {
            id: 33,
            title: "Translation Services",
            description: `Certified translation for official and personal documents.  
We provide accurate translations in multiple languages.  
Ensure legal validity and recognition for government and corporate use.  
Fast, professional, and reliable service.  
Ideal for contracts, certificates, and academic documents.`,
            requirements: `Required Documents: Original documents, ID copy, Language specification`,
            image: Translation
        },
        {
            id: 34,
            title: "UPDA Services",
            description: `Professional support for Urban Planning and Development Authority processes.  
We assist with permits, approvals, and documentation.  
Ensure compliance with regulations and avoid fines.  
Our team provides end-to-end assistance.  
Perfect for construction, renovation, and property development.`,
            requirements: `Required Documents: Property documents, ID, Project plan`,
            image: UPDA
        },
        {
            id: 35,
            title: "Vehicle Services",
            description: `All-in-one support for vehicle registration, insurance, and documentation.  
We handle renewals, transfers, and approvals with authorities.  
Avoid fines and delays with accurate submissions.  
Our experts guide you through every step.  
Suitable for residents and businesses managing vehicles.`,
            requirements: `Required Documents: Vehicle registration, Insurance papers, Passport, ID`,
            image: Vehicle
        },
        {
            id: 36,
            title: "Visa Services",
            description: `Apply, renew, or manage visas easily with our support.  
We handle documentation, approvals, and follow-up with authorities.  
Ensure compliance with Qatar immigration laws.  
Avoid errors and delays in your visa process.  
Ideal for residents, employees, and travelers.`,
            requirements: `Required Documents: Passport, ID, Sponsorship documents, Previous visa`,
            image: visa
        },
        {
            id: 37,
            title: "Waste Management",
            description: `Efficient waste management services for businesses and homes.  
We provide collection, disposal, and recycling support.  
Ensure compliance with Qatar environmental regulations.  
Professional, timely, and eco-friendly solutions.  
Perfect for residential and commercial waste management needs.`,
            requirements: `Required Documents: Property details, Waste type information, ID copy`,
            image: Waste
        },
        {
            id: 38,
            title: "Work Permit Services",
            description: `Apply for and manage work permits with professional guidance.  
We handle documentation, submissions, and approvals.  
Ensure compliance with labor laws to avoid penalties.  
Fast and reliable service for employees and employers.  
Perfect for residents needing legal authorization to work in Qatar.`,
            requirements: `Required Documents: Passport, Employment contract, Sponsor ID, ID copy`,
            image: work
        },
        {
            id: 39,
            title: "Frame Works",
            description: `Custom photo framing services to enhance your space.  
We offer personalized designs, quality materials, and expert installation.  
Perfect for personal, office, or gallery displays.  
Our team ensures frames match your style and décor.  
High-quality and durable framing solutions for all needs.`,
            requirements: `Required Documents: Photo/image file, Size specifications, Design preference`,
            image: frame
        },
        {
            id: 40,
            title: "Photo Printing Services",
            description: `HD photo printing with sharp and vibrant colors.  
We provide various sizes, paper types, and finishes for prints.  
Ideal for personal memories, documents, and professional portfolios.  
Fast and reliable service with attention to detail.  
Perfect for home, office, and event printing needs.`,
            requirements: `Required Documents: Photo/image file, Size preference, Paper type preference`,
            image: printing
        },
    ];
    const service = services.find((item) => item.id === Number(id));

    if (!service)
        return <h2 className="text-center mt-10 text-red-600 text-xl">Service Not Found</h2>;

    return (
        <div className="min-h-screen p-6 md:p-12 bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
                {/* Service Image */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-contain mb-6 rounded-lg shadow-sm"
                />

                {/* Service Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {service.title}
                </h1>

                {/* Service Description */}
                <p className="text-gray-700 text-lg md:text-xl mb-6 whitespace-pre-line">
                    {service.description}
                </p>

                {/* Required Documents */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Required Documents:
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg whitespace-pre-line">
                        {service.requirements}
                    </p>
                </div>

                {/* Back Button */}
                <Link
                    to="/services"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                    Back to Services
                </Link>
            </div>
        </div>
    );
}