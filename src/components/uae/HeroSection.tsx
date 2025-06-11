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
      maxjuiceTitle: "MAXJUICE",
      maxjuiceDescription: "Experience the power of natural superfruits with our antioxidant-rich wellness drink."
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
      maxjuiceTitle: "ماكسي جوس",
      maxjuiceDescription: "اختبر قوة الفواكه الفائقة الطبيعية مع مشروب العافية الغني بمضادات الأكسدة."
    }
  };

  const currentContent = content[language];

  const leftSlides = [
    {
      id: 1,
      title: currentContent.pparTitle,
      subtitle: currentContent.pparSubtitle,
      image: "/lovable-uploads/15b3478a-be0f-4291-89ac-884db2534eec.png"
    },
    {
      id: 2,
      title: currentContent.maxdietTitle,
      subtitle: "WELLNESS TRANSFORMATION",
      image: "/lovable-uploads/15b3478a-be0f-4291-89ac-884db2534eec.png"
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
                delay: 4000,
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
                  <div className="relative bg-gray-800 flex items-center justify-center p-8 min-h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                    <div className="relative z-10 text-center text-white max-w-md">
                      <div className="mb-8">
                        <img 
                          src={slide.image}
                          alt={slide.title}
                          className="w-48 h-48 object-contain mx-auto mb-4"
                        />
                      </div>
                      <h2 className="text-4xl font-bold mb-2 text-red-400">{slide.title}</h2>
                      <p className="text-xl font-medium">{slide.subtitle}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Right - Static Sections */}
        <div className="grid grid-rows-2">
          {rightSections.map((section, index) => (
            <div key={index} className={`${section.bgColor} p-8 flex items-center ${section.textColor}`}>
              <div className="flex items-center justify-between w-full">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">{section.title}</h3>
                  <p className={`text-sm leading-relaxed ${section.descColor || 'text-gray-700'}`}>
                    {section.description}
                  </p>
                </div>
                <div className="ml-8">
                  {section.image ? (
                    <div className="w-48 h-48 rounded-lg flex items-center justify-center">
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-48 h-48 ${section.iconBg} rounded-lg flex items-center justify-center`}>
                      <span className={`${section.iconColor} font-bold`}>{section.title}</span>
                    </div>
                  )}
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
