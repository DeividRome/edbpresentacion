import React from 'react';
import { Database, DollarSign, Users, Settings, AlertCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const ProblemSlide = ({ data }) => {
  const iconMap = [Database, DollarSign, Users, Settings];
  
  const costColors = {
    'Alto': 'bg-orange-100 text-orange-800 border-orange-200',
    'Muy Alto': 'bg-red-100 text-red-800 border-red-200',
    'Medio': 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#043172] mb-4">
          {data.problems.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          La mayoría de las organizaciones luchan con infraestructuras de datos complejas y costosas
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.problems.issues.map((issue, index) => {
          const Icon = iconMap[index];
          return (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-red-400 bg-gradient-to-br from-white to-red-50"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#043172]">
                      {issue.title}
                    </h3>
                    <Badge className={`${costColors[issue.cost]} text-xs font-medium`}>
                      {issue.cost}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {issue.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-700 font-medium">
                      Impacto: {issue.impact}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Impact Summary */}
      <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#043172] mb-4">
            El Resultado: Ineficiencia y Costos Elevados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">70%</div>
              <p className="text-gray-700">Más tiempo en mantenimiento</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">3-5X</div>
              <p className="text-gray-700">Mayor costo total de propiedad</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">50%</div>
              <p className="text-gray-700">Proyectos retrasados o cancelados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Hint */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-[#50E4FE]/10 to-[#043172]/10 rounded-xl border border-blue-200">
        <p className="text-lg text-[#043172] font-semibold">
          ¿Existe una mejor manera? La respuesta es PostgreSQL...
        </p>
      </div>
    </div>
  );
};

export default ProblemSlide;