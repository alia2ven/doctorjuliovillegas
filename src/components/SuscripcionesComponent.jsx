import React from 'react';
// Importamos un icono para el botón
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-blue-700 py-16 sm:py-20">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 opacity-80"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          ¡No te pierdas nuestras ofertas exclusivas!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Suscríbete a nuestro boletín y recibe un <strong>15% de descuento</strong> en tu primera compra.
        </p>
        
        {/* Formulario de suscripción */}
        <form 
          className="mt-8 flex max-w-md mx-auto flex-col gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()} // Previene el envío del formulario para este ejemplo
        >
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full min-w-0 flex-auto rounded-lg border-white/10 bg-white/5 px-5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Introduce tu email"
          />
          <button
            type="submit"
            className="flex-none rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300"
          >
            Suscribirse
          </button>
        </form>

        <p className="mt-4 text-xs text-blue-200">
          * Promoción válida para nuevos suscriptores. Respetamos tu privacidad.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;