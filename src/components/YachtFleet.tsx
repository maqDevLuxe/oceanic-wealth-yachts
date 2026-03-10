import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import yacht1 from '@/assets/yacht-1.jpg';
import yacht2 from '@/assets/yacht-2.jpg';
import yacht3 from '@/assets/yacht-3.jpg';
import yachtInterior from '@/assets/yacht-interior.jpg';

const yachts = [
  { name: 'M/Y Celestial', length: '85m', guests: 12, crew: 28, img: yacht1, price: '€480,000/week' },
  { name: 'M/Y Poseidon', length: '72m', guests: 10, crew: 22, img: yacht2, price: '€350,000/week' },
  { name: 'M/Y Obsidian', length: '62m', guests: 8, crew: 18, img: yacht3, price: '€280,000/week' },
  { name: 'M/Y Serenity', length: '55m', guests: 10, crew: 16, img: yachtInterior, price: '€220,000/week' },
];

const YachtFleet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-ocean-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="luxury-label text-champagne mb-4">The Fleet</p>
            <h2 className="luxury-heading text-pearl">Our Mega Yachts</h2>
          </div>
          <a href="/fleet" className="flex items-center gap-2 luxury-label text-champagne/70 hover:text-champagne transition-colors">
            View All Vessels <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 lg:px-20 scrollbar-hide snap-x snap-mandatory">
        {yachts.map((yacht, i) => (
          <motion.div
            key={yacht.name}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="flex-shrink-0 w-[340px] md:w-[420px] group cursor-pointer snap-start"
          >
            <div className="relative overflow-hidden rounded-lg mb-5">
              <img
                src={yacht.img}
                alt={yacht.name}
                className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="btn-charter text-xs py-2 px-5">View Details</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-semibold text-pearl mb-2">{yacht.name}</h3>
            <div className="flex items-center gap-4 text-pearl/50 text-sm font-body">
              <span>{yacht.length}</span>
              <span className="w-1 h-1 rounded-full bg-champagne/40" />
              <span>{yacht.guests} Guests</span>
              <span className="w-1 h-1 rounded-full bg-champagne/40" />
              <span>{yacht.crew} Crew</span>
            </div>
            <p className="text-champagne font-display text-lg mt-2">{yacht.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default YachtFleet;
