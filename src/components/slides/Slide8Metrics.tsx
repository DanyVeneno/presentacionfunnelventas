import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaEuroSign, FaArrowUp, FaEye, FaHandshake } from "react-icons/fa";

const Slide8Metrics: React.FC = () => {
  const funnelMetrics = [
    {
      stage: "TOFU - Atracción",
      icon: FaEye,
      color: "from-purple-500 to-pink-500",
      metrics: [
        { label: "Tráfico Web Orgánico", current: "2,500", target: "8,000", growth: "+220%" },
        { label: "Nuevos Seguidores LinkedIn", current: "500", target: "2,500", growth: "+400%" },
        { label: "Impresiones Mensuales", current: "15K", target: "75K", growth: "+400%" }
      ]
    },
    {
      stage: "MOFU - Consideración",
      icon: FaUsers,
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { label: "MQLs Mensuales", current: "20", target: "150", growth: "+650%" },
        { label: "Tasa Conversión LP", current: "1.2%", target: "4.5%", growth: "+275%" },
        { label: "Coste por Lead", current: "€85", target: "€25", growth: "-71%" }
      ]
    },
    {
      stage: "BOFU - Decisión",
      icon: FaHandshake,
      color: "from-green-500 to-emerald-500",
      metrics: [
        { label: "SQLs Mensuales", current: "5", target: "30", growth: "+500%" },
        { label: "Tasa Cierre", current: "15%", target: "35%", growth: "+133%" },
        { label: "Valor Medio Proyecto", current: "€3K", target: "€8K", growth: "+167%" }
      ]
    }
  ];

  const roiProjections = [
    { period: "Mes 3", investment: "€5K", revenue: "€12K", roi: "140%" },
    { period: "Mes 6", investment: "€15K", revenue: "€45K", roi: "200%" },
    { period: "Mes 12", investment: "€35K", revenue: "€120K", roi: "243%" },
    { period: "Año 2", investment: "€75K", revenue: "€280K", roi: "273%" }
  ];

  const keyKPIs = [
    {
      icon: FaEuroSign,
      title: "CAC (Coste Adquisición Cliente)",
      current: "€850",
      target: "€400",
      description: "Reducción del 53% en coste de adquisición"
    },
    {
      icon: FaArrowUp,
      title: "LTV (Lifetime Value)",
      current: "€8K",
      target: "€25K",
      description: "Triple valor de vida del cliente"
    },
    {
      icon: FaChartLine,
      title: "Ratio LTV/CAC",
      current: "9.4:1",
      target: "62.5:1",
      description: "Relación óptima para escalabilidad"
    }
  ];

  const dashboardMetrics = [
    { label: "Tráfico Cualificado", value: "450%", trend: "up" },
    { label: "Leads B2B", value: "650%", trend: "up" },
    { label: "Conversión Ventas", value: "280%", trend: "up" },
    { label: "Tiempo Ciclo Venta", value: "-40%", trend: "down" },
    { label: "Retención Clientes", value: "85%", trend: "up" },
    { label: "NPS Score", value: "67", trend: "up" }
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
            Métricas & ROI
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Resultados medibles y proyecciones de retorno de inversión
          </p>
        </motion.div>

        {/* ROI Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/roi_metrics.png"
              alt="ROI y Métricas Analytics"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="pl-8 pr-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Métricas que Impulsan Decisiones
                </h3>
                <p className="text-blue-200 text-lg max-w-2xl">
                  Cada euro invertido debe generar resultados medibles y escalables
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Funnel Metrics by Stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Métricas por Etapa del Funnel
          </h2>
          
          <div className="space-y-8">
            {funnelMetrics.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${stage.color} rounded-xl mr-4`}>
                    <stage.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stage.stage}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stage.metrics.map((metric, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-3">{metric.label}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 text-sm">Actual:</span>
                        <span className="text-white font-bold">{metric.current}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 text-sm">Objetivo:</span>
                        <span className="text-cyan-400 font-bold">{metric.target}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-200 text-sm">Crecimiento:</span>
                        <span className={`font-bold ${metric.growth.includes('-') ? 'text-green-400' : 'text-emerald-400'}`}>
                          {metric.growth}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Projections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proyección de ROI por Período
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {roiProjections.map((projection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-br from-green-800/40 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <h4 className="text-lg font-bold text-cyan-400 mb-4">{projection.period}</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-blue-200 text-sm">Inversión:</span>
                    <div className="text-white font-bold">{projection.investment}</div>
                  </div>
                  <div>
                    <span className="text-blue-200 text-sm">Ingresos:</span>
                    <div className="text-cyan-400 font-bold">{projection.revenue}</div>
                  </div>
                  <div>
                    <span className="text-blue-200 text-sm">ROI:</span>
                    <div className="text-green-400 font-bold text-xl">{projection.roi}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            KPIs Críticos de Negocio
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyKPIs.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full inline-flex mb-4">
                  <kpi.icon className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-4">{kpi.title}</h4>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div>
                    <span className="text-blue-200 text-sm">Actual:</span>
                    <div className="text-white font-bold">{kpi.current}</div>
                  </div>
                  <div className="text-cyan-400 text-2xl">→</div>
                  <div>
                    <span className="text-blue-200 text-sm">Objetivo:</span>
                    <div className="text-cyan-400 font-bold">{kpi.target}</div>
                  </div>
                </div>
                <p className="text-blue-200 text-sm">{kpi.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
            Resumen de Mejoras Esperadas
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center"
              >
                <div className={`text-2xl font-bold mb-2 ${
                  metric.trend === 'up' ? 'text-green-400' : 
                  metric.trend === 'down' ? 'text-blue-400' : 'text-cyan-400'
                }`}>
                  {metric.trend === 'up' && '+'}
                  {metric.value}
                </div>
                <p className="text-white text-xs font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-blue-200 italic text-lg">
              "En 12 meses: De €35K invertidos a €120K en nuevos ingresos"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide8Metrics;