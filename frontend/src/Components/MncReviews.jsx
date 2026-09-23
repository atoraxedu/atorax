import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { reviewsData } from "../data/reviewsData";

const ReviewCard = ({ review }) => (
  <div className="bg-[#12161f]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mx-3 flex flex-col justify-between h-[300px] shadow-lg relative overflow-hidden group hover:border-primary/50 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote size={60} className="text-white" />
    </div>
    
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#f59e0b" className="text-amber-500" />
        ))}
      </div>
      <p className="text-gray-300 text-[14px] leading-relaxed italic line-clamp-4 relative z-10">
        "{review.review}"
      </p>
    </div>

    <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between z-10">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
          <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-bold text-base leading-tight">{review.name}</h4>
          <div className="flex flex-col mt-1">
            <span className="text-[11px] text-gray-400 font-medium">From {review.prevBg}</span>
            <span className="text-primary text-[13px] font-bold flex items-center gap-1 mt-0.5">
              <Building2 size={12} /> {review.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MncReviews = () => {
  // Split 23 reviews into two rows
  const row1 = reviewsData.slice(0, 12);
  const row2 = reviewsData.slice(12, 23);

  const baseSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: true,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const mobileSettings = {
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease",
    centerMode: true,
    centerPadding: "20px",
  };

  const settingsRow1 = {
    ...baseSettings,
    speed: 35000,
    slidesToShow: 3.5,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: mobileSettings },
    ]
  };

  const settingsRow2 = {
    ...baseSettings,
    speed: 30000,
    rtl: true,
    slidesToShow: 3.5,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { ...mobileSettings, rtl: false, autoplaySpeed: 3500 } },
    ]
  };

  return (
    <section className="py-24 bg-[#07090b] relative overflow-hidden min-h-[650px] border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090b] via-[#0b101a] to-[#07090b] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-primary/15 text-primary font-extrabold text-[11px] uppercase tracking-[1.5px] px-5 py-2 rounded-full mb-4"
        >
          Alumni Success Stories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[44px] font-black font-outfit text-white tracking-tight leading-tight mb-4"
        >
          Non-Tech to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Top MNCs</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Meet our graduates who transformed their careers. We've placed hundreds of candidates from diverse backgrounds into top-tier tech roles.
        </motion.p>
      </div>

      <div className="relative z-10">
        <div className="mb-6">
          <Slider {...settingsRow1}>
            {row1.map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </Slider>
        </div>
        <div>
          <Slider {...settingsRow2}>
            {row2.map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </Slider>
        </div>

        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#07090b] to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#07090b] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default React.memo(MncReviews);
