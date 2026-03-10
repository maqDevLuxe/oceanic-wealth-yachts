import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Anchor, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CharterPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="bg-ocean-gradient pt-32 pb-20 px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="luxury-label text-champagne mb-4">Book Your Voyage</p>
          <h1 className="luxury-heading text-pearl mb-4">Charter Inquiry</h1>
          <p className="luxury-body text-pearl/60 max-w-2xl mx-auto">
            Complete the form below and our charter specialists will create your bespoke itinerary within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <Anchor className="w-12 h-12 text-champagne mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold text-ocean-deep mb-3">Thank You</h3>
                  <p className="luxury-body text-muted-foreground">Our charter team will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="luxury-label text-ocean-deep/60 text-[10px] mb-2 block">Full Name</label>
                      <input type="text" required className="w-full bg-transparent border-b border-border pb-3 font-body text-ocean-deep focus:border-champagne-dark focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="luxury-label text-ocean-deep/60 text-[10px] mb-2 block">Email</label>
                      <input type="email" required className="w-full bg-transparent border-b border-border pb-3 font-body text-ocean-deep focus:border-champagne-dark focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="luxury-label text-ocean-deep/60 text-[10px] mb-2 block">Preferred Dates</label>
                      <input type="text" placeholder="e.g. July 15 – July 29" className="w-full bg-transparent border-b border-border pb-3 font-body text-ocean-deep placeholder:text-muted-foreground/50 focus:border-champagne-dark focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="luxury-label text-ocean-deep/60 text-[10px] mb-2 block">Number of Guests</label>
                      <input type="number" min="1" max="20" className="w-full bg-transparent border-b border-border pb-3 font-body text-ocean-deep focus:border-champagne-dark focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="luxury-label text-ocean-deep/60 text-[10px] mb-2 block">Destination Preference</label>
                    <input type="text" placeholder="e.g. French Riviera, Maldives" className="w-full bg-transparent border-b border-border pb-3 font-body text-ocean-deep placeholder:text-muted-foreground/50 focus:border-champagne-dark focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="luxury-label text-ocean-deep/60 text-[10px] mb-2 block">Special Requests</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-border pb-3 font-body text-ocean-deep focus:border-champagne-dark focus:outline-none transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-charter self-start mt-4">
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-panel rounded-xl p-8 bg-ocean-deep/[0.03]">
                <h3 className="font-display text-xl font-semibold text-ocean-deep mb-6">Direct Contact</h3>
                <div className="flex flex-col gap-5 text-sm font-body text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-champagne-dark" />
                    <span>+377 98 000 000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-champagne-dark" />
                    <span>charter@azurecrest.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-champagne-dark" />
                    <span>Port Hercule, MC 98000, Monaco</span>
                  </div>
                </div>
                <div className="divider-champagne my-6" />
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Available 24/7 for urgent charter requests. Our team speaks English, French, Arabic, Mandarin & Russian.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-gradient section-padding pb-10">
        <div className="max-w-7xl mx-auto border-t border-champagne/10 pt-8 text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Anchor className="w-5 h-5 text-champagne" />
            <span className="font-display text-lg font-bold text-pearl">AZURE<span className="text-champagne">CREST</span></span>
          </div>
          <p className="font-body text-xs text-pearl/30">© 2026 AzureCrest Yachts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CharterPage;
