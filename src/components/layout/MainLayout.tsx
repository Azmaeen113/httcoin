import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";
import WalletModal from "@/components/WalletModal";
import { WalletModalProvider } from "@/context/WalletModalContext";

const MainLayout = () => {
  return (
    <WalletModalProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20 lg:pt-24">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
        <CookieBanner />
        <WalletModal />
      </div>
    </WalletModalProvider>
  );
};

export default MainLayout;

