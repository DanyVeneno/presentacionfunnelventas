import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin, FaFacebook, FaRetweet, FaBullseye, FaChartBar } from "react-icons/fa";

const Slide6Remarketing: React.FC = () => {
  const platforms = [
    {
      icon: FaGoogle,
      name: "Google Ads",
      features: ["Red de Display", "RLSA", "YouTube Ads", "Shopping"],
      strength: "Mayor alcance y variedad",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn Ads",
      features: ["Matched Audiences", "Website Retargeting", "Company Targeting", "Job Function"],
      strength: "Precisión B2B excepcional",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: FaFacebook,
      name: "Meta Ads",
      features: ["Custom Audiences", "Lookalike Audiences", "Cross-Platform", "Video Views"],
      strength: "Targeting avanzado",
      color: "from-blue-500 to-purple-600"
    }
  ];

  const audiences = [
    {
      type: "Visitantes Generales",
      description: "Usuarios que visitaron el sitio web pero no convirtieron",
      strategy: "Anuncios de marca y lead magnets TOFU",
      icon: "👥"
    },
    {
      type: "Páginas Específicas",
      description: "Visitantes de servicios concretos sin contactar",
      strategy: "Casos de éxito y lead magnets específicos",
      icon: "🎯"
    },
    {
      type: "Abandono de Conversión",
      description: "Iniciaron proceso pero no completaron",
      strategy: "Recordatorios y alternativas de contacto",
      icon: "⚡"
    },
    {
      type: "Leads Cualificados",
      description: "Descargaron contenido MOFU",
      strategy: "Invitación a consultas y demos",
      icon: "🔥"
    }
  ];

  const googleAdsStrategy = {
    search: {
      title: "Campañas de Búsqueda",
      description: "Captura de demanda activa",
      tactics: ["Palabras clave transaccionales", "Anuncios por servicio", "Extensions completas", "Landing pages específicas"]
    },
    display: {
      title: "Red de Display",
      description: "Notoriedad y remarketing",
      tactics: ["Audiencias personalizadas", "Anuncios adaptativos", "Segmentación por tema", "Creatividades profesionales"]
    },
    video: {
      title: "YouTube Ads",
      description: "Engagement y consideración",
      tactics: ["Anuncios In-Stream", "Discovery Ads", "Video Action Campaigns", "Segmentación avanzada"]
    }
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
            Remarketing & Google Ads
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Estrategias avanzadas para recuperar leads y optimizar conversiones
          </p>
        </motion.div>

        {/* Remarketing Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/google_ads_dashboard.png"
              alt="Google Ads Dashboard"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="pl-8 pr-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Remarketing Estratégico B2B
                </h3>
                <p className="text-blue-200 text-lg max-w-2xl">
                  Mantener la marca "top of mind" durante ciclos de venta largos
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Plataformas de Remarketing Principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${platform.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{platform.strength}</p>
                </div>
                
                <div className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Audience Segmentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Segmentación de Audiencias Estratégicas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{audience.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{audience.type}</h4>
                    <p className="text-blue-200 text-sm mb-3">{audience.description}</p>
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-3 border border-cyan-400/30">
                      <span className="text-cyan-400 font-medium text-sm">Estrategia: </span>
                      <span className="text-white text-sm">{audience.strategy}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Google Ads Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Estrategia Completa de Google Ads
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(googleAdsStrategy).map(([key, strategy], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold text-cyan-400 mb-3">{strategy.title}</h4>
                <p className="text-blue-200 mb-4">{strategy.description}</p>
                
                <div className="space-y-2">
                  {strategy.tactics.map((tactic, i) => (
                    <div key={i} className="flex items-start">
                      <FaBullseye className="text-cyan-400 text-sm mt-1 mr-2 flex-shrink-0" />
                      <span className="text-white text-sm">{tactic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI and Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-r from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <FaChartBar className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Resultados Esperados
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">65%</div>
              <p className="text-white font-medium">Reducción CPL</p>
              <p className="text-blue-200 text-sm">vs. campañas frías</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3.2x</div>
              <p className="text-white font-medium">Mayor CTR</p>
              <p className="text-blue-200 text-sm">audiencias remarketing</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">180%</div>
              <p className="text-white font-medium">Aumento Conversiones</p>
              <p className="text-blue-200 text-sm">con segmentación</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">4.5:1</div>
              <p className="text-white font-medium">ROAS Promedio</p>
              <p className="text-blue-200 text-sm">campañas optimizadas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide6Remarketing;