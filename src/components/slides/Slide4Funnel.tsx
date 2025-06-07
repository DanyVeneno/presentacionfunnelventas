import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaHeart, FaHandshake, FaUserCheck } from "react-icons/fa";

const Slide4Funnel: React.FC = () => {
  const funnelStages = [
    {
      icon: FaEye,
      stage: "TOFU",
      title: "Atracción / Conciencia",
      description: "Generar visibilidad y atraer público objetivo",
      strategies: ["SEO y Content Marketing", "Social Media (LinkedIn)", "Google Ads Display", "PR Digital"],
      metrics: ["Tráfico web", "Impresiones", "Nuevos seguidores", "Brand awareness"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaHeart,
      stage: "MOFU",
      title: "Interés / Consideración",
      description: "Convertir visitantes en leads conocidos",
      strategies: ["Lead Magnets", "Webinars", "Email Nurturing", "Remarketing"],
      metrics: ["MQLs generados", "Tasa conversión", "CPL", "Email engagement"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaHandshake,
      stage: "BOFU",
      title: "Decisión / Acción",
      description: "Convertir leads en clientes",
      strategies: ["Consultas gratuitas", "Demos personalizadas", "Casos de éxito", "Propuestas detalladas"],
      metrics: ["SQLs", "Tasa cierre", "Valor medio", "CAC"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUserCheck,
      stage: "Retención",
      title: "Fidelización / Prescripción",
      description: "Mantener clientes y generar referencias",
      strategies: ["Onboarding excepcional", "Upselling estratégico", "Programa referidos", "Testimonios"],
      metrics: ["Retención", "LTV", "NPS", "Referidos"],
      color: "from-orange-500 to-red-500"
    }
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
            Funnel de Ventas B2B
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Sistema optimizado para servicios creativos y digitales de alto valor
          </p>
        </motion.div>

        {/* Funnel Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/sales_funnel_b2b.png"
              alt="Funnel de Ventas B2B"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Funnel Optimizado para Ciclos de Venta Largos
              </h3>
              <p className="text-blue-200">
                Diseñado específicamente para la naturaleza consultiva de los servicios B2B
              </p>
            </div>
          </div>
        </motion.div>

        {/* Funnel Stages */}
        <div className="space-y-12">
          {funnelStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className={`relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
            >
              <div className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`p-4 bg-gradient-to-r ${stage.color} rounded-xl mr-4`}>
                        <stage.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-cyan-400 mb-1">{stage.stage}</div>
                        <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                      {stage.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Estrategias Clave</h4>
                        <ul className="space-y-2">
                          {stage.strategies.map((strategy, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-blue-100 text-sm">{strategy}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-3">Métricas Principales</h4>
                        <ul className="space-y-2">
                          {stage.metrics.map((metric, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-blue-100 text-sm">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stage Number */}
                  <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={`w-32 h-32 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center shadow-2xl`}>
                      <span className="text-4xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connection Line */}
              {index < funnelStages.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Funnel Optimization Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
            Claves para Optimización del Funnel
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-3">Personalización</h4>
              <p className="text-blue-200 text-sm">
                Contenido y mensajes adaptados a cada etapa y segmento específico
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-3">Automatización</h4>
              <p className="text-blue-200 text-sm">
                Flujos automatizados que nutren leads sin perder el toque humano
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-white mb-3">Medición Continua</h4>
              <p className="text-blue-200 text-sm">
                Análisis constante y optimización basada en datos reales
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4Funnel;