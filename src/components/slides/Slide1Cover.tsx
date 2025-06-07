import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaUsers, FaPalette } from "react-icons/fa";

const Slide1Cover: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/presentation_cover.jpg')" }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
          >
            Marketing Digital
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
          >
            para Servicios Creativos
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
          >
            Estrategia Integral B2B con Herramientas Digitales Desarrolladas
          </motion.p>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-8 mt-12"
          >
            {[
              { icon: FaPalette, label: "Diseño Creativo" },
              { icon: FaChartLine, label: "Estrategia Digital" },
              { icon: FaUsers, label: "B2B Solutions" },
              { icon: FaRocket, label: "Transformación" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                  <item.icon className="text-2xl text-white" />
                </div>
                <span className="text-sm text-blue-200">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-lg text-blue-300 mb-6">Servicios Especializados:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Director Creativo Digital",
                "Artes Gráficas",
                "Cultura Organizacional",
                "Diseño UI/UX",
                "Desarrollo Web",
                "Marketing Digital",
                "Consultoría de Negocios",
                "Transformación Digital"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <span className="text-sm text-white font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-20 pt-8 border-t border-white/20"
          >
            <p className="text-blue-300 text-lg">
              Proyecto Completo: <span className="font-semibold text-cyan-400">Guía Estratégica + Herramienta Digital</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl"
      />
    </div>
  );
};

export default Slide1Cover;