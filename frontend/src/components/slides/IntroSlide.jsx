import React from 'react';
import { TrendingUp, AlertTriangle, Shield } from 'lucide-react';
import { Card } from '../ui/card';

const IntroSlide = ({ data }) => {
  const iconMap = {
    TrendingUp,
    AlertTriangle,
    Shield
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#043172] mb-4">
          {data.intro.title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full"></div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.intro.stats.map((stat, index) => {
          const Icon = iconMap[stat.icon];
          return (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#50E4FE]"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#043172] mb-2">
                  {stat.value}
                </div>
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {stat.label}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Key Message */}
      <div className="mt-12 p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Los Datos Impulsan la Transformación Digital
        </h2>
        <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          En la era digital, los datos se han convertido en el activo más valioso de las organizaciones. 
          Las empresas que logran aprovechar efectivamente sus datos obtienen ventajas competitivas decisivas, 
          mientras que aquellas que luchan con sistemas fragmentados se quedan atrás.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600 font-medium">
          Descubra cómo EDB PostgreSQL AI puede transformar su estrategia de datos
        </p>
      </div>
    </div>
  );
};

export default IntroSlide;