
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
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* YouTube Video */}
          <div className="h-80 bg-black rounded-l-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title={currentContent.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Product image */}
          <div className="h-80 rounded-r-lg overflow-hidden">
            <img 
              src="/lovable-uploads/0527690b-04bb-403d-84f3-225576571139.png" 
              alt="MAXIGOLD Turmeric & Ginger Coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldSection;
