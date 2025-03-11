import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "Comment fonctionne la gestion des armements et équipements militaires ?",
    answer: "Nos solutions assurent un suivi en temps réel des armes et équipements sensibles grâce à des technologies avancées (RFID, IoT). Elles permettent une traçabilité complète, un contrôle d’accès sécurisé et une gestion automatisée des inventaires pour garantir sécurité et conformité."
  },
  {
    question: "Quels sont les dispositifs de sécurisation des documents ?",
    answer: "Nous utilisons des technologies innovantes telles que la chaosmétrie et la traçabilité numérique pour garantir l’authenticité, l’intégrité et l’unicité des documents officiels (diplômes, certificats, documents administratifs). Nos solutions empêchent toute falsification ou contrefaçon."
  },
  {
    question: "Comment fonctionne la traçabilité et la gestion des actifs ?",
    answer: "Nos systèmes de tracking intelligent permettent d’identifier, suivre et gérer les équipements dans différents secteurs (santé, hôtellerie, administration). Grâce à l’asset tracking, les entreprises optimisent leurs flux logistiques et réduisent les pertes."
  },
  {
    question: "Vos solutions respectent-elles les normes de protection des données ?",
    answer: "Oui, nos technologies sont conçues en conformité avec les réglementations locales et internationales en matière de protection des données et de sécurité des systèmes d’information. Nous assurons des mises à jour régulières pour maintenir un haut niveau de conformité."
  },
  {
    question: "Proposez-vous un accompagnement pour l'installation ?",
    answer: "Absolument, nous fournissons un accompagnement complet, de l'installation initiale à la formation de vos équipes. Notre service d'assistance technique reste également disponible pour répondre à vos questions et résoudre rapidement tout problème éventuel."
  },
  {
    question: "Peut-on intégrer vos solutions à nos systèmes existants ?",
    answer: "Oui, Nos solutions respectent les normes les plus strictes en matière de sécurité, protection des données et gestion des équipements sensibles. Conformes aux réglementations en vigueur, elles sont régulièrement mises à jour pour garantir une fiabilité et une conformité optimales."}
];

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq');
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

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <section id="faq" className="section bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">Foire Aux Questions</h2>
          <p className="text-lg text-gray-600">
            Les réponses aux questions les plus fréquemment posées sur nos solutions.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-lg text-blue-primary">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-blue-primary transition-transform duration-300 ${openItem === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openItem === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="#contact" className="btn-primary">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;