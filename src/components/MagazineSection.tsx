import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    category: 'Lifestyle',
    title: 'The Art of Onboard Entertaining',
    excerpt: 'How the world\'s wealthiest host unforgettable soirées at sea.',
    date: 'Mar 2026',
  },
  {
    category: 'Design',
    title: 'Interior Trends in Superyacht Design',
    excerpt: 'Minimalist luxury meets nautical heritage in the latest yacht interiors.',
    date: 'Feb 2026',
  },
  {
    category: 'Voyages',
    title: 'Hidden Coves of the Aegean',
    excerpt: 'Discover secluded anchorages only accessible by private yacht.',
    date: 'Jan 2026',
  },
];

const MagazineSection = () => {
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
          <p className="luxury-label text-champagne mb-4">Journal</p>
          <h2 className="luxury-heading text-pearl">Yachting Lifestyle</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group cursor-pointer border-t border-champagne/10 pt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="luxury-label text-champagne/50 text-[10px]">{article.category}</span>
                <span className="font-body text-xs text-pearl/30">{article.date}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-pearl mb-3 group-hover:text-champagne transition-colors duration-300">
                {article.title}
              </h3>
              <p className="font-body text-pearl/50 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-1 text-champagne/60 group-hover:text-champagne transition-colors">
                <span className="luxury-label text-[10px]">Read More</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
