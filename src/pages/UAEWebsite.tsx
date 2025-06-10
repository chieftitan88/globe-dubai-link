
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Phone, MessageCircle, MapPin, Mail, Star, Shield, Zap, Users, Award, CheckCircle, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';

const UAEWebsite = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      title: "Maximum88",
      subtitle: "Dubai, UAE",
      hero: {
        title: "Maximum88",
        subtitle: "Your Gateway to Premium Services",
        description: "Experience world-class gaming and entertainment services in the heart of Dubai. Strategic location in Al Ghurair Office Center for your convenience."
      },
      features: {
        title: "Why Choose Maximum88?",
        items: [
          {
            icon: Shield,
            title: "Secure & Licensed",
            description: "Fully licensed and regulated operations with top-tier security protocols."
          },
          {
            icon: Zap,
            title: "Instant Processing",
            description: "Lightning-fast transactions and instant account processing."
          },
          {
            icon: Users,
            title: "24/7 Support",
            description: "Round-the-clock customer support in multiple languages."
          },
          {
            icon: Award,
            title: "Premium Experience",
            description: "Award-winning platform with exceptional user experience."
          }
        ]
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for the UAE market",
        items: [
          {
            title: "Gaming Platform",
            description: "State-of-the-art gaming platform with the latest games and features.",
            features: ["Live Casino", "Sports Betting", "Slot Games", "Card Games"]
          },
          {
            title: "Financial Services",
            description: "Secure and fast financial transactions with multiple payment options.",
            features: ["Instant Deposits", "Fast Withdrawals", "Multiple Currencies", "Secure Banking"]
          },
          {
            title: "VIP Services",
            description: "Exclusive VIP treatment with personalized account management.",
            features: ["Personal Manager", "Special Bonuses", "Priority Support", "Exclusive Events"]
          },
          {
            title: "Mobile Experience",
            description: "Full-featured mobile app for gaming on the go.",
            features: ["iOS & Android", "Live Streaming", "Push Notifications", "Offline Mode"]
          }
        ]
      },
      testimonials: {
        title: "What Our Members Say",
        items: [
          {
            name: "Ahmed Al-Rashid",
            company: "Dubai Resident",
            text: "Outstanding service and amazing gaming experience. The Dubai office team is very professional.",
            rating: 5
          },
          {
            name: "Sarah Johnson",
            company: "Expat Professional",
            text: "Best gaming platform in UAE. Fast payouts and excellent customer service.",
            rating: 5
          },
          {
            name: "Mohammad Hassan",
            company: "Local Business Owner",
            text: "Reliable, secure, and entertaining. Maximum88 exceeded all my expectations.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get in touch with our Dubai office",
        office: "Dubai Office",
        address: "836B 8th Floor, Al Ghurair Office Center, Riga, Deira, Dubai, UAE",
        hotline: "Customer Hotline: 04 882 3697",
        whatsapp: "Viber/WhatsApp: +971 52 963 4682",
        email: "Email: info@maximum88.ae",
        luzonOffice: "Luzon Office also available for Philippines operations",
        cta: "Get Started",
        hours: "Operating Hours: Sunday - Thursday, 9:00 AM - 6:00 PM GST"
      },
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        testimonials: "Reviews",
        contact: "Contact"
      },
      backToSelection: "← Back to Country Selection"
    },
    ar: {
      title: "ماكسيموم88",
      subtitle: "دبي، الإمارات العربية المتحدة",
      hero: {
        title: "ماكسيموم88",
        subtitle: "بوابتك للخدمات المتميزة",
        description: "استمتع بخدمات الألعاب والترفيه عالمية المستوى في قلب دبي. موقع استراتيجي في مركز الغرير التجاري لراحتك."
      },
      features: {
        title: "لماذا تختار ماكسيموم88؟",
        items: [
          {
            icon: Shield,
            title: "آمن ومرخص",
            description: "عمليات مرخصة ومنظمة بالكامل مع بروتوكولات أمان من الدرجة الأولى."
          },
          {
            icon: Zap,
            title: "معالجة فورية",
            description: "معاملات فائقة السرعة ومعالجة فورية للحسابات."
          },
          {
            icon: Users,
            title: "دعم على مدار الساعة",
            description: "دعم عملاء على مدار الساعة بلغات متعددة."
          },
          {
            icon: Award,
            title: "تجربة متميزة",
            description: "منصة حائزة على جوائز مع تجربة مستخدم استثنائية."
          }
        ]
      },
      services: {
        title: "خدماتنا",
        subtitle: "حلول شاملة للسوق الإماراتي",
        items: [
          {
            title: "منصة الألعاب",
            description: "منصة ألعاب حديثة مع أحدث الألعاب والميزات.",
            features: ["كازينو مباشر", "رهان رياضي", "ألعاب السلوت", "ألعاب الورق"]
          },
          {
            title: "الخدمات المالية",
            description: "معاملات مالية آمنة وسريعة مع خيارات دفع متعددة.",
            features: ["إيداعات فورية", "سحوبات سريعة", "عملات متعددة", "خدمات مصرفية آمنة"]
          },
          {
            title: "خدمات VIP",
            description: "معاملة VIP حصرية مع إدارة حسابات شخصية.",
            features: ["مدير شخصي", "مكافآت خاصة", "دعم أولوية", "فعاليات حصرية"]
          },
          {
            title: "تجربة الهاتف المحمول",
            description: "تطبيق محمول كامل المواصفات للعب أثناء التنقل.",
            features: ["iOS وأندرويد", "بث مباشر", "إشعارات فورية", "وضع عدم الاتصال"]
          }
        ]
      },
      testimonials: {
        title: "ماذا يقول أعضاؤنا",
        items: [
          {
            name: "أحمد الراشد",
            company: "مقيم في دبي",
            text: "خدمة متميزة وتجربة ألعاب رائعة. فريق مكتب دبي محترف جداً.",
            rating: 5
          },
          {
            name: "سارة جونسون",
            company: "مهنية مغتربة",
            text: "أفضل منصة ألعاب في الإمارات. مدفوعات سريعة وخدمة عملاء ممتازة.",
            rating: 5
          },
          {
            name: "محمد حسن",
            company: "صاحب عمل محلي",
            text: "موثوق وآمن ومسلي. ماكسيموم88 تجاوز كل توقعاتي.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "تواصل مع مكتبنا في دبي",
        office: "مكتب دبي",
        address: "836B الطابق الثامن، مركز الغرير التجاري، ريغا، ديرة، دبي، الإمارات العربية المتحدة",
        hotline: "خط العملاء: 04 882 3697",
        whatsapp: "فايبر/واتساب: +971 52 963 4682",
        email: "البريد الإلكتروني: info@maximum88.ae",
        luzonOffice: "مكتب لوزون متاح أيضاً لعمليات الفلبين",
        cta: "ابدأ الآن",
        hours: "ساعات العمل: الأحد - الخميس، 9:00 صباحاً - 6:00 مساءً بتوقيت الخليج"
      },
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "حولنا",
        testimonials: "التقييمات",
        contact: "اتصل بنا"
      },
      backToSelection: "← العودة لاختيار البلد"
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M88</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  {currentContent.title}
                </span>
                <div className="text-sm text-red-600 font-medium">
                  🇦🇪 {currentContent.subtitle}
                </div>
              </div>
            </motion.div>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.home}
                </a>
                <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.about}
                </a>
                <a href="#services" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.services}
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.testimonials}
                </a>
                <a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.contact}
                </a>
              </nav>
              
              <LanguageToggle language={language} onLanguageChange={setLanguage} />
              
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
              >
                {currentContent.backToSelection}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 hover:text-red-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 py-4 border-t"
            >
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.home}
                </a>
                <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.about}
                </a>
                <a href="#services" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.services}
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.testimonials}
                </a>
                <a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                  {currentContent.nav.contact}
                </a>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              {currentContent.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-red-600 font-semibold mb-8">
              {currentContent.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {currentContent.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 transition-colors"
              >
                {currentContent.contact.cta}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {currentContent.features.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {currentContent.testimonials.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {currentContent.contact.subtitle}
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{currentContent.contact.office}</h3>
                    <p className="text-gray-600">{currentContent.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{currentContent.contact.hotline}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{currentContent.contact.whatsapp}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{currentContent.contact.email}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">{currentContent.contact.hours}</p>
                  <p className="text-gray-600 text-sm mt-2">{currentContent.contact.luzonOffice}</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-6">🏢</div>
                <div className="space-y-4">
                  <motion.a
                    href="tel:048823697"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition-colors"
                  >
                    📞 Call Now
                  </motion.a>
                  <motion.a
                    href="https://wa.me/971529634682"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors"
                  >
                    💬 WhatsApp
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M88</span>
                </div>
                <span className="text-xl font-bold">{currentContent.title}</span>
              </div>
              <p className="text-gray-400">
                Premium gaming services in Dubai, UAE
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm mb-2">{currentContent.contact.address}</p>
              <p className="text-gray-400 text-sm">{currentContent.contact.hotline}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Operating Hours</h4>
              <p className="text-gray-400 text-sm">{currentContent.contact.hours}</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 {currentContent.title}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UAEWebsite;
