import { useState, useEffect } from 'react';
import { Phone, Mail, Send, Locate } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">Contacter-Nous</h2>
          <p className="text-lg text-gray-600">
            Vous avez des questions sur nos solutions ? Notre équipe est à votre disposition pour vous aider.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer
                    </span>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}
              </div>
            </form>
          </div>
          
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-primary mb-6">Nos Coordonnées</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-blue-primary mr-3 mt-1" />
                      <div>
                        <div className="font-medium">Téléphone</div>
                        <a href="tel:+221777124545" className="text-gray-600 hover:text-blue-primary transition-colors">+221 77 712 45 45</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-blue-primary mr-3 mt-1" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:info@yessalgi.com" className="text-gray-600 hover:text-blue-primary transition-colors">info@yessalgi.com</a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Locate className="h-5 w-5 text-blue-primary mr-3 mt-1" />
                      <div>
                        <div className="font-medium">Siege social</div>
                        <a href="99 sotrac Mermoz" className="text-gray-600 hover:text-blue-primary transition-colors">99 sotrac Mermoz</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-blue-100">
                <h4 className="text-lg font-semibold text-blue-primary mb-4">Horaires d'ouverture</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Lundi - Vendredi : 8h00 - 17h00</p>
                  <p>Samedi - Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;