import React, { useState } from 'react';
import { 
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Video,
  Calendar,
  Shield,
  Award,
  Users,
  Stethoscope,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Star,
  CheckCircle,
  ArrowUp,
  Send,
  Globe,
  FileText,
  Lock,
  AlertCircle
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(true);

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono de Emergencia",
      info: "+34 900 123 456",
      subtitle: "Disponible 24/7",
      color: "from-red-500 to-orange-400"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+34 600 789 012",
      subtitle: "Respuesta inmediata",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Mail,
      title: "Email",
      info: "consultas@drmedicare.es",
      subtitle: "Respuesta en 24h",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Valencia, España",
      subtitle: "Servicio mundial",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const services = [
    { name: "Consulta por WhatsApp", href: "#servicios" },
    { name: "Videollamada Médica", href: "#servicios" },
    { name: "Consulta Telefónica", href: "#servicios" },
    { name: "Atención de Emergencia", href: "#servicios" },
    { name: "Seguimiento Médico", href: "#servicios" },
    { name: "Segunda Opinión", href: "#servicios" }
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Ofertas", href: "#ofertas" },
    { name: "Contacto", href: "#contacto" },
    { name: "Preguntas Frecuentes", href: "#faq" }
  ];

  const legalLinks = [
    { name: "Política de Privacidad", href: "/privacy", icon: Lock },
    { name: "Términos y Condiciones", href: "/terms", icon: FileText },
    { name: "Aviso Legal", href: "/legal", icon: AlertCircle },
    { name: "Política de Cookies", href: "/cookies", icon: Globe },
    { name: "Certificaciones", href: "/certifications", icon: Award },
    { name: "Código Deontológico", href: "/ethics", icon: Shield }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/drmedicare", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/drmedicare", color: "hover:bg-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/drmedicare", color: "hover:bg-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/drmedicare", color: "hover:bg-blue-700" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@drmedicare", color: "hover:bg-red-600" }
  ];

  const certifications = [
    { name: "Colegio Médico de Madrid", code: "CMD-2024-789" },
    { name: "Certificación ISO 27001", code: "ISO-27001-2024" },
    { name: "GDPR Compliance", code: "GDPR-EU-2024" },
    { name: "Telemedicina Certificada", code: "TMED-ES-2024" }
  ];

  const handleNewsletterSubmit = () => {
    if (email) {
      // Integrar con sistema de newsletter
      alert(`¡Gracias! Te has suscrito con ${email}`);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me interesa recibir más información sobre los servicios médicos gratuitos.";
    const whatsappUrl = `https://wa.me/34600789012?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sección superior del footer */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Logo y descripción */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                    Dr. Julio Villegas
                  </h3>
                  <p className="text-gray-400 text-sm">Consultas Médicas Online</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Proporcionamos atención médica profesional las 24 horas del día. 
                Tu salud es nuestra prioridad número uno.
              </p>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-xs text-gray-400">Pacientes</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Disponible</div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    >
                      <SocialIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-blue-400" />
                <span>Nuestros Servicios</span>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-teal-400" />
                <span>Enlaces Rápidos</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4 text-blue-400">
                  Newsletter de Salud
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-r-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Consejos de salud semanales y ofertas exclusivas
                </p>
              </div>
            </div>

            {/* Información de contacto */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span>Contacto</span>
              </h4>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const ContactIcon = contact.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className={`p-2 bg-gradient-to-br ${contact.color} rounded-lg`}>
                        <ContactIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-white">{contact.title}</h6>
                        <p className="text-gray-300">{contact.info}</p>
                        <p className="text-xs text-gray-400">{contact.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA rápido */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-6 flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Consulta Inmediata</span>
              </button>
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="border-t border-white/10 py-8">
          <h4 className="text-center text-xl font-bold mb-6 flex items-center justify-center space-x-2">
            <Award className="w-6 h-6 text-yellow-400" />
            <span>Certificaciones y Acreditaciones</span>
          </h4>
          
          <div className="grid md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300">
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h6 className="font-semibold text-white text-sm mb-1">{cert.name}</h6>
                <p className="text-xs text-gray-400">{cert.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enlaces legales */}
        <div className="border-t border-white/10 py-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {legalLinks.map((link, index) => {
              const LinkIcon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright y footer final */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 <span className="text-white font-semibold">Dr. Julio Villegas</span>. 
                Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Servicio médico profesional registrado en España • Nº Registro Sanitario: ES-TMED-2024-789
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Disponible 24/7</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span className="text-sm">500+ pacientes</span>
              </div>

              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;