import React from 'react';
// No necesitas importar 'useState' si no lo usas
// Puedes mantener los iconos si los vas a usar en este banner
import { ShoppingBag, Star, Heart, /* ...otros iconos... */ } from 'lucide-react';

// El nombre de la función debe empezar con Mayúscula por convención de React
function Bannerofertas() {
  // El componente debe retornar directamente el JSX que quieres mostrar
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          <span className="font-semibold">🎉 OFERTAS FLASH</span>
          <span>|</span>
          <span>Envío GRATIS a Mallorca desde 35€</span>
          <span>|</span>
          <span>Hasta -40% en marcas seleccionadas</span>
        </div>
      </div>
    </div>
  );
}

// Ahora exportas el componente que sí retorna algo visible
export default Bannerofertas;