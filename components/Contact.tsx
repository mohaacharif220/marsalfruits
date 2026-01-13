
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 lg:p-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para crecer con nosotros?</h2>
            <p className="text-slate-400 mb-12 leading-relaxed text-lg">
              Solicita hoy mismo una lista de precios actualizada o agenda una visita a nuestras instalaciones.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-slate-400 italic">Mercamadrid, Nave 4, Puesto 12-14</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teléfono</h4>
                  <p className="text-slate-400 italic">+34 912 345 678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-slate-400 italic">pedidos@marsalfrutas.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-12 lg:p-16">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Frutería Central" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Corporativo</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="info@tuempresa.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Mensaje</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
