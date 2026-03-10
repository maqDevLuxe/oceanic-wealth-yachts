import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'H.H. Sheikh Al-Maktoum',
    location: 'Dubai, UAE',
    quote: 'An unparalleled experience. The crew anticipated every need before we even realized it ourselves.',
    rating: 5,
  },
  {
    name: 'Victoria Rothschild',
    location: 'Monaco',
    quote: 'Three weeks aboard the Celestial was the most extraordinary vacation of our lives. Truly world-class.',
    rating: 5,
  },
  {
    name: 'Alexander Chen',
    location: 'Hong Kong',
    quote: 'The level of privacy and security gave us peace of mind to fully relax. The chef was exceptional.',
    rating: 5,
  },
];

const GuestReviews = () => {
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
          <p className="luxury-label text-champagne mb-4">Testimonials</p>
          <h2 className="luxury-heading text-pearl">VIP Guest Reviews</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-panel rounded-xl p-8"
              style={{ background: 'hsla(210, 30%, 98%, 0.05)', borderColor: 'hsla(38, 55%, 65%, 0.1)' }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-champagne text-champagne" />
                ))}
              </div>
              <p className="font-display text-lg italic text-pearl/80 mb-6 leading-relaxed">
                "{review.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-pearl">{review.name}</p>
                <p className="font-body text-xs text-pearl/40">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
