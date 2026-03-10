import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import CharterCTA from '@/components/CharterCTA';
import yacht1 from '@/assets/yacht-1.jpg';
import yacht2 from '@/assets/yacht-2.jpg';
import yacht3 from '@/assets/yacht-3.jpg';
import yachtInterior from '@/assets/yacht-interior.jpg';

const yachts = [
  { name: 'M/Y Celestial', length: '85m', guests: 12, crew: 28, img: yacht1, price: '€480,000/week', year: 2023, builder: 'Lürssen' },
  { name: 'M/Y Poseidon', length: '72m', guests: 10, crew: 22, img: yacht2, price: '€350,000/week', year: 2022, builder: 'Feadship' },
  { name: 'M/Y Obsidian', length: '62m', guests: 8, crew: 18, img: yacht3, price: '€280,000/week', year: 2024, builder: 'Oceanco' },
  { name: 'M/Y Serenity', length: '55m', guests: 10, crew: 16, img: yachtInterior, price: '€220,000/week', year: 2021, builder: 'Benetti' },
];

const FleetPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="bg-ocean-gradient pt-32 pb-20 px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="luxury-label text-champagne mb-4">Our Collection</p>
          <h1 className="luxury-heading text-pearl mb-4">The Fleet</h1>
          <p className="luxury-body text-pearl/60 max-w-2xl mx-auto">
            Each vessel in our fleet represents the pinnacle of maritime engineering and luxury design.
          </p>
        </motion.div>
      </section>

      {/* Fleet Grid */}
      <section className="section-padding bg-pearl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {yachts.map((yacht, i) => (
            <motion.div
              key={yacht.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img src={yacht.img} alt={yacht.name} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ocean-deep">{yacht.name}</h2>
                  <p className="font-body text-sm text-muted-foreground mt-1">{yacht.builder} · {yacht.year} · {yacht.length}</p>
                  <div className="flex gap-4 mt-3 text-sm text-muted-foreground font-body">
                    <span>{yacht.guests} Guests</span>
                    <span>{yacht.crew} Crew</span>
                  </div>
                </div>
                <p className="font-display text-xl font-semibold text-champagne-dark">{yacht.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CharterCTA />
    </div>
  );
};

export default FleetPage;
