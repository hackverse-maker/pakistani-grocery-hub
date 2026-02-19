import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, brands } from "@/data/products";

const priceRanges = [
  { label: "Under Rs 200", min: 0, max: 200 },
  { label: "Rs 200 - 500", min: 200, max: 500 },
  { label: "Rs 500 - 1000", min: 500, max: 1000 },
  { label: "Above Rs 1000", min: 1000, max: 99999 },
];

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  let filtered = products.filter((p) => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice];
      if (p.price < range.min || p.price > range.max) return false;
    }
    return true;
  });

  if (sortBy === "low") filtered.sort((a, b) => a.price - b.price);
  if (sortBy === "high") filtered.sort((a, b) => b.price - a.price);
  if (sortBy === "discount") filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const Filters = () => (
    <div className="space-y-5">
      {/* Category */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Category</h3>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block w-full text-left text-sm px-2 py-1 rounded ${!selectedCategory ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block w-full text-left text-sm px-2 py-1 rounded ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Price Range</h3>
        <div className="space-y-1">
          {priceRanges.map((range, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPrice(selectedPrice === idx ? null : idx)}
              className={`block w-full text-left text-sm px-2 py-1 rounded ${selectedPrice === idx ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Brand</h3>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {brands.slice(0, 10).map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm px-2 py-0.5 cursor-pointer hover:bg-secondary rounded">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="rounded border-border accent-primary"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4">
        {/* Breadcrumb */}
        <div className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground">
            {selectedCategory ? categories.find((c) => c.id === selectedCategory)?.name : "All Products"}
          </span>
        </div>

        <div className="flex gap-6">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-card rounded-lg border border-border p-4 sticky top-20">
              <h2 className="font-bold mb-3">Filters</h2>
              <Filters />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">{filtered.length} products found</p>
              <div className="flex items-center gap-2">
                <button
                  className="lg:hidden flex items-center gap-1 text-sm bg-secondary px-3 py-1.5 rounded-md"
                  onClick={() => setShowFilters(true)}
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-md px-3 py-1.5 bg-card"
                >
                  <option value="default">Sort By</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="discount">Highest Discount</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No products found</p>
                <p className="text-sm mt-1">Try changing your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-card p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)}><X className="h-5 w-5" /></button>
            </div>
            <Filters />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
