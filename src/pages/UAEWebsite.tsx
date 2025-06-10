
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';

const UAEWebsite = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      title: "Maximum88 Dubai",
      subtitle: "Premium Services in the Heart of the UAE",
      description: "Experience world-class service excellence in Dubai, strategically located in the prestigious Al Ghurair Office Center.",
      services: {
        title: "Our Services",
        items: [
          "Premium Business Solutions",
          "Corporate Consulting",
          "Financial Services",
          "Legal Advisory",
          "Investment Guidance"
        ]
      },
      contact: {
        title: "Get in Touch",
        office: "Dubai Office",
        address: "836B 8th Floor, Al Ghurair Office Center, Riga, Deira, Dubai, UAE",
        hotline: "Customer Hotline: 04 882 3697",
        whatsapp: "Viber/WhatsApp: +971 52 963 4682",
        luzonOffice: "Luzon Office also available for Philippines operations"
      },
      nav: {
        home: "Home",
        services: "Services", 
        about: "About",
        contact: "Contact"
      },
      cta: "Contact Us Today",
      backToSelection: "← Back to Country Selection"
    },
    ar: {
      title: "ماكسيموم88 دبي",
      subtitle: "خدمات راقية في قلب دولة الإمارات العربية المتحدة",
      description: "استمتع بخدمة عالمية المستوى في دبي، تقع استراتيجياً في مركز الغرير التجاري المرموق.",
      services: {
        title: "خدماتنا",
        items: [
          "حلول الأعمال المتميزة",
          "الاستشارات المؤسسية",
          "الخدمات المالية",
          "الاستشارات القانونية",
          "التوجيه الاستثماري"
        ]
      },
      contact: {
        title: "تواصل معنا",
        office: "مكتب دبي",
        address: "836B الطابق الثامن، مركز الغرير التجاري، ريغا، ديرة، دبي، الإمارات العربية المتحدة",
        hotline: "خط العملاء: 04 882 3697",
        whatsapp: "فايبر/واتساب: +971 52 963 4682",
        luzonOffice: "مكتب لوزون متاح أيضاً لعمليات الفلبين"
      },
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "حولنا", 
        contact: "اتصل بنا"
      },
      cta: "تواصل معنا اليوم",
      backToSelection: "← العودة لاختيار البلد"
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-white to-red-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-red-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-red-600 bg-clip-text text-transparent">
                Maximum88
              </span>
              <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                🇦🇪 UAE
              </span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {currentContent.nav.home}
                </a>
                <a href="#services" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {currentContent.nav.services}
                </a>
                <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {currentContent.nav.about}
                </a>
                <a href="#contact" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {currentContent.nav.contact}
                </a>
              </nav>
              
              <LanguageToggle language={language} onLanguageChange={setLanguage} />
              
              <button
                onClick={() => navigate('/')}
                className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium"
              >
                {currentContent.backToSelection}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-500 to-red-600 bg-clip-text text-transparent leading-tight">
              {currentContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              {currentContent.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold text-slate-800">{currentContent.contact.office}</h3>
                      <p className="text-slate-600 text-sm">{currentContent.contact.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-emerald-600" />
                    <div>
                      <p className="text-slate-800 font-medium">{currentContent.contact.hotline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                    <div>
                      <p className="text-slate-800 font-medium">{currentContent.contact.whatsapp}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-8xl mb-4">🏢</div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {currentContent.cta}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              {currentContent.services.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service}</h3>
                <p className="text-slate-600">Premium quality service tailored for the UAE market.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-slate-800">{currentContent.contact.title}</h2>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
              <p className="text-slate-600 mb-6">{currentContent.contact.luzonOffice}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:048823697" className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                  📞 Call Now
                </a>
                <a href="https://wa.me/971529634682" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-red-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Maximum88 Dubai</span>
          </div>
          <p className="text-slate-400 mb-4">
            {currentContent.contact.address}
          </p>
          <p className="text-slate-500">
            &copy; 2024 Maximum88. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UAEWebsite;
