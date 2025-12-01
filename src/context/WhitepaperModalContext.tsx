import { createContext, useContext, useState, ReactNode } from "react";
import WhitepaperModal from "@/components/WhitepaperModal";

interface WhitepaperModalContextType {
  open: () => void; // open with current or last selected language
  openWithLang: (lang: string) => void; // open modal using specific language without changing global site language
  close: () => void;
  isOpen: boolean;
  selectedLang: string; // language code used inside modal
}

const WhitepaperModalContext = createContext<WhitepaperModalContextType | undefined>(undefined);

export const WhitepaperModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("en");

  const open = () => setIsOpen(true);
  const openWithLang = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <WhitepaperModalContext.Provider value={{ open, openWithLang, close, isOpen, selectedLang }}>
      {children}
      <WhitepaperModal open={isOpen} onOpenChange={setIsOpen} selectedLang={selectedLang} />
    </WhitepaperModalContext.Provider>
  );
};

export const useWhitepaperModal = () => {
  const context = useContext(WhitepaperModalContext);
  if (!context) {
    throw new Error("useWhitepaperModal must be used within WhitepaperModalProvider");
  }
  return context;
};
