import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/home/Hero.jsx";
import TrustedPartners from "../components/home/TrustedPartners.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import CTASection from "../components/home/CTASection.jsx";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TrustedPartners />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  );
}