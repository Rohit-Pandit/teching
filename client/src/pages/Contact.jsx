import React from 'react';
import MainLayout from '../components/layout/MainLayout.jsx';

import ContactInfo from '../components/contact/ContactInfo.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import ContactHero from '../components/contact/ContactHero.jsx';


const Contact = () => {
  return (
    <MainLayout>
      <ContactHero />

      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <ContactInfo />

          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;