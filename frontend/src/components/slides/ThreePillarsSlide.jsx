import React, { useState } from 'react';
import { Database, BarChart3, Brain, Cloud, Eye, Zap, Lock, Rocket, Minimize2, Code, Shield } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const ThreePillarsSlide = ({ data }) => {
  const [activePillar, setActivePillar] = useState('pillar1');

  const iconMaps = {
    pillar1: { Database, BarChart3, Brain },
    pillar2: { Cloud, Eye, Zap, Lock },
    pillar3: { Rocket, Minimize2, Code, Shield }
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#043172] mb-4">
          {data.pillars.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tres fundamentos tecnológicos que revolucionan la gestión de datos empresariales
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Interactive Pillars */}
      <Tabs value={activePillar} onValueChange={setActivePillar} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100">
          <TabsTrigger value="pillar1" className="text-center p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#50E4FE] data-[state=active]:to-[#043172] data-[state=active]:text-white">
            <div>
              <Database className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">Pilar 1</span>
              <div className="text-sm opacity-80">Base Unificada</div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="pillar2" className="text-center p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#50E4FE] data-[state=active]:to-[#043172] data-[state=active]:text-white">
            <div>
              <Cloud className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">Pilar 2</span>
              <div className="text-sm opacity-80">Gestión Híbrida</div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="pillar3" className="text-center p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#50E4FE] data-[state=active]:to-[#043172] data-[state=active]:text-white">
            <div>
              <Brain className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">Pilar 3</span>
              <div className="text-sm opacity-80">Fábrica de IA</div>
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Pillar 1: Unified Database */}
        <TabsContent value="pillar1" className="mt-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-[#043172] mb-6 text-center">
              {data.pillars.pillar1.title}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Todo en un solo lugar, sin duplicaciones ni complejidad
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pillars.pillar1.features.map((feature, index) => {
                const icons = [Database, BarChart3, Brain];
                const Icon = icons[index];
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#043172] mb-2">
                        {feature.type}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        {/* Pillar 2: Hybrid Management */}
        <TabsContent value="pillar2" className="mt-8">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <h2 className="text-3xl font-bold text-[#043172] mb-6 text-center">
              {data.pillars.pillar2.title}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Flexibilidad total en el despliegue y gestión de sus datos
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.pillars.pillar2.capabilities.map((capability, index) => {
                const icons = [Cloud, Eye, Zap, Lock];
                const Icon = icons[index];
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#043172] mb-2">
                          {capability.feature}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        {/* Pillar 3: AI Factory */}
        <TabsContent value="pillar3" className="mt-8">
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <h2 className="text-3xl font-bold text-[#043172] mb-6 text-center">
              {data.pillars.pillar3.title}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Desarrollo acelerado de aplicaciones de inteligencia artificial
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.pillars.pillar3.benefits.map((benefit, index) => {
                const icons = [Rocket, Minimize2, Code, Shield];
                const Icon = icons[index];
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {benefit.metric}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Bottom Summary */}
      <div className="mt-12 p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Una Arquitectura Pensada para el Futuro
        </h2>
        <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
          Los tres pilares de EDB PostgreSQL AI trabajan en conjunto para ofrecer una plataforma 
          completa que elimina la complejidad, reduce costos y acelera la innovación empresarial.
        </p>
      </div>
    </div>
  );
};

export default ThreePillarsSlide;