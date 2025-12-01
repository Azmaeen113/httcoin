import { createContext, useContext, useState, ReactNode } from "react";
import BuyModal from "@/components/BuyModal";

interface BuyModalContextType {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const BuyModalContext = createContext<BuyModalContextType | undefined>(undefined);

export const BuyModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <BuyModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <BuyModal open={isOpen} onOpenChange={setIsOpen} />
    </BuyModalContext.Provider>
  );
};

export const useBuyModal = () => {
  const ctx = useContext(BuyModalContext);
  if (!ctx) throw new Error("useBuyModal must be used within BuyModalProvider");
  return ctx;
};