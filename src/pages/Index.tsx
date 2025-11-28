import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Features from "@/components/Features";
import DestinationsGallery from "@/components/DestinationsGallery";
import Roadmap from "@/components/Roadmap";
import Security from "@/components/Security";
import Partners from "@/components/Partners";
import Community from "@/components/Community";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Tokenomics />
      <Features />
      <HowItWorks />
      <DestinationsGallery />
      <Roadmap />
      <Security />
      <Partners />
      <Community />
    </div>
  );
};

export default Index;
