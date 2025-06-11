
interface GoldSectionProps {
  language: 'en' | 'ar';
}

const GoldSection = ({ language }: GoldSectionProps) => {
  const content = {
    en: {
      title: "WE'VE FOUND GOLD!",
      subtitle: "Start your day like a champion – MAXIGOLD: Your morning cup of energy and turmeric sunshine!",
      videoTitle: "The Gold Coffee!",
      productTitle: "TURMERIC & GINGER",
      productSubtitle: "MAXIGOLD Product"
    },
    ar: {
      title: "لقد وجدنا الذهب!",
      subtitle: "ابدأ يومك كالبطل - ماكسي جولد: كوب الصباح من الطاقة وأشعة الكركم المشرقة!",
      videoTitle: "قهوة الذهب!",
      productTitle: "الكركم والزنجبيل",
      productSubtitle: "منتج ماكسي جولد"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {currentContent.title}
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          {currentContent.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video placeholder */}
          <div className="bg-black rounded-lg h-64 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">▶</span>
              </div>
              <p>{currentContent.videoTitle}</p>
            </div>
          </div>
          
          {/* Product image */}
          <div className="bg-yellow-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">{currentContent.productTitle}</h3>
              <div className="text-yellow-600">{currentContent.productSubtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldSection;
