import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import AboutSection from '@/components/sections/AboutSection';
import ServiceOverview from '@/components/sections/ServiceOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import StatsSection from '@/components/sections/StatsSection';
import CTABand from '@/components/sections/CTABand';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutSection />
      <ServiceOverview />
      <WhyChooseUs />
      <StatsSection />
      <CTABand />
    </>
  );
}
