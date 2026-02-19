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
            <div className="bg-accent rounded-lg p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-accent-foreground text-lg">Sasta Atta Deal</p>
                <p className="text-sm text-accent-foreground/80">10kg Flour @ Rs 1,200 only</p>
              </div>
              <span className="text-4xl">🌾</span>
            </div>
            <div className="bg-primary rounded-lg p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-primary-foreground text-lg">Fresh Sabzi</p>
                <p className="text-sm text-primary-foreground/80">Daily fresh vegetables from local farms</p>
              </div>
              <span className="text-4xl">🥬</span>
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
