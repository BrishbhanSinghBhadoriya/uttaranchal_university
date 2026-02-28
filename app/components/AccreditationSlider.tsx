"use client";
import { useEffect, useRef, useState } from "react";

export default function AccreditationSlider() {
  const accreditations = [
    { name: "NIRF Ranking (National Institutional Ranking Framework)", img: "/rank-nirf.png" },
    { name: "UGC - Uttaranchal has been awarded Graded Autonomy by UGC", img: "/rank-ugc.png" },
    { name: "AICTE Approved (All India Council for Technical Education)", img: "/rank-aicte.png" },
    { name: "QS World University Ranking", img: "/rank-qs.png" },
  ];

  // Duplicate for infinite effect
  const items = [...accreditations, ...accreditations, ...accreditations];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animRef = useRef<number | null>(null);
  const speed = 0.6; // smoother speed

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = () => {
      setOffset((prev) => {
        const cardWidth = slider.offsetWidth / (window.innerWidth >= 768 ? 3 : 1);
        const totalWidth = accreditations.length * cardWidth;
        const next = prev + speed;
        return next >= totalWidth ? 0 : next;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full py-6">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${offset}px)`,
          willChange: "transform",
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-full md:w-1/3 px-4">
            
            {/* CARD */}
            <div className="
              flex flex-col justify-between items-center text-center
              bg-blue-100 border border-gray-200
              rounded-2xl shadow-lg
              h-[260px] md:h-[280px]
              px-6 py-6
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
            ">
              
              {/* Logo */}
              <div className="h-24 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-20 w-auto object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-black text-2xl md:text-lg font-semibold leading-snug">
                {item.name}
              </p>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}