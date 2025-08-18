import React from 'react';
import Mujer from '../assets/p4.jpg'; 
import Hombre from '../assets/p1.png'; 
import Premium from '../assets/p2.png'; 
import Ofertas from '../assets/p5.jpg'; 



const QuickCategories = () => {
  const categories = [
    { name: "Perfumes Mujer", image: Mujer, count: "450+" },
    { name: "Perfumes Hombre", image: Hombre, count: "320+" },
    { name: "Marcas Premium", image: Premium, count: "50+" },
    { name: "Ofertas Flash", image: Ofertas, count: "80+" }
  ];




  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Compra por Categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer text-center">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  {category.count}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;
