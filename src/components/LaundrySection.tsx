
import { useState, useEffect } from 'react';
import { Shield, Clock, FileCheck, ChevronRight } from 'lucide-react';

const LaundrySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('laundry');
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
    <section id="laundry" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full text-sm font-medium bg-blue-50 text-blue-primary border border-blue-100">
              Hôtellerie
            </div>
            <h2 className="section-title">
              La Solution Complète pour la Gestion du Linge
            </h2>
            <p className="text-lg text-gray-600 mb-8">
            L'utilisation des technologies de l'IoT dans le secteur hotelier prend une place de plus en plus importante avec notamment la mise en place de solutions innovantes dont l'objectif est d’obtenir une meilleure visibilité des processus liés aux textiles. Yessalgi  rend  votre textile intelligent  dans le but d’optimiser et contrôler la traçabilité de votre linge.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                  
                  </div>
                </div>
                <div>
                  <h3 className="text-lg text-gray-400 mb-2"> Réduction du temps d'inventaire et de la main d'œuvre.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Amélioration du contrôle et des économies au sein du processus de blanchisserie.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Augmentation de la durée de vie du linge de maison et des serviettes.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Amélioration du contrôle du processus d'enregistrement et de sortie.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Réduction des vols et des pertes de linge et de serviettes.</h3>
                  <h3 className="text-lg text-gray-400 mb-2"> Amélioration du service à la clientèle.</h3>
                  {/* <p className="text-gray-600">Suivez chaque équipement de manière précise avec des mises à jour instantanées.</p> */}
                </div>
              </div>
              
              {/* <div className="flex items-start">
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
              </div>*/}
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
                  src="/laundry.svg" 
                  alt="Interface BE.Weapon" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Floating stats cards */}
                <div className="absolute top-1 -right-3 bg-white shadow-lg rounded-lg p-3 w-48 animate-float">
                  <div className="text-sm   text-gray-500 mb-1">Serviettes : <p className="text-orange-secondary">1724 pièces</p></div>
                  <div className="text-sm   text-gray-500 mb-1">Peignoirs : <p className="text-orange-secondary">201 pièces</p></div>
                  <div className="text-sm   text-gray-500 mb-1">Draps : <p className="text-orange-secondary">632 pièces</p></div>

                </div>
                
                <div className="absolute bottom-1 -left-1 bg-white shadow-lg rounded-lg p-3 w-48 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-sm font-bold text-gray-500 ">Alertes traitées : </div>
                  <div className="text-xl font-bold text-orange-primary">93%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaundrySection;