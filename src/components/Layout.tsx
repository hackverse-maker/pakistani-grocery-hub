import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <TopBar />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default Layout;
