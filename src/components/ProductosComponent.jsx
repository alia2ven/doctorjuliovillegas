import React, { useState } from 'react';
// Importa todos los iconos necesarios desde lucide-react
import { Heart, Star, Grid, List, ArrowRight } from 'lucide-react';

// Es una buena práctica definir el componente de la tarjeta de producto dentro o fuera
// del componente principal. Si solo se usa aquí, mantenerlo dentro está bien.
const ProductCard = ({ product }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
    <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 left-3 flex flex-col space-y-2">
        {product.isNew && (
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            NUEVO
          </span>
        )}
        {product.discount && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{product.discount}%
          </span>
        )}
      </div>
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 text-gray-600 hover:text-red-500 transition-colors duration-300">
        <Heart className="h-5 w-5" />
      </button>
      {!product.inStock && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
            AGOTADO
          </span>
        </div>
      )}
    </div>

    <div className="p-4 flex flex-col flex-grow">
      <p className="text-blue-600 text-sm font-semibold mb-1">{product.brand.toUpperCase()}</p>
      <h3 className="font-bold text-gray-800 mb-2 h-14 line-clamp-2 leading-tight">{product.name}</h3>

      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
        <span className="text-gray-500 text-xs ml-2">({product.reviews} opiniones)</span>
      </div>

      <div className="flex items-center justify-between mb-4 mt-auto">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-blue-600">{product.price}€</span>
          {product.originalPrice && (
            <span className="text-md text-gray-400 line-through">{product.originalPrice}€</span>
          )}
        </div>
      </div>

      <button
        className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-colors duration-300 ${
          product.inStock
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Añadir al Carrito' : 'No Disponible'}
      </button>
    </div>
  </div>
);


const ProductGrid = () => {
  // Hooks de estado para controlar la vista y el orden
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');

  // Datos de ejemplo (en una aplicación real, esto vendría de una API)
  const products = [
    { id: 1, name: "Chanel No. 5 Eau de Parfum", brand: "Chanel", price: 145, originalPrice: 180, discount: 19, rating: 4.8, reviews: 324, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", isNew: false, inStock: true },
    { id: 2, name: "Sauvage Eau de Toilette", brand: "Dior", price: 98, originalPrice: null, discount: null, rating: 4.7, reviews: 189, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", isNew: true, inStock: true },
    { id: 3, name: "Black Opium Eau de Parfum", brand: "YSL", price: 125, originalPrice: 155, discount: 19, rating: 4.9, reviews: 267, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", isNew: false, inStock: true },
    { id: 4, name: "Acqua di Giò Profumo", brand: "Giorgio Armani", price: 87, originalPrice: 110, discount: 21, rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", isNew: false, inStock: false }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Productos Destacados</h2>
            <p className="text-gray-600 mt-1">Los más vendidos y mejor valorados en Mallorca.</p>
          </div>

          {/* Controles de Vista y Orden */}
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="popularity">Más populares</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
              <option value="rating">Mejor valorados</option>
            </select>

            <div className="hidden sm:flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Parrilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón de Cargar Más */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
            Ver Más Productos
            <ArrowRight className="inline h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;