import React from 'react';

import AboutHero from '../components/about/AboutHero.jsx';
import WhoWeAre from '../components/about/WhoWeAre.jsx';
import MissionVision from '../components/about/MissionVision.jsx';
import AboutStats from '../components/about/AboutStats.jsx';

import MainLayout from '../components/layout/MainLayout.jsx';

import CTASection from '../components/home/CTASection.jsx';

const About = () => {
  return (
    <MainLayout>
      <AboutHero />

      <WhoWeAre />

      <MissionVision />

      <AboutStats />

      <CTASection />
    </MainLayout>
  );
};

export default About;