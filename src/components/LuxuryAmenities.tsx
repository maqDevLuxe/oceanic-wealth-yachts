import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Waves, Wine, Music, Dumbbell, Shield } from 'lucide-react';

const amenities = [
  { icon: Utensils, title: 'Private Chef', desc: 'Michelin-star trained chefs crafting bespoke menus' },
  { icon: Waves, title: 'Infinity Pool', desc: 'Heated glass-bottom pools with panoramic ocean views' },
  { icon: Wine, title: 'Wine Cellar', desc: 'Curated vintage collections from premier vineyards' },
  { icon: Music, title: 'Entertainment', desc: 'Cinema rooms, DJ booths & underwater lounges' },
  { icon: Dumbbell, title: 'Wellness Spa', desc: 'Full gym, sauna, cryotherapy & onboard masseuse' },
  { icon: Shield, title: 'Security', desc: '24/7 maritime security with ex-military professionals' },
];

const LuxuryAmenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-pearl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="luxury-label text-champagne-dark mb-4">Onboard Experience</p>
          <h2 className="luxury-heading text-ocean-deep">Luxury Amenities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 rounded-xl border border-border hover:border-champagne/40 bg-card transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-ocean-deep/5 group-hover:bg-champagne/10 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-champagne-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ocean-deep mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAmenities;
