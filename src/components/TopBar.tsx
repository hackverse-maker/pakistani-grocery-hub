import { Truck, Phone, MapPin } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-xs md:text-sm py-1.5 px-4">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <Truck className="h-3.5 w-3.5" />
        <span className="font-semibold">Free Delivery Above Rs 3,000!</span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Phone className="h-3 w-3" />
          <span>0800-SUPER-STORE</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          <span>Karachi, Lahore, Islamabad</span>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
