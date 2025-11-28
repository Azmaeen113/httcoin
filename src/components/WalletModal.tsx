import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWalletModal } from "@/context/WalletModalContext";
import { Wallet, ShieldCheck } from "lucide-react";

const wallets = [
  {
    name: "Phantom",
    description: "Recommended Solana wallet with mobile + browser support",
    url: "https://phantom.app/",
    badge: "Recommended",
  },
  {
    name: "Solflare",
    description: "Hardware wallet compatible with Ledger",
    url: "https://solflare.com/",
  },
  {
    name: "Trust Wallet",
    description: "Multi-chain mobile wallet with Solana support",
    url: "https://trustwallet.com/",
  },
  {
    name: "WalletConnect",
    description: "Use any WalletConnect-compatible Solana wallet",
    url: "https://walletconnect.com/",
  },
];

const WalletModal = () => {
  const { isOpen, close } = useWalletModal();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (!open ? close() : undefined)}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Wallet className="w-6 h-6 text-primary" />
            Connect Your Wallet
          </DialogTitle>
          <DialogDescription>
            Choose a wallet to connect with HTTCoin. Make sure you&apos;re on the official website before approving any
            transaction.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {wallets.map((wallet) => (
            <a
              key={wallet.name}
              href={wallet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-xl p-4 hover:border-primary/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{wallet.name}</p>
                  <p className="text-sm text-muted-foreground">{wallet.description}</p>
                </div>
                {wallet.badge && (
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {wallet.badge}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-xl bg-muted/40 border border-border p-4 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-semibold">Need help?</p>
            <p className="text-xs text-muted-foreground">
              Learn how wallets work on Solana. Never share your seed phrase or private keys. Support will never DM you.
            </p>
          </div>
        </div>

        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;

