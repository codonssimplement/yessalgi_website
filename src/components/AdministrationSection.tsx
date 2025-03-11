import { useState, useEffect } from 'react';
import { FileCheck, ShieldCheck, Settings, ChevronRight } from 'lucide-react';

const AdministrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('administration');
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
    <section id="administration" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-primary/20 to-orange-primary/40 rounded-2xl blur-lg"></div>
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden relative p-3">
                <img 
                  src="/certifDoc.svg" 
                  alt="Document sécurisé Prooftag" 
                  className="rounded-xl ml-10"
                />
                
                {/* Floating verification badge */}
                <div className="absolute top-8 -right-6 bg-white shadow-lg rounded-lg p-3 w-48 animate-float">
                  <div className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-4" />
                    <div>
                      <div className="text-sm font-medium text-gray-600">Authentification</div>
                      <div className="text-xs text-green-500 font-medium">Vérifiée</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 -left-2 bg-white shadow-lg rounded-lg p-3 w-48 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-sm font-medium text-gray-500 mb-1">Sécurité</div>
                  <div className="text-lg font-bold text-blue-primary">Niveau maximal</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full text-sm font-medium bg-orange-100 text-orange-primary border border-orange-200">
            Banques & Administrations
            </div>
            <h2 className="section-title">
            Garantissez l'Authenticité et l'Intégrité de Vos Documents
            </h2>
            <p className="text-lg text-gray-600 mb-8">
            Dans un monde où la fraude documentaire est en constante évolution, Yessalgi propose une technologie de pointe garantissant l’authenticité, l’intégrité et la traçabilité de vos documents officiels.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-orange-50 rounded-full">
                    <FileCheck className="h-6 w-6 text-orange-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-primary mb-2">Authentification et traçabilité</h3>
                  <p className="text-gray-600">Chaque document est doté d’une signature unique et vérifiable en temps réel, assurant une traçabilité complète tout au long de son cycle de vie.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-orange-50 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-orange-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-primary mb-2">Anti-contrefaçon et anti-falsification</h3>
                  <p className="text-gray-600">Une protection intégrale contre les tentatives de fraude et de copie.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-orange-50 rounded-full">
                    <Settings className="h-6 w-6 text-orange-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-primary mb-2">Solutions sur mesure</h3>
                  <p className="text-gray-600">Nous adaptons cette technologie à tous types de documents (administratifs, académiques, légaux, financiers…) pour répondre aux exigences spécifiques de chaque secteur.</p>
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

export default AdministrationSection;