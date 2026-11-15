import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoTrans from "../assets/atorax_logo_trans.png";
import logoNonTrans from "../assets/atorax_logo_non_trans.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import AdvancedApplyPopup from "./AdvancedApplyPopup";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const courses = [
    {
      title: "Data Science and AI",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-600",
      to: "/DataScience",
    },
    {
      title: "Software Development",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-600",
      to: "/SoftwareDeveloper",
    },
    {
      title: "AI Full Stack",
      tag: "PLACEMENT PROGRAM",
      tagColor: "text-blue-600",
      to: "/AIFullStack",
    },
    {
      title: "Agentic and GenAI",
      tag: "AI PROGRAM",
      tagColor: "text-blue-600",
      to: "/AgenticAndGenAI",
    },
  ];

  const resources = [
    { label: "Masterclass", to: "/MasterClass" },
    { label: "Alumni Network", to: "/Alumni" },
    { label: "AI Tryouts", to: "/AgenticAndGenAI" },
    { label: "Curriculum Overview", to: "/Advance" },
  ];

  const company = [
    { label: "Blogs", to: "/blog" },
    { label: "Careers", to: "/Career" },
    { label: "Terms and Conditions", to: "/Terms" },
    { label: "Privacy Policy", to: "/Privacy" },
    { label: "Refund Policy", to: "/RefundPolicy" },
  ];

  const more = [
    { label: "Teach at Atorax", to: "/Career" },
    { label: "Verify Certificate", to: "/Verify" },
    { label: "Create an account", to: "/Login" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={16} />,
      href: "https://www.linkedin.com/company/atorax/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/atorax_?vrfl=MWVpOG95NXR3NW9iMQ%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: <FaFacebookF size={16} />,
      href: "https://www.facebook.com/share/18zArK79ac/?mibextid=wwXIfr",
      label: "Facebook",
    },
  ];

  return (
    <>
      <footer className="bg-[#F8FAFC] text-gray-800 font-sans border-t border-gray-200 pt-16 pb-24 mt-auto">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Main 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* Column 1: Brand & Socials (Width: ~3.5 cols) */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-4">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <img
                  src={logoTrans}
                  alt="Atorax"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = logoNonTrans;
                  }}
                />
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  Atorax
                </span>
              </Link>

              <div className="pt-2">
               
                <p className="text-[13px] text-gray-500 leading-relaxed mt-1 max-w-[280px]">
                  Building phenomenal outcomes with industry-oriented tech education.
                </p>
              </div>

              <p className="text-[12px] text-gray-500 leading-relaxed pt-2">
                Copyright © {new Date().getFullYear()} Atorax Technologies Pvt. Ltd. All rights reserved.
              </p>

              {/* Follow Us */}
              <div className="pt-3">
                <p className="text-[12px] font-semibold text-gray-700 mb-3">
                  Follow us
                </p>
                <div className="flex items-center gap-4 text-gray-700">
                  {socialLinks.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Courses */}
            <div className="lg:col-span-2 xl:col-span-3">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">Courses</h3>
              <div className="space-y-4">
                {courses.map((item, idx) => (
                  <div key={idx} className="group">
                    <Link
                      to={item.to}
                      className="text-[13px] font-semibold text-gray-800 hover:text-blue-600 transition-colors block leading-tight"
                    >
                      {item.title}
                    </Link>
                    <span
                      className={`text-[10px] font-bold tracking-wider uppercase block mt-1 ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Resources */}
            <div className="lg:col-span-2">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="text-[13px] text-gray-700 hover:text-blue-600 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="lg:col-span-2">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="text-[13px] text-gray-700 hover:text-blue-600 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: More */}
            <div className="lg:col-span-2">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">More</h3>
              <ul className="space-y-3">
                {more.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="text-[13px] text-gray-700 hover:text-blue-600 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Pill - Right bottom above blue bar */}
      <div className="fixed bottom-14 right-4 sm:right-6 z-40">
        <a
          href="https://wa.me/919686398362?text=Hi%20Atorax%2C%20I%20have%20questions%20regarding%20the%20programme"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-lg shadow-lg shadow-green-600/30 font-medium text-xs sm:text-[13px] transition-all transform hover:scale-[1.02] active:scale-95"
        >
          <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
            <FaWhatsapp size={16} />
          </div>
          <span>Have questions regarding the programme?</span>
        </a>
      </div>

      {/* Sticky Bottom "Need Help? Request Callback" Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B5CFF] text-white py-2.5 px-4 shadow-[0_-4px_16px_rgba(11,92,255,0.25)]">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 text-center">
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            Need Help?
          </span>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#0B5CFF] hover:bg-gray-50 active:scale-95 font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-sm transition-all"
          >
            Request Callback
          </button>
        </div>
      </div>

      {/* Callback / Inquiry Modal */}
      {showPopup && <AdvancedApplyPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Footer;
