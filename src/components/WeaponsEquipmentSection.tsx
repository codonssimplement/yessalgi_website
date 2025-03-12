import { useState, useEffect } from 'react';
import { Shield, Clock, FileCheck, ChevronRight } from 'lucide-react';

const WeaponsEquipmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('weapons-equipment');
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
    <section id="weapons-equipment" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block px-2 py-1 mb-4 rounded-full text-sm font-medium bg-blue-50 text-blue-primary border border-blue-100">
            Défense & Sécurité
            </div>
            <h2 className="section-title">
            La Gestion Dématérialisée des Armes et Équipements Militaires
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Yessalgi offre une plateforme intégrée pour la gestion complète de vos armes et équipements, 
              assurant une traçabilité en temps réel et une conformité totale aux réglementations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Clock className="h-6 w-6 text-blue-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-primary mb-2">Traçabilité en temps réel</h3>
                  <p className="text-gray-600">Suivez chaque équipement de manière précise avec des mises à jour instantanées.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Shield className="h-6 w-6 text-blue-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-primary mb-2">Gestion des alertes de maintenance</h3>
                  <p className="text-gray-600">Recevez des notifications automatiques pour les entretiens programmés.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <FileCheck className="h-6 w-6 text-blue-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-primary mb-2">Zéro papier, écologique et efficace</h3>
                  <p className="text-gray-600">Éliminez la paperasserie et optimisez vos processus de gestion.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contactez-nous pour une démo
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#faq" className="text-blue-primary hover:text-orange-primary font-medium transition-colors inline-flex items-center">
                En savoir plus
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-primary/20 to-blue-primary/40 rounded-2xl blur-lg"></div>
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden relative p-3">
                <img 
                  src="/equipement.png" 
                  alt="Interface " 
                  className="rounded-4xl "
                />
                
                {/* Floating stats cards */}
                <div className="absolute top-1 -left-1 bg-white shadow-lg rounded-lg p-3 w-48 animate-float">
                  <div className="text-sm font-bold text-gray-500 mb-1">Équipements suivis:</div>
                  <div className="text-1xl font-bold text-blue-primary">9</div>
                </div>
                
                <div className="absolute bottom-1 -right-6 bg-white shadow-lg rounded-lg p-3 w-48 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-sm font-bold text-gray-500 mb-1">Alertes traitées:</div>
                  <div className="text-1xl font-bold text-orange-primary">98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponsEquipmentSection;