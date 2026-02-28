"use client";
import { useEffect, useRef, useState } from "react";

export default function AccreditationSlider() {
  const accreditations = [
    { name: "NIRF Ranking (National Institutional Ranking Framework)", img: "/rank-nirf.png" },
    { name: "UGC- Uttaranchal has been awarded Graded Autonomy by UGC", img: "/rank-ugc.png" },
    { name: "AICTE Approved (All India Council for Technical Education)", img: "/rank-aicte.png" },
    { name: "QS World University Ranking", img: "/rank-qs.png" },
  ];

  // Triple duplicate for seamless infinite effect
  const items = [...accreditations, ...accreditations, ...accreditations];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animRef = useRef<number | null>(null);
  const speed = 1.5; // px per frame — lower = slower

  // Responsive: 3 visible on desktop, 1 on mobile
  // Each card width = 33.33% on desktop, 100% on mobile
  // We calculate total width of one set = accreditations.length * cardWidth
  // Reset when offset >= one full set width

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = () => {
      setOffset((prev) => {
        const cardWidth = slider.offsetWidth / (window.innerWidth >= 768 ? 3 : 1);
        const totalWidth = accreditations.length * cardWidth;
        const next = prev + speed;
        // Reset seamlessly when we've scrolled one full set
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
    <div className="overflow-hidden w-full">
      <div
        ref={sliderRef}
        className="flex"
        style={{ transform: `translateX(-${offset}px)`, willChange: "transform" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full md:w-1/3 px-6"
          >
            <div className="flex flex-col bg-gray-200 items-center text-center py-6">
              {/* Logo */}
              <div className="h-24 flex items-center justify-center mb-5">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-20 w-auto border border-gray-200 object-contain"
                />
              </div>
              {/* Text */}
              <p className="text-gray-700 text-2xl  leading-snug max-w-[220px]">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
