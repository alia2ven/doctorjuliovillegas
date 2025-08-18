import React, { useState } from 'react';
import { Menu, X, Heart, Phone, Calendar, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Dr. Julio Villegas
              </h1>
              <p className="text-xs text-gray-500">Consultas Médicas Online</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Testimonios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Emergencia</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Agendar Cita</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#inicio" 
                className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Inicio</span>
              </a>
              <a 
                href="#servicios" 
                className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-gray-700">Servicios</span>
              </a>
              <a 
                href="#testimonios" 
                className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-gray-700">Testimonios</span>
              </a>
              <a 
                href="#contacto" 
                className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-gray-700">Contacto</span>
              </a>
              
              <div className="pt-4 space-y-3 border-t border-gray-100">
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Emergencia</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Agendar Cita</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;