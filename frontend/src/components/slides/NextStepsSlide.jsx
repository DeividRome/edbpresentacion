import React from 'react';
import { Play, Search, TestTube, Users, Mail, Phone, MessageCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

const NextStepsSlide = ({ data }) => {
  const iconMap = {
    Play,
    Search,
    TestTube,
    Users
  };

  const contactIcons = {
    Mail,
    Phone,
    MessageCircle
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#043172] mb-4">
          {data.nextSteps.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Comience su transformación digital hoy mismo con EDB PostgreSQL AI
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#50E4FE] to-[#043172] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Steps Process */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {data.nextSteps.steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          const colors = [
            'from-blue-500 to-blue-600',
            'from-green-500 to-green-600',
            'from-purple-500 to-purple-600',
            'from-orange-500 to-orange-600'
          ];
          
          return (
            <Card 
              key={index}
              className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50 border-t-4 border-[#50E4FE] h-full group cursor-pointer"
            >
              {/* Step Number */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <span className="text-white font-bold text-lg sm:text-xl">
                  {step.step}
                </span>
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#043172] mx-auto" />
              </div>
              
              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-[#043172] mb-2">
                {step.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              
              {/* Duration */}
              <div className="text-xs font-semibold text-[#50E4FE] bg-blue-50 px-2 py-1 rounded-full mb-4">
                {step.duration}
              </div>
              
              {/* Action Button */}
              <Button 
                size="sm" 
                className={`w-full bg-gradient-to-r ${colors[index]} hover:opacity-90 text-white text-xs sm:text-sm group-hover:shadow-lg transition-all duration-200`}
              >
                {step.action}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Contact Information */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Contacte a nuestro equipo de expertos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-blue-200">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-[#043172] mb-2">Ventas</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              Consultas comerciales y cotizaciones
            </p>
            <p className="text-sm font-medium text-blue-600">
              {data.nextSteps.contact.sales}
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-green-200">
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-[#043172] mb-2">Soporte</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              Asistencia técnica y resolución de problemas
            </p>
            <p className="text-sm font-medium text-green-600">
              {data.nextSteps.contact.support}
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-purple-200">
            <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-[#043172] mb-2">Consultoría Técnica</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              Arquitectura y servicios profesionales
            </p>
            <p className="text-sm font-medium text-purple-600">
              {data.nextSteps.contact.technical}
            </p>
          </Card>
        </div>
      </div>

      {/* Success Timeline */}
      <div className="mb-8 p-6 sm:p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
        <h2 className="text-xl sm:text-2xl font-bold text-[#043172] text-center mb-6">
          Su camino al éxito con EDB PostgreSQL AI
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {[
            { time: "Día 1", milestone: "Evaluación iniciada" },
            { time: "Semana 2", milestone: "Plan personalizado" },
            { time: "Mes 1", milestone: "PoC implementado" },
            { time: "Mes 3", milestone: "Producción exitosa" }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm sm:text-base">
                {index + 1}
              </div>
              <h3 className="font-semibold text-[#043172] mb-1 text-sm sm:text-base">
                {item.time}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {item.milestone}
              </p>
              {index < 3 && (
                <ArrowRight className="hidden lg:block absolute top-6 -right-4 w-6 h-6 text-green-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-[#043172] to-[#50E4FE] rounded-2xl text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Transforme su infraestructura de datos hoy
        </h2>
        <p className="text-base sm:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed mb-6">
          Más de 1,500 empresas ya confían en EDB PostgreSQL AI. Únase a ellas y experimente 
          el poder de una plataforma de datos verdaderamente unificada, inteligente y escalable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-white text-[#043172] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3"
          >
            Comenzar evaluación gratuita
            <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-2 sm:py-3"
          >
            Programar demo personalizada
            <Users className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
        
        <p className="text-sm opacity-80 mt-4">
          Sin compromisos • Soporte completo • Resultados garantizados
        </p>
      </div>
    </div>
  );
};

export default NextStepsSlide;
