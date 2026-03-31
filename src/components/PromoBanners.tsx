import { useState, useEffect } from "react";

const banners = [
  {
    title: "Kitchen Appliances",
    subtitle: "Premium ovens, dishwashers & cooking solutions",
    bg: "bg-gradient-to-r from-slate-700 to-slate-900",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtAkNtXbmcLhwq0HbuK6XhBSpw6zbz.png",
  },
  {
    title: "Storage Solutions",
    subtitle: "Organize your kitchen with stylish cabinets & shelving",
    bg: "bg-gradient-to-r from-amber-600 to-amber-800",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtAkNtXbmcLhwq0HbuK6XhBSpw6zbz.png",
  },
  {
    title: "Modern Home Appliances",
    subtitle: "Transform your home with latest kitchen technology",
    bg: "bg-gradient-to-r from-slate-800 to-slate-950",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtAkNtXbmcLhwq0HbuK6XhBSpw6zbz.png",
  },
];

const PromoBanners = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % banners.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`${banner.bg} text-white p-6 md:p-10 transition-all duration-500 ${
                idx === current ? "block" : "hidden"
              } relative min-h-80 flex items-center`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-3xl md:text-5xl font-black leading-tight">{banner.title}</p>
                <p className="mt-2 text-sm md:text-lg opacity-90">{banner.subtitle}</p>
                <button className="mt-4 bg-accent text-accent-foreground font-bold px-6 py-2 rounded-md text-sm hover:opacity-90 transition-opacity">
                  Shop Now
                </button>
              </div>

              {/* Featured Image on Right */}
              <div className="hidden md:block relative z-10 ml-8 w-48 h-64 flex-shrink-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "w-6 bg-white" : "w-2 bg-white/40"
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
