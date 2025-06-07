import React from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaCog, FaRocket, FaArrowUp, FaUsers, FaEuroSign } from "react-icons/fa";

const Slide9Implementation: React.FC = () => {
  const phases = [
    {
      phase: "Fase 0: Preparación",
      duration: "Semanas 1-4",
      icon: FaCog,
      color: "from-purple-500 to-pink-500",
      activities: [
        "Definición objetivos SMART y buyer personas",
        "Análisis competencia y auditoría SEO",
        "Investigación keywords y configuración analytics",
        "Estructura funnel y KPIs definidos"
      ],
      deliverables: ["Estrategia documentada", "Setup técnico", "Calendario editorial"]
    },
    {
      phase: "Fase 1: Lanzamiento",
      duration: "Semanas 5-12",
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      activities: [
        "Contenidos pilares y optimización SEO",
        "Landing pages y lead magnets",
        "Campañas Google Ads y remarketing",
        "Primer webinar y casos de éxito"
      ],
      deliverables: ["Sitio optimizado", "Campañas activas", "Primeros leads"]
    },
    {
      phase: "Fase 2: Crecimiento",
      duration: "Meses 4-9",
      icon: FaArrowUp,
      color: "from-green-500 to-emerald-500",
      activities: [
        "Expansión campañas y contenido diversificado",
        "LinkedIn Ads y estrategias link building",
        "Optimización avanzada funnel",
        "Thought leadership y ponencias"
      ],
      deliverables: ["ROI positivo", "Autoridad establecida", "Leads cualificados"]
    },
    {
      phase: "Fase 3: Escalado",
      duration: "Meses 10-12+",
      icon: FaUsers,
      color: "from-orange-500 to-red-500",
      activities: [
        "Escalado estrategias exitosas",
        "Nuevos canales y formatos",
        "Automatización avanzada",
        "Programas referidos y advocacy"
      ],
      deliverables: ["Crecimiento sostenible", "Liderazgo mercado", "Escalabilidad"]
    }
  ];

  const timeline = [
    { month: "M1", focus: "Setup & Estrategia", progress: 100 },
    { month: "M2", focus: "Contenido & SEO", progress: 100 },
    { month: "M3", focus: "Paid Ads & Leads", progress: 100 },
    { month: "M4-6", focus: "Optimización", progress: 80 },
    { month: "M7-9", focus: "Expansión", progress: 60 },
    { month: "M10-12", focus: "Escalado", progress: 40 }
  ];

  const resources = [
    {
      role: "Estratega Marketing Digital",
      responsibility: "Visión global y planificación",
      dedication: "40h/mes"
    },
    {
      role: "Especialista SEO/SEM",
      responsibility: "Optimización y campañas",
      dedication: "60h/mes"
    },
    {
      role: "Content Creator",
      responsibility: "Redacción y contenido",
      dedication: "80h/mes"
    },
    {
      role: "Diseñador UX/UI",
      responsibility: "Creatividades y landing pages",
      dedication: "30h/mes"
    }
  ];

  const budget = [
    { category: "Herramientas y Software", monthly: "€500", annual: "€6K" },
    { category: "Publicidad Online", monthly: "€2K", annual: "€24K" },
    { category: "Recursos Humanos", monthly: "€3K", annual: "€36K" },
    { category: "Contenido Externo", monthly: "€800", annual: "€9.6K" }
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
            Plan de Implementación
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Cronograma detallado con fases, recursos y presupuesto optimizado
          </p>
        </motion.div>

        {/* Implementation Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/implementation_team.jpg"
              alt="Equipo de Implementación"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Implementación Sistemática y Escalable
              </h3>
              <p className="text-blue-200">
                Cada fase construye sobre la anterior para maximizar resultados
              </p>
            </div>
          </div>
        </motion.div>

        {/* Implementation Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Fases de Implementación Estructuradas
          </h2>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
              >
                <div className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Phase Info */}
                    <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className={`p-4 bg-gradient-to-r ${phase.color} rounded-xl mr-4`}>
                          <phase.icon className="text-2xl text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                          <p className="text-cyan-400 font-medium">{phase.duration}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-white mb-3">Actividades Principales</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-blue-100 text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3">Entregables Clave</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-blue-100 text-sm">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phase Number */}
                    <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className={`w-32 h-32 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center shadow-2xl`}>
                        <span className="text-4xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Cronograma y Progreso Esperado
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  <FaCalendar className="text-cyan-400 mr-2" />
                  <span className="font-bold text-white">{item.month}</span>
                </div>
                <p className="text-blue-200 text-sm mb-3">{item.focus}</p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <span className="text-xs text-cyan-400">{item.progress}% implementado</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources and Budget */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              Recursos Necesarios
            </h3>
            
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{resource.role}</h4>
                    <span className="text-cyan-400 font-bold">{resource.dedication}</span>
                  </div>
                  <p className="text-blue-200 text-sm">{resource.responsibility}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Budget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-br from-green-800/40 to-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              Presupuesto Optimizado
            </h3>
            
            <div className="space-y-4">
              {budget.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{item.category}</h4>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold">{item.monthly}/mes</div>
                      <div className="text-green-400 text-sm">{item.annual}/año</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 mt-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">TOTAL ANUAL</h4>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-xl">€6.3K/mes</div>
                    <div className="text-green-400 font-bold">€75.6K/año</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Success Factors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-16 bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">
            Factores Críticos de Éxito
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-3">Ejecución Consistente</h4>
              <p className="text-blue-200 text-sm">
                Implementación disciplinada sin atajos ni improvisaciones
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-white mb-3">Medición Continua</h4>
              <p className="text-blue-200 text-sm">
                Análisis semanal y optimización basada en datos reales
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-3">Adaptación Ágil</h4>
              <p className="text-blue-200 text-sm">
                Flexibilidad para ajustar tácticas según resultados
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide9Implementation;