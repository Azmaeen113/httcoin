import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Moon, Sun } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import ColourfulText from "@/components/ui/colourful-text";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useWalletModal } from "@/context/WalletModalContext";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

const desktopMenu = [
  { label: "Home", path: "/" },
  { label: "Tokenomics", path: "/tokenomics" },
  { label: "Debit Card", path: "/debit-card" },
  { label: "Destinations", path: "/destinations" },
  { label: "Partnerships", path: "/partnerships" },
  { label: "How to Buy", path: "/how-to-buy" },
  { label: "Whitepaper", path: "/whitepaper" },
  { label: "Blog", path: "/blog" },
];

const languages = ["EN", "ES", "FR", "ZH", "AR"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [hovered, setHovered] = useState<number | null>(null);
  const { open } = useWalletModal();
  const location = useLocation();

  const navItems = desktopMenu.map(item => ({
    name: item.label,
    link: item.path,
  }));

  useEffect(() => {
    const storedTheme = (window.localStorage.getItem("httcoin-theme") as "light" | "dark" | null) ?? "dark";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("httcoin-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link to="/" className="flex items-center gap-3 group relative z-20 flex-shrink-0" onClick={handleNavClick}>
            <img src={logo} alt="HTTCoin" className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <ColourfulText text="HTTCoin" />
            </span>
          </Link>

          {/* Custom Nav Items with Active State */}
          <div 
            onMouseLeave={() => setHovered(null)}
            className="flex flex-row items-center justify-center space-x-1 text-sm font-medium mx-4"
          >
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={`link-${idx}`}
                  to={item.link}
                  onMouseEnter={() => setHovered(idx)}
                  onClick={handleNavClick}
                  className="relative px-3 py-2 text-neutral-600 dark:text-neutral-300 transition-all duration-300 ease-in-out hover:text-foreground whitespace-nowrap"
                >
                  {(hovered === idx || isActive) && (
                    <div
                      className={`absolute inset-0 h-full w-full rounded-full ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary/30 to-accent/30 dark:from-primary/40 dark:to-accent/40' 
                          : 'bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30'
                      }`}
                      style={{
                        animation: isActive ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none'
                      }}
                    />
                  )}
                  <span className={`relative z-20 ${isActive ? 'font-semibold text-foreground' : ''}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 relative z-20 flex-shrink-0">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[90px]">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button variant="outline" onClick={open} className="hidden xl:flex">
              Connect Wallet
            </Button>

            <Link to="/how-to-buy" onClick={handleNavClick}>
              <Button className="shadow-lg shadow-primary/30">
                Buy HTT
              </Button>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link to="/" className="flex items-center gap-3 group" onClick={() => { setIsOpen(false); handleNavClick(); }}>
              <img src={logo} alt="HTTCoin" className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <ColourfulText text="HTTCoin" />
              </span>
            </Link>
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={() => {
                    setIsOpen(false);
                    handleNavClick();
                  }}
                  className={`relative text-lg font-medium transition-colors ${
                    isActive 
                      ? 'text-primary font-bold' 
                      : 'text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  <span className="block">{item.name}</span>
                </Link>
              );
            })}
            <div className="flex w-full flex-col gap-4 pt-4">
              <div className="flex gap-3">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={toggleTheme} className="flex-1">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </Button>
              </div>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  open();
                }}
                variant="outline"
                className="w-full"
              >
                Connect Wallet
              </Button>
              <Link to="/how-to-buy" onClick={() => { setIsOpen(false); handleNavClick(); }}>
                <Button className="w-full shadow-lg shadow-primary/30">
                  Buy HTT
                </Button>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navigation;
