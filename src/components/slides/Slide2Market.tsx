import React from "react";
import { motion } from "framer-motion";
import { FaArrowTrendUp, FaUsers, FaIndustry, FaLightbulb } from "react-icons/fa6";

const Slide2Market: React.FC = () => {
  const marketData = [
    { label: "Crecimiento Anual", value: "15%", trend: "+3%" },
    { label: "Empresas PYME", value: "2.3M", trend: "+8%" },
    { label: "Inversión Digital", value: "€890M", trend: "+22%" },
    { label: "Demanda UX/UI", value: "180%", trend: "+45%" }
  ];

  const trends = [
    {
      icon: FaLightbulb,
      title: "IA en Marketing",
      description: "Automatización y personalización avanzada"
    },
    {
      icon: FaUsers,
      title: "Experiencia B2B",
      description: "Enfoque centrado en el cliente empresarial"
    },
    {
      icon: FaIndustry,
      title: "Transformación Digital",
      description: "Digitalización de procesos tradicionales"
    },
    {
      icon: FaArrowTrendUp,
      title: "Thought Leadership",
      description: "Contenido de autoridad y expertise"
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
            Análisis del Mercado
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Oportunidades en el sector de servicios creativos y digitales B2B
          </p>
        </motion.div>

        {/* Market Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {marketData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</h3>
                <p className="text-white font-medium mb-2">{stat.label}</p>
                <span className="text-green-400 text-sm font-semibold">{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Market Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/creative_services.jpg"
              alt="Servicios creativos y digitales"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Mercado en Expansión Constante
              </h3>
              <p className="text-blue-200">
                La demanda de servicios creativos y digitales especializados crece exponencialmente
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trends Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Tendencias Clave del Sector
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <trend.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{trend.title}</h3>
                  <p className="text-blue-200 text-sm">{trend.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            Insights Clave del Mercado
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Oportunidades</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Especialización en nichos específicos de industria
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Integración de IA en procesos creativos
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Demanda creciente de transformación cultural
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Necesidad de ROI medible en servicios creativos
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Diferenciadores Clave</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Metodologías propias y frameworks únicos
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Enfoque en co-creación con el cliente
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Resultados medibles y transparencia total
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  Experiencia multiplataforma integrada
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide2Market;