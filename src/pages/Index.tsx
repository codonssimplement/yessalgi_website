import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BeweaponSection from '../components/WeaponsEquipmentSection';
import ProoftagSection from '../components/AdministrationSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer';
import Testimonials from '@/components/LaundrySection';
import LaundrySection from '@/components/LaundrySection';
import WeaponsEquipmentSection from '../components/WeaponsEquipmentSection';
import AdministrationSection from '../components/AdministrationSection';
import ComptaSection from '@/components/ComptaSection';

const Index = () => {
  useEffect(() => {
    // Révéler les éléments au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WeaponsEquipmentSection />
        <AdministrationSection />
        <LaundrySection />
        <ComptaSection />
        <WhyChooseUs />
        <FaqSection />
        <ContactSection />
        <Analytics />
      </main>
      <Footer />
      
      {/* Bouton de retour en haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-blue-primary hover:bg-blue-secondary text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Retour en haut"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;