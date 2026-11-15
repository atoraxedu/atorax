import React, { useState } from "react";
import { Link } from "react-router-dom";
import atoraxFullLogo from "../assets/atorax_full_logo_dark.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import AdvancedApplyPopup from "./AdvancedApplyPopup";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  // All 8 Core Programs
  const courses = [
    {
      title: "Agentic & Generative AI",
      tag: "AI PROGRAM",
      tagColor: "text-blue-700 bg-blue-50/80 border-blue-200/60",
      to: "/AgenticAndGenAI",
    },
    {
      title: "AI Engineering & GenAI",
      tag: "ENTERPRISE TRACK",
      tagColor: "text-indigo-700 bg-indigo-50/80 border-indigo-200/60",
      to: "/AIEngineering",
    },
    {
      title: "Software Development",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-700 bg-blue-50/80 border-blue-200/60",
      to: "/SoftwareDeveloper",
    },
    {
      title: "Data Science & GenAI",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-700 bg-blue-50/80 border-blue-200/60",
      to: "/DataScience",
    },
    {
      title: "Data Analytics & AI",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-700 bg-blue-50/80 border-blue-200/60",
      to: "/DataAnalytics",
    },
    {
      title: "AI-Powered Full Stack",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-700 bg-blue-50/80 border-blue-200/60",
      to: "/AIFullStack",
    },
    {
      title: "Digital Marketing & AI",
      tag: "CAREER PROGRAM",
      tagColor: "text-emerald-700 bg-emerald-50/80 border-emerald-200/60",
      to: "/DigitalMarketing",
    },
    {
      title: "Cybersecurity & Defense",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-rose-700 bg-rose-50/80 border-rose-200/60",
      to: "/Cybersecurity",
    },
  ];

  const resources = [
    { label: "Masterclass", to: "/MasterClass" },
    { label: "Alumni Network", to: "/Alumni" },
    { label: "AI Tryouts", to: "/AgenticAndGenAI" },
    { label: "All Programs", to: "/Advance" },
  ];

  const company = [
    { label: "Blogs", to: "/blog" },
    { label: "Careers", to: "/Career" },
    { label: "Terms & Conditions", to: "/Terms" },
    { label: "Privacy Policy", to: "/Privacy" },
    { label: "Refund Policy", to: "/RefundPolicy" },
  ];

  const more = [
    { label: "Teach at Atorax", to: "/Career" },
    { label: "Verify Certificate", to: "/Verify" },
    { label: "Student Login", to: "/Login" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={14} />,
      href: "https://www.linkedin.com/company/atorax/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={14} />,
      href: "https://www.instagram.com/atorax_?vrfl=MWVpOG95NXR3NW9iMQ%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: <FaFacebookF size={14} />,
      href: "https://www.facebook.com/share/18zArK79ac/?mibextid=wwXIfr",
      label: "Facebook",
    },
  ];

  return (
    <>
      <footer className="bg-[#F8FAFC] text-gray-800 font-sans border-t border-gray-200 pt-10 sm:pt-16 mt-auto">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
            
            {/* Column 1: Brand & Socials */}
            <div className="lg:col-span-3 space-y-3.5 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-200">
              <Link to="/" className="inline-block group">
                <img
                  src={atoraxFullLogo}
                  alt="Atorax"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>

              <div className="pt-1">
               
                <p className="text-[13px] text-gray-500 leading-relaxed mt-1 max-w-sm lg:max-w-[260px]">
                  Building phenomenal outcomes with industry-oriented tech education.
                </p>
              </div>

              <p className="text-[12px] text-gray-400 leading-relaxed">
                Copyright © {new Date().getFullYear()} Atorax Pvt. Ltd. All rights reserved.
              </p>

              {/* Follow Us */}
              <div className="pt-1">
                <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2.5">
                  Follow us
                </p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50 transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: All Courses (Parallel 2 columns on mobile, 4 cols on desktop) */}
            <div className="lg:col-span-4 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-200">
              <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-4">
                Courses
              </h3>
              <div className="grid grid-cols-2 gap-x-3.5 sm:gap-x-6 gap-y-3.5">
                {courses.map((item, idx) => (
                  <div key={idx} className="group flex flex-col justify-between">
                    <Link
                      to={item.to}
                      className="text-xs sm:text-[13px] font-semibold text-gray-800 hover:text-blue-600 transition-colors block leading-snug"
                    >
                      {item.title}
                    </Link>
                    <span
                      className={`text-[8.5px] sm:text-[9px] font-bold tracking-wider uppercase inline-block px-1.5 py-0.5 rounded border mt-1 w-fit ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3, 4, 5: Navigation Links (Mobile: clean 2-column/3-column grid) */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Resources */}
              <div>
                <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <ul className="space-y-2.5">
                  {resources.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.to}
                        className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors block py-0.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-2.5">
                  {company.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.to}
                        className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors block py-0.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-4">
                  More
                </h3>
                <ul className="space-y-2.5">
                  {more.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.to}
                        className="text-[13px] text-gray-600 hover:text-blue-600 transition-colors block py-0.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* WhatsApp Support Button - Centered on mobile, Right-aligned on desktop */}
          <div className="flex justify-center sm:justify-end pt-8 pb-6 border-t border-gray-200 mt-8">
            <a
              href="https://wa.me/919686398362?text=Hi%20Atorax%2C%20I%20have%20questions%20regarding%20the%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg shadow-sm font-semibold text-xs sm:text-[13px] transition-all transform active:scale-95"
            >
              <div className="bg-white/20 p-1 rounded-full flex items-center justify-center shrink-0">
                <FaWhatsapp size={16} />
              </div>
              <span className="whitespace-nowrap">Have questions regarding the program?</span>
            </a>
          </div>

        </div>

        {/* Bottom "Need Help? Request Callback" Bar - Mobile Optimized */}
        <div className="bg-[#0B5CFF] text-white py-3 px-4">
          <div className="max-w-6xl mx-auto flex flex-row items-center justify-between sm:justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-2 text-left sm:text-center">
              <span className="text-white/80 text-xs sm:text-sm hidden sm:inline">Got questions?</span>
              <span className="text-white font-bold text-xs sm:text-sm tracking-wide">Need Help?</span>
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#0B5CFF] hover:bg-blue-50 active:scale-95 font-bold text-xs sm:text-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full shadow-sm transition-all whitespace-nowrap"
            >
              Request Callback
            </button>
          </div>
        </div>
      </footer>

      {/* Callback / Inquiry Modal */}
      {showPopup && <AdvancedApplyPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Footer;
