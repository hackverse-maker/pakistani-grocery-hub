import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductRowProps {
  title: string;
  products: Product[];
  scrollable?: boolean;
}

const ProductRow = ({ title, products, scrollable }: ProductRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  if (scrollable) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">{title}</h2>
            <div className="flex gap-1">
              <button onClick={() => scroll("left")} className="p-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => scroll("right")} className="p-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {products.map((p) => (
              <div key={p.id} className="flex-shrink-0 w-40 md:w-48">
                <ProductCard product={p} compact />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRow;
