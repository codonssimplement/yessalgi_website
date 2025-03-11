import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo_yessalgi.png" alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-blue-primary hover:text-orange-primary font-medium transition-colors">
              Acceuil
            </a>
            <div className="relative group">
              <button className="text-blue-primary hover:text-orange-primary font-medium transition-colors flex items-center">
                Nos solutions
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-1">
                  <a href="#weapons-equipment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gestion des Armements & Équipements</a>
                  <a href="#administration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sécurisation des Documents</a>
                  <a href="#laundry" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gestion du Linge</a>
                  <a href="#compta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Comptabilité des matières 4.0</a>
                </div>
              </div>
            </div>
            <a href="#faq" className="text-blue-primary hover:text-orange-primary font-medium transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            
            <a href="#contact" className="bg-orange-primary hover:bg-orange-secondary text-white px-5 py-2 rounded-md font-medium transition-colors">
              Nous contacter
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden bg-gray-50 p-2 rounded-md"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-blue-primary hover:bg-gray-50">
              Acceuil
            </a>
            <a href="#beweapon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gestion des Armements & Équipements</a>
            <a href="#beweapon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gestion du Linge</a>
            <a href="#prooftag" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sécurisation des Documents</a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-blue-primary hover:bg-gray-50">
              FAQ
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a href="#contact" className="block w-full text-center bg-orange-primary text-white px-5 py-2 rounded-md font-medium">
                Nous contacter
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;