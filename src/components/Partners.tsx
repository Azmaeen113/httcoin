import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Building2, MapPin, Ship, Calendar, Briefcase } from "lucide-react";
import qatarAirways from "@/assets/qatar-airways.jpeg"; // Placeholder image while specific partner remains confidential

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const upcomingPartners = [
    { icon: Building2, name: "Hotel Chains", description: "Global hospitality networks" },
    { icon: MapPin, name: "Travel Platforms", description: "Booking & discovery" },
    { icon: Ship, name: "Cruise Lines", description: "Ocean experiences" },
    { icon: Calendar, name: "Tour Operators", description: "Guided adventures" },
    { icon: Briefcase, name: "Business Travel", description: "Corporate solutions" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
            Building the Future
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Future Partnerships
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            HTTCoin is actively partnering with leading travel brands worldwide to create a seamless global ecosystem.
          </p>
        </motion.div>

  {/* Featured Partner (placeholder) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            
            <div className="relative bg-card border-2 border-accent/30 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                {/* Text */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Plane className="w-8 h-8 text-accent" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      Strategic Partnership
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Hotel and Airways
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    Official travel partnership placeholder launching Q2 2026. Exclusive benefits for HTTCoin holders including priority booking, bonus rewards, and special fares.
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="px-4 py-2 bg-accent/20 rounded-lg">
                      <div className="text-sm text-muted-foreground">Launch</div>
                      <div className="text-lg font-bold text-accent">Q2 2026</div>
                    </div>
                    <div className="px-4 py-2 bg-primary/20 rounded-lg">
                      <div className="text-sm text-muted-foreground">Network</div>
                      <div className="text-lg font-bold text-primary">160+ Cities</div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-2xl" />
                    <img 
                      src={qatarAirways} 
                      alt="Hotel and Airways Partnership" 
                      className="relative rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Partners Grid */}
        <div>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            More Partnerships Coming Soon
          </motion.h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {upcomingPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative bg-card border border-border hover:border-primary/50 rounded-xl p-6 text-center transition-colors duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                  <div className="mt-4 text-xs text-accent font-semibold">Coming Soon</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want to partner with HTTCoin?
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
