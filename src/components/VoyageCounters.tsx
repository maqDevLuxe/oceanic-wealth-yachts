import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { target: 850, suffix: '+', label: 'Voyages Completed' },
  { target: 42, suffix: '', label: 'Countries Explored' },
  { target: 15, suffix: 'K+', label: 'Nautical Miles' },
  { target: 100, suffix: '%', label: 'Client Satisfaction' },
];

const Counter = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
      {count}{suffix}
    </span>
  );
};

const VoyageCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-pearl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <Counter target={stat.target} suffix={stat.suffix} isInView={isInView} />
              <div className="divider-champagne mx-auto my-4" />
              <p className="luxury-label text-ocean-deep/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoyageCounters;
