import { useState, useEffect } from 'react';
import { Flag, Cpu, Users, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-choose-us');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-choose-us" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">Pourquoi Choisir Nos Solutions ?</h2>
          <p className="text-lg text-gray-600">
            Des solutions innovantes conçues pour offrir une sécurité maximale et une gestion efficace de vos équipements et documents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`card hover:translate-y-[-8px] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Flag className="h-8 w-8 text-blue-primary" />
            </div>
            <h3 className="text-xl font-bold text-blue-primary mb-3">Expertise Nationale</h3>
            <p className="text-gray-600">
              Nos solutions sont conçues et fabriquées localement, garantissant une qualité et une fiabilité exceptionnelles.
            </p>
          </div>
          
          <div className={`card hover:translate-y-[-8px] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Cpu className="h-8 w-8 text-blue-primary" />
            </div>
            <h3 className="text-xl font-bold text-blue-primary mb-3">Technologies Innovantes</h3>
            <p className="text-gray-600">
              Notre technologie RFID et la chaosmétrie offrent une sécurité de pointe pour vos actifs.
            </p>
          </div>
          
          <div className={`card hover:translate-y-[-8px] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-primary" />
            </div>
            <h3 className="text-xl font-bold text-blue-primary mb-3">Accompagnement Personnalisé</h3>
            <p className="text-gray-600">
              Notre équipe vous accompagne à chaque étape, de l'installation à la formation, pour une intégration parfaite.
            </p>
          </div>
          
          <div className={`card hover:translate-y-[-8px] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Wrench className="h-8 w-8 text-blue-primary" />
            </div>
            <h3 className="text-xl font-bold text-blue-primary mb-3">Solutions Évolutives</h3>
            <p className="text-gray-600">
              Nos systèmes s'adaptent à vos besoins spécifiques et évoluent avec votre organisation.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Contactez-nous pour en savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;