import React, { useState } from 'react';
import { 
  MessageCircle, 
  Video, 
  Clock, 
  Phone,
  Calendar,
  FileText,
  Stethoscope,
  Heart,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Timer
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: MessageCircle,
      title: "Consulta por WhatsApp",
      subtitle: "La forma más rápida y cómoda",
      description: "Envía tus síntomas y recibe atención médica profesional directamente en WhatsApp. Respuesta garantizada en menos de 30 minutos.",
      features: [
        "Respuesta en máximo 30 minutos",
        "Disponible 24/7 todos los días",
        "Seguimiento personalizado",
        "Recetas médicas digitales"
      ],
      color: "from-green-500 to-emerald-400",
      bgColor: "from-green-50 to-emerald-50",
      availability: "24/7",
      responseTime: "30 min",
      satisfaction: "99%"
    },
    {
      icon: Video,
      title: "Videollamada Médica",
      subtitle: "Consulta cara a cara desde casa",
      description: "Agenda una videollamada para una consulta más detallada. El doctor te llamará directamente por WhatsApp a la hora programada.",
      features: [
        "Consulta visual completa",
        "Grabación para seguimiento",
        "Diagnóstico más preciso",
        "Orientación sobre tratamientos"
      ],
      color: "from-blue-500 to-cyan-400",
      bgColor: "from-blue-50 to-cyan-50",
      availability: "8AM-10PM",
      responseTime: "Programada",
      satisfaction: "97%"
    },
    {
      icon: Phone,
      title: "Consulta Telefónica",
      subtitle: "Atención médica por llamada",
      description: "Para casos que requieren una conversación directa. Agenda tu llamada y recibe atención médica profesional por teléfono.",
      features: [
        "Consulta por voz",
        "Ideal para urgencias",
        "Sin necesidad de internet",
        "Seguimiento posterior"
      ],
      color: "from-purple-500 to-pink-400",
      bgColor: "from-purple-50 to-pink-50",
      availability: "24/7",
      responseTime: "15 min",
      satisfaction: "96%"
    },
    {
      icon: Zap,
      title: "Atención de Emergencia",
      subtitle: "Para situaciones urgentes",
      description: "Servicio de emergencia médica inmediata. Atención prioritaria para casos que requieren respuesta inmediata.",
      features: [
        "Respuesta inmediata",
        "Prioridad máxima",
        "Orientación de primeros auxilios",
        "Referencia a servicios de urgencia"
      ],
      color: "from-red-500 to-orange-400",
      bgColor: "from-red-50 to-orange-50",
      availability: "24/7",
      responseTime: "Inmediato",
      satisfaction: "100%"
    },
    {
      icon: Calendar,
      title: "Seguimiento Médico",
      subtitle: "Acompañamiento continuo",
      description: "Programa citas de seguimiento para monitorear tu evolución y ajustar tratamientos según sea necesario.",
      features: [
        "Seguimiento personalizado",
        "Recordatorios automáticos",
        "Historial médico digital",
        "Ajuste de tratamientos"
      ],
      color: "from-teal-500 to-blue-400",
      bgColor: "from-teal-50 to-blue-50",
      availability: "Programable",
      responseTime: "Scheduled",
      satisfaction: "98%"
    },
    {
      icon: FileText,
      title: "Segunda Opinión",
      subtitle: "Confirma tu diagnóstico",
      description: "Obtén una segunda opinión médica sobre diagnósticos, tratamientos o resultados de exámenes de forma totalmente gratuita.",
      features: [
        "Revisión de diagnósticos",
        "Análisis de exámenes",
        "Recomendaciones adicionales",
        "Tranquilidad y confianza"
      ],
      color: "from-indigo-500 to-purple-400",
      bgColor: "from-indigo-50 to-purple-50",
      availability: "Lun-Vie",
      responseTime: "24 horas",
      satisfaction: "95%"
    }
  ];

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  const handleBookService = (serviceName) => {
    // Aquí integrarías con WhatsApp o tu sistema de citas
    const message = `Hola! Me interesa el servicio de ${serviceName}. ¿Podrían ayudarme?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Stethoscope className="w-4 h-4" />
            <span className="text-sm font-medium">Servicios Médicos Gratuitos</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Atención Médica Profesional
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              100% Gratuita
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Todos nuestros servicios son completamente gratuitos EXCEPTO la consulta. Elige el medio que más te convenga 
            para recibir atención médica profesional y certificada.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleServiceClick(index)}
              >
                <div className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  isActive 
                    ? 'border-blue-200 shadow-2xl bg-white' 
                    : 'border-gray-100 hover:border-blue-100 bg-white hover:shadow-xl'
                }`}>
                  
                  {/* Indicador de servicio activo */}
                  {isActive && (
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Icono y título */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Características */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Estadísticas del servicio */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.availability}</div>
                      <div className="text-sm text-gray-500">Disponibilidad</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.responseTime}</div>
                      <div className="text-sm text-gray-500">Respuesta</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.satisfaction}</div>
                      <div className="text-sm text-gray-500">Satisfacción</div>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookService(service.title);
                    }}
                    className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>Solicitar {service.title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección de garantías */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                ¿Por qué elegir nuestros servicios?
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Somos el único servicio médico 100% gratuito con profesionales certificados 
                y disponibilidad completa. Tu salud es nuestra prioridad.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-blue-100 text-sm">Pacientes Atendidos</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Timer className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Disponibilidad</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-blue-100 text-sm">Calificación</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-100 text-sm">Gratuito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;