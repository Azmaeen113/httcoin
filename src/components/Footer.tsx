import { Link } from "react-router-dom";
import { MessageCircle, Twitter, Instagram, Facebook, ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Tokenomics", path: "/tokenomics" },
      { name: "How to Buy", path: "/how-to-buy" },
      { name: "Whitepaper", path: "/whitepaper" },
      { name: "Blog", path: "/blog" },
    ],
    resources: [
      { name: "Help Center", path: "/help" },
      { name: "FAQs", path: "/faq" },
      { name: "Brand Assets", path: "/brand" },
      { name: "Media Kit", path: "/media" },
      { name: "Partnerships", path: "/partnerships" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Risk Warning", path: "/risk" },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: "https://t.me/httcoin1", label: "Telegram" },
    { icon: Twitter, href: "https://twitter.com/httcoin1", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/httcoin1", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/httcoin", label: "Facebook" },
  ];

  return (
    <footer className="relative border-top border-white/5 bg-gradient-to-b from-background via-cyan-900/10 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsla(200,90%,60%,0.15),_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 glass-panel rounded-3xl p-6 border border-white/10">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="HTTCoin" className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold gradient-text">
                HTTCoin
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Revolutionizing travel payments with cryptocurrency. Earn rewards on every journey.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-panel rounded-3xl border border-white/10 p-6 mb-10">
          <div className="max-w-md">
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates about HTTCoin launch and partnerships
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 HTTCoin. All rights reserved. Built with ❤️ for travelers.
          </p>
          
          <div className="flex items-center gap-4">
            <span>Powered by</span>
            <span className="text-sm font-semibold text-primary">Solana</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
