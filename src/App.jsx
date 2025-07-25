import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Precision from '@/components/Precision';
import Expertise from '@/components/Expertise';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieConsent from '@/components/CookieConsent';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dr. Yash Madaan - Best Prosthodontist Consultant in Delhi NCR</title>
        <meta name="description" content="Dr. Yash Madaan (BDS, MDS) is a top-rated Prosthodontist in Delhi NCR, specializing in smile makeovers, dental implants, veneers, and full-mouth rehabilitation. Combining art, science, and AI-driven precision for your perfect smile." />
        <meta name="keywords" content="Prosthodontist Delhi NCR, Best Prosthodontist Delhi, Dental Implants Delhi, Smile Design India, Dr Yash Madaan, Veneers, Full-Mouth Rehabilitation, Maxillofacial Prosthetics, TMJ Therapy, ArogyaLens" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <body className="dark" />
      </Helmet>

      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground antialiased relative">
        <div className="aurora-bg"></div>
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Precision />
          <Expertise />
          <Philosophy />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
        <Toaster />
      </div>
    </>
  );
}

export default App;