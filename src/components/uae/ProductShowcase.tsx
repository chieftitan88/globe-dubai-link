

interface ProductShowcaseProps {
  language: 'en' | 'ar';
}

const ProductShowcase = ({ language }: ProductShowcaseProps) => {
  const content = {
    en: {
      title: "EMPOWER YOUR BODY'S LONG-TERM HEALTH",
      subtitle: "Wellness Made Easy: Products for a Healthier, More Confident You.",
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
      subtitle: "عافية سهلة: منتجات لحياة أكثر صحة وثقة.",
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
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* VERT SOAP */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a7b48ae8-852b-4256-b40a-a975cd760f75.png" 
                alt="VERT Soap - 8in1 All Natural Green Soap"
                className="w-full h-full object-contain"
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
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-800 font-bold text-lg">MAXDIET</span>
              </div>
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
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <div className="w-32 h-32 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-800 font-bold text-lg">MAXIWHITE</span>
              </div>
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

