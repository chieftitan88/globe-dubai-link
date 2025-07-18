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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-wider" style={{ fontFamily: 'serif' }}>
          {currentContent.title}
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          {currentContent.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out group">
          {/* Mux Video */}
          <div className="h-96 bg-black relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out">
            <iframe
              className="w-full h-full transition-transform duration-500 ease-out"
              src="https://player.mux.com/5WnIWb00gyprvmsuwFHTHbA3DGgGoLBVF7y6rklkPR6g"
              title={currentContent.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Product image */}
          <div className="h-96 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out">
            <img 
              src="/lovable-uploads/7277e931-ba41-45cf-b016-a93ba112d855.png" 
              alt="MAXIGOLD Turmeric & Ginger Coffee"
              className="w-full h-full object-cover object-center scale-110 transition-transform duration-700 ease-out group-hover:scale-125"
            />
            <div className="absolute top-8 left-8 transition-all duration-500 ease-out group-hover:scale-105">
              <h3 className="text-4xl font-bold text-white mb-2 tracking-wider transition-all duration-300 group-hover:text-yellow-200" style={{ fontFamily: 'sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                TURMERIC &
              </h3>
              <h3 className="text-4xl font-bold text-white tracking-wider transition-all duration-300 group-hover:text-yellow-200" style={{ fontFamily: 'sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                GINGER
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldSection;
