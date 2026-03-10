import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import riviera from '@/assets/destination-riviera.jpg';
import maldives from '@/assets/destination-maldives.jpg';

const destinations = [
  {
    name: 'French Riviera',
    subtitle: 'Monaco · Cannes · Saint-Tropez',
    description: 'Cruise the legendary Côte d\'Azur with stops at the most exclusive ports in the Mediterranean.',
    img: riviera,
  },
  {
    name: 'The Maldives',
    subtitle: 'Malé · Baa Atoll · Ari Atoll',
    description: 'Discover untouched atolls and private island paradises in the Indian Ocean.',
    img: maldives,
  },
];

const Destinations = () => {
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
          <p className="luxury-label text-champagne-dark mb-4">Destinations</p>
          <h2 className="luxury-heading text-ocean-deep">Iconic Voyages</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-champagne" />
                  <span className="luxury-label text-champagne text-[11px]">{dest.subtitle}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-pearl mb-3">{dest.name}</h3>
                <p className="font-body text-pearl/60 max-w-md">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
