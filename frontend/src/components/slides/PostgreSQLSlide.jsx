import React from 'react';
import { Trophy, Users, Code, TrendingUp, Award } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const PostgreSQLSlide = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#043172] mb-4">
          {data.postgresql.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          La base de datos open source que ha conquistado el mundo empresarial
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Key Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {data.postgresql.facts.map((fact, index) => (
          <Card 
            key={index}
            className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-l-4 border-green-400"
          >
            <div className="mb-4">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {fact.metric}
              </div>
              <p className="text-gray-700 font-medium mb-2">
                {fact.description}
              </p>
              {fact.year && (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {fact.year}
                </Badge>
              )}
              {fact.growth && (
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 ml-2">
                  {fact.growth}
                </Badge>
              )}
              {fact.years && (
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                  {fact.years}
                </Badge>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Open Source Explanation */}
      <div className="mb-8 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-full flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#043172]">
            Concepto Técnico: Open Source
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Open source</strong> significa software libre y seguro. El código fuente está disponible públicamente, 
          permitiendo que miles de desarrolladores en todo el mundo contribuyan, revisen y mejoren continuamente el software. 
          Esto resulta en mayor seguridad, innovación más rápida y eliminación de dependencias de proveedores únicos.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#043172] text-center mb-6">
          ¿Por qué PostgreSQL es la Elección Inteligente?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.postgresql.benefits.map((benefit, index) => {
            const icons = [Award, Users, Code, TrendingUp, Trophy];
            const Icon = icons[index % icons.length];
            return (
              <Card 
                key={index}
                className="p-4 hover:shadow-md transition-all duration-200 transform hover:scale-105 bg-white border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">
                    {benefit}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-4">
          PostgreSQL: Probado en Producción Mundial
        </h2>
        <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          Desde startups hasta Fortune 500, PostgreSQL impulsa las aplicaciones más críticas del mundo. 
          Su combinación única de estabilidad, rendimiento y flexibilidad lo convierte en la base perfecta 
          para la innovación empresarial.
        </p>
      </div>
    </div>
  );
};

export default PostgreSQLSlide;