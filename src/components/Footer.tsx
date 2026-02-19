import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground pt-10 pb-24 lg:pb-10">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-1 mb-4">
            <div className="bg-primary text-primary-foreground font-black text-sm px-2 py-0.5 rounded">SUPER</div>
            <span className="font-extrabold text-sm text-primary-foreground">STORE</span>
          </div>
          <p className="text-xs leading-relaxed opacity-70">
            Pakistan's trusted supermarket chain. Quality products at the best prices, delivered to your doorstep.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Customer Care</h4>
          <ul className="space-y-2 text-xs opacity-70">
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Track Order</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Store Locations</h4>
          <ul className="space-y-2 text-xs opacity-70">
            <li className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Karachi - 12 Stores</li>
            <li className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Lahore - 8 Stores</li>
            <li className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Islamabad - 5 Stores</li>
            <li className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Rawalpindi - 3 Stores</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Contact Us</h4>
          <ul className="space-y-2 text-xs opacity-70">
            <li className="flex items-center gap-1"><Phone className="h-3 w-3" /> 0800-SUPER-STORE</li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-3 w-3 text-promo-green" />
              <span>WhatsApp: 0300-1234567</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-muted-foreground/20 mt-8 pt-4 text-center text-[11px] opacity-50">
        © 2024 Super Store Pakistan. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
