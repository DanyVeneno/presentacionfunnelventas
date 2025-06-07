import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaCog,
  FaRocket,
  FaMobile,
} from "react-icons/fa";

const Slide5Tools: React.FC = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Diseño Responsive",
      description: "Optimizado para todos los dispositivos y navegadores",
    },
    {
      icon: FaChartLine,
      title: "Analytics Integrado",
      description: "Seguimiento completo del comportamiento del usuario",
    },
    {
      icon: FaUsers,
      title: "UX Optimizada",
      description: "Experiencia de usuario centrada en la conversión",
    },
    {
      icon: FaCog,
      title: "SEO Técnico",
      description: "Estructura optimizada para motores de búsqueda",
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Carga rápida y rendimiento excepcional",
    },
    {
      icon: FaMobile,
      title: "Mobile First",
      description: "Diseño prioritario para dispositivos móviles",
    },
  ];

  const sections = [
    "Inicio y Navegación",
    "Análisis y Objetivos",
    "Funnel de Ventas",
    "Estrategias de Remarketing",
    "Google Ads",
    "Content Marketing",
    "Métricas y ROI",
    "Plan de Implementación",
  ];

  return (
    <div className='min-h-screen py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6'>
            Herramientas Digitales
          </h1>
          <p className='text-xl text-blue-200 max-w-3xl mx-auto mb-4'>
            Plataforma web desarrollada para implementar la estrategia
          </p>
          <div className='inline-flex items-center bg-gradient-to-r from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-cyan-400/30'>
            <FaGlobe className='text-cyan-400 mr-2' />
            <span className='text-cyan-400 font-medium'>
              https://guiamarketingdigital.netlify.app/
            </span>
          </div>
        </motion.div>

        {/* Website Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-16 relative'
        >
          <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
            <img
              src='/images/digital_marketing_homepage_complete.png'
              alt='Sitio Web de Marketing Digital Desarrollado'
              className='w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent' />
            <div className='absolute bottom-8 left-8 right-8'>
              <div className='bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Guía Completa de Marketing Digital
                </h3>
                <p className='text-blue-200 mb-4'>
                  Plataforma web funcional con toda la estrategia implementada
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30'>
                    React + TypeScript
                  </span>
                  <span className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/30'>
                    Diseño Responsive
                  </span>
                  <span className='bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-400/30'>
                    UI/UX Optimizado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Website Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Características Técnicas Destacadas
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className='bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group'
              >
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                    <feature.icon className='text-xl text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-blue-200 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Website Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mb-16'
        >
          <h3 className='text-2xl font-bold text-white mb-8 text-center'>
            Secciones de la Plataforma Web
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group'
              >
                <div className='w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-white font-bold text-sm'>
                    {index + 1}
                  </span>
                </div>
                <p className='text-white text-sm font-medium'>{section}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-16'
        >
          {[
            { number: "8", label: "Secciones Interactivas", unit: "" },
            { number: "100", label: "Performance Score", unit: "%" },
            { number: "24", label: "Componentes UI", unit: "" },
            { number: "3", label: "Tiempo de Carga", unit: "s" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className='bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center'
            >
              <div className='text-3xl font-bold text-cyan-400 mb-2'>
                {stat.number}
                {stat.unit}
              </div>
              <p className='text-white font-medium'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Delivered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className='bg-gradient-to-r from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center'
        >
          <h3 className='text-2xl font-bold text-cyan-400 mb-6'>
            Valor Entregado Tangible
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <div className='text-4xl mb-4'>🎯</div>
              <h4 className='text-lg font-semibold text-white mb-3'>
                Herramienta Práctica
              </h4>
              <p className='text-blue-200 text-sm'>
                No solo estrategia, sino una implementación funcional completa
              </p>
            </div>

            <div>
              <div className='text-4xl mb-4'>🚀</div>
              <h4 className='text-lg font-semibold text-white mb-3'>
                Implementación Inmediata
              </h4>
              <p className='text-blue-200 text-sm'>
                Plataforma lista para usar y adaptar a cualquier negocio
              </p>
            </div>

            <div>
              <div className='text-4xl mb-4'>💎</div>
              <h4 className='text-lg font-semibold text-white mb-3'>
                Diferenciación Competitiva
              </h4>
              <p className='text-blue-200 text-sm'>
                Combina consultoría estratégica con desarrollo técnico
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5Tools;
