import { useState, useEffect } from 'react';
import { FileCheck, ShieldCheck, Settings, ChevronRight } from 'lucide-react';

const ComptaSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('compta');
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
    <section id="compta" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-primary/20 to-orange-primary/40 rounded-2xl blur-lg"></div>
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden relative p-1">
                <img 
                  src="/heath.png" 
                  alt="Document sécurisé" 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full text-sm font-medium bg-orange-100 text-orange-primary border border-orange-200">
            Comptabilité des matières 4.0
            </div>
            <h2 className="section-title">
            L’Asset Tracking : Un Atout Majeur pour la Santé</h2>
            <p className="text-lg text-gray-600 mb-8">
            Pour répondre aux exigences de conformité et d’efficacité, Yessalgi propose une solution intégrée de facility management, gestion documentaire et gestion des actifs immobilisés.
Adopté par plus des 2/3 des projets de transformation digitale, l’asset tracking optimise la gestion et la traçabilité des équipements en temps réel. <br /> Ses avantages :            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
               
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                  
                  </div>
                </div>
                <div>
                  <h3 className="text-lg text-gray-400 mb-2"> Optimisation du parc d’outillage et réduction des pertes.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Automatisation des tâches répétitives pour un gain de temps.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Sécurisation des équipements et gestion des flux améliorée.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Meilleures conditions de travail et hausse de la productivité.</h3>
                  
                    <h3 className="text-lg text-gray-400 mb-2"> Suivre et localiser les équipements en temps réel.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Réduire les achats en évitant pertes et doublons.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Assurer l’efficacité du personnel et la sécurité des patients.</h3>
                  
                  {/* <p className="text-gray-600">Suivez chaque équipement de manière précise avec des mises à jour instantanées.</p> */}
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default ComptaSection;