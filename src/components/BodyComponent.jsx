import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Video, 
  MessageCircle, 
  Shield, 
  Clock, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Heart
} from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const stats = [
    { number: "2,500+", label: "Pacientes Atendidos", icon: Heart },
    { number: "24/7", label: "Disponibilidad", icon: Clock },
    { number: "98%", label: "Satisfacción", icon: Star },
    { number: "100%", label: "Gratuito", icon: CheckCircle }
  ];

  const benefits = [
    "Consultas médicas 100% gratuitas",
    "Atención personalizada por WhatsApp",
    "Disponible 24/7 para emergencias",
    "Profesional certificado y confiable"
  ];

  // Animación automática de estadísticas
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-teal-300/10 rounded-full blur-2xl"></div>
      </div>

      {/* Patrón de puntos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contenido principal */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Badge de credenciales */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-lg">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Médico Certificado • Colegio Médico</span>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Consultas Médicas</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  100% Gratuitas
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl">
                Atención médica profesional por WhatsApp, videollamada o chat. 
                <span className="text-teal-600 font-medium"> Sin costo alguno.</span>
              </p>
            </div>

            {/* Lista de beneficios */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-2xl hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-lg">Consultar por WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleVideoClick}
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl hover:bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-lg">Ver cómo funciona</span>
              </button>
            </div>

            {/* Estadística destacada */}
            <div className="pt-8">
              <div className="inline-flex items-center space-x-4 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg">
                {React.createElement(stats[currentStat].icon, {
                  className: "w-8 h-8 text-blue-600"
                })}
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stats[currentStat].number}</div>
                  <div className="text-sm text-gray-600">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección visual derecha */}
          <div className="relative">
            
            {/* Imagen principal del doctor */}
            <div className="relative">
              <div className="w-full max-w-lg mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
                



 <img
                  className="w-full h-auto rounded-2xl shadow-lg mb-8"
                  src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                  alt="Fotografía del Dr. Julio Villegas"
                />



                <div className="aspect-square bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white">
                  
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-12 h-12" />
                    </div>
                    <div>

                    <h3 className="text-2xl font-bold">Dr. Julio Villegas</h3>
                      <p className="text-blue-100">Medicina General</p>
                    </div>
                  </div>
                </div>
              </div>


              
              {/* Tarjetas flotantes de servicios */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <Video className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Videollamada</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium">Agenda Online</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de video */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Cómo funciona nuestro servicio</h3>
              <button 
                onClick={closeVideoModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Play className="w-16 h-16 mx-auto mb-4" />
                <p>Video explicativo del servicio</p>
                <p className="text-sm">(Aquí iría tu video promocional)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;