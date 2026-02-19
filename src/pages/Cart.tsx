import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const DELIVERY_FEE = 150;
const FREE_DELIVERY_THRESHOLD = 3000;

const Cart = () => {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground text-sm mb-4">Add some items to get started!</p>
          <Link to="/products" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-3.5 w-3.5" /> Continue Shopping
        </Link>

        <h1 className="text-xl font-bold mb-4">Shopping Cart ({items.length} items)</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="bg-card rounded-lg border border-border p-3 flex gap-3">
                <Link to={`/product/${product.id}`} className="flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-sm hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-xs text-muted-foreground">{product.unit}</p>
                  <p className="font-bold text-sm mt-1">Rs {product.price.toLocaleString()}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="flex items-center">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="border border-border p-1 rounded-l hover:bg-secondary">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="border-y border-border px-3 py-1 text-xs font-medium">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="border border-border p-1 rounded-r hover:bg-secondary">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-card rounded-lg border border-border p-5 sticky top-20">
              <h2 className="font-bold mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>Rs {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <span className="text-primary font-medium">FREE</span> : `Rs ${deliveryFee}`}</span>
                </div>
                {subtotal < FREE_DELIVERY_THRESHOLD && (
                  <p className="text-[11px] text-promo-green">
                    Add Rs {(FREE_DELIVERY_THRESHOLD - subtotal).toLocaleString()} more for free delivery!
                  </p>
                )}
                <div className="border-t border-border pt-2 flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>Rs {total.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
                Proceed to Checkout
              </button>
              <p className="text-[10px] text-muted-foreground text-center mt-2">Cash on Delivery available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
