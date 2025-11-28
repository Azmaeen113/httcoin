import { StickyBanner as StickyBannerUI } from "@/components/ui/sticky-banner";

export default function StickyBanner() {
  return (
    <StickyBannerUI className="bg-gradient-to-r from-primary via-accent to-primary">
      <p className="mx-0 max-w-[90%] text-center text-sm md:text-base text-white drop-shadow-md">
        🚀 HTTCoin Launch – December 1, 2025! Join the travel revolution.{" "}
        <a href="#roadmap" className="font-semibold transition duration-200 hover:underline">
          View Roadmap →
        </a>
      </p>
    </StickyBannerUI>
  );
}
