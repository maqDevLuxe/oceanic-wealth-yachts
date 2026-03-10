import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Anchor, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CharterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      {/* CTA Section */}
      <section ref={ref} className="section-padding bg-pearl text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="luxury-label text-champagne-dark mb-4">Begin Your Journey</p>
            <h2 className="luxury-heading text-ocean-deep mb-6">
              Ready to Charter Your Dream Voyage?
            </h2>
            <p className="luxury-body text-muted-foreground mb-10 max-w-xl mx-auto">
              Our charter specialists are available 24/7 to craft your perfect itinerary. Every detail, every desire — meticulously planned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/charter" className="btn-charter">
                Request a Charter
              </Link>
              <a href="tel:+377000000" className="btn-ghost-luxury border-ocean-deep/20 text-ocean-deep hover:bg-ocean-deep/5">
                <Phone className="w-4 h-4" /> +377 98 000 000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-gradient section-padding pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Anchor className="w-6 h-6 text-champagne" />
                <span className="font-display text-xl font-bold text-pearl">
                  AZURE<span className="text-champagne">CREST</span>
                </span>
              </div>
              <p className="font-body text-sm text-pearl/40 leading-relaxed">
                The world's premier luxury yacht charter company. Sailing since 1987.
              </p>
            </div>

            <div>
              <h4 className="luxury-label text-champagne/60 text-[11px] mb-6">Navigate</h4>
              <div className="flex flex-col gap-3">
                {['Home', 'Fleet', 'Destinations', 'Charter'].map((item) => (
                  <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="font-body text-sm text-pearl/50 hover:text-champagne transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="luxury-label text-champagne/60 text-[11px] mb-6">Contact</h4>
              <div className="flex flex-col gap-3 text-pearl/50 text-sm font-body">
                <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +377 98 000 000</span>
                <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> charter@azurecrest.com</span>
                <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Port Hercule, Monaco</span>
              </div>
            </div>

            <div>
              <h4 className="luxury-label text-champagne/60 text-[11px] mb-6">Legal</h4>
              <div className="flex flex-col gap-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <span key={item} className="font-body text-sm text-pearl/50 hover:text-champagne transition-colors cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-champagne/10 pt-8 text-center">
            <p className="font-body text-xs text-pearl/30">
              © 2026 AzureCrest Yachts. All rights reserved. Registered in Monaco.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CharterCTA;
