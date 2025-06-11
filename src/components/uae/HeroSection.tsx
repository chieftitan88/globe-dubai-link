
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
      rougeDescription: "Achieve radiant skin in 2 weeks with our all-natural red fruit & flower soap enriched with 8 powerful extracts!"
    },
    ar: {
      pparTitle: "بي بار بلس +",
      pparSubtitle: "أفضل هدية من المحيط",
      vertTitle: "فيرت",
      vertDescription: "محشو بـ 8 مستخلصات خضراء لتنظيف وتفتيح وتهدئة وترطيب بشرتك في أسبوعين فقط!",
      rougeTitle: "روج",
      rougeDescription: "احصل على بشرة مشرقة في أسبوعين مع صابون الفواكه الحمراء والزهور الطبيعي بالكامل المعزز بـ 8 مستخلصات قوية!"
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative">
      {/* Hero Grid */}
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - PPAR PLUS */}
        <div className="relative bg-gray-800 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
          <div className="relative z-10 text-center text-white max-w-md">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/15b3478a-be0f-4291-89ac-884db2534eec.png" 
                alt="PPAR Plus Product" 
                className="w-48 h-48 object-contain mx-auto mb-4"
              />
            </div>
            <h2 className="text-4xl font-bold mb-2 text-red-400">{currentContent.pparTitle}</h2>
            <p className="text-xl font-medium">{currentContent.pparSubtitle}</p>
          </div>
        </div>

        {/* Right - Product Showcases */}
        <div className="grid grid-rows-2">
          {/* VERT */}
          <div className="bg-green-50 p-8 flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-green-800 mb-3">{currentContent.vertTitle}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentContent.vertDescription}
                </p>
              </div>
              <div className="ml-8">
                <div className="w-32 h-32 bg-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-800 font-bold">VERT</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROUGE */}
          <div className="bg-red-500 p-8 flex items-center text-white">
            <div className="flex items-center justify-between w-full">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">{currentContent.rougeTitle}</h3>
                <p className="text-red-100 text-sm leading-relaxed">
                  {currentContent.rougeDescription}
                </p>
              </div>
              <div className="ml-8">
                <div className="w-32 h-32 bg-red-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ROUGE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
