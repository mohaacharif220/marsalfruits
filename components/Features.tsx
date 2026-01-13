
import React from 'react';

const features = [
  {
    icon: "fa-solid fa-truck-fast",
    title: "Logística Propia",
    description: "Entregas en 24h para asegurar que la fruta mantenga todas sus propiedades y frescura."
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Calidad Premium",
    description: "Seleccionamos cada pieza a mano, trabajando solo con productores certificados."
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Atención Personalizada",
    description: "Asesoramiento sobre productos de temporada y precios competitivos para mayoristas."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-3xl text-orange-500`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
