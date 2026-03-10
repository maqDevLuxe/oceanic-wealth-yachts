import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarinaPartners from '@/components/MarinaPartners';
import YachtFleet from '@/components/YachtFleet';
import LuxuryAmenities from '@/components/LuxuryAmenities';
import NauticalMetrics from '@/components/NauticalMetrics';
import Destinations from '@/components/Destinations';
import EliteCrew from '@/components/EliteCrew';
import SunsetBanner from '@/components/SunsetBanner';
import VoyageCounters from '@/components/VoyageCounters';
import MagazineSection from '@/components/MagazineSection';
import PrivacyProtocol from '@/components/PrivacyProtocol';
import GuestReviews from '@/components/GuestReviews';
import CharterCTA from '@/components/CharterCTA';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarinaPartners />
      <YachtFleet />
      <LuxuryAmenities />
      <NauticalMetrics />
      <Destinations />
      <EliteCrew />
      <SunsetBanner />
      <VoyageCounters />
      <MagazineSection />
      <PrivacyProtocol />
      <GuestReviews />
      <CharterCTA />
    </div>
  );
};

export default Index;
