import React from 'react';
import { Zap, Shield, BarChart3, Database } from 'lucide-react';
import { Card } from '../ui/card';

const EDBSlide = ({ data }) => {
  const iconMap = [Shield, Zap, BarChart3, Database];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#043172] mb-4">
          {data.edb.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          PostgreSQL empresarial con capacidades de IA integradas y rendimiento superior
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.edb.improvements.map((improvement, index) => {
          const Icon = iconMap[index];
          return (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50 border-t-4 border-[#50E4FE]"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#043172] mb-2">
                  {improvement.metric}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {improvement.description}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {improvement.detail}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Evolution Comparison */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#043172] text-center mb-8">
          La Evolución: De PostgreSQL Estándar a EDB PostgreSQL AI
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard PostgreSQL */}
          <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">PostgreSQL Estándar</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Funcionalidad básica</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Soporte comunitario</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Configuración manual</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Alta disponibilidad básica</span>
              </li>
            </ul>
          </Card>

          {/* EDB PostgreSQL AI */}
          <Card className="p-6 bg-gradient-to-br from-[#50E4FE]/10 to-[#043172]/10 border-2 border-[#50E4FE]">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#043172] mb-2">EDB PostgreSQL AI</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#50E4FE] rounded-full"></div>
                <span className="font-medium">Capacidades de IA integradas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#50E4FE] rounded-full"></div>
                <span className="font-medium">Soporte empresarial 24/7</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#50E4FE] rounded-full"></div>
                <span className="font-medium">Automatización avanzada</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#50E4FE] rounded-full"></div>
                <span className="font-medium">99.999% disponibilidad</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#50E4FE] rounded-full"></div>
                <span className="font-medium">Rendimiento optimizado</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#50E4FE] rounded-full"></div>
                <span className="font-medium">Seguridad empresarial</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-4">
          Potencia Empresarial con Simplicidad Open Source
        </h2>
        <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          EDB PostgreSQL AI combina lo mejor de ambos mundos: la innovación y flexibilidad del 
          open source con las garantías y el rendimiento que requieren las empresas más exigentes.
        </p>
      </div>
    </div>
  );
};

export default EDBSlide;