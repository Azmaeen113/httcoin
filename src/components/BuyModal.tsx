import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BuyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const links = [
  {
    name: "Raydium",
    href: "https://raydium.io/liquidity-pools/?token=JAiHV54DDrRLKXHx5QeDzyo1nTffUB3GD8WYuuS13vaV",
    img: "/raydium.png",
    bg: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Dexscreener",
    href: "https://dexscreener.com/solana/7pjy2ax1szqt472rxekg7zypanc5ptd3tm1bfcu9ztll",
    img: "/dexscreener.jpg",
    bg: "from-purple-500/20 to-indigo-500/20",
  },
];

const BuyModal = ({ open, onOpenChange }: BuyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-border bg-background/80 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Buy HTTCoin
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <p className="text-sm text-muted-foreground">
            Choose a platform to proceed. You’ll be redirected to the selected site.
          </p>
          <div className="flex items-center justify-center gap-8">
            {links.map((l, idx) => (
              <motion.a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className={`w-28 h-28 rounded-full overflow-hidden border border-white/20 bg-gradient-to-br ${l.bg} shadow-lg hover:shadow-xl transition-transform group-hover:scale-105`}> 
                  <img src={l.img} alt={l.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-center mt-2 text-sm font-medium">{l.name}</p>
              </motion.a>
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuyModal;