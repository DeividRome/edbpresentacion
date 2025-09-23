import React from 'react';
import { Search, Bot, Repeat, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';

const MigrationSlide = ({ data }) => {
  const iconMap = {
    Search,
    Bot,
    Repeat,
    CheckCircle
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#043172] mb-4">
          {data.migration.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Herramientas inteligentes para una migración sin riesgos y sin interrupciones
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Migration Tools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {data.migration.tools.map((tool, index) => {
          const Icon = iconMap[tool.icon];
          const colors = [
            'from-blue-500 to-blue-600',
            'from-purple-500 to-purple-600',
            'from-green-500 to-green-600',
            'from-orange-500 to-orange-600'
          ];
          
          return (
            <Card 
              key={index}
              className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#50E4FE] h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${colors[index]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-[#043172] mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-semibold text-[#043172] text-sm mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Migration Process */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Proceso de Migración Paso a Paso
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              step: "1",
              title: "Evaluación",
              description: "Análisis de compatibilidad y estimación de esfuerzo",
              color: "bg-blue-100 text-blue-800"
            },
            {
              step: "2", 
              title: "Planificación",
              description: "Estrategia personalizada y roadmap detallado",
              color: "bg-green-100 text-green-800"
            },
            {
              step: "3",
              title: "Migración",
              description: "Ejecución con replicación en tiempo real",
              color: "bg-purple-100 text-purple-800"
            },
            {
              step: "4",
              title: "Validación",
              description: "Verificación completa y optimización",
              color: "bg-orange-100 text-orange-800"
            }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg sm:text-xl`}>
                {phase.step}
              </div>
              <h3 className="font-semibold text-[#043172] mb-2 text-sm sm:text-base">
                {phase.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Migration Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <h3 className="text-lg sm:text-xl font-bold text-[#043172] mb-4 text-center">
            Migración Sin Riesgos
          </h3>
          <ul className="space-y-3">
            {[
              "Cero tiempo de inactividad",
              "Rollback automático en caso de problemas", 
              "Validación continua de integridad",
              "Soporte especializado 24/7"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
          <h3 className="text-lg sm:text-xl font-bold text-[#043172] mb-4 text-center">
            Resultados Garantizados
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">95%</div>
              <p className="text-xs sm:text-sm text-gray-600">Menos reescritura</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">80%</div>
              <p className="text-xs sm:text-sm text-gray-600">Reducción de costos</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">50%</div>
              <p className="text-xs sm:text-sm text-gray-600">Tiempo ahorrado</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">100%</div>
              <p className="text-xs sm:text-sm text-gray-600">Compatibilidad</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Message */}
      <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Migre con Confianza y Sin Interrupciones
        </h2>
        <p className="text-base sm:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          Nuestras herramientas de migración asistida por IA eliminan la complejidad y los riesgos, 
          garantizando una transición suave hacia EDB PostgreSQL AI con resultados comprobados.
        </p>
      </div>
    </div>
  );
};

export default MigrationSlide;