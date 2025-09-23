import React from 'react';
import { Vs, CheckCircle, XCircle, Award } from 'lucide-react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';

const ComparisonSlide = ({ data }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#043172] mb-4">
          {data.comparison.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Análisis objetivo: por qué EDB PostgreSQL AI supera las alternativas
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {data.comparison.competitors.map((competitor, index) => (
          <Card 
            key={index}
            className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#50E4FE]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#043172] mb-2">
                  EDB PostgreSQL AI vs {competitor.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                  {competitor.comparison}
                </p>
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                  {competitor.score}%
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                  Ventaja EDB
                </Badge>
              </div>
            </div>
            
            <div className="mb-4">
              <Progress value={competitor.score} className="h-2 bg-gray-200" />
            </div>
            
            <div>
              <h4 className="font-semibold text-[#043172] text-sm mb-3">Ventajas clave:</h4>
              <ul className="space-y-2">
                {competitor.advantages.map((advantage, advIndex) => (
                  <li key={advIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <Card className="p-4 sm:p-6 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Comparación Detallada de Características
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white">
                <th className="text-left p-3 text-sm font-semibold">Característica</th>
                <th className="text-center p-3 text-sm font-semibold">EDB PostgreSQL AI</th>
                <th className="text-center p-3 text-sm font-semibold">Oracle</th>
                <th className="text-center p-3 text-sm font-semibold">SQL Server</th>
                <th className="text-center p-3 text-sm font-semibold">Soluciones Cloud</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                {
                  feature: "Costo de licencias",
                  edb: "Muy Bajo",
                  oracle: "Muy Alto", 
                  sqlserver: "Alto",
                  cloud: "Variable"
                },
                {
                  feature: "Disponibilidad (SLA)",
                  edb: "99.999%",
                  oracle: "99.95%",
                  sqlserver: "99.9%", 
                  cloud: "99.99%"
                },
                {
                  feature: "Capacidades de IA",
                  edb: "Nativas",
                  oracle: "Limitadas",
                  sqlserver: "Básicas",
                  cloud: "Dependiente"
                },
                {
                  feature: "Vendor Lock-in",
                  edb: "Ninguno",
                  oracle: "Alto",
                  sqlserver: "Alto",
                  cloud: "Medio"
                },
                {
                  feature: "Soporte Open Source",
                  edb: "Completo",
                  oracle: "No",
                  sqlserver: "Limitado",
                  cloud: "Variable"
                }
              ].map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {row.edb}
                    </span>
                  </td>
                  <td className="p-3 text-center text-gray-600">{row.oracle}</td>
                  <td className="p-3 text-center text-gray-600">{row.sqlserver}</td>
                  <td className="p-3 text-center text-gray-600">{row.cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Why Choose EDB */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
        <div className="text-center mb-6">
          <Award className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#043172]">
            ¿Por qué EDB PostgreSQL AI es la Elección Inteligente?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Innovación Continua",
              description: "Mejoras constantes impulsadas por la comunidad open source más activa del mundo",
              icon: "🚀"
            },
            {
              title: "Flexibilidad Total", 
              description: "Deploy donde necesite: on-premise, cloud, híbrido o multi-cloud",
              icon: "🔄"
            },
            {
              title: "Costo Predecible",
              description: "Sin sorpresas en facturación, sin costos ocultos de licencias por CPU o core",
              icon: "💰"
            },
            {
              title: "Soporte Empresarial",
              description: "Respaldo 24/7 del líder mundial en PostgreSQL empresarial",
              icon: "🛡️"
            },
            {
              title: "Futuro Garantizado",
              description: "Tecnología que evoluciona con sus necesidades, sin dependencias propietarias",
              icon: "🔮"
            },
            {
              title: "Comunidad Global",
              description: "Respaldado por millones de desarrolladores y miles de empresas",
              icon: "🌍"
            }
          ].map((reason, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg border border-green-200">
              <div className="text-2xl sm:text-3xl mb-3">{reason.icon}</div>
              <h3 className="font-semibold text-[#043172] mb-2 text-sm sm:text-base">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          La Decisión es Clara: EDB PostgreSQL AI
        </h2>
        <p className="text-base sm:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed mb-6">
          Combine el poder de la innovación open source con las garantías empresariales. 
          Obtenga más funcionalidad, mejor rendimiento y menor costo total de propiedad.
        </p>
        <div className="text-sm sm:text-base opacity-80">
          Únase a más de 1,500 empresas que ya han hecho la elección inteligente.
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlide;