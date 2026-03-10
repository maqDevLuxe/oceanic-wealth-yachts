import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Eye, Lock, Radio } from 'lucide-react';

const protocols = [
  { icon: ShieldCheck, title: 'NDA-Protected Crew', desc: 'Every crew member signs comprehensive non-disclosure agreements.' },
  { icon: Eye, title: 'Counter-Surveillance', desc: 'Advanced electronic sweeps and signal jamming capabilities onboard.' },
  { icon: Lock, title: 'Secure Communications', desc: 'Military-grade encrypted satellite communications for all guests.' },
  { icon: Radio, title: 'Discreet Embarkation', desc: 'Private helipad transfers and unmarked tender services.' },
];

const PrivacyProtocol = () => {
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
          <p className="luxury-label text-champagne-dark mb-4">Discretion</p>
          <h2 className="luxury-heading text-ocean-deep">Privacy & Paparazzi Shield</h2>
          <p className="luxury-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Your privacy is paramount. Our multi-layered security protocols ensure complete anonymity at sea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {protocols.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-ocean-deep/5">
                <item.icon className="w-7 h-7 text-ocean-deep" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ocean-deep mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyProtocol;
