import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 z-0"></div>
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-left ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full text-sm font-medium bg-blue-50 text-blue-primary border border-blue-100">
            💡 La traçabilité au service de votre performance.
            </div>
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-blue-primary mb-6 leading-tight">
            Vos actifs sont tracés connectés et sécurisés...
            </h1>
            <p className="text-lg md:text-lg text-gray-600 mb-8 max-w-lg">
            Nous concevons et intégrons des solutions de traçabilité sur mesure pour assurer un suivi précis et sécurisé des équipements hospitaliers, militaires, administratifs et hôteliers. Grâce à notre expertise en RFID, codes-barres, QR codes et RTLS, nous garantissons une gestion optimisée et une visibilité totale de vos actifs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#weapons-equipment" className="btn-primary">
              Découvrez nos solutions
                <ChevronRight className="ml-2 h-3 w-3" />
              </a>
              <a href="#contact" className="btn-secondary">
              Demander une démonstration
                <ChevronRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-primary to-orange-primary rounded-2xl blur opacity-30 animate-pulse"></div>
              <p className="text-sm  mb-0">SMART TRACEABILITY...</p>
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden relative p-2">
                <img 
                  src="/tracking.svg" 
                  alt="Interface de gestion des équipements" 
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-primary/10 rounded-full animate-float"></div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-primary/10 rounded-full animate-float"></div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <br /> <br /><p className="text-1xl font mb-4">NOS SECTEURS</p>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Défense & Sécurité | Santé | Éducation | Hôtellerie</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-2xl text-gray-800 ">
           <span>Notre approche est transversale car nous adaptons la traçabilité à tous les secteurs, en intégrant des outils performants pour améliorer la visibilité, réduire les pertes et <br />optimiser les processus.
       Avec <em> Yessalgi</em><br /> tout est visible, connecté et maîtrisé.

</span> 
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;