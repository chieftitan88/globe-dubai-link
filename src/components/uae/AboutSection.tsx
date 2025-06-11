
interface AboutSectionProps {
  language: 'en' | 'ar';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    en: {
      title: "WHO WE ARE",
      description: "At Maximum 88, we're passionate about empowering people to achieve their wellness goals – both physically and financially. Discover our amazing products designed to help you thrive, and join our community in the UAE this September – get ready for over-all wellness!",
      buttonText: "About Us"
    },
    ar: {
      title: "من نحن",
      description: "في ماكسيموم 88، نحن متحمسون لتمكين الناس من تحقيق أهداف العافية - جسدياً ومالياً. اكتشف منتجاتنا المذهلة المصممة لمساعدتك على الازدهار، وانضم لمجتمعنا في الإمارات هذا سبتمبر - استعد للعافية الشاملة!",
      buttonText: "من نحن"
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-16 bg-red-600 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">{currentContent.title}</h2>
        <p className="text-lg leading-relaxed mb-8">
          {currentContent.description}
        </p>
        <div className="text-center">
          <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            {currentContent.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
