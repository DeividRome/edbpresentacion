import React from 'react';
import { RefreshCw, Brain, Zap, Quote } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const UseCasesSlide = ({ data }) => {
  const iconMap = {
    RefreshCw,
    Brain,
    Zap
  };

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#043172] mb-4">
          {data.useCases.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Transformaciones reales que impulsan el éxito empresarial
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {data.useCases.cases.map((useCase, index) => {
          const Icon = iconMap[useCase.icon];
          const gradientColor = colorMap[useCase.color];
          
          return (
            <Card 
              key={index}
              className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-t-4 border-[#50E4FE] h-full"
            >
              <div className="text-center mb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${gradientColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#043172] mb-2 min-h-[3rem]">
                  {useCase.title}
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-[#043172] text-sm">Beneficios clave:</h4>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#50E4FE] rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Customer Testimonials */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Lo que Dicen Nuestros Clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {data.useCases.testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50 border-l-4 border-[#043172] hover:shadow-lg transition-all duration-300 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="w-6 h-6 text-[#50E4FE] flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#043172] text-sm sm:text-base">
                        {testimonial.company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ROI Summary */}
      <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Resultados Comprobados en el Mundo Real
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">95%</div>
            <p className="text-sm sm:text-base opacity-90">Menos reescritura de código</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">80%</div>
            <p className="text-sm sm:text-base opacity-90">Reducción de costos</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-2">30X</div>
            <p className="text-sm sm:text-base opacity-90">Mejor rendimiento analítico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSlide;