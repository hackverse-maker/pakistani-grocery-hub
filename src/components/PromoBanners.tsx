import { useState, useEffect } from "react";

const banners = [
  {
    title: "Ramadan Special Sale",
    subtitle: "Up to 40% off on groceries & essentials",
    bg: "bg-primary",
    accent: "🌙",
  },
  {
    title: "Weekly Sasta Bazaar",
    subtitle: "Lowest prices guaranteed on 500+ items",
    bg: "bg-promo-red",
    accent: "🔥",
  },
  {
    title: "Buy 2 Get 1 Free",
    subtitle: "On selected beverages & snacks",
    bg: "bg-promo-orange",
    accent: "🎉",
  },
];

const PromoBanners = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`${banner.bg} text-primary-foreground p-6 md:p-10 transition-all duration-500 ${
                idx === current ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl md:text-5xl font-black leading-tight">{banner.title}</p>
                  <p className="mt-2 text-sm md:text-lg opacity-90">{banner.subtitle}</p>
                  <button className="mt-4 bg-accent text-accent-foreground font-bold px-6 py-2 rounded-md text-sm hover:opacity-90 transition-opacity">
                    Shop Now
                  </button>
                </div>
                <span className="text-6xl md:text-8xl">{banner.accent}</span>
              </div>
            </div>
          ))}
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
