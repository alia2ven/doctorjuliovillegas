import React from 'react';
import { ArrowRight, Phone, Clock, MapPin, Star, Shield, Navigation } from 'lucide-react';

import miImagenLocal1 from '../assets/G1.png';

import miImagenLocal2 from '../assets/G2.png';

const SplitValueProposition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Desktop: Dos columnas lado a lado */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen gap-8 p-8">
        
        {/* Tarjeta Izquierda */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Imagen superior */}
          <div 
            className="h-64 bg-cover bg-center relative"
          

style={{
  backgroundImage: `url(${miImagenLocal1})`,
}}


          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sede Principal Centro Arenal
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nuestro edificio principal en el corazón financiero de la ciudad, con todas las comodidades modernas
            </p>

            {/* Características */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Oficinas ejecutivas disponibles</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Atención 24/7 los 365 días</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">+34 971 555 001</span>
              </div>
            </div>

            {/* Información de ubicación */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-900">Nuestra Ubicación</h3>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>📍 El arenal, 15</p>
                <p>📍 07600, Palma, Arenal, Balearic Islands</p>
                <p>🅿️ Parking disponible</p>
               <p>🚌 Autobús: Líneas 3, 20, 46</p>
              </div>
            </div>

            {/* Mapa embebido */}
            <div className="h-48 rounded-2xl overflow-hidden mb-6 border-4 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98443.37711737392!2d2.6500749353698865!3d39.55159021685807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979689c4f40ec5%3A0xb146b432018dac17!2sPerfumeria%20Gisela!5e0!3m2!1ses!2ses!4v1755167220151!5m2!1ses!2ses"


                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            {/* Botón CTA */}
            <button className="group w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
              <Navigation className="mr-2 w-5 h-5" />
              Cómo Llegar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tarjeta Derecha */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Imagen superior */}
          <div 
            className="h-64 bg-cover bg-center relative"
          style={{
  backgroundImage: `url(${miImagenLocal2})`,
}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sucursal II Arenal
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nuestra sede en la zona de expansión, moderna y con fácil acceso desde cualquier punto de la isla
            </p>

            {/* Características */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Instalaciones de última generación</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Lun - Sáb: 8:00 - 20:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">+34 971 555 002</span>
              </div>
            </div>

            {/* Información de ubicación */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-900">Nuestra Ubicación</h3>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>📍 Av. Miramar, 30</p>
                <p>📍 07600 Palma, Arenal, Illes Balears</p>
                <p>🅿️ Aparcamiento gratuito</p>
                <p>🚌 Autobús: Líneas 3, 20, 46</p>
              </div>
            </div>
    

            {/* Mapa embebido */}
            <div className="h-48 rounded-2xl overflow-hidden mb-6 border-4 border-gray-100">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98443.37711737392!2d2.6500749353698865!3d39.55159021685807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979689c4f40ec5%3A0xb146b432018dac17!2sPerfumeria%20Gisela!5e0!3m2!1ses!2ses!4v1755167220151!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            {/* Botón CTA */}
            <button className="group w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
              <Navigation className="mr-2 w-5 h-5" />
              Cómo Llegar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Diseño apilado con cards */}
      <div className="lg:hidden p-4 space-y-6">
        
        {/* Tarjeta Mobile 1 */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Imagen superior móvil */}
          <div 
            className="h-48 bg-cover bg-center relative"
         style={{
  backgroundImage: `url(${miImagenLocal1})`,
}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sede Principal Centro
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              En el corazón financiero de la ciudad
            </p>

            {/* Características móvil */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-700">Oficinas ejecutivas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">+34 971 555 001</span>
              </div>
            </div>

            {/* Ubicación móvil */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-gray-900">Ubicación</h3>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📍 El arenal, 15</p>
                <p>📍 07600, Palma, Arenal, Balearic Islands </p>
                   <p>🅿️ Aparcamiento gratuito</p>
                <p>🚌 Autobús: Líneas 3, 20, 46</p>
              </div>
            </div>

            {/* Mapa móvil */}
            <div className="h-40 rounded-xl overflow-hidden mb-4 border-2 border-gray-100">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98443.37711737392!2d2.6500749353698865!3d39.55159021685807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979689c4f40ec5%3A0xb146b432018dac17!2sPerfumeria%20Gisela!5e0!3m2!1ses!2ses!4v1755167220151!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
              <Navigation className="mr-2 w-4 h-4" />
              Cómo Llegar
            </button>
          </div>
        </div>

        {/* Tarjeta Mobile 2 */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Imagen superior móvil */}
          <div 
            className="h-48 bg-cover bg-center relative"
        style={{
  backgroundImage: `url(${miImagenLocal2})`,
}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sucursal Norte Expansión
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Moderna sede en zona de expansión
            </p>

            {/* Características móvil */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-700">Última generación</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">+34 971 555 002</span>
              </div>
            </div>

            {/* Ubicación móvil */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-gray-900">Ubicación</h3>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📍 Av. Miramar, 30</p>
                <p>📍 07600 Palma, Arenal, Illes Balears</p>
                <p>🅿️ Aparcamiento gratuito</p>
                <p>🚌 Autobús: Líneas 3, 20, 46</p>
              </div>
            </div>

            {/* Mapa móvil */}
            <div className="h-40 rounded-xl overflow-hidden mb-4 border-2 border-gray-100">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98443.37711737392!2d2.6500749353698865!3d39.55159021685807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979689c4f40ec5%3A0xb146b432018dac17!2sPerfumeria%20Gisela!5e0!3m2!1ses!2ses!4v1755167220151!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-blue to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg">
              <Navigation className="mr-2 w-4 h-4" />
              Cómo Llegar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitValueProposition;