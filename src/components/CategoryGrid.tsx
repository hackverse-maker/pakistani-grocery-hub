import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategoryGrid = () => (
  <section className="py-6">
    <div className="container">
      <h2 className="font-bold text-lg mb-4">Shop by Category</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className="flex flex-col items-center gap-1.5 p-3 bg-category hover:bg-category-hover rounded-lg transition-colors group"
          >
            <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
            <span className="text-[11px] md:text-xs font-medium text-center leading-tight">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryGrid;
