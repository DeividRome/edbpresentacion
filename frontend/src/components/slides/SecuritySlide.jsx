import React from 'react';
import { Lock, UserCheck, FileText, Shield, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const SecuritySlide = ({ data }) => {
  const iconMap = {
    Lock,
    UserCheck, 
    FileText,
    Shield
  };

  const levelColors = {
    'Automático': 'bg-green-100 text-green-800 border-green-200',
    'Granular': 'bg-blue-100 text-blue-800 border-blue-200',
    'Total': 'bg-purple-100 text-purple-800 border-purple-200',
    'Completo': 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#043172] mb-4">
          {data.security.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Seguridad integral que protege sus datos más críticos sin comprometer el rendimiento
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.security.features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-l-4 border-[#50E4FE]"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#043172]">
                      {feature.name}
                    </h3>
                    <Badge className={`${levelColors[feature.level]} text-xs font-medium`}>
                      {feature.level}
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Security Stats */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#043172] text-center mb-6">
          Números que Respaldan Nuestra Seguridad
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {data.security.stats.repositories}
            </div>
            <p className="text-gray-700 font-medium">
              Repositorios firmados digitalmente
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {data.security.stats.coverage}
            </div>
            <p className="text-gray-700 font-medium">
              Cobertura de código revisado
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="text-lg font-bold text-purple-600 mb-2">
              Cumplimiento
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {data.security.stats.compliance.map((standard, index) => (
                <Badge key={index} className="bg-purple-100 text-purple-800 border-purple-200 text-xs">
                  {standard}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Security Architecture Diagram */}
      <div className="mb-8 p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-[#043172] text-center mb-6">
          Arquitectura de Seguridad Multicapa
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Cifrado en Tránsito', 'Cifrado en Reposo', 'Control de Acceso', 'Auditoría Completa'].map((layer, index) => (
            <div key={index} className="text-center">
              <div className={`w-full h-20 rounded-lg flex items-center justify-center mb-3 ${
                index === 0 ? 'bg-red-100 border-2 border-red-300' :
                index === 1 ? 'bg-orange-100 border-2 border-orange-300' :
                index === 2 ? 'bg-yellow-100 border-2 border-yellow-300' :
                'bg-green-100 border-2 border-green-300'
              }`}>
                <Lock className={`w-8 h-8 ${
                  index === 0 ? 'text-red-600' :
                  index === 1 ? 'text-orange-600' :
                  index === 2 ? 'text-yellow-600' :
                  'text-green-600'
                }`} />
              </div>
              <p className="text-sm font-medium text-gray-700">{layer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-4">
          Seguridad que No Compromete el Rendimiento
        </h2>
        <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          Con EDB PostgreSQL AI, la seguridad es transparente y automática. Proteja sus datos 
          más críticos mientras mantiene el máximo rendimiento y cumple con las regulaciones más estrictas.
        </p>
      </div>
    </div>
  );
};

export default SecuritySlide;