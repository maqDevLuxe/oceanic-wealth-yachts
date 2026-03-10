import sunsetOcean from '@/assets/sunset-ocean.jpg';

const SunsetBanner = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <img
        src={sunsetOcean}
        alt="Golden sunset over the ocean with luxury yacht silhouette"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ocean-deep/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-pearl text-center italic leading-tight px-6">
          "The ocean stirs the heart,<br />inspires the imagination"
        </p>
      </div>
    </section>
  );
};

export default SunsetBanner;
