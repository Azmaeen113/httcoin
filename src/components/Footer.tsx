import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MessageCircle, Twitter, Instagram, Facebook, ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";
import { Button } from "./ui/button";
import { useState } from "react";
import { createEmailLink, createFormEmailBody } from "@/lib/email-utils";

const Footer = () => {
  const { t } = useTranslation();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      const subject = "HTTCoin Newsletter Subscription";
      const body = createFormEmailBody({
        "Email": newsletterEmail,
        "Subscription": "Newsletter",
        "Page": "Footer"
      });
      window.location.href = createEmailLink(subject, body);
      setNewsletterEmail("");
    }
  };

  const footerLinks = {
    quickLinks: [
      { name: t("footer.quick.home"), path: "/" },
      { name: t("footer.quick.about"), path: "/about" },
      { name: t("footer.quick.tokenomics"), path: "/tokenomics" },
      { name: t("footer.quick.howToBuy"), path: "/how-to-buy" },
      { name: t("footer.quick.whitepaper"), path: "/whitepaper" },
      { name: t("footer.quick.blog"), path: "/blog" },
    ],
    resources: [
      { name: t("footer.resources.help"), path: "/help" },
      { name: t("footer.resources.faq"), path: "/faq" },
      { name: t("footer.resources.brand"), path: "/brand" },
      { name: t("footer.resources.media"), path: "/media" },
      { name: t("footer.resources.partnerships"), path: "/partnerships" },
      { name: t("footer.resources.contact"), path: "/contact" },
    ],
    legal: [
      { name: t("footer.legal.terms"), path: "/terms" },
      { name: t("footer.legal.privacy"), path: "/privacy" },
      { name: t("footer.legal.cookies"), path: "/cookies" },
      { name: t("footer.legal.disclaimer"), path: "/disclaimer" },
      { name: t("footer.legal.risk"), path: "/risk" },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: "https://t.me/+AeJTO0M8fRhmNWYx", label: "Telegram" },
    { icon: MessageCircle, href: "https://t.me/httcoin1", label: "Telegram Announcements" },
    { icon: Twitter, href: "https://x.com/coin_httc", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/httcoin1", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583661604184&sk=about", label: "Facebook" },
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
              <span className="text-2xl font-bold gradient-text">HTTCoin</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t("footer.brandTagline")}
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
            <h3 className="text-foreground font-semibold mb-4">{t("footer.quick.title")}</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      if (link.onClick) {
                        link.onClick(e);
                      } else {
                        scrollToTop();
                      }
                    }}
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
            <h3 className="text-foreground font-semibold mb-4">{t("footer.resources.title")}</h3>
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
            <h3 className="text-foreground font-semibold mb-4">{t("footer.legal.title")}</h3>
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
              {t("footer.news.title")}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.news.desc")}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.news.emailPlaceholder") || "Enter your email"}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <Button type="submit" size="sm">{t("footer.news.subscribe")}</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-sm text-muted-foreground text-center md:text-left flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span>{t("footer.bottom.copyright")}</span>
            <span className="flex gap-3 justify-center md:justify-start">
              <a href="mailto:support@httcoin.com" className="hover:text-primary transition-colors">support@httcoin.com</a>
              <span className="text-muted-foreground/50">·</span>
              <a href="mailto:Hotelcoinglobal@gmail.com" className="hover:text-primary transition-colors">Hotelcoinglobal@gmail.com</a>
            </span>
          </p>
          
          <div className="flex items-center gap-4">
            <span>{t("footer.bottom.poweredBy")}</span>
            <span className="text-sm font-semibold text-primary">Solana</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-primary transition-colors"
            aria-label={t("footer.bottom.backToTopAria") || "Back to top"}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
