import React from 'react';

import MainLayout from '../components/layout/MainLayout.jsx';
import ServicesHero from '../components/services/ServicesHero.jsx';
import ServicesGrid from '../components/services/ServicesGrid.jsx';
import CTASection from '../components/home/CTASection.jsx';


const Services = () => {
  return (
    <MainLayout>
      <ServicesHero />

      <ServicesGrid />

      <CTASection />
    </MainLayout>
  );
};

export default Services;