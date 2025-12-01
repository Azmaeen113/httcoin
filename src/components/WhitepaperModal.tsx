import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";

interface WhitepaperModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedLang: string; // language override for modal content
}

const WhitepaperModal = ({ open, onOpenChange, selectedLang }: WhitepaperModalProps) => {
  const { t, i18n } = useTranslation();
  // Use a fixed translator so we don't alter global site language
  const tLocal = i18n.getFixedT(selectedLang);
  const dir = selectedLang === "ar" ? "rtl" : "ltr";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-gradient-to-br from-background/95 via-card/90 to-background/95 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-primary/10">
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" dir={dir}>
            {tLocal("whitepaper.title")}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-100px)] px-6 pb-6" dir={dir}>
          <div className="space-y-8 text-foreground/90" dir={dir}>
            {/* Introduction */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.intro.title")}
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                {tLocal("whitepaper.intro.p1")}
              </p>
              <p className="leading-relaxed mt-3 text-sm md:text-base">
                {tLocal("whitepaper.intro.p2")}
              </p>
            </section>

            {/* Vision & Mission */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.vision.title")}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.vision.visionTitle")}
                  </h3>
                  <p className="leading-relaxed text-sm md:text-base">
                    {tLocal("whitepaper.vision.visionText")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.vision.missionTitle")}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-2 text-sm md:text-base">
                    <li>{tLocal("whitepaper.vision.mission1")}</li>
                    <li>{tLocal("whitepaper.vision.mission2")}</li>
                    <li>{tLocal("whitepaper.vision.mission3")}</li>
                    <li>{tLocal("whitepaper.vision.mission4")}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.problem.title")}
              </h2>
              <p className="leading-relaxed mb-3 text-sm md:text-base">
                {tLocal("whitepaper.problem.intro")}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-sm md:text-base">
                <li>{tLocal("whitepaper.problem.item1")}</li>
                <li>{tLocal("whitepaper.problem.item2")}</li>
                <li>{tLocal("whitepaper.problem.item3")}</li>
                <li>{tLocal("whitepaper.problem.item4")}</li>
                <li>{tLocal("whitepaper.problem.item5")}</li>
              </ul>
              <p className="leading-relaxed mt-3 text-sm md:text-base">
                {tLocal("whitepaper.problem.solution")}
              </p>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.solution.title")}
              </h2>
              <p className="leading-relaxed mb-4 text-sm md:text-base">
                {tLocal("whitepaper.solution.intro")}
              </p>
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.solution.payment.title")}
                  </h3>
                  <p className="text-sm md:text-base">{tLocal("whitepaper.solution.payment.desc")}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.solution.rewards.title")}
                  </h3>
                  <p className="text-sm md:text-base">{tLocal("whitepaper.solution.rewards.desc")}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.solution.card.title")}
                  </h3>
                  <p className="text-sm md:text-base mb-2">{tLocal("whitepaper.solution.card.desc")}</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                    <li>{tLocal("whitepaper.solution.card.item1")}</li>
                    <li>{tLocal("whitepaper.solution.card.item2")}</li>
                    <li>{tLocal("whitepaper.solution.card.item3")}</li>
                    <li>{tLocal("whitepaper.solution.card.item4")}</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.solution.marketplace.title")}
                  </h3>
                  <p className="text-sm md:text-base">{tLocal("whitepaper.solution.marketplace.desc")}</p>
                </div>
              </div>
            </section>

            {/* Token Information */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.token.title")}
              </h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li><strong>{tLocal("whitepaper.token.name")}:</strong> HTTCoin</li>
                <li><strong>{tLocal("whitepaper.token.symbol")}:</strong> HTT</li>
                <li><strong>{tLocal("whitepaper.token.supply")}:</strong> 1,000,000,000 HTT</li>
                <li><strong>{tLocal("whitepaper.token.decimals")}:</strong> 9</li>
                <li><strong>{tLocal("whitepaper.token.blockchain")}:</strong> Binance Smart Chain</li>
                <li><strong>{tLocal("whitepaper.token.minting")}:</strong> {tLocal("whitepaper.token.mintingDisabled")}</li>
              </ul>
            </section>

            {/* Token Distribution */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.distribution.title")}
              </h2>
              <div className="space-y-3">
                <div className="bg-card/50 p-3 rounded border border-border">
                  <h3 className="font-semibold text-accent">40% — {tLocal("whitepaper.distribution.public.title")}</h3>
                  <p className="text-sm mt-1">{tLocal("whitepaper.distribution.public.desc")}</p>
                </div>
                <div className="bg-card/50 p-3 rounded border border-border">
                  <h3 className="font-semibold text-accent">20% — {tLocal("whitepaper.distribution.rewards.title")}</h3>
                  <p className="text-sm mt-1">{tLocal("whitepaper.distribution.rewards.desc")}</p>
                </div>
                <div className="bg-card/50 p-3 rounded border border-border">
                  <h3 className="font-semibold text-accent">15% — {tLocal("whitepaper.distribution.team.title")}</h3>
                  <p className="text-sm mt-1">{tLocal("whitepaper.distribution.team.desc")}</p>
                </div>
                <div className="bg-card/50 p-3 rounded border border-border">
                  <h3 className="font-semibold text-accent">10% — {tLocal("whitepaper.distribution.marketing.title")}</h3>
                  <p className="text-sm mt-1">{tLocal("whitepaper.distribution.marketing.desc")}</p>
                </div>
                <div className="bg-card/50 p-3 rounded border border-border">
                  <h3 className="font-semibold text-accent">10% — {tLocal("whitepaper.distribution.liquidity.title")}</h3>
                  <p className="text-sm mt-1">{tLocal("whitepaper.distribution.liquidity.desc")}</p>
                </div>
                <div className="bg-card/50 p-3 rounded border border-border">
                  <h3 className="font-semibold text-accent">5% — {tLocal("whitepaper.distribution.partnerships.title")}</h3>
                  <p className="text-sm mt-1">{tLocal("whitepaper.distribution.partnerships.desc")}</p>
                </div>
              </div>
            </section>

            {/* Burn Strategy */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.burn.title")}
              </h2>
              <p className="leading-relaxed mb-3 text-sm md:text-base">
                {tLocal("whitepaper.burn.intro")}
              </p>
              <ul className="list-none space-y-2 text-sm md:text-base">
                <li>🔥 {tLocal("whitepaper.burn.item1")}</li>
                <li>🔥 {tLocal("whitepaper.burn.item2")}</li>
                <li>🔥 {tLocal("whitepaper.burn.item3")}</li>
              </ul>
              <p className="leading-relaxed mt-3 text-sm md:text-base">
                {tLocal("whitepaper.burn.conclusion")}
              </p>
            </section>

            {/* Roadmap */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.roadmap.title")}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.roadmap.phase1.title")}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm md:text-base">
                    <li>{tLocal("whitepaper.roadmap.phase1.item1")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase1.item2")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase1.item3")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase1.item4")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.roadmap.phase2.title")}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm md:text-base">
                    <li>{tLocal("whitepaper.roadmap.phase2.item1")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase2.item2")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase2.item3")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.roadmap.phase3.title")}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm md:text-base">
                    <li>{tLocal("whitepaper.roadmap.phase3.item1")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase3.item2")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase3.item3")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {tLocal("whitepaper.roadmap.phase4.title")}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm md:text-base">
                    <li>{tLocal("whitepaper.roadmap.phase4.item1")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase4.item2")}</li>
                    <li>{tLocal("whitepaper.roadmap.phase4.item3")}</li>
                  </ul>
                </div>
              </div>
              <p className="leading-relaxed mt-4 text-sm md:text-base">
                {tLocal("whitepaper.roadmap.conclusion")}
              </p>
            </section>

            {/* Utilities */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.utilities.title")}
              </h2>
              <p className="leading-relaxed mb-3 text-sm md:text-base">
                {tLocal("whitepaper.utilities.intro")}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-sm md:text-base">
                <li>{tLocal("whitepaper.utilities.item1")}</li>
                <li>{tLocal("whitepaper.utilities.item2")}</li>
                <li>{tLocal("whitepaper.utilities.item3")}</li>
                <li>{tLocal("whitepaper.utilities.item4")}</li>
                <li>{tLocal("whitepaper.utilities.item5")}</li>
                <li>{tLocal("whitepaper.utilities.item6")}</li>
              </ul>
            </section>

            {/* Why HTTCoin */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.why.title")}
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2 text-sm md:text-base">
                <li>{tLocal("whitepaper.why.item1")}</li>
                <li>{tLocal("whitepaper.why.item2")}</li>
                <li>{tLocal("whitepaper.why.item3")}</li>
                <li>{tLocal("whitepaper.why.item4")}</li>
                <li>{tLocal("whitepaper.why.item5")}</li>
                <li>{tLocal("whitepaper.why.item6")}</li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary" dir={dir}>
                {tLocal("whitepaper.conclusion.title")}
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                {tLocal("whitepaper.conclusion.p1")}
              </p>
              <p className="leading-relaxed mt-3 text-sm md:text-base">
                {tLocal("whitepaper.conclusion.p2")}
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default WhitepaperModal;
