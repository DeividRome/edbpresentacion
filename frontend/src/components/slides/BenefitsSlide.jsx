import React from 'react';
import { DollarSign, TrendingUp, Rocket, Zap, Cpu } from 'lucide-react';
import { Card } from '../ui/card';

const BenefitsSlide = ({ data }) => {
  const iconMap = {
    DollarSign,
    TrendingUp,
    Rocket,
    Zap,
    Cpu
  };

  const categoryColors = {
    'Costos': 'from-green-500 to-green-600',
    'Productividad': 'from-blue-500 to-blue-600',
    'Velocidad': 'from-purple-500 to-purple-600',
    'Performance': 'from-orange-500 to-orange-600',
    'Optimización': 'from-red-500 to-red-600'
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#043172] mb-4">
          {data.benefits.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          ROI medible y resultados tangibles para su organización
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* ROI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
        {data.benefits.metrics.map((metric, index) => {
          const Icon = iconMap[metric.icon];
          const gradientColor = categoryColors[metric.category];
          
          return (
            <Card 
              key={index}
              className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50 border-t-4 border-[#50E4FE] h-full"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${gradientColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <div className="text-3xl sm:text-4xl font-bold text-[#043172] mb-2">
                {metric.value}
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2 leading-relaxed">
                {metric.description}
              </p>
              
              <div className="text-xs sm:text-sm font-semibold text-[#50E4FE] bg-blue-50 px-2 py-1 rounded-full">
                {metric.category}
              </div>
            </Card>
          );
        })}
      </div>

      {/* ROI Calculation */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Cálculo de Retorno de Inversión (ROI)
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-2">Costos Actuales</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-1">
              <li>Licencias: $500K/año</li>
              <li>Mantenimiento: $200K/año</li>
              <li>Personal: $300K/año</li>
              <li className="font-semibold border-t pt-1 mt-2">Total: $1M/año</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2">Con EDB PostgreSQL AI</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-1">
              <li>Licencias: $150K/año</li>
              <li>Mantenimiento: $50K/año</li>
              <li>Personal: $100K/año</li>
              <li className="font-semibold border-t pt-1 mt-2">Total: $300K/año</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Ahorros Anuales</h3>
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">$700K</div>
            <div className="text-lg sm:text-xl font-semibold text-green-600">
              ROI: 233%
            </div>
            <p className="text-sm text-gray-600 mt-2">Recuperación en 4 meses</p>
          </div>
        </div>
      </div>

      {/* Business Impact Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <h3 className="text-lg sm:text-xl font-bold text-[#043172] mb-4 text-center">
            Impacto Operacional
          </h3>
          <div className="space-y-4">
            {[
              { metric: "70%", description: "Reducción en tiempo de mantenimiento" },
              { metric: "50%", description: "Menos incidentes de producción" },
              { metric: "3X", description: "Mayor velocidad de desarrollo" },
              { metric: "90%", description: "Automatización de tareas rutinarias" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <span className="text-sm sm:text-base text-gray-700">{item.description}</span>
                <span className="text-lg sm:text-xl font-bold text-blue-600">{item.metric}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
          <h3 className="text-lg sm:text-xl font-bold text-[#043172] mb-4 text-center">
            Beneficios Estratégicos
          </h3>
          <div className="space-y-4">
            {[
              { metric: "100%", description: "Independencia de proveedores" },
              { metric: "24/7", description: "Disponibilidad garantizada" },
              { metric: "∞", description: "Escalabilidad sin límites" },
              { metric: "0", description: "Vendor lock-in eliminado" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <span className="text-sm sm:text-base text-gray-700">{item.description}</span>
                <span className="text-lg sm:text-xl font-bold text-purple-600">{item.metric}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Message */}
      <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Inversión Inteligente con Resultados Inmediatos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">4 meses</div>
            <p className="text-sm sm:text-base opacity-90">Tiempo de recuperación</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">233%</div>
            <p className="text-sm sm:text-base opacity-90">ROI en el primer año</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">$700K</div>
            <p className="text-sm sm:text-base opacity-90">Ahorros anuales promedio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSlide;