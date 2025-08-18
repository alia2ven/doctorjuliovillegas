

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ¡NUEVA COLECCIÓN!
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Las Mejores
              <span className="block text-blue-600">Fragancias</span>
              de Mallorca
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Descubre nuestra exclusiva selección de perfumes originales con 
              <strong className="text-blue-600"> envío gratis a toda la isla</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg">
                Ver Ofertas del Día
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Catálogo Completo
              </button>
            </div>
          </div>
          

    

          <div className="absolute ">
            <img 
              src="./img/p1.png" 
              alt="Perfumes Premium"
              className="rounded-7xl shadow-7xl"
            />
          <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full">
              <span className="font-bold">-30%</span>
            </div>
          </div>





        </div>
      </div>
    </section>
  );
};
// La línea clave para que puedas importarlo desde otros archivos
export default HeroBanner;