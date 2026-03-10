import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  'Lürssen', 'Benetti', 'Feadship', 'Oceanco', 'Heesen', 'Azimut', 'Sunseeker', 'Ferretti'
];

const MarinaPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-pearl">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="luxury-label text-muted-foreground mb-12"
        >
          Trusted Marina & Shipyard Partners
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, i) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="font-display text-xl md:text-2xl font-semibold text-ocean-deep/30 hover:text-ocean-deep/70 transition-colors duration-500 cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarinaPartners;
