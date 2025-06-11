
interface JoinFamilySectionProps {
  language: 'en' | 'ar';
}

const JoinFamilySection = ({ language }: JoinFamilySectionProps) => {
  const content = {
    en: {
      title: "Join the Maximum88 Family",
      description: "Craft your dream life with Maximum 88 as you have the potential to boost your income and ditch the rigid schedule. Be your own boss and work when it fits your world.",
      buttonText: "JOIN US"
    },
    ar: {
      title: "انضم لعائلة ماكسيموم88",
      description: "اصنع حياة أحلامك مع ماكسيموم 88 حيث لديك القدرة على زيادة دخلك والتخلص من الجدول الزمني الصارم. كن رئيس نفسك واعمل عندما يناسب عالمك.",
      buttonText: "انضم إلينا"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          {/* Left - Team Image */}
          <div className="overflow-hidden h-full">
            <img 
              src="/lovable-uploads/cf523259-dabc-49d4-97a6-6b84a8613287.png" 
              alt="Maximum88 Team"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          
          {/* Right - Content */}
          <div className="bg-red-600 text-white p-12 flex items-center min-h-[400px]">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
                {currentContent.title}
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                {currentContent.description}
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
                {currentContent.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFamilySection;
