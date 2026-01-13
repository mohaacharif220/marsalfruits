
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">MARSAL</span>
          </div>
          
          <div className="flex space-x-8 text-slate-500 font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookies</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Marsal Frutas Mayorista S.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
