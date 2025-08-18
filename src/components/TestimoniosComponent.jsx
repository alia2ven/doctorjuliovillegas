import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  MessageCircle,
  Video,
  Phone,
  CheckCircle,
  Calendar,
  ThumbsUp,
  Award
} from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      age: 34,
      location: "Madrid, España",
      service: "WhatsApp",
      serviceIcon: MessageCircle,
      rating: 5,
      date: "Hace 2 días",
      text: "Increíble servicio. A las 2 AM mi bebé tenía fiebre alta y no sabía qué hacer. El doctor me respondió inmediatamente por WhatsApp y me tranquilizó completamente. Me dio instrucciones claras y seguimiento toda la noche. ¡100% recomendado!",
      avatar: "MG",
      color: "from-pink-400 to-rose-400",
      verified: true,
      tags: ["Pediatría", "Emergencia", "WhatsApp"]
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      age: 45,
      location: "Barcelona, España",
      service: "Videollamada",
      serviceIcon: Video,
      rating: 5,
      date: "Hace 1 semana",
      text: "Necesitaba una segunda opinión sobre unos análisis y el doctor me atendió por videollamada de forma muy profesional. Revisó todos mis documentos, me explicó todo detalladamente y me dio mucha tranquilidad. Servicio excepcional y totalmente gratuito.",
      avatar: "CR",
      color: "from-blue-400 to-cyan-400",
      verified: true,
      tags: ["Segunda Opinión", "Videollamada", "Análisis"]
    },
    {
      id: 3,
      name: "Ana Martínez",
      age: 28,
      location: "Valencia, España",
      service: "Seguimiento",
      serviceIcon: Calendar,
      rating: 5,
      date: "Hace 3 días",
      text: "Estoy embarazada de 7 meses y el doctor me ha dado seguimiento desde el principio. Siempre disponible para resolver mis dudas, muy atento y profesional. Me ha acompañado en todo el proceso sin costo alguno. ¡Gracias por existir!",
      avatar: "AM",
      color: "from-green-400 to-emerald-400",
      verified: true,
      tags: ["Embarazo", "Seguimiento", "Ginecología"]
    },
    {
      id: 4,
      name: "Luis Fernández",
      age: 52,
      location: "Sevilla, España",
      service: "Emergencia",
      serviceIcon: Phone,
      rating: 5,
      date: "Hace 5 días",
      text: "Tuve dolor en el pecho a medianoche y llamé al servicio de emergencia. Me atendieron inmediatamente, me calmaron y me orientaron para ir al hospital. Resultó ser ansiedad, pero su atención rápida me salvó de un susto mayor. Excelente servicio.",
      avatar: "LF",
      color: "from-red-400 to-orange-400",
      verified: true,
      tags: ["Emergencia", "Cardiología", "24/7"]
    },
    {
      id: 5,
      name: "Elena Jiménez",
      age: 38,
      location: "Bilbao, España",
      service: "WhatsApp",
      serviceIcon: MessageCircle,
      rating: 5,
      date: "Hace 4 días",
      text: "Mi hija adolescente tenía problemas dermatológicos y estaba muy acomplejada. El doctor por WhatsApp fue súper comprensivo, le dio consejos prácticos y tratamiento. En 2 semanas ya se ve la mejora. ¡Gracias por cuidar la autoestima de mi hija!",
      avatar: "EJ",
      color: "from-purple-400 to-pink-400",
      verified: true,
      tags: ["Dermatología", "Adolescentes", "WhatsApp"]
    },
    {
      id: 6,
      name: "Roberto Silva",
      age: 41,
      location: "Zaragoza, España",
      service: "Segunda Opinión",
      serviceIcon: CheckCircle,
      rating: 5,
      date: "Hace 1 semana",
      text: "Me diagnosticaron diabetes y quería una segunda opinión. El doctor revisó todos mis estudios, me explicó el diagnóstico de forma muy clara y me dio un plan de tratamiento excelente. Su conocimiento y paciencia son extraordinarios.",
      avatar: "RS",
      color: "from-teal-400 to-blue-400",
      verified: true,
      tags: ["Diabetes", "Segunda Opinión", "Endocrinología"]
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Calificación Promedio", icon: Star },
    { number: "284", label: "Testimonios Positivos", icon: ThumbsUp },
    { number: "98%", label: "Recomendarían", icon: Heart },
    { number: "24h", label: "Tiempo de Respuesta", icon: MessageCircle }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const current = testimonials[currentTestimonial];
  const ServiceIcon = current.serviceIcon;

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de la sección */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Testimonios Verificados</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Pacientes Satisfechos
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
           Cientos de pacientes han confiado en nuestros servicios médicos. 
            Estas son sus experiencias reales y verificadas.
          </p>
        </div>

        {/* Estadísticas de testimonios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonial principal */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            
            {/* Testimonial card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              
              {/* Quote icon decorativo */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-blue-500" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  
                  {/* Avatar y info del paciente */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${current.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {current.avatar}
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-bold text-gray-900">{current.name}</h3>
                        {current.verified && (
                          <CheckCircle className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <p className="text-gray-600">{current.age} años • {current.location}</p>
                      <p className="text-sm text-gray-500">{current.date}</p>
                    </div>
                  </div>

                  {/* Rating y servicio usado */}
                  <div className="flex-1 md:text-right">
                    <div className="flex justify-start md:justify-end items-center space-x-1 mb-2">
                      {renderStars(current.rating)}
                    </div>
                    <div className="flex items-center space-x-2 justify-start md:justify-end">
                      <ServiceIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        Servicio: {current.service}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Texto del testimonio */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{current.text}"
                </blockquote>

                {/* Tags del testimonio */}
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </button>

              {/* Indicadores de posición */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid de testimonios en miniatura */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const TestimonialIcon = testimonial.serviceIcon;
            return (
              <div 
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center text-white font-bold shadow-md`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <TestimonialIcon className="w-5 h-5 text-blue-600" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {testimonial.text.substring(0, 120)}...
                </p>
                
                <div className="mt-4 flex flex-wrap gap-1">
                  {testimonial.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para recibir la misma atención de calidad?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Únete a los cientos de pacientes satisfechos que han confiado en nuestros servicios médicos.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Iniciar Consulta 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;