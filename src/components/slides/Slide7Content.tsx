import React from "react";
import { motion } from "framer-motion";
import {
  FaPen,
  FaVideo,
  FaMicrophone,
  FaChartLine,
  FaUserTie,
  FaBlog,
} from "react-icons/fa";

const Slide7Content: React.FC = () => {
  const contentPillars = [
    {
      title: "Diseño & Creatividad",
      topics: [
        "Tendencias en diseño",
        "Psicología del color",
        "Branding estratégico",
        "UX/UI innovador",
      ],
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Transformación Digital",
      topics: [
        "Cultura organizacional",
        "Metodologías ágiles",
        "Gestión del cambio",
        "Futuro del trabajo",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Marketing B2B",
      topics: [
        "Estrategias de conversión",
        "SEO avanzado",
        "Analytics y BI",
        "IA en marketing",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Desarrollo Web",
      topics: [
        "Tecnologías emergentes",
        "Performance web",
        "Accesibilidad",
        "Mobile-first",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const contentFormats = [
    {
      icon: FaBlog,
      format: "Artículos de Blog",
      description: "Pilares de contenido y topic clusters optimizados para SEO",
      frequency: "2-3 por semana",
      impact: "Tráfico orgánico y autoridad",
    },
    {
      icon: FaVideo,
      format: "Videos Explicativos",
      description: "Tutoriales conceptuales y casos de éxito visuales",
      frequency: "1-2 por semana",
      impact: "Engagement y conversión",
    },
    {
      icon: FaMicrophone,
      format: "Webinars & Podcasts",
      description: "Sesiones interactivas y entrevistas con expertos",
      frequency: "2 por mes",
      impact: "Leads cualificados",
    },
    {
      icon: FaChartLine,
      format: "Estudios & Research",
      description: "Investigaciones originales y análisis de mercado",
      frequency: "1 por trimestre",
      impact: "Thought leadership",
    },
  ];

  const thoughtLeadershipTactics = [
    "Desarrollar perspectiva única y contrarian views",
    "Participar como ponente en eventos del sector",
    "Crear frameworks y metodologías propias",
    "Publicar en medios especializados",
    "Networking activo con otros líderes",
    "Mentorías y consultoría de alto nivel",
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
            Content Marketing
          </h1>
          <h2 className='text-3xl font-semibold text-white mb-4'>
            & Thought Leadership
          </h2>
          <p className='text-xl text-blue-200 max-w-3xl mx-auto'>
            Construcción de autoridad y generación de leads a través de
            contenido de valor
          </p>
        </motion.div>

        {/* Content Marketing Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-16 relative'
        >
          <div className='relative overflow-hidden rounded-3xl'>
            <img
              src='/images/content_marketing.png'
              alt='Content Marketing Strategy'
              className='w-full h-80 object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent' />
            <div className='absolute bottom-8 left-8 right-8 text-center'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Contenido que Educa, Convierte y Posiciona
              </h3>
              <p className='text-blue-200'>
                No solo marketing, sino demostración real de expertise
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Pilares de Contenido Estratégicos
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {contentPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className='bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group'
              >
                <div
                  className={`h-2 bg-gradient-to-r ${pillar.color} rounded-full mb-4`}
                />
                <h3 className='text-lg font-bold text-white mb-4'>
                  {pillar.title}
                </h3>

                <div className='space-y-2'>
                  {pillar.topics.map((topic, i) => (
                    <div key={i} className='flex items-start'>
                      <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0' />
                      <span className='text-blue-200 text-sm'>{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Formats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mb-16'
        >
          <h3 className='text-2xl font-bold text-white mb-8 text-center'>
            Formatos de Contenido Diversificados
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {contentFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'
              >
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg'>
                    <format.icon className='text-xl text-white' />
                  </div>

                  <div className='flex-1'>
                    <h4 className='text-lg font-semibold text-white mb-2'>
                      {format.format}
                    </h4>
                    <p className='text-blue-200 text-sm mb-3'>
                      {format.description}
                    </p>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <span className='text-cyan-400 text-xs font-medium'>
                          Frecuencia:
                        </span>
                        <p className='text-white text-sm'>{format.frequency}</p>
                      </div>
                      <div>
                        <span className='text-cyan-400 text-xs font-medium'>
                          Impacto:
                        </span>
                        <p className='text-white text-sm'>{format.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thought Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='mb-16'
        >
          <div className='bg-gradient-to-r from-purple-800/40 to-blue-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20'>
            <div className='text-center mb-8'>
              <FaUserTie className='text-4xl text-cyan-400 mx-auto mb-4' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Estrategia de Thought Leadership
              </h3>
              <p className='text-blue-200 max-w-2xl mx-auto'>
                Posicionamiento como referente y líder de opinión en el sector
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {thoughtLeadershipTactics.map((tactic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  className='bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300'
                >
                  <div className='flex items-start'>
                    <div className='w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0' />
                    <span className='text-white text-sm font-medium'>
                      {tactic}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content ROI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className='bg-gradient-to-r from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20'
        >
          <h3 className='text-2xl font-bold text-cyan-400 mb-8 text-center'>
            ROI del Content Marketing
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>300%</div>
              <p className='text-white font-medium'>Más Leads</p>
              <p className='text-blue-200 text-sm'>vs. publicidad directa</p>
            </div>

            <div className='text-center'>
              <div className='text-3xl font-bold text-green-400 mb-2'>62%</div>
              <p className='text-white font-medium'>Menor Coste</p>
              <p className='text-blue-200 text-sm'>por lead generado</p>
            </div>

            <div className='text-center'>
              <div className='text-3xl font-bold text-purple-400 mb-2'>6x</div>
              <p className='text-white font-medium'>Mayor Conversión</p>
              <p className='text-blue-200 text-sm'>audiencias educadas</p>
            </div>

            <div className='text-center'>
              <div className='text-3xl font-bold text-orange-400 mb-2'>78%</div>
              <p className='text-white font-medium'>Clientes Retienen</p>
              <p className='text-blue-200 text-sm'>información útil</p>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <p className='text-blue-200 italic'>
              "El contenido de calidad no es gasto, es inversión en autoridad y
              confianza"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide7Content;
