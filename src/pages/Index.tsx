import PromoBanners from "@/components/PromoBanners";
import CategoryGrid from "@/components/CategoryGrid";
import ProductRow from "@/components/ProductRow";
import { products } from "@/data/products";

const Index = () => {
  const deals = products.filter((p) => p.isDeal);
  const bestSellers = products.filter((p) => p.isBestSeller);
  const groceryItems = products.filter((p) => p.category === "grocery");

  return (
    <div className="bg-background">
      <PromoBanners />
      <CategoryGrid />

      <ProductRow title="🔥 Today's Deals" products={deals} scrollable />

      {/* Promo banner strip */}
      <section className="py-3">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg p-5 flex items-center justify-between overflow-hidden relative group">
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity"
                style={{
                  backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtAkNtXbmcLhwq0HbuK6XhBSpw6zbz.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                }}
              />
              <div className="relative z-10">
                <p className="font-bold text-white text-lg">Kitchen Storage Deals</p>
                <p className="text-sm text-white/80">Premium cabinets & organizers at special prices</p>
              </div>
              <span className="text-4xl relative z-10">🗄️</span>
            </div>
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-5 flex items-center justify-between overflow-hidden relative group">
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity"
                style={{
                  backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtAkNtXbmcLhwq0HbuK6XhBSpw6zbz.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "left",
                }}
              />
              <div className="relative z-10">
                <p className="font-bold text-white text-lg">Appliance Special</p>
                <p className="text-sm text-white/80">Latest ovens, stoves & kitchen equipment</p>
              </div>
              <span className="text-4xl relative z-10">🍳</span>
            </div>
          </div>
        </div>
      </section>

      <ProductRow title="⭐ Top Selling Items" products={bestSellers} />
      <ProductRow title="🛒 Grocery Essentials" products={groceryItems} scrollable />
    </div>
  );
};

export default Index;
