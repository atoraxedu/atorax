import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo3 from "../assets/atorax_logo_non_trans.png";
import AdvancedApplyPopup from "./AdvancedApplyPopup";

const topNav = [
  { label: "ALL PROGRAMS", to: "/Advance" },
  { label: "SOFTWARE DEVELOPER", to: "/SoftwareDeveloper" },
  { label: "AGENTIC AND GENAI", to: "/AgenticAndGenAI" },
  { label: "ALUMNI", to: "/Alumni" },
  { label: "MASTERCLASS", to: "/MasterClass" },
  { label: "CAREER ASSESSMENT", to: "/career-assessment" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .atx-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(24, 34, 49, 0.90); /* #182231 */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #2B3A4D;
          transition: box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .atx-header.scrolled {
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        .atx-header-inner {
          max-width: 1440px; /* Increased to allow more room for links */
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 16px;
        }
        .atx-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0; /* Prevents logo from crushing */
        }
        .atx-logo img {
          height: 200px;
          width: auto;
          object-fit: contain;
          margin: -64px 0;
          transform: translateY(-12px);
        }
        .atx-nav {
          display: flex;
          align-items: center;
          gap: 2px; /* Reduced gap */
        }
        .atx-nav-link {
          color: #F8FAFC;
          font-size: 14px;
          font-weight: 500;
          padding: 7px 10px; /* Reduced horizontal padding */
          border-radius: 6px;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .atx-nav-link:hover {
          color: #2DD4BF;
          background: rgba(45, 212, 191, 0.1);
        }
        .atx-nav-link.active {
          color: #2DD4BF;
          background: rgba(45, 212, 191, 0.15);
        }
        .atx-masterclass-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 6px;
          background: transparent;
          color: #F8FAFC;
          text-decoration: none;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: background 0.18s, color 0.18s;
          border: 1px solid rgba(255,255,255,0.2);
          white-space: nowrap;
        }
        .atx-masterclass-btn:hover {
          background: rgba(45, 212, 191, 0.1);
          color: #2DD4BF;
        }
        .atx-nav-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.2);
          margin: 0 6px;
          flex-shrink: 0;
        }
        .atx-login-btn {
          color: #F8FAFC;
          font-size: 14px;
          font-weight: 500;
          padding: 7px 12px;
          border-radius: 6px;
          text-decoration: none;
          transition: color 0.18s;
          white-space: nowrap;
        }
        .atx-login-btn:hover {
          color: #2DD4BF;
        }
        .atx-enroll-btn {
          background: #009E82;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
          white-space: nowrap;
          box-shadow: 0 2px 12px rgba(0,158,130,0.25);
          flex-shrink: 0;
        }
        .atx-enroll-btn:hover {
          background: #00B894;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,184,148,0.35);
        }
        .atx-hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 6px;
          color: #F8FAFC;
          padding: 8px 12px;
          font-size: 18px;
          cursor: pointer;
          transition: border-color 0.18s;
        }
        .atx-hamburger:hover {
          border-color: #F8FAFC;
        }
        .atx-mobile-menu {
          background: rgba(24, 34, 49, 0.98); /* #182231 */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid #2B3A4D;
          padding: 12px 20px 16px;
        }
        .atx-mobile-menu a, .atx-mobile-menu button {
          display: block;
          width: 100%;
          text-align: left;
          padding: 11px 14px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          color: #F8FAFC;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
          margin-bottom: 4px;
        }
        .atx-mobile-menu a:hover, .atx-mobile-menu button:hover {
          color: #2DD4BF;
          background: rgba(45, 212, 191, 0.1);
        }
        .atx-mobile-menu .mob-enroll {
          background: #009E82;
          color: #fff;
          text-align: center;
          font-weight: 600;
          margin-top: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,158,130,0.25);
        }
        .atx-mobile-menu .mob-enroll:hover {
          background: #00B894;
        }
        @media (max-width: 1350px) {
          .atx-nav { display: none; }
          .atx-hamburger { display: block; }
        }
      `}</style>

      <header className={`atx-header${scrolled ? " scrolled" : ""}`}>
        <div ref={menuRef} className="atx-header-inner">
          <Link to="/" className="atx-logo" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <img src={logo3} alt="Atorax logo" />
            {/* <span style={{ color: '#F8FAFC', fontSize: '18px', fontWeight: '800', letterSpacing: '1.5px' }}>ATORAX</span> */}
          </Link>

          <nav className="atx-nav">
            {topNav.map((item) => {
              if (item.to === "/MasterClass") {
                return (
                  <Link key={item.to} to={item.to} className="atx-masterclass-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`atx-nav-link${location.pathname.toLowerCase() === item.to.toLowerCase() ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="atx-nav-divider" />
            <Link to="/login" className="atx-login-btn">LOGIN</Link>
            <button onClick={() => setShowPopup(true)} className="atx-enroll-btn">
              REQUEST A CALLBACK
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="atx-hamburger"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMobileOpen && (
          <div className="atx-mobile-menu">
            {topNav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link to="/login">Login</Link>
            <button className="mob-enroll" onClick={() => { setShowPopup(true); setIsMobileOpen(false); }}>
              Request a Callback
            </button>
          </div>
        )}
      </header>

      {showPopup && <AdvancedApplyPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Header;
