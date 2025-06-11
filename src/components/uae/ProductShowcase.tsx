
import { useEffect, useRef, useState } from 'react';

interface ProductShowcaseProps {
  language: 'en' | 'ar';
}

const ProductShowcase = ({ language }: ProductShowcaseProps) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const content = {
    en: {
      title: "EMPOWER YOUR BODY'S LONG-TERM HEALTH",
      vertTitle: "VERT SOAP",
      vertDescription: "Your 8-in-1 All-Natural Green Oasis for Glowing S",
      maxdietTitle: "MAXDIET",
      maxdietDescription: "Feeling sluggish or weighed down? Unleash Your In",
      maxiwhiteTitle: "MAXIWHITE",
      maxiwhiteDescription: "Transform your skin with our premium whitening solution",
      readMore: "Read More.."
    },
    ar: {
      title: "قوي صحة جسمك طويلة المدى",
      vertTitle: "صابون فيرت",
      vertDescription: "واحتك الخضراء الطبيعية 8 في 1 للبشرة المتوهجة",
      maxdietTitle: "ماكس دايت",
      maxdietDescription: "هل تشعر بالخمول أو الثقل؟ أطلق حيويتك الداخلية",
      maxiwhiteTitle: "ماكسي وايت",
      maxiwhiteDescription: "حول بشرتك مع حلول التبييض المتميزة",
      readMore: "اقرأ المزيد.."
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* VERT SOAP */}
          <div 
            ref={(el) => cardRefs.current[0] = el}
            className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-700 ease-out ${
              visibleCards[0] 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a7b48ae8-852b-4256-b40a-a975cd760f75.png" 
                alt="VERT Soap - 8in1 All Natural Green Soap"
                className="w-44 h-44 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{currentContent.vertTitle}</h3>
              <p className="text-sm text-gray-600">{currentContent.vertDescription}</p>
              <button className="text-red-600 font-medium hover:text-red-700 text-sm">
                {currentContent.readMore}
              </button>
            </div>
          </div>

          {/* MAXDIET */}
          <div 
            ref={(el) => cardRefs.current[1] = el}
            className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-700 ease-out ${
              visibleCards[1] 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/c4a24758-ec4d-46d2-a3e6-adacb3bb02de.png" 
                alt="MAXDIET - Premium Diet Supplement"
                className="w-44 h-44 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{currentContent.maxdietTitle}</h3>
              <p className="text-sm text-gray-600">{currentContent.maxdietDescription}</p>
              <button className="text-red-600 font-medium hover:text-red-700 text-sm">
                {currentContent.readMore}
              </button>
            </div>
          </div>

          {/* MAXIWHITE */}
          <div 
            ref={(el) => cardRefs.current[2] = el}
            className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-700 ease-out ${
              visibleCards[2] 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1e8e0634-bb91-4b9c-a504-bff691517971.png" 
                alt="MAXIWHITE - Premium Whitening Solution"
                className="w-44 h-44 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{currentContent.maxiwhiteTitle}</h3>
              <p className="text-sm text-gray-600">{currentContent.maxiwhiteDescription}</p>
              <button className="text-red-600 font-medium hover:text-red-700 text-sm">
                {currentContent.readMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
