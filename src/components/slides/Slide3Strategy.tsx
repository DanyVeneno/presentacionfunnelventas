import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaUsers, FaGem, FaRocket } from "react-icons/fa";

const Slide3Strategy: React.FC = () => {
  const strategyPillars = [
    {
      icon: FaBullseye,
      title: "Posicionamiento Estratégico",
      description: "Especialización en nichos específicos con propuesta de valor única",
      benefits: ["Diferenciación clara", "Expertise reconocido", "Precios premium"]
    },
    {
      icon: FaUsers,
      title: "Cliente Ideal Definido",
      description: "Buyer personas B2B detallados con necesidades específicas",
      benefits: ["Messaging preciso", "Canales optimizados", "Conversión alta"]
    },
    {
      icon: FaGem,
      title: "Propuesta de Valor Única",
      description: "Transformación medible, no solo servicios creativos",
      benefits: ["ROI demostrable", "Resultados tangibles", "Ventaja competitiva"]
    },
    {
      icon: FaRocket,
      title: "Metodología Propia",
      description: "Framework exclusivo que garantiza resultados consistentes",
      benefits: ["Proceso escalable", "Calidad predecible", "Experiencia superior"]
    }
  ];

  const valueProposition = {
    target: "Directores de Marketing de empresas tecnológicas B2B",
    promise: "Duplicar generación de leads cualificados",
    method: "Content Marketing de alto impacto + Diseño Web centrado en conversión",
    outcome: "Superar objetivos de crecimiento y destacar frente a la competencia"
  };

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
            Estrategia Integral
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Enfoque holístico para servicios creativos y digitales B2B
          </p>
        </motion.div>

        {/* Strategy Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/marketing_strategy.jpg"
              alt="Estrategia de Marketing Digital"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/70 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="pl-8 pr-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Estrategia Basada en Datos
                </h3>
                <p className="text-blue-200 text-lg max-w-2xl">
                  Cada decisión respaldada por análisis profundo del mercado, competencia y comportamiento del cliente
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strategy Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Pilares Estratégicos Fundamentales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategyPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="text-2xl text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-blue-200 mb-4 leading-relaxed">{pillar.description}</p>
                    
                    <div className="space-y-2">
                      {pillar.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          <span className="text-sm text-blue-100">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
            Ejemplo de Propuesta de Valor Estructurada
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="text-cyan-400 font-bold text-lg mb-2">QUIÉN</div>
              <p className="text-white text-sm leading-relaxed">{valueProposition.target}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center"
            >
              <div className="text-cyan-400 font-bold text-lg mb-2">QUÉ</div>
              <p className="text-white text-sm leading-relaxed">{valueProposition.promise}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center"
            >
              <div className="text-cyan-400 font-bold text-lg mb-2">CÓMO</div>
              <p className="text-white text-sm leading-relaxed">{valueProposition.method}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="text-center"
            >
              <div className="text-cyan-400 font-bold text-lg mb-2">PARA QUE</div>
              <p className="text-white text-sm leading-relaxed">{valueProposition.outcome}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Success Factors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Factores Críticos de Éxito
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Expertise Demostrado",
              "Resultados Medibles",
              "Procesos Escalables",
              "Innovación Constante",
              "Transparencia Total",
              "Co-creación Cliente"
            ].map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2.4 + index * 0.1 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
              >
                <span className="text-white font-medium">{factor}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3Strategy;