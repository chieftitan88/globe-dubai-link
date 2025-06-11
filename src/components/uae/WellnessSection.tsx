
interface WellnessSectionProps {
  language: 'en' | 'ar';
}

const WellnessSection = ({ language }: WellnessSectionProps) => {
  const content = {
    en: {
      text: "Wellness that works. From the inside out. #BESTLIFEEVER"
    },
    ar: {
      text: "عافية تعمل. من الداخل إلى الخارج. #أفضل_حياة_على_الإطلاق"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-8 bg-red-600">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-white text-xl font-medium">
          {currentContent.text}
        </p>
      </div>
    </section>
  );
};

export default WellnessSection;
