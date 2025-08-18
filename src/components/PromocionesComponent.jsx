import React, { useState, useEffect } from 'react';
import { 
  Gift,
  Clock,
  Star,
  Zap,
  Heart,
  MessageCircle,
  Video,
  Calendar,
  Phone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Trophy,
  Users,
  AlertCircle,
  Timer,
  Percent
} from 'lucide-react';

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  const offers = [
    {
      id: 1,
      title: "Consulta Premium GRATIS",
      subtitle: "Primera consulta con seguimiento completo",
      description: "Recibe tu primera consulta médica profesional completamente gratuita + seguimiento personalizado durante 7 días.",
      originalValue: "€120",
      currentValue: "GRATIS",
      icon: Heart,
      color: "from-pink-500 to-rose-400",
      bgGradient: "from-pink-50 to-rose-50",
      features: [
        "Consulta médica completa",
        "Seguimiento 7 días gratis",
        "Receta médica incluida",
        "Atención prioritaria 24/7"
      ],
      urgency: "Solo hoy",
      ctaText: "Reclamar Oferta Gratis",
      whatsappMessage: "¡Hola! Quiero reclamar mi consulta premium GRATIS"
    },
    {
      id: 2,
      title: "Paquete Familiar Completo",
      subtitle: "Atención médica para toda la familia",
      description: "Servicio médico ilimitado para hasta 4 miembros de la familia durante 30 días completamente gratis.",
      originalValue: "€350",
      currentValue: "GRATIS",
      icon: Users,
      color: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [
        "Hasta 4 miembros incluidos",
        "Consultas ilimitadas 30 días",
        "Atención pediátrica incluida",
        "Emergencias familiares 24/7"
      ],
      urgency: "Últimas 48 horas",
      ctaText: "Proteger Mi Familia",
      whatsappMessage: "¡Hola! Quiero el paquete familiar completo GRATIS"
    },
    {
      id: 3,
      title: "Plan Emergencia VIP",
      subtitle: "Atención médica de emergencia inmediata",
      description: "Acceso prioritario a atención médica de emergencia con respuesta garantizada en menos de 5 minutos.",
      originalValue: "€200",
      currentValue: "GRATIS",
      icon: Zap,
      color: "from-red-500 to-orange-400",
      bgGradient: "from-red-50 to-orange-50",
      features: [
        "Respuesta en menos de 5 min",
        "Línea directa de emergencia",
        "Coordinación con ambulancias",
        "Atención especializada 24/7"
      ],
      urgency: "Oferta limitada",
      ctaText: "Activar Plan VIP",
      whatsappMessage: "¡Hola! Quiero activar el Plan Emergencia VIP GRATIS"
    }
  ];

  const bonuses = [
    {
      icon: Gift,
      title: "Consulta de Segunda Opinión",
      value: "€80",
      description: "Revisión completa de diagnósticos anteriores"
    },
    {
      icon: Calendar,
      title: "Seguimiento Personalizado",
      value: "€150",
      description: "Acompañamiento médico durante 14 días"
    },
    {
      icon: Video,
      title: "Videoconsulta Premium",
      value: "€100",
      description: "Consulta cara a cara con especialista"
    }
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Offer rotation
  useEffect(() => {
    const offerTimer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 8000);

    return () => clearInterval(offerTimer);
  }, [offers.length]);

  // Flash effect for urgency
  useEffect(() => {
    const flashTimer = setInterval(() => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 200);
    }, 3000);

    return () => clearInterval(flashTimer);
  }, []);

  const handleOfferClick = (whatsappMessage) => {
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentOfferData = offers[currentOffer];
  const OfferIcon = currentOfferData.icon;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-teal-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-32 left-1/4 w-6 h-6 text-yellow-400 animate-bounce" />
        <Star className="absolute top-40 right-1/3 w-4 h-4 text-blue-400 animate-pulse" />
        <Gift className="absolute bottom-40 left-1/3 w-5 h-5 text-pink-400 animate-bounce delay-500" />
        <Trophy className="absolute bottom-32 right-1/4 w-6 h-6 text-orange-400 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de urgencia */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-6 transition-all duration-200 ${
            isFlashing ? 'bg-red-500 text-white shadow-2xl scale-105' : 'bg-red-100 text-red-700'
          }`}>
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span className="font-bold">¡OFERTA ESPECIAL LIMITADA!</span>
            <AlertCircle className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              ¡Últimas Horas!
            </span>
            <br />
            Ofertas Médicas Exclusivas
          </h2>

          {/* Countdown timer */}
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-2xl">
            <Timer className="w-6 h-6" />
            <span className="font-semibold">Tiempo restante:</span>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs">SEG</div>
              </div>
            </div>
          </div>
        </div>

        {/* Oferta principal */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className={`relative bg-gradient-to-br ${currentOfferData.bgGradient} rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white overflow-hidden`}>
            
            {/* Badge de urgencia */}
            <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
              {currentOfferData.urgency}
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* Contenido de la oferta */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${currentOfferData.color} rounded-2xl shadow-lg`}>
                    <OfferIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentOfferData.title}</h3>
                    <p className="text-lg text-gray-600">{currentOfferData.subtitle}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {currentOfferData.description}
                </p>

                {/* Valor de la oferta */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl text-gray-500 line-through">{currentOfferData.originalValue}</span>
                  <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    {currentOfferData.currentValue}
                  </span>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
                    100% AHORRO
                  </div>
                </div>

                {/* Features incluidas */}
                <div className="space-y-3 mb-8">
                  {currentOfferData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA principal */}
                <button 
                  onClick={() => handleOfferClick(currentOfferData.whatsappMessage)}
                  className={`group w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r ${currentOfferData.color} text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{currentOfferData.ctaText}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Visual de la oferta */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-center space-y-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${currentOfferData.color} rounded-3xl flex items-center justify-center mx-auto shadow-lg`}>
                      <OfferIcon className="w-12 h-12 text-white" />
                    </div>
                    
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        Valor Total: {currentOfferData.originalValue}
                      </div>
                      <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                        HOY: GRATIS
                      </div>
                    </div>

                    <div className="bg-yellow-100 text-yellow-700 px-4 py-3 rounded-xl font-semibold">
                      🎉 ¡Ahorras {currentOfferData.originalValue} hoy!
                    </div>
                  </div>
                </div>

                {/* Indicadores de oferta */}
                <div className="flex justify-center mt-6 space-x-2">
                  {offers.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentOffer 
                          ? 'bg-blue-600 w-8' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonos adicionales */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              + Bonos Adicionales <span className="text-green-600">GRATIS</span>
            </h3>
            <p className="text-gray-600">Recibe estos servicios premium sin costo adicional</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => {
              const BonusIcon = bonus.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 relative overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-xl text-sm font-bold">
                    Valor {bonus.value}
                  </div>
                  
                  <div className="pt-4">
                    <BonusIcon className="w-12 h-12 text-green-500 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{bonus.title}</h4>
                    <p className="text-gray-600">{bonus.description}</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">INCLUIDO</span>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA final con urgencia */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            
            {/* Elementos decorativos */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-white/40 rounded-full animate-bounce delay-1000"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                ⚡ ¡No Pierdas Esta Oportunidad Única! ⚡
              </h3>
              
              <p className="text-xl mb-6 text-red-100">
                Más de <strong>500 personas</strong> han reclamado estas ofertas en las últimas 24 horas.
                <br />
                <strong>Solo quedan pocas horas</strong> para aprovechar estos precios especiales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => handleOfferClick("¡Hola! Quiero reclamar todas las ofertas especiales antes de que terminen")}
                  className="group bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
                >
                  <Zap className="w-6 h-6" />
                  <span>Reclamar Todas las Ofertas</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="text-center text-red-100">
                  <div className="text-sm">⏰ Oferta válida por tiempo limitado</div>
                  <div className="text-xs">Sin compromisos • 100% Gratuito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;