import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ColourfulText from "@/components/ui/colourful-text";
import { createEmailLink, createFormEmailBody } from "@/lib/email-utils";
import { GlareCard } from "@/components/ui/glare-card";
import debitCardBack from "@/assets/debit-card-back.jpeg";

const articles = [
  {
    id: 1,
    title: "Flagship Travel Partner + HTTCoin: What travelers can expect",
    category: "Announcements",
    excerpt: "A deep dive into the flagship airline partnership launching in Q2 2026.",
    author: "HTTCoin Team",
    date: "Nov 12, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=60",
    content:
      "HTTCoin is teaming up with a flagship travel partner to unlock perks for debit card holders, including lounge access, priority boarding, and HTTC cashback on flights...",
  },
  {
    id: 2,
    title: "Beginner’s guide: Swapping SOL to HTTC on Raydium",
    category: "Crypto Education",
    excerpt: "Step-by-step walkthrough covering fees, slippage, and wallet safety.",
    author: "Amelia Cruise",
    date: "Nov 10, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=60",
    content:
      "Buying HTTCoin takes less than 5 minutes when you follow these wallet tips and transaction optimizations...",
  },
  {
    id: 3,
    title: "Top 10 beach destinations that will accept HTTC",
    category: "Travel Guides",
    excerpt: "From Maldives to Ibiza, discover sandy escapes ready for HTTCoin.",
    author: "Nathan Explorer",
    date: "Nov 8, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
    content:
      "We curated the most requested resort locations for HTTC acceptance, aligned with our partner rollout roadmap...",
  },
  {
    id: 4,
    title: "Why Solana powers the HTTCoin ecosystem",
    category: "Technical Updates",
    excerpt: "Speed, energy efficiency, and low fees make Solana ideal for travel payments.",
    author: "Dev Rel",
    date: "Nov 5, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60",
    content:
      "HTTCoin leverages Solana's throughput to ensure instant settlement, low transaction fees, and eco-friendly operations...",
  },
];

const categories = ["All Posts", "Announcements", "Travel Guides", "Crypto Education", "Partnership News", "Community Spotlights", "Technical Updates"];

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Posts");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[number] | null>(null);
  const [blogEmail, setBlogEmail] = useState("");

  const handleBlogSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (blogEmail) {
      const subject = "HTTCoin Blog Newsletter Subscription";
      const body = createFormEmailBody({
        "Email": blogEmail,
        "Subscription": "Blog Newsletter",
        "Page": "Blog Page"
      });
      window.location.href = createEmailLink(subject, body);
      setBlogEmail("");
    }
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All Posts" || article.category === category;
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="bg-background">
      <section className="relative py-24 px-4 overflow-hidden -mt-20 lg:-mt-24 pt-32 lg:pt-36">
        {/* Animated gradient background - swapped from destination page */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-background to-teal-600/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(20,184,166,0.25),transparent_60%)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[18%] left-[8%] w-36 h-36 rounded-full bg-gradient-to-br from-emerald-400/50 to-teal-500/20 blur-2xl"
          animate={{
            y: [0, -28, 0],
            x: [0, 22, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[58%] right-[12%] w-42 h-42 rounded-full bg-gradient-to-br from-teal-400/40 to-emerald-500/20 blur-2xl"
          animate={{
            y: [0, 32, 0],
            x: [0, -17, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 11.5,
            repeat: Infinity,
            delay: 1.8,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary"><ColourfulText text="HTTCoin" /> Newsroom</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Latest from <ColourfulText text="HTTCoin" /></h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Updates, travel inspiration, and crypto education for explorers building the future of borderless travel.
            </p>
            <div className="max-w-xl">
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 md:h-14 text-base md:text-lg"
              />
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <GlareCard className="relative overflow-hidden w-full max-w-md mx-auto">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
                <img
                  src={debitCardBack}
                  alt="HTTCoin Blog"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                />
              </div>
            </GlareCard>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {featured && (
            <article className="rounded-3xl overflow-hidden border border-border">
              <img src={featured.image} alt={featured.title} className="w-full h-80 object-cover" />
              <div className="p-6 space-y-3">
                <p className="text-sm text-primary">{featured.category}</p>
                <h2 className="text-3xl font-bold">{featured.title}</h2>
                <p className="text-muted-foreground">{featured.excerpt}</p>
                <div className="text-xs text-muted-foreground">
                  {featured.author} · {featured.date} · {featured.readTime}
                </div>
                <Button onClick={() => setSelectedArticle(featured)}>Read More</Button>
              </div>
            </article>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((article) => (
              <article key={article.id} className="border border-border rounded-3xl overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                <div className="p-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{article.category}</p>
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(article)}>
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="border border-border rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={cat === category ? "default" : "outline"}
                  onClick={() => setCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-3xl p-6">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get launch announcements and travel inspiration straight to your inbox.</p>
            <form onSubmit={handleBlogSubscribe} className="space-y-3">
              <Input 
                type="email"
                placeholder="Email address"
                value={blogEmail}
                onChange={(e) => setBlogEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </aside>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedArticle.title}</DialogTitle>
              </DialogHeader>
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded-2xl" />
              <p className="text-sm text-muted-foreground">
                {selectedArticle.author} · {selectedArticle.date} · {selectedArticle.readTime}
              </p>
              <p className="text-sm mt-4">{selectedArticle.content}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogPage;

