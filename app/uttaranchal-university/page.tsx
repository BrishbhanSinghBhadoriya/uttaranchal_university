"use client";

import { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import AccreditationSlider from "../components/AccreditationSlider";

// ── Types ──────────────────────────────────────────────────────────────
interface Program {
  title: string;
  eligibility: string;
  fullform: string;
  duration: string;
  fee: string;
  type: "UG" | "PG";
  image: string;
}

interface AdmissionStep {
  title: string;
  description: string;
}
type Feature = {
  type: "card" | "highlight";
  img?: string;
  title?: string;
  points: string[];
  desc?: string;
};


interface Advantage {
  text: string;
}

interface NavTab {
  label: string;
}

// ── Data (Uttaranchal) ─────────────────────────────────────────────────

const navTabs: NavTab[] = [
  { label: "MBA" },
  { label: "MCA" },
  { label: "BBA" },
  { label: "BCA" },
  { label: "BA" },
];

const accreditations = [
  { name: "NIRF Ranking (National Institutional Ranking Framework)", img: "/rank-nirf.png" },
  { name: "UGC- Uttaranchal has been awarded Graded Autonomy by UGC", img: "/rank-ugc.png" },
  { name: "AICTE Approved (All India Council for Technical Education)", img: "/rank-aicte.png" },
  { name: "QS World University Ranking", img: "/rank-qs.png" },
];

// Duplicate for seamless infinite loop
const items = [...accreditations, ...accreditations, ...accreditations];

const features: Feature[] = [
  {
    type: "card",
    img: "/Build.png",
    title: "Comprehensive Curriculum",
    points: [
      "Earn a degree with a future ready Electives in various UG & PG Degrees.",
      "Industry Ready & Job-Oriented Curriculum.",
    ],
  },
  {
    type: "card",
    img: "/Academic.png",
    title: "World Class Faculty and Industry experts",
    points: [
      "Learn from experienced faculty in interactive online sessions.",
      "Become industry-ready with mentorship from experts.",
    ],
  },
  {
    type: "card",
    img: "/Holistic.png",
    title: "Dedicated Career Assistance",
    points: [
      "Job opportunities shared by 2000+ companies.",
      "Career workshops, resume building and interview preparation sessions.",
    ],
  },
];

const advantages: Advantage[] = [
  { text: "UGC-Entitled & NAAC Accredited" },
  { text: "Degree from a Globally Ranked University" },
  { text: "Recognised & Accepted in India and Abroad" },
  { text: "Equivalent to Uttaranchal University's On-Campus Programs" },
];

const programs: Program[] = [
  // PG
  {
    title: "MBA",
    fullform: "Master of Business Administration",
    eligibility: "Bachelor's Degree",
    duration: "2 Years",
    fee: "₹ 23,500/Semester",
    type: "PG",
    image: "/MBA1.webp",
  },
  {
    title: "MCA",
    fullform: "Master of Computer Applications",
    eligibility: "Bachelor's Degree",
    duration: "2 Years",
    fee: "₹ 23,500/Semester",
    type: "PG",
    image: "/MCA.webp",
  },
  // UG
  {
    title: "BBA",
    fullform: "Bachelor of Business Administration",
    eligibility: "10+2 Pass Out",
    duration: "3 Years",
    fee: "₹ 15,000/Semester",
    type: "UG",
    image: "/BBA.webp",
  },
  {
    title: "BCA",
    fullform: "Bachelor of Computer Applications",
    eligibility: "10+2 Pass Out",
    duration: "3 Years",
    fee: "₹ 15,000/Semester",
    type: "UG",
    image: "/BCA.webp",
  },
  {
    title: "BA",
    fullform: "Bachelor of Arts",
    eligibility: "10+2 Pass Out",
    duration: "3 Years",
    fee: "₹ 15,000/Semester",
    type: "UG",
    image: "/BA.webp",
  },
];

const tabs = ["All Courses", "UG Courses", "PG Courses"];

const steps: AdmissionStep[] = [
  {
    title: "Choose the Online Degree Program",
    description:
      "Choose the Online Degree Program of your Choice by filling the Application form.",
  },
  {
    title: "Talk to our Counselors",
    description:
      "Talk to our Counselors to get detailed information about the program.",
  },
  {
    title: "Fill the Form",
    description: "Fill the form, Submit the fees and required documents.",
  },
  {
    title: "Get Access to Learning",
    description:
      "Get access to Your Learning Management System and start learning.",
  },
];

const companies = [
  { name: "ISDC", img: "/collab-logo-1.jpg" },
  { name: "ACCA", img: "/collab-logo-2.jpg" },
  { name: "ARTECH", img: "/ibm-logo-2.png" },
  { name: "IBM", img: "/collab-logo-4.jpg" },
  { name: "", img: "/collab-logo-5.jpg" },
  { name: "", img: "/collab-logo-6.jpg" },
];

// Duplicate for seamless infinite loop
const doubled = [...companies, ...companies];

const topQueries: string[] = [
 "uttaranchal university online mba",
 "uttaranchal university online mca",
 "uttaranchal distance mba fees",
 "uttaranchal online courses fees",
 "uttaranchal university distance education admission",
 "uttaranchal online degree courses",
 "uttaranchal university online admission process",
 "uttaranchal university online programs list",
 "uttaranchal university mba online fees structure",
 "uttaranchal university mca online fees",
 "uttaranchal university distance education courses list",
 "uttaranchal university online ug courses",
 "uttaranchal university online pg courses",
 "uttaranchal university online application form",
 "uttaranchal university distance education india",
 "uttaranchal university online mba eligibility",
 "uttaranchal university online mca eligibility",
 "uttaranchal university online learning portal",
 "uttaranchal university distance education contact details",
 "uttaranchal university online course duration",
 "uttaranchal university online certification courses",
 "uttaranchal university online admission last date",
 "uttaranchal university online course approval",
 "uttaranchal university online degree valid or not",   
"uttaranchal university distance education review",
"uttaranchal university online mba placement",
"uttaranchal university online mca syllabus",
"uttaranchal university online mba syllabus",
"uttaranchal university online education benefits",
"uttaranchal university online study material",
"uttaranchal university online exam pattern",
];

// ── Main Component ──────────────────────────────────────────────────────
export default function UttaranchalOnlinePage() {
  const [activeTab, setActiveTab] = useState<string>("All Courses");
  const [enquiryOpen, setEnquiryOpen] = useState<boolean>(false);
  const [enquiryProgram, setEnquiryProgram] = useState<string | null>(null);
  const [enquirySource, setEnquirySource] = useState<string | null>(null);
   
useEffect(() => {
  const timer = setTimeout(() => {
    setEnquiryProgram(null);
    setEnquiryOpen(true);
  }, 3000);
  return () => clearTimeout(timer);
}, []);
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ source?: string }>;
      if (custom?.detail?.source) setEnquirySource(custom.detail.source);
      setEnquiryProgram(null);
      setEnquiryOpen(true);
    };
    const w: EventTarget = window;
    w.addEventListener("request-enquiry", handler as EventListener);
    return () => {
      w.removeEventListener("request-enquiry", handler as EventListener);
    };
  }, []);

  const filteredPrograms = programs.filter((p) => {
    if (activeTab === "All Courses") return true;
    if (activeTab === "UG Courses") return p.type === "UG";
    if (activeTab === "PG Courses") return p.type === "PG";
    return true;
  });
  
  const [expandedCols, setExpandedCols] = useState<{ [k: number]: boolean }>({});
  function chunk<T>(arr: T[], parts: number): T[][] {
    const out: T[][] = [];
    const size = Math.ceil(arr.length / parts);
    for (let i = 0; i < parts; i++) {
      out.push(arr.slice(i * size, (i + 1) * size));
    }
    return out;
  }
  const queryColumns = chunk(topQueries, 3);
  function toggleCol(i: number) {
    setExpandedCols((s) => ({ ...s, [i]: !s[i] }));
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ─── NAVBAR ─────────────────────────────────────────────────────── */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Uttaranchal University Logo"
              className="h-15 w-auto object-contain"
            />
          </div>

          {/* Button */}
          <button
            onClick={() => {
              setEnquiryProgram(null);
              setEnquiryOpen(true);
            }}
            className="bg-red-600 hover:bg-red-600 text-white px-3 py-2 rounded-md text-base md:text-lg transition-all shadow-md"
          >
            Enroll Now
          </button>
        </div>
      </nav>

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-blue-100 pt-12 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center w-full">
          {/* Left */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-red-600 leading-tight mb-3">
              Uttaranchal University <strong className="text-blue-500">Online Programs</strong> <br />
            </h1>
<p className="text-black text-base md:text-2xl mb-5 leading-relaxed">
             Get a Degree from Uttaranchal Online University
            </p>

       <p className="text-black text-sm md:text-1xl mb-5 leading-relaxed">
            Online Degree | Online Exams | 100% Placement Assistance
            </p>     
            {/* Mobile hero image centered between text and buttons */}
            <div className="my-4 md:hidden">
              <img
                src="/hero-banner.jpg"
                alt="Uttaranchal Campus"
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>

            
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => {
                  setEnquiryProgram(null);
                  setEnquiryOpen(true);
                }}
                className="bg-red-600 hover:bg-red-600 text-white  px-5 py-2.5 rounded-md text-base md:text-1xl transition-all"
              >
                Download Brochure
              </button>
              <button
                onClick={() => {
                  setEnquiryProgram(null);
                  setEnquiryOpen(true);
                }}
                className="bg-red-500 hover:bg-red-600 text-white  px-5 py-2.5 rounded-md text-base md:text-xl transition-all"
              >
                Apply Now
              </button>
            </div>

            {/* Countdown */}
            <div className="inline-flex items-center gap-2 bg-blue-1 px-4 py-2">
              <span className="text-red-600  text-2xl md:text-2xl">
                Admission Closing Soon
              </span>
            </div>
          </div>

          {/* Right – building image (desktop only) */}
          <div className="relative hidden md:block">
            <div className="overflow-hidden shadow-2xl">
              <img
                src="/hero-banner.jpg"
                alt="Uttaranchal Campus"
                className="w-full h-[22rem] md:h-[30rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCREDITATIONS ─────────────────────────────────────────────── */}
      {/* Accreditation Slider Section */}
<section className="bg-white py-14 md:py-20 border-y border-gray-200">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-16">

    {/* Heading */}
    <h2 className="text-center text-black 
      text-xl sm:text-2xl md:text-4xl lg:text-5xl 
      font-black uppercase tracking-wide md:tracking-widest 
      mb-3 md:mb-4">
      Uttaranchal University Online
    </h2>

    {/* Sub text */}
    <p className="text-center text-gray-700 
      text-sm sm:text-base md:text-lg lg:text-xl 
      font-bold 
      mt-1 md:mt-2 mb-10 md:mb-14">
      How about getting a degree from the top ranked university?
    </p>

    <AccreditationSlider />

  </div>
</section>

      {/* ─── WHY UTTARANCHAL ONLINE ─────────────────────────────────────── */}
    <section id="about" className="py-16 bg-[#dce9f5]">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-10">

    {/* Logo */}
    <div className="flex justify-center mb-4">
      <img
        src="/logo.png"
        alt="Uttaranchal University Logo"
        className="h-16 w-auto object-contain"
      />
    </div>

    {/* Heading */}
    <p className="text-center text-gray-800 text-base md:text-2xl font-medium mb-12">
      Reasons to Pursue Online Degree from Uttaranchal Online
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {features.map((f) => (
        <div
          key={f.title}
          className="bg-white rounded-2xl p-7 flex flex-col h-full shadow-sm"
        >
          {/* Top Row: Icon + Title */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src={f.img}
              alt={f.title}
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <h3 className="text-xl font-semibold text-gray-800 leading-snug">
              {f.title}
            </h3>
          </div>

          {/* Checklist Points */}
          <ul className="space-y-4 flex-grow mb-6">
            {f.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {/* Green Checkmark */}
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Red Button */}
          <button
            onClick={() => {
              setEnquiryProgram(null);
              setEnquiryOpen(true);
            }}
            className="mt-auto bg-red-600 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition w-full text-base"
          >
            Know More
          </button>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ─── ONLINE PROGRAMS ADVANTAGES ─────────────────────────────────── */}
      <section className="py-12 bg-blue-400">
  <div className="max-w-screen-2xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

    {/* Certificate Image */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/online-degree-sample-format.jpg"
        alt="Uttaranchal Degree Certificate"
        className="w-full max-w-xl h-auto object-contain shadow-2xl rounded-md border border-blue-300"
      />
    </div>

    {/* Advantages List */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Earn a UGC-Entitled, Globally Recognized Degree
      </h2>

      <p className="text-blue-100 text-lg md:text-2xl mb-6 font-semibold">
        with Uttaranchal University Online!
      </p>

      {/* LIST */}
      <ul className="
        space-y-4
        list-disc pl-6            /* ✅ Mobile bullets */
        md:list-none md:pl-6      /* Desktop remove bullets */
        md:border-l-2 md:border-blue-200
      ">
        {advantages.map((a, i) => (
          <li key={i} className="text-white text-lg md:text-2xl leading-relaxed">
            {a.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      {/* ─── PROGRAMS GRID ──────────────────────────────────────────────── */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-2">
            Online Master&apos;s &amp; Bachelor&apos;s Program
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            UGC entitled degrees. Industry recognized. 100% online.
          </p>

          {/* Filter Tabs */}
          <div className="flex gap-3 justify-center mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5  text-sm font-bold transition-all border ${
                  activeTab === tab
                    ? "bg-blue-500 text-white border-blue-500 shadow-md"
                    : "bg-white text-blue-500 border-blue-400 hover:bg-blue-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white font-extrabold text-lg">
                    {p.title}
                  </div>
                  {/* UG / PG Badge */}
                 
                </div>
                <div className="p-4">
                  <div className="space-y-1.5 mb-4">
                    <div className="flex gap-2 text-1xl text-black">
                      
                        
                    
                      <span className="bg-blue-100 text-blue-500 font-bold px-2 py-1 ">{p.fullform}</span>
                    </div>
                    <div className="flex gap-2 text-1xl text-black">
                      <span className="font-bold text-black">
                        Eligibility:
                      </span>
                      <span>{p.eligibility}</span>
                    </div>
                    <div className="flex gap-2 text-1xl text-black">
                      <span className="font-bold text-black">Duration:</span>
                      <span>{p.duration}</span>
                    </div>
                    <div className="flex gap-2 text-1xl text-black">
                      <span className="font-bold text-black">Fees:</span>
                      <span className="text-black font-bold">{p.fee}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setEnquiryProgram(p.title);
                      setEnquiryOpen(true);
                    }}
                    className="w-full bg-red-600 hover:bg-red-600 text-white font-bold py-2.5 rounded-lg text-sm transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADMISSION PROCESS ──────────────────────────────────────────── */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Admission Process
          </h2>

          <div className="bg-white rounded-2xl shadow-md px-6 md:px-10 py-10 md:py-20">
            {/* MOBILE: Vertical Stack */}
            <div className="flex flex-col gap-0 md:hidden">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-blue-400 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-bold text-gray-800 text-base mb-1">
                      {step.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: Horizontal Timeline */}
            <div className="hidden md:block w-full">
              {/* Titles */}
              <div className="grid grid-cols-4 text-center mb-0">
                {steps.map((step, i) => (
                  <div key={i} className="px-4">
                    <p className="font-bold text-gray-800 text-base">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Line + Dots */}
              <div className="relative flex items-center my-5">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-red-600" />
                <div className="relative w-full grid grid-cols-4">
                  {steps.map((_, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="relative z-10 w-5 h-5 rounded-full border-2 border-red-600 bg-white flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-4 text-center">
                {steps.map((step, i) => (
                  <div key={i} className="px-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEARNERS WORK AT ────────────────────────────────────────────── */}
       <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Our learners work at</h2>
        <p className="text-gray-500 text-2xl">Top hiring partners of LPU Online</p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="mx-5 bg-white rounded-xl px-10 py-5 shadow-sm border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all flex items-center justify-center"
              style={{ minWidth: "200px", height: "96px" }}
            >
              <img
                src={c.img}
                alt={c.name}
                className="max-h-40 max-w-[360px] object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ─── CTA CONNECT ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-blue-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-white text-3xl font-bold uppercase tracking-widest mb-2">
            CONNECT FOR YOUR QUERIES
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-4xl mr-2">UU</span>
            </div>
            <span className="text-white font-extrabold text-4xl ml-2">
              Online
            </span>
          </div>
          <button
            onClick={() => {
              setEnquiryProgram(null);
              setEnquiryOpen(true);
            }}
            className="bg-red-600 text-white font-extrabold px-10 py-4 text-base hover:bg-red-600 transition-all shadow-2xl hover:shadow-3xl"
          >
            Contact Us →
          </button>
        </div>
      </section>

      

      {/* ─── TOP QUERIES ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-black border-t border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <h3 className="text-white font-extrabold text-4xl mb-6">
            Top Query
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {queryColumns.map((col, ci) => {
              const limit = 6;
              const expanded = !!expandedCols[ci];
              const visible = expanded ? col : col.slice(0, Math.min(limit, col.length));
              return (
                <div key={ci} className="flex flex-col gap-3">
                  {visible.map((q, i) => (
                    <a
                      key={`${q}-${i}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setEnquiryProgram(null);
                        setEnquiryOpen(true);
                      }}
                      className="text-white text-sm md:text-lg hover:underline hover:text-blue-500 transition-colors cursor-pointer truncate"
                    >
                      {q}
                    </a>
                  ))}
                  {col.length > limit && (
                    <button
                      onClick={() => toggleCol(ci)}
                      className="bg-white text-left text-black-400 hover:text-white rounded-full text-1xl md:text-base px-4 py-2"
                    >
                      {expanded ? "See less" : "See more"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-black py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="border-t border-gray-600 mb-6" />

          <p className="text-white text-1xl leading-relaxed mb-4">
            Disclaimer: We act as a marketing service partner only. Uttaranchal
            University holds full rights to request change or removal of any
            non-relevant content. Images used are for illustrative purposes and
            do not directly represent the respective colleges or universities.
          </p>

          <a
            onClick={() => {
              setEnquiryProgram(null);
              setEnquiryOpen(true);
            }}
            className="text-white text-sm hover:underline block mb-2"
          >
            Privacy-Policy
          </a>

          <p className="text-white text-sm">
            © 2025 onlineuniversityadmission.online | All Rights Reserved
          </p>
        </div>
      </footer>

      {enquiryOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-xl md:max-w-2xl shadow-2xl p-4 md:p-6 min-h-[85vh] max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <EnquiryForm
              onClose={() => setEnquiryOpen(false)}
              defaultCourse={enquiryProgram ?? undefined}
              source={enquirySource ?? "UI"}
              courseOptions={programs.map((p) => p.title)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
