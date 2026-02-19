import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-card rounded-md border border-border hover:shadow-md transition-shadow group relative flex flex-col">
      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-2 left-2 z-10 bg-promo-red text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded">
          -{product.discount}%
        </div>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block p-3 pb-0">
        <div className="aspect-square overflow-hidden rounded bg-secondary/50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 flex-1 flex flex-col">
        <p className="text-muted-foreground text-[10px] uppercase tracking-wide">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className={`font-semibold leading-tight mt-0.5 hover:text-primary transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>
            {product.name}
          </h3>
        </Link>
        <p className="text-[11px] text-muted-foreground">{product.unit}</p>

        <div className="mt-auto pt-2 flex items-end justify-between">
          <div>
            <span className="font-bold text-foreground text-sm">Rs {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="text-muted-foreground text-xs line-through ml-1.5">
                Rs {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-primary text-primary-foreground p-1.5 rounded hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
