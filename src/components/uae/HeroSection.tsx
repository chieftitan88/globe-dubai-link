import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

interface HeroSectionProps {
  language: 'en' | 'ar';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      pparTitle: "PPAR PLUS +",
      pparSubtitle: "THE OCEAN'S BEST GIFT",
      vertTitle: "VERT",
      vertDescription: "Packed with 8 green extracts to cleanse, lighten, soothe, and hydrate your skin in just 2 weeks!",
      rougeTitle: "ROUGE",
      rougeDescription: "Achieve radiant skin in 2 weeks with our all-natural red fruit & flower soap enriched with 8 powerful extracts!",
      maxdietTitle: "MAXDIET",
      maxdietDescription: "Transform your wellness journey with our premium health supplement designed for optimal nutrition.",
      maxdietSubtitle: "PREMIUM WELLNESS FORMULA",
      maxjuiceTitle: "MAXJUICE",
      maxjuiceDescription: "Experience the power of natural superfruits with our antioxidant-rich wellness drink.",
      maxjuiceSubtitle: "SUPER JUICE TO THE MAX"
    },
    ar: {
      pparTitle: "بي بار بلس +",
      pparSubtitle: "أفضل هدية من المحيط",
      vertTitle: "فيرت",
      vertDescription: "محشو بـ 8 مستخلصات خضراء لتنظيف وتفتيح وتهدئة وترطيب بشرتك في أسبوعين فقط!",
      rougeTitle: "روج",
      rougeDescription: "احصل على بشرة مشرقة في أسبوعين مع صابون الفواكه الحمراء والزهور الطبيعي بالكامل المعزز بـ 8 مستخلصات قوية!",
      maxdietTitle: "ماكس دايت",
      maxdietDescription: "حول رحلة عافيتك مع مكملنا الصحي المتميز المصمم للتغذية المثلى.",
      maxdietSubtitle: "تركيبة العافية المتميزة",
      maxjuiceTitle: "ماكسي جوس",
      maxjuiceDescription: "اختبر قوة الفواكه الفائقة الطبيعية مع مشروب العافية الغني بمضادات الأكسدة.",
      maxjuiceSubtitle: "عصير سوبر إلى أقصى حد"
    }
  };

  const currentContent = content[language];

  const leftSlides = [
    {
      id: 1,
      title: currentContent.pparTitle,
      subtitle: currentContent.pparSubtitle,
      image: "/lovable-uploads/9bfcdd11-33f1-4f95-b36a-1318989b9d94.png"
    },
    {
      id: 2,
      title: currentContent.maxdietTitle,
      subtitle: currentContent.maxdietSubtitle,
      image: "/lovable-uploads/2823f44f-74c1-4ffc-86db-bcd31160b9fc.png"
    },
    {
      id: 3,
      title: currentContent.maxjuiceTitle,
      subtitle: currentContent.maxjuiceSubtitle,
      image: "/lovable-uploads/80d88420-0ca2-4688-9b21-005bc2f8e47e.png"
    }
  ];

  const rightSections = [
    {
      title: currentContent.vertTitle,
      description: currentContent.vertDescription,
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      iconBg: "bg-green-200",
      iconColor: "text-green-800",
      image: "/lovable-uploads/a06cb92e-8e72-42e4-b60c-4e5d585ace06.png"
    },
    {
      title: currentContent.rougeTitle,
      description: currentContent.rougeDescription,
      bgColor: "bg-red-500",
      textColor: "text-white",
      iconBg: "bg-red-400",
      iconColor: "text-white",
      descColor: "text-red-100",
      image: "/lovable-uploads/55aaa0eb-f777-4f02-b208-79f66c9c65ed.png"
    }
  ];

  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - Slider */}
        <div className="relative bg-gray-800">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {leftSlides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="relative min-h-[600px] overflow-hidden group cursor-pointer">
                    {slide.id === 1 ? (
                      // PPAR slide with full image background
                      <div className="relative min-h-[600px]">
                        <img 
                          src={slide.image}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-500"></div>
                        <div className="absolute top-8 left-8 z-10 text-white transition-transform duration-500 group-hover:scale-105">
                          <div className="inline-flex items-center bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse group-hover:bg-orange-400 transition-colors duration-300">
                            PREMIUM
                          </div>
                          <h2 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 drop-shadow-lg group-hover:from-orange-200 group-hover:to-red-300 transition-all duration-300">
                            {slide.title}
                          </h2>
                          <p className="text-xl font-medium text-white/90 tracking-wide drop-shadow-md group-hover:text-white transition-colors duration-300">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="absolute bottom-8 right-8 z-10 transition-transform duration-500 group-hover:scale-105">
                          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white group-hover:bg-white/20 transition-all duration-300">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                            Ocean's Natural Formula
                          </div>
                        </div>
                      </div>
                    ) : slide.id === 2 ? (
                      // MAXDIET slide with full image background
                      <div className="relative min-h-[600px]">
                        <img 
                          src={slide.image}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-black/50 group-hover:to-black/20 transition-all duration-500"></div>
                        <div className="absolute top-8 left-8 z-10 text-white transition-transform duration-500 group-hover:scale-105">
                          <div className="inline-flex items-center bg-yellow-400 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse group-hover:bg-yellow-300 transition-colors duration-300">
                            NEW
                          </div>
                          <h2 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 drop-shadow-lg group-hover:from-yellow-200 group-hover:to-orange-300 transition-all duration-300">
                            {slide.title}
                          </h2>
                          <p className="text-xl font-medium text-white/90 tracking-wide drop-shadow-md group-hover:text-white transition-colors duration-300">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="absolute bottom-8 right-8 z-10 transition-transform duration-500 group-hover:scale-105">
                          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white group-hover:bg-white/20 transition-all duration-300">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            Premium Quality Tablets
                          </div>
                        </div>
                      </div>
                    ) : (
                      // MAXJUICE slide with full image background
                      <div className="relative min-h-[600px]">
                        <img 
                          src={slide.image}
                          alt={slide.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-transparent to-red-800/40 group-hover:from-red-400/40 group-hover:to-red-700/50 transition-all duration-500"></div>
                        <div className="absolute top-8 left-8 z-10 text-white transition-transform duration-500 group-hover:scale-105">
                          <div className="inline-flex items-center bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse group-hover:bg-red-400 transition-colors duration-300">
                            NEW FLAVOR
                          </div>
                          <h2 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-400 drop-shadow-lg group-hover:from-red-200 group-hover:to-pink-300 transition-all duration-300">
                            {slide.title}
                          </h2>
                          <p className="text-xl font-medium text-white/90 tracking-wide drop-shadow-md group-hover:text-white transition-colors duration-300">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="absolute bottom-8 right-8 z-10 transition-transform duration-500 group-hover:scale-105">
                          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white group-hover:bg-white/20 transition-all duration-300">
                            <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
                            Acai Berry & Superfruit Blend
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300" />
            <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300" />
          </Carousel>
        </div>

        {/* Right - Static Sections */}
        <div className="grid grid-rows-2">
          {rightSections.map((section, index) => (
            <div key={index} className={`${section.bgColor} p-8 flex items-center ${section.textColor} relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-500`}>
              <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full transition-transform duration-500 group-hover:scale-110"></div>
              </div>
              <div className="flex items-center justify-between w-full relative z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3 transition-all duration-300 group-hover:text-red-600">{section.title}</h3>
                  <p className={`text-sm leading-relaxed ${section.descColor || 'text-gray-700'} transition-all duration-300 group-hover:text-gray-800`}>
                    {section.description}
                  </p>
                </div>
                <div className="ml-8">
                  <div className="w-48 h-48 rounded-xl flex items-center justify-center shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
