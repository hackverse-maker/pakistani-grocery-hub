import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Truck, ArrowLeft, CheckCircle } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductRow from "@/components/ProductRow";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 6);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4">
        {/* Breadcrumb */}
        <div className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-card rounded-lg border border-border p-6 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-h-80 object-contain rounded" />
          </div>

          {/* Details */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</p>
            <h1 className="text-2xl font-bold mt-1">{product.name}</h1>
            {product.nameUrdu && (
              <p className="text-muted-foreground text-sm mt-0.5" dir="rtl">{product.nameUrdu}</p>
            )}
            <p className="text-sm text-muted-foreground mt-1">{product.unit}</p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-foreground">Rs {product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">Rs {product.oldPrice.toLocaleString()}</span>
                  <span className="bg-promo-red text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>

            {/* Stock */}
            <div className="mt-3 flex items-center gap-1.5 text-sm">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">In Stock</span>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <p className="text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center gap-0">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="border border-border p-2 rounded-l-md hover:bg-secondary">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="border-y border-border px-5 py-2 text-sm font-medium min-w-[48px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="border border-border p-2 rounded-r-md hover:bg-secondary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`mt-5 w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-md font-bold text-sm transition-all ${
                added
                  ? "bg-promo-green text-primary-foreground"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            {/* Delivery info */}
            <div className="mt-5 bg-category rounded-lg p-4 flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Delivery in 2-3 Days</p>
                <p className="text-xs text-muted-foreground">Free delivery on orders above Rs 3,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <ProductRow title="Related Products" products={related} scrollable />
      )}
    </div>
  );
};

export default ProductDetail;
