
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Banner Section */}
        <section id="nosotros" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt="Mercamadrid Warehouse" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block bg-orange-500 p-8 rounded-3xl shadow-xl">
                <p className="text-4xl font-bold">+25</p>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Años de Experiencia</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Comprometidos con la excelencia agrícola</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Marsal nació hace más de dos décadas con una visión clara: ser el puente directo entre el agricultor y el comercio local. Nuestra pasión por el producto fresco nos ha llevado a ser líderes en la distribución mayorista en la región.
              </p>
              <ul className="space-y-4">
                {[
                  "Sostenibilidad en toda la cadena de suministro",
                  "Certificaciones de calidad internacional",
                  "Trazabilidad completa de campo a mesa",
                  "Apoyo al comercio de proximidad"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ProductGrid />
        
        {/* Statistics or Trust Bar */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-2">500+</p>
                <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Clientes Activos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-2">50t</p>
                <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Distribución Diaria</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-2">24h</p>
                <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Tiempo de Entrega</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-2">100%</p>
                <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Fruta de Temporada</p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
