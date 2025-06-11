
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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {currentContent.subtitle}
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md">
              {currentContent.learnMore}
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-red-600">{currentContent.acaiTitle}</h3>
            <div className="w-64 h-96 mx-auto overflow-hidden rounded-lg shadow-lg">
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
