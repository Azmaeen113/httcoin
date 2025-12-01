import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainLayout from "@/components/layout/MainLayout";
import DestinationsPage from "@/pages/DestinationsPage";
import DebitCardPage from "@/pages/DebitCardPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import TokenomicsPage from "@/pages/TokenomicsPage";
import HowToBuyPage from "@/pages/HowToBuyPage";
import WhitepaperPage from "@/pages/WhitepaperPage";
import BlogPage from "@/pages/BlogPage";
import StakingPage from "@/pages/StakingPage";
import AboutPage from "@/pages/AboutPage";
import { WhitepaperModalProvider } from "@/context/WhitepaperModalContext";
import { BuyModalProvider } from "@/context/BuyModalContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WhitepaperModalProvider>
        <BuyModalProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tokenomics" element={<TokenomicsPage />} />
              <Route path="/debit-card" element={<DebitCardPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
              <Route path="/how-to-buy" element={<HowToBuyPage />} />
              <Route path="/whitepaper" element={<WhitepaperPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/staking" element={<StakingPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          </BrowserRouter>
        </BuyModalProvider>
      </WhitepaperModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
