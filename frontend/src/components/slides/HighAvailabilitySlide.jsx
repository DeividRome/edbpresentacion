import React from 'react';
import { Globe, RotateCcw, Heart, Shield, Container } from 'lucide-react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';

const HighAvailabilitySlide = ({ data }) => {
  const iconMap = {
    Globe,
    RotateCcw,
    Heart,
    Shield
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#043172] mb-4">
          {data.highAvailability.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Garantía de continuidad operacional con tecnología de última generación
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Availability Guarantee */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
        <div className="text-center">
          <div className="text-4xl sm:text-6xl font-bold text-green-600 mb-4">
            99.999%
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#043172] mb-4">
            Disponibilidad Garantizada
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">5.26</div>
              <p className="text-sm sm:text-base text-gray-700">Minutos de caída máxima por año</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">&lt; 30</div>
              <p className="text-sm sm:text-base text-gray-700">Segundos de recuperación</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-sm sm:text-base text-gray-700">Monitoreo continuo</p>
            </div>
          </div>
        </div>
      </div>

      {/* HA Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {data.highAvailability.features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          const colors = [
            'from-blue-500 to-blue-600',
            'from-green-500 to-green-600',
            'from-purple-500 to-purple-600',
            'from-red-500 to-red-600'
          ];
          
          return (
            <Card 
              key={index}
              className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#50E4FE]"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${colors[index]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-[#043172] mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#50E4FE] font-medium">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Kubernetes Section */}
      <Card className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
        <div className="text-center mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Container className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-[#043172] mb-4">
            {data.highAvailability.kubernetes.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.highAvailability.kubernetes.benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-3 sm:p-4 bg-white rounded-lg border border-indigo-200 text-center hover:shadow-md transition-all duration-200"
            >
              <div className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
                {benefit}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Uptime Visualization */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Comparación de Disponibilidad
        </h2>
        
        <div className="space-y-4">
          {[
            { level: "99.9% (Estándar)", downtime: "8.77 horas/año", progress: 75, color: "bg-yellow-500" },
            { level: "99.99% (Alto)", downtime: "52.6 minutos/año", progress: 85, color: "bg-orange-500" },
            { level: "99.999% (EDB)", downtime: "5.26 minutos/año", progress: 100, color: "bg-green-500" }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-700">{item.level}</span>
                <span className="text-gray-600">{item.downtime}</span>
              </div>
              <div className="relative">
                <Progress value={item.progress} className="h-3" />
                <div 
                  className={`absolute top-0 left-0 h-3 ${item.color} rounded-l-md transition-all duration-1000`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Continuidad de Negocio Garantizada
        </h2>
        <p className="text-base sm:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          Con EDB PostgreSQL AI, su negocio nunca se detiene. Nuestra arquitectura de alta disponibilidad 
          asegura que sus aplicaciones críticas estén siempre accesibles, sin importar las circunstancias.
        </p>
      </div>
    </div>
  );
};

export default HighAvailabilitySlide;