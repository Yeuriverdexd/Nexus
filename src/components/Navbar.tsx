import React, { useState } from 'react';
import { Menu, X, Code, User } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Cotizar', href: '#quote' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 gradient-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="img/FunFest.png" className="h-18 w-40" alt="LogoImg" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onLoginClick}
              className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Iniciar Sesión</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="flex items-center px-3 py-1 bg-white text-blue-600 rounded-full hover:bg-opacity-90 transition-colors"
            >
              <User className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-[#0e0352] to-[#0400ff]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;