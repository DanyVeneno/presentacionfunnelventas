import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slideComponents } from "./slides";

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideComponents.length;

  // Global navigation method for external access
  const navigateSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  // Mount global methods on window object
  useEffect(() => {
    window._navigate_slide = navigateSlide;
    window._total_slides = {
      count: totalSlides,
      title: "Presentación Marketing Digital - Servicios Creativos"
    };

    return () => {
      delete window._navigate_slide;
      delete window._total_slides;
    };
  }, [navigateSlide, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
          event.preventDefault();
          if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
          break;
        case "Home":
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case "End":
          event.preventDefault();
          setCurrentSlide(totalSlides - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slideComponents[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Progress */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-lg font-semibold text-white/90">
                  Marketing Digital - Servicios Creativos
                </h1>
                <span className="text-sm text-white/60">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="flex-1 max-w-md mx-8">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? "bg-cyan-400 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="min-h-[calc(100vh-5rem)]"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Navigation Controls */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center space-x-4 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentSlide === 0
                  ? "text-white/30 cursor-not-allowed"
                  : "text-white hover:bg-white/20 hover:scale-110"
              }`}
            >
              <FaChevronLeft size={24} />
            </button>
            
            <span className="text-sm text-white/80 px-4">
              Slide {currentSlide + 1}
            </span>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentSlide === totalSlides - 1
                  ? "text-white/30 cursor-not-allowed"
                  : "text-white hover:bg-white/20 hover:scale-110"
              }`}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Touch/Swipe Areas for Mobile */}
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="h-full flex">
            <div
              className="w-1/3 h-full pointer-events-auto cursor-pointer"
              onClick={prevSlide}
            />
            <div className="w-1/3 h-full" />
            <div
              className="w-1/3 h-full pointer-events-auto cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;