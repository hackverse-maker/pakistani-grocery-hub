import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";
import { useState } from "react";

const Navbar = () => {
  const { totalItems } = useCart();
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container flex items-center gap-3 py-3">
        {/* Mobile menu */}
        <button
          className="lg:hidden p-2 hover:bg-secondary rounded-md"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center gap-1">
            <div className="bg-primary text-primary-foreground font-black text-lg md:text-xl px-2 py-0.5 rounded">
              SUPER
            </div>
            <span className="font-extrabold text-lg md:text-xl text-foreground">STORE</span>
          </div>
        </Link>

        {/* Categories dropdown - desktop */}
        <div className="hidden lg:block relative">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Menu className="h-4 w-4" />
            Categories
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          {showCategories && (
            <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg w-56 py-1 z-50">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/products?category=${cat.id}`}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-secondary text-sm transition-colors"
                  onClick={() => setShowCategories(false)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="ml-auto text-muted-foreground text-xs">({cat.count})</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for groceries, brands and more..."
              className="w-full border border-border rounded-md py-2 pl-4 pr-10 text-sm bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <button className="absolute right-0 top-0 h-full px-3 bg-primary text-primary-foreground rounded-r-md hover:opacity-90 transition-opacity">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Account */}
        <Link to="/" className="hidden md:flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
          <User className="h-5 w-5" />
          <span className="text-xs">Account</span>
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-promo-red text-primary-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="hidden md:inline text-xs">Cart</span>
        </Link>
      </div>

      {/* Mobile menu dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden border-t border-border bg-card py-2">
          <div className="container">
            <div className="grid grid-cols-2 gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/products?category=${cat.id}`}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-secondary rounded-md text-sm"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
