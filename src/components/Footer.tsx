import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo_yessalgi.png"
                alt="Logo"
                className="h-10 bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-blue-100 mb-4">
            Des technologies avancées pour une gestion optimisée, une sécurité renforcée et une traçabilité <br /> fiable de vos actifs.             </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-orange-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#beweapon" className="text-blue-100 hover:text-white transition-colors">
                Gestion des Armes & Équipements
                </a>
              </li>
              <li>
                <a href="#prooftag" className="text-blue-100 hover:text-white transition-colors">
                Sécurisation des Documents
                </a>
              </li>
              <li>
                <a href="#laundry" className="text-blue-100 hover:text-white transition-colors">
                  Gestion du Linge
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beweapon" className="text-blue-100 hover:text-white transition-colors">
                  Gestion des Armes
                </a>
              </li>
              <li>
                <a href="#beweapon" className="text-blue-100 hover:text-white transition-colors">
                  Traçabilité des Équipements
                </a>
              </li>
              <li>
                <a href="#prooftag" className="text-blue-100 hover:text-white transition-colors">
                  Sécurisation des Documents
                </a>
              </li>
              <li>
                <a href="#prooftag" className="text-blue-100 hover:text-white transition-colors">
                  Anti-Contrefaçon
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Solutions Personnalisées
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@yessalgi.com" className="text-blue-100 hover:text-white transition-colors">
                    info@yessalgi.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+221777124545" className="text-blue-100 hover:text-white transition-colors">
                    +221 77 712 45 45
                  </a>
                </div>
              </li>
              <li className="mt-4">
                <a href="#contact" className="inline-block bg-orange-primary hover:bg-orange-secondary text-white px-4 py-2 rounded-md transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {currentYear} Yessal GI. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Plan du Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;