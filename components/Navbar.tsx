
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>MARSAL</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className={`font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Inicio</a>
          <a href="#productos" className={`font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Productos</a>
          <a href="#nosotros" className={`font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Nosotros</a>
          <a href="#contacto" className={`px-5 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30`}>
            Contacto
          </a>
        </div>

        <button className="md:hidden text-white">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
