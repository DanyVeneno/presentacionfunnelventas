import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaCalendarAlt, FaGift, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const Slide10CTA: React.FC = () => {
  const nextSteps = [
    {
      step: "1",
      title: "Consulta Estratégica Gratuita",
      description: "Sesión de 60 minutos para analizar tu situación específica",
      timeline: "Esta semana",
      action: "Agenda ahora"
    },
    {
      step: "2", 
      title: "Propuesta Personalizada",
      description: "Plan detallado adaptado a tus objetivos y presupuesto",
      timeline: "Semana siguiente",
      action: "Recibe propuesta"
    },
    {
      step: "3",
      title: "Inicio de Implementación",
      description: "Lanzamiento de la Fase 0 con setup completo",
      timeline: "2-3 semanas",
      action: "¡Empezamos!"
    }
  ];

  const bonuses = [
    {
      title: "Auditoría SEO Completa",
      value: "€500",
      description: "Análisis técnico detallado de tu sitio web actual"
    },
    {
      title: "Plantillas de Landing Pages",
      value: "€300",
      description: "5 diseños optimizados para conversión B2B"
    },
    {
      title: "Workshop de Google Ads",
      value: "€200",
      description: "2 horas de formación para tu equipo"
    }
  ];

  const guarantees = [
    "ROI positivo en los primeros 6 meses o dinero devuelto",
    "Aumento mínimo del 200% en leads cualificados",
    "Soporte directo con el equipo estratégico",
    "Reuniones de seguimiento semanales incluidas"
  ];

  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Próximos Pasos
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Transforma tu estrategia de marketing digital ahora
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaRocket className="mr-3" />
            ¡Es momento de actuar!
          </div>
        </motion.div>

        {/* CTA Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/next_steps_cta.jpg"
              alt="Próximos Pasos y Call to Action"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/70 to-green-900/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Tu Éxito Empieza Hoy
                </h3>
                <p className="text-blue-200 text-xl max-w-2xl mx-auto">
                  No esperes más para transformar tu estrategia de marketing digital
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Proceso Simple en 3 Pasos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-blue-200 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-cyan-400 font-semibold">Timeline: </span>
                    <span className="text-white">{step.timeline}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    {step.action}
                  </button>
                </div>
                
                {/* Arrow */}
                {index < nextSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-cyan-400 text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-400/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              OFERTA LIMITADA
            </div>
            
            <div className="text-center mb-8">
              <FaGift className="text-4xl text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Bonos Exclusivos por Decisión Inmediata
              </h3>
              <p className="text-orange-200">
                Si decides implementar en los próximos 7 días, incluimos:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center"
                >
                  <div className="text-2xl font-bold text-orange-400 mb-2">+{bonus.value}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">{bonus.title}</h4>
                  <p className="text-orange-200 text-sm">{bonus.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-orange-300 font-bold text-xl">
                Valor total de bonos: €1,000 - ¡GRATIS!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Nuestras Garantías de Éxito
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="flex items-start bg-green-800/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30"
              >
                <FaCheckCircle className="text-green-400 text-xl mr-4 mt-1 flex-shrink-0" />
                <span className="text-white font-medium">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Marketing Digital?
            </h3>
            
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
              No dejes que la competencia te adelante. Implementa la estrategia que necesitas 
              para liderar tu mercado y multiplicar tus resultados.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <FaCalendarAlt className="mr-3" />
                Agenda tu Consulta GRATIS
              </button>
              
              <div className="text-center">
                <p className="text-cyan-400 font-semibold">o contacta directamente:</p>
                <p className="text-white font-bold">📧 hola@marketingdigital.com</p>
                <p className="text-white font-bold">📱 +34 600 123 456</p>
              </div>
            </div>
            
            <div className="mt-8 text-blue-200">
              <p className="text-sm">
                * Consulta sin compromiso | Disponibilidad limitada | Respuesta en 24h
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-16 text-center text-blue-300"
        >
          <p className="text-lg italic">
            "El mejor momento para empezar fue ayer. El segundo mejor momento es ahora."
          </p>
          <p className="mt-4 font-semibold text-cyan-400">
            ¡Gracias por tu atención! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide10CTA;