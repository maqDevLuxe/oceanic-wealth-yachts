import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import CharterCTA from '@/components/CharterCTA';
import { MapPin, Calendar, Thermometer } from 'lucide-react';
import riviera from '@/assets/destination-riviera.jpg';
import maldives from '@/assets/destination-maldives.jpg';
import yacht2 from '@/assets/yacht-2.jpg';

const destinations = [
  {
    name: 'French Riviera',
    subtitle: 'Monaco · Cannes · Saint-Tropez · Antibes',
    desc: 'The legendary Côte d\'Azur offers the most glamorous yachting in the Mediterranean. Explore historic ports, world-class cuisine, and the iconic blue waters.',
    img: riviera,
    season: 'May – October',
    temp: '24–30°C',
  },
  {
    name: 'The Maldives',
    subtitle: 'Malé · Baa Atoll · Ari Atoll · Lhaviyani',
    desc: 'Pristine atolls, bioluminescent waters, and unparalleled marine biodiversity. The ultimate tropical yacht escape.',
    img: maldives,
    season: 'November – April',
    temp: '28–32°C',
  },
  {
    name: 'Greek Islands',
    subtitle: 'Mykonos · Santorini · Crete · Corfu',
    desc: 'Ancient history meets crystal-clear Aegean waters. Island-hop through whitewashed villages and hidden coves.',
    img: yacht2,
    season: 'June – September',
    temp: '25–33°C',
  },
];

const DestinationsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="bg-ocean-gradient pt-32 pb-20 px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="luxury-label text-champagne mb-4">Explore</p>
          <h1 className="luxury-heading text-pearl mb-4">Destinations</h1>
          <p className="luxury-body text-pearl/60 max-w-2xl mx-auto">
            Discover the world's most coveted yachting destinations, each offering a unique experience.
          </p>
        </motion.div>
      </section>

      <section className="section-padding bg-pearl">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
            >
              <div className="lg:w-1/2">
                <img src={dest.img} alt={dest.name} className="w-full h-[400px] object-cover rounded-xl" />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-champagne-dark" />
                  <span className="luxury-label text-champagne-dark text-[11px]">{dest.subtitle}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ocean-deep mb-4">{dest.name}</h2>
                <p className="luxury-body text-muted-foreground mb-6">{dest.desc}</p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Calendar className="w-4 h-4 text-champagne-dark" /> {dest.season}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Thermometer className="w-4 h-4 text-champagne-dark" /> {dest.temp}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CharterCTA />
    </div>
  );
};

export default DestinationsPage;
