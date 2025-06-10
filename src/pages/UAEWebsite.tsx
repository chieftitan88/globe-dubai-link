
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, User, Menu, X, MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';

const UAEWebsite = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      title: "MAXIMUM 88",
      subtitle: "CORPORATION",
      tagline: "Discover the best you, inside and out, with our integrated beauty and wellness products.",
      nav: {
        home: "HOME",
        shop: "SHOP", 
        about: "ABOUT US",
        joinUs: "JOIN US",
        logIn: "LOG IN"
      },
      hero: {
        title: "EMPOWER YOUR BODY'S LONG-TERM HEALTH",
        subtitle: "Wellness Made Easy: Products for a Healthier, More Confident You."
      },
      products: {
        vert: {
          title: "VERT SOAP",
          subtitle: "Your 8-in-1 All-Natural Green Oasis for Glowing Skin",
          description: "Packed with 8 green extracts to cleanse, lighten, soothe, and hydrate your skin in just 2 weeks!"
        },
        maxdiet: {
          title: "MAXDIET", 
          subtitle: "Feeling sluggish or weighed down? Unleash Your Inner Vitality",
          description: "Advanced formula for natural weight management and energy boost"
        },
        rouge: {
          title: "ROUGE",
          subtitle: "Achieve radiant skin in 2 weeks",
          description: "with our all-natural red fruit & flower soap enriched with 8 powerful extracts!"
        },
        acaiberry: {
          title: "ACAI BERRY",
          description: "Antioxidant-rich superfruit for ultimate wellness"
        },
        maxigold: {
          title: "MAXIGOLD",
          subtitle: "Your morning cup of energy and turmeric sunshine!",
          description: "Start your day like a champion – MAXIGOLD: Your morning cup of energy and turmeric sunshine!"
        }
      },
      sections: {
        wellness: "Wellness that works. From the inside out. #BESTLIFEEVER",
        whoWeAre: "WHO WE ARE",
        aboutText: "At Maximum 88, we're passionate about empowering people to achieve their wellness goals – both physically and financially. Discover our amazing products designed to help you thrive, and join our community in the UAE this September – get ready for over-all wellness!",
        unlockSecrets: "UNLOCK THE TROPICAL SECRETS TO WELLNESS",
        maxijuice: "Maxijuice: A Supercharged Elixir for a Vibrant You",
        goldSection: "WE'VE FOUND GOLD!",
        joinFamily: "Join the Maximum88 Family",
        joinText: "Craft your dream life with Maximum 88 as you have the potential to boost your income and ditch the rigid schedule. Be your own boss and work when it fits your world."
      },
      contact: {
        office: "Dubai Office",
        address: "836B 8th Floor, Al Ghurair Office Center, Riga, Deira, Dubai, UAE",
        hotline: "Customer Hotline: 04 882 3697",
        whatsapp: "Viber/WhatsApp: +971 52 963 4682",
        email: "Email: info@maximum88.ae",
        support: "support@maximum88.com"
      },
      footer: {
        useLinks: "USE LINK",
        exploreMore: "EXPLORE MORE",
        contact: "CONTACT",
        cookiePolicy: "COOKIE POLICY",
        incomeDisclosure: "INCOME DISCLOSURE STATEMENT",
        companyPolicy: "COMPANY POLICY AND PROCEDURE",
        accessibility: "ACCESSIBILITY",
        disputeResolution: "DISPUTE RESOLUTION POLICY",
        privacyNotice: "PRIVACY NOTICE",
        returnPolicy: "RETURN POLICY",
        copyright: "Copyright 2024 Designed & Built by Maximum88.ae"
      },
      backToSelection: "← Back to Country Selection"
    },
    ar: {
      title: "ماكسيموم 88",
      subtitle: "المؤسسة",
      tagline: "اكتشف أفضل ما لديك، من الداخل والخارج، مع منتجاتنا المتكاملة للجمال والعافية.",
      nav: {
        home: "الرئيسية",
        shop: "المتجر",
        about: "من نحن",
        joinUs: "انضم إلينا",
        logIn: "تسجيل الدخول"
      },
      hero: {
        title: "تمكين صحة جسمك على المدى الطويل",
        subtitle: "العافية سهلة: منتجات لحياة أكثر صحة وثقة."
      },
      products: {
        vert: {
          title: "صابون فيرت",
          subtitle: "واحتك الخضراء الطبيعية 8 في 1 للبشرة المتوهجة",
          description: "مليء بـ 8 مستخلصات خضراء لتنظيف وتفتيح وتهدئة وترطيب بشرتك في أسبوعين فقط!"
        },
        maxdiet: {
          title: "ماكس دايت",
          subtitle: "هل تشعر بالخمول أو الثقل؟ أطلق حيويتك الداخلية",
          description: "تركيبة متقدمة لإدارة الوزن الطبيعي وزيادة الطاقة"
        },
        rouge: {
          title: "روج",
          subtitle: "احصل على بشرة متألقة في أسبوعين",
          description: "مع صابون الفواكه والزهور الحمراء الطبيعي المدعم بـ 8 مستخلصات قوية!"
        },
        acaiberry: {
          title: "أكاي بيري",
          description: "فاكهة خارقة غنية بمضادات الأكسدة للعافية القصوى"
        },
        maxigold: {
          title: "ماكسي جولد",
          subtitle: "كوبك الصباحي من الطاقة وأشعة الكركم الذهبية!",
          description: "ابدأ يومك كبطل - ماكسي جولد: كوبك الصباحي من الطاقة وأشعة الكركم الذهبية!"
        }
      },
      sections: {
        wellness: "عافية تعمل. من الداخل إلى الخارج. #أفضل_حياة_على_الإطلاق",
        whoWeAre: "من نحن",
        aboutText: "في ماكسيموم 88، نحن متحمسون لتمكين الناس من تحقيق أهداف العافية - جسدياً ومالياً. اكتشف منتجاتنا المذهلة المصممة لمساعدتك على الازدهار، وانضم لمجتمعنا في الإمارات هذا سبتمبر - استعد للعافية الشاملة!",
        unlockSecrets: "اكتشف أسرار العافية الاستوائية",
        maxijuice: "ماكسي جوس: إكسير فائق الشحن لحياة نابضة بالحياة",
        goldSection: "لقد وجدنا الذهب!",
        joinFamily: "انضم لعائلة ماكسيموم88",
        joinText: "اصنع حياة أحلامك مع ماكسيموم 88 حيث لديك القدرة على زيادة دخلك والتخلص من الجدول الزمني الصارم. كن رئيس نفسك واعمل عندما يناسب عالمك."
      },
      contact: {
        office: "مكتب دبي",
        address: "836B الطابق الثامن، مركز الغرير التجاري، ريغا، ديرة، دبي، الإمارات العربية المتحدة",
        hotline: "خط العملاء: 04 882 3697",
        whatsapp: "فايبر/واتساب: +971 52 963 4682",
        email: "البريد الإلكتروني: info@maximum88.ae",
        support: "support@maximum88.com"
      },
      footer: {
        useLinks: "استخدم الرابط",
        exploreMore: "اكتشف المزيد",
        contact: "اتصل بنا",
        cookiePolicy: "سياسة ملفات تعريف الارتباط",
        incomeDisclosure: "بيان الكشف عن الدخل",
        companyPolicy: "سياسة الشركة والإجراءات",
        accessibility: "إمكانية الوصول",
        disputeResolution: "سياسة حل النزاعات",
        privacyNotice: "إشعار الخصوصية",
        returnPolicy: "سياسة الإرجاع",
        copyright: "حقوق الطبع والنشر 2024 مصمم ومبني بواسطة Maximum88.ae"
      },
      backToSelection: "← العودة لاختيار البلد"
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar with tagline */}
          <div className="bg-red-600 text-white text-center py-2 text-sm -mx-4">
            {currentContent.tagline}
          </div>
          
          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">88</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{currentContent.title}</h1>
                <p className="text-sm text-red-600 font-medium">{currentContent.subtitle}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">{currentContent.nav.home}</a>
              <a href="#shop" className="text-gray-700 hover:text-red-600 font-medium">{currentContent.nav.shop}</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">{currentContent.nav.about}</a>
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
              <button className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700">
                {currentContent.nav.joinUs}
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-2 rounded font-medium hover:bg-red-600 hover:text-white">
                {currentContent.nav.logIn}
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageToggle language={language} onLanguageChange={setLanguage} />
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-red-600 text-sm"
              >
                {currentContent.backToSelection}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Product Showcase */}
      <section id="home" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Left - Products */}
            <div className="space-y-8">
              {/* OBPAR PLUS Product */}
              <div className="bg-gray-100 rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-bold transform -rotate-12">
                  OBPAR PLUS +
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 text-sm font-bold">
                  THE OCEAN'S BEST GIFT
                </div>
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
              </div>
              
              {/* VERT Product */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">VERT</h3>
                <p className="text-gray-700 mb-4">{currentContent.products.vert.description}</p>
                <div className="h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
                  <span className="text-green-700">VERT Product</span>
                </div>
              </div>
            </div>

            {/* Right - ROUGE Product */}
            <div className="bg-red-600 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">ROUGE</h2>
              <p className="mb-6">{currentContent.products.rouge.description}</p>
              <div className="h-64 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-red-100">ROUGE Product</span>
              </div>
            </div>
          </div>

          {/* Wellness Banner */}
          <div className="bg-red-600 text-white text-center py-4 rounded-lg mb-16">
            <p className="text-lg font-medium">{currentContent.sections.wellness}</p>
          </div>
        </div>
      </section>

      {/* Hero Title Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="shop" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* VERT SOAP */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="h-48 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-green-600 font-bold">VERT SOAP</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentContent.products.vert.title}</h3>
              <p className="text-gray-600 mb-4">{currentContent.products.vert.subtitle}</p>
              <button className="text-red-600 font-medium hover:text-red-700">Read More..</button>
            </motion.div>

            {/* MAXDIET */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="h-48 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-blue-600 font-bold">MAXDIET</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentContent.products.maxdiet.title}</h3>
              <p className="text-gray-600 mb-4">{currentContent.products.maxdiet.subtitle}</p>
              <button className="text-red-600 font-medium hover:text-red-700">Read More..</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-6xl font-bold">MAXIMUM 88 CORPORATION</span>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center">{currentContent.sections.whoWeAre}</h2>
          <p className="text-lg leading-relaxed mb-8">
            {currentContent.sections.aboutText}
          </p>
          <div className="text-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Tropical Secrets Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {currentContent.sections.unlockSecrets}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {currentContent.sections.maxijuice}
              </p>
            </div>
            <div className="bg-red-500 rounded-lg p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">{currentContent.products.acaiberry.title}</h3>
                <div className="h-48 bg-red-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-red-100">ACAI BERRY</span>
                </div>
                <button className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {currentContent.sections.goldSection}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {currentContent.products.maxigold.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video placeholder */}
            <div className="bg-black rounded-lg h-64 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">▶</span>
                </div>
                <p>The Gold Coffee!</p>
              </div>
            </div>
            
            {/* Product image */}
            <div className="bg-yellow-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">TURMERIC & GINGER</h3>
                <div className="text-yellow-600">MAXIGOLD Product</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Family Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Left - Team Image */}
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <span className="text-gray-500">Team Photo</span>
            </div>
            
            {/* Right - Content */}
            <div className="bg-red-600 text-white p-12 flex items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
                  {currentContent.sections.joinFamily}
                </h2>
                <p className="text-lg mb-8 leading-relaxed">
                  {currentContent.sections.joinText}
                </p>
                <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
                  {currentContent.nav.joinUs}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">88</span>
                </div>
              </div>
            </div>

            {/* Use Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{currentContent.footer.useLinks}</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-red-600">{currentContent.nav.home}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.nav.shop}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.nav.about}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.nav.joinUs}</a></li>
              </ul>
            </div>

            {/* Explore More */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{currentContent.footer.exploreMore}</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-red-600">{currentContent.footer.cookiePolicy}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.footer.incomeDisclosure}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.footer.accessibility}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.footer.privacyNotice}</a></li>
                <li><a href="#" className="hover:text-red-600">{currentContent.footer.returnPolicy}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{currentContent.footer.contact}</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>{currentContent.contact.address}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>04 882 3697</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <p>+971 52 963 4682</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p>{currentContent.contact.support}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment icons */}
          <div className="flex justify-end space-x-4 mb-8">
            <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">MC</span>
            </div>
            <div className="w-8 h-6 bg-blue-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">AE</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t">
            <p>{currentContent.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UAEWebsite;
