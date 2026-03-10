import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  { value: '32', unit: 'knots', label: 'Maximum Speed' },
  { value: '4,500', unit: 'nm', label: 'Transatlantic Range' },
  { value: '85', unit: 'meters', label: 'Flagship Length' },
  { value: '12', unit: 'guests', label: 'VIP Capacity' },
];

const NauticalMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-ocean-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="luxury-label text-champagne mb-4">Performance</p>
          <h2 className="luxury-heading text-pearl">Nautical Excellence</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">{item.value}</span>
                <span className="font-body text-sm text-champagne/60 uppercase">{item.unit}</span>
              </div>
              <div className="divider-champagne mx-auto mb-3" />
              <p className="luxury-label text-pearl/50">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NauticalMetrics;
