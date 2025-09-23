import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import IntroSlide from './slides/IntroSlide';
import ProblemSlide from './slides/ProblemSlide';
import PostgreSQLSlide from './slides/PostgreSQLSlide';
import EDBSlide from './slides/EDBSlide';
import ThreePillarsSlide from './slides/ThreePillarsSlide';
import SecuritySlide from './slides/SecuritySlide';
import UseCasesSlide from './slides/UseCasesSlide';
import HighAvailabilitySlide from './slides/HighAvailabilitySlide';
import MigrationSlide from './slides/MigrationSlide';
import BenefitsSlide from './slides/BenefitsSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import NextStepsSlide from './slides/NextStepsSlide';
import { presentationData } from '../data/mock';

const PresentationApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const slides = [
    { component: IntroSlide, title: "Introducción: Los Datos como el Nuevo Petróleo" },
    { component: ProblemSlide, title: "El Problema Actual: Sistemas Fragmentados" },
    { component: PostgreSQLSlide, title: "¿Qué es PostgreSQL?" },
    { component: EDBSlide, title: "EDB PostgreSQL AI - La Evolución" },
    { component: ThreePillarsSlide, title: "Los Tres Pilares de EDB PostgreSQL AI" },
    { component: SecuritySlide, title: "Seguridad Empresarial: Protección por Diseño" },
    { component: UseCasesSlide, title: "Casos de Uso Reales" },
    { component: HighAvailabilitySlide, title: "Alta Disponibilidad: Siempre Funcionando" },
    { component: MigrationSlide, title: "Migración y Herramientas" },
    { component: BenefitsSlide, title: "Beneficios de Negocio Cuantificados" },
    { component: ComparisonSlide, title: "Comparación con la Competencia" },
    { component: NextStepsSlide, title: "Próximos Pasos" }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  useEffect(() => {
    setProgress(((currentSlide + 1) / slides.length) * 100);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  // Sidebar content component
  const SidebarContent = () => (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-[#043172] mb-4">Índice de la Presentación</h3>
      {slides.map((slide, index) => (
        <Card
          key={index}
          className={`p-3 cursor-pointer transition-all duration-200 hover:shadow-md ${
            currentSlide === index 
              ? 'bg-gradient-to-r from-[#50E4FE] to-[#043172] text-white shadow-lg' 
              : 'bg-white hover:bg-blue-50 text-gray-700'
          }`}
          onClick={() => goToSlide(index)}
        >
          <div className="flex items-center space-x-3">
            <span className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded ${
              currentSlide === index ? 'bg-white/20' : 'bg-blue-100 text-[#043172]'
            }`}>
              {index + 1}
            </span>
            <span className="text-xs sm:text-sm font-medium line-clamp-2">{slide.title}</span>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile menu button */}
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="lg:hidden border-[#50E4FE] text-[#043172] hover:bg-[#50E4FE] hover:text-white"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 sm:w-96">
                <SidebarContent />
              </SheetContent>
            </Sheet>

            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#50E4FE] to-[#043172] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">E</span>
            </div>
            <h1 className="text-sm sm:text-xl font-bold text-[#043172] truncate">EDB PostgreSQL AI</h1>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-xs sm:text-sm text-gray-600">
              {currentSlide + 1} / {slides.length}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="border-[#50E4FE] text-[#043172] hover:bg-[#50E4FE] hover:text-white"
            >
              {isAutoPlay ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
            </Button>
          </div>
        </div>
        <Progress value={progress} className="h-1 bg-blue-100" />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex gap-4 lg:gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 xl:w-96 space-y-2">
            <SidebarContent />
          </aside>

          {/* Slide Content */}
          <div className="flex-1">
            <Card className="bg-white shadow-lg border-0 min-h-[400px] sm:min-h-[600px]">
              <div className="p-3 sm:p-6 lg:p-8">
                <CurrentSlideComponent data={presentationData} />
              </div>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <Button
                onClick={prevSlide}
                variant="outline"
                disabled={currentSlide === 0}
                size="sm"
                className="flex items-center space-x-1 sm:space-x-2 border-[#043172] text-[#043172] hover:bg-[#043172] hover:text-white disabled:opacity-50"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Anterior</span>
              </Button>

              {/* Slide indicators - Hidden on very small screens */}
              <div className="hidden sm:flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index 
                        ? 'bg-[#043172] scale-125' 
                        : 'bg-gray-300 hover:bg-[#50E4FE]'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                size="sm"
                className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-[#50E4FE] to-[#043172] hover:from-[#043172] hover:to-[#50E4FE] text-white disabled:opacity-50"
              >
                <span className="text-xs sm:text-sm">Siguiente</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>

            {/* Mobile slide indicators */}
            <div className="flex sm:hidden justify-center mt-4 space-x-2 overflow-x-auto pb-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-8 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-[#043172]' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PresentationApp;