
interface TropicalSecretsSectionProps {
  language: 'en' | 'ar';
}

const TropicalSecretsSection = ({ language }: TropicalSecretsSectionProps) => {
  const content = {
    en: {
      title: "UNLOCK THE TROPICAL SECRETS TO WELLNESS",
      subtitle: "Maxijuice: A Supercharged Elixir for a Vibrant You",
      acaiTitle: "ACAI BERRY",
      learnMore: "Learn More"
    },
    ar: {
      title: "اكتشف أسرار المناطق الاستوائية للعافية",
      subtitle: "ماكسي جوس: إكسير فائق الشحن لحياة نابضة بالحيوية",
      acaiTitle: "توت الأساي",
      learnMore: "اعرف المزيد"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {currentContent.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {currentContent.subtitle}
              </p>
            </div>
            <button className="bg-red-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg text-lg">
              {currentContent.learnMore}
            </button>
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-4xl font-bold text-red-600 tracking-wider uppercase font-mono">
              {currentContent.acaiTitle}
            </h3>
            <div className="w-80 h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/6e19a3eb-eafa-4122-9093-37bdc9010213.png"
                alt="MAXJUICE Acai Berry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TropicalSecretsSection;
