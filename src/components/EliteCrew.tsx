import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const crew = [
  {
    name: 'Captain James Harlow',
    role: 'Master Captain',
    desc: '25+ years commanding superyachts across 6 oceans. Former Royal Navy officer.',
    initials: 'JH',
  },
  {
    name: 'Chef Isabelle Moreau',
    role: 'Private Chef',
    desc: 'Former head chef at Le Cinq, Paris. Two Michelin stars. Specialist in Mediterranean cuisine.',
    initials: 'IM',
  },
  {
    name: 'Dr. Elena Vasquez',
    role: 'Wellness Director',
    desc: 'Certified holistic therapist. Trained in Bali, Switzerland & Japan. Bespoke wellness programs.',
    initials: 'EV',
  },
];

const EliteCrew = () => {
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
          <p className="luxury-label text-champagne mb-4">The Team</p>
          <h2 className="luxury-heading text-pearl">Elite Crew & Private Chef</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crew.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center bg-champagne/10 border border-champagne/20 group-hover:border-champagne/50 transition-all duration-500">
                <span className="font-display text-2xl font-bold text-champagne">{member.initials}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-pearl mb-1">{member.name}</h3>
              <p className="luxury-label text-champagne/70 text-[11px] mb-4">{member.role}</p>
              <p className="font-body text-pearl/50 text-sm leading-relaxed max-w-sm mx-auto">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EliteCrew;
