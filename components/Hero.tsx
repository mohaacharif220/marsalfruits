
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2000" 
          alt="Fresh fruits background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
            Mayoristas de Confianza
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            La Frescura de la Tierra Directo a tu <span className="text-orange-500 italic">Negocio</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Suministramos la mejor selección de frutas de temporada para fruterías, hoteles y restaurantes. Calidad garantizada desde el origen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#productos" className="px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all text-center shadow-xl shadow-orange-500/20">
              Ver Catálogo
            </a>
            <a href="#contacto" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center">
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <i className="fa-solid fa-chevron-down text-white text-2xl opacity-50"></i>
      </div>
    </section>
  );
};

export default Hero;
