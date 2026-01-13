
import React, { useState } from 'react';

const products = [
  { id: 1, name: "Naranjas Navel", category: "Cítricos", image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=800", desc: "Dulces y jugosas." },
  { id: 2, name: "Manzana Fuji", category: "Pomáceas", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800", desc: "Crujientes y frescas." },
  { id: 3, name: "Aguacate Hass", category: "Tropicales", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800", desc: "Textura cremosa." },
  { id: 4, name: "Plátano Canario", category: "Tropicales", image: "https://images.unsplash.com/photo-1571771894821-ad9958a35c47?auto=format&fit=crop&q=80&w=800", desc: "Sabor intenso." },
  { id: 5, name: "Fresa de Huelva", category: "Bayas", image: "https://images.unsplash.com/photo-1464960350423-93c6ba51060a?auto=format&fit=crop&q=80&w=800", desc: "Recogidas hoy mismo." },
  { id: 6, name: "Piña Gold", category: "Tropicales", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800", desc: "Maduración perfecta." },
];

const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState('Todas');
  const categories = ['Todas', 'Cítricos', 'Tropicales', 'Bayas', 'Pomáceas'];

  const filteredProducts = filter === 'Todas' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="productos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Selección</h2>
            <p className="text-slate-600 max-w-xl">
              Trabajamos con las mejores huertas del país para garantizar un suministro constante de fruta excepcional.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full uppercase">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-slate-500 mb-6">{product.desc}</p>
                <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
