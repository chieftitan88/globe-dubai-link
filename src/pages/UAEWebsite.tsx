
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Phone, MessageCircle, MapPin, Mail, Star, Shield, Zap, Users, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';

const UAEWebsite = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      title: "Maximum88",
      subtitle: "Dubai, UAE",
      hero: {
        title: "Premium Services",
        subtitle: "Excellence in the Heart of Dubai",
        description: "Experience world-class service excellence strategically located in the prestigious Al Ghurair Office Center, Dubai."
      },
      features: {
        title: "Why Choose Maximum88?",
        items: [
          {
            icon: Shield,
            title: "Trusted & Secure",
            description: "Your security and privacy are our top priorities with industry-leading protection."
          },
          {
            icon: Zap,
            title: "Fast & Reliable",
            description: "Lightning-fast processing with 99.9% uptime guarantee for seamless operations."
          },
          {
            icon: Users,
            title: "Expert Support",
            description: "24/7 dedicated customer support from our team of experienced professionals."
          },
          {
            icon: Award,
            title: "Premium Quality",
            description: "Award-winning services that exceed expectations and deliver exceptional results."
          }
        ]
      },
      services: {
        title: "Our Premium Services",
        subtitle: "Comprehensive solutions tailored for the UAE market",
        items: [
          {
            title: "Business Consulting",
            description: "Strategic business guidance and consulting services for companies in the UAE market.",
            features: ["Market Analysis", "Strategic Planning", "Risk Assessment", "Growth Strategies"]
          },
          {
            title: "Financial Services",
            description: "Complete financial solutions including investment advisory and portfolio management.",
            features: ["Investment Planning", "Portfolio Management", "Financial Analysis", "Risk Management"]
          },
          {
            title: "Legal Advisory",
            description: "Expert legal consultation and advisory services for business operations in Dubai.",
            features: ["Contract Review", "Compliance Support", "Legal Documentation", "Regulatory Guidance"]
          },
          {
            title: "Corporate Solutions",
            description: "End-to-end corporate services for businesses establishing presence in the UAE.",
            features: ["Company Formation", "Licensing Support", "Banking Assistance", "Office Setup"]
          }
        ]
      },
      testimonials: {
        title: "What Our Clients Say",
        items: [
          {
            name: "Ahmed Al-Rashid",
            company: "Al-Rashid Enterprises",
            text: "Maximum88 provided exceptional service during our Dubai expansion. Their expertise made the process seamless.",
            rating: 5
          },
          {
            name: "Sarah Johnson",
            company: "Global Tech Solutions",
            text: "Outstanding professional service. The team's knowledge of UAE regulations saved us time and resources.",
            rating: 5
          },
          {
            name: "Mohammad Hassan",
            company: "Hassan Trading LLC",
            text: "Reliable, efficient, and professional. Maximum88 exceeded our expectations in every aspect.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Ready to start your journey with Maximum88?",
        office: "Dubai Office",
        address: "836B 8th Floor, Al Ghurair Office Center, Riga, Deira, Dubai, UAE",
        hotline: "Customer Hotline: 04 882 3697",
        whatsapp: "Viber/WhatsApp: +971 52 963 4682",
        email: "Email: info@maximum88.ae",
        luzonOffice: "Luzon Office also available for Philippines operations",
        cta: "Contact Us Today",
        hours: "Business Hours: Sunday - Thursday, 9:00 AM - 6:00 PM GST"
      },
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      backToSelection: "← Back to Country Selection"
    },
    ar: {
      title: "ماكسيموم88",
      subtitle: "دبي، الإمارات العربية المتحدة",
      hero: {
        title: "خدمات راقية",
        subtitle: "التميز في قلب دبي",
        description: "استمتع بخدمة عالمية المستوى تقع استراتيجياً في مركز الغرير التجاري المرموق، دبي."
      },
      features: {
        title: "لماذا تختار ماكسيموم88؟",
        items: [
          {
            icon: Shield,
            title: "موثوق وآمن",
            description: "أمانك وخصوصيتك أولويتنا القصوى مع حماية رائدة في الصناعة."
          },
          {
            icon: Zap,
            title: "سريع وموثوق",
            description: "معالجة فائقة السرعة مع ضمان 99.9% وقت تشغيل للعمليات السلسة."
          },
          {
            icon: Users,
            title: "دعم خبراء",
            description: "دعم عملاء مخصص على مدار الساعة من فريق محترفين ذوي خبرة."
          },
          {
            icon: Award,
            title: "جودة عالية",
            description: "خدمات حائزة على جوائز تتجاوز التوقعات وتحقق نتائج استثنائية."
          }
        ]
      },
      services: {
        title: "خدماتنا المتميزة",
        subtitle: "حلول شاملة مصممة خصيصاً لسوق الإمارات",
        items: [
          {
            title: "الاستشارات التجارية",
            description: "التوجيه الاستراتيجي للأعمال وخدمات الاستشارة للشركات في السوق الإماراتي.",
            features: ["تحليل السوق", "التخطيط الاستراتيجي", "تقييم المخاطر", "استراتيجيات النمو"]
          },
          {
            title: "الخدمات المالية",
            description: "حلول مالية متكاملة تشمل الاستشارات الاستثمارية وإدارة المحافظ.",
            features: ["التخطيط الاستثماري", "إدارة المحافظ", "التحليل المالي", "إدارة المخاطر"]
          },
          {
            title: "الاستشارات القانونية",
            description: "استشارات قانونية متخصصة وخدمات استشارية لعمليات الأعمال في دبي.",
            features: ["مراجعة العقود", "دعم الامتثال", "التوثيق القانوني", "التوجيه التنظيمي"]
          },
          {
            title: "الحلول المؤسسية",
            description: "خدمات مؤسسية شاملة للشركات التي تؤسس وجودها في الإمارات.",
            features: ["تكوين الشركات", "دعم الترخيص", "المساعدة المصرفية", "إعداد المكاتب"]
          }
        ]
      },
      testimonials: {
        title: "ماذا يقول عملاؤنا",
        items: [
          {
            name: "أحمد الراشد",
            company: "مؤسسة الراشد",
            text: "قدمت ماكسيموم88 خدمة استثنائية أثناء توسعنا في دبي. خبرتهم جعلت العملية سلسة.",
            rating: 5
          },
          {
            name: "سارة جونسون",
            company: "حلول التقنية العالمية",
            text: "خدمة مهنية متميزة. معرفة الفريق بأنظمة الإمارات وفرت لنا الوقت والموارد.",
            rating: 5
          },
          {
            name: "محمد حسن",
            company: "شركة حسن التجارية ذ.م.م",
            text: "موثوق وفعال ومهني. ماكسيموم88 تجاوزت توقعاتنا في كل جانب.",
            rating: 5
          }
        ]
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "هل أنت مستعد لبدء رحلتك مع ماكسيموم88؟",
        office: "مكتب دبي",
        address: "836B الطابق الثامن، مركز الغرير التجاري، ريغا، ديرة، دبي، الإمارات العربية المتحدة",
        hotline: "خط العملاء: 04 882 3697",
        whatsapp: "فايبر/واتساب: +971 52 963 4682",
        email: "البريد الإلكتروني: info@maximum88.ae",
        luzonOffice: "مكتب لوزون متاح أيضاً لعمليات الفلبين",
        cta: "تواصل معنا اليوم",
        hours: "ساعات العمل: الأحد - الخميس، 9:00 صباحاً - 6:00 مساءً بتوقيت الخليج"
      },
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "حولنا",
        testimonials: "الشهادات",
        contact: "اتصل بنا"
      },
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
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-red-600 bg-clip-text text-transparent">
                  {currentContent.title}
                </span>
                <div className="text-sm text-emerald-600 font-medium">
                  🇦🇪 {currentContent.subtitle}
                </div>
              </div>
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
                <a href="#testimonials" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {currentContent.nav.testimonials}
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
      <section id="home" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-red-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-500 to-red-600 bg-clip-text text-transparent leading-tight">
              {currentContent.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 font-medium mb-8">
              {currentContent.hero.subtitle}
            </p>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              {currentContent.contact.cta}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
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
      <section id="testimonials" className="py-20 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
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
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-slate-600">
              {currentContent.contact.subtitle}
            </p>
          </motion.div>

          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{currentContent.contact.office}</h3>
                    <p className="text-slate-600">{currentContent.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-800 font-medium">{currentContent.contact.hotline}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-800 font-medium">{currentContent.contact.whatsapp}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-800 font-medium">{currentContent.contact.email}</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600 text-sm">{currentContent.contact.hours}</p>
                  <p className="text-slate-600 text-sm mt-2">{currentContent.contact.luzonOffice}</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-6">🏢</div>
                <div className="space-y-4">
                  <motion.a
                    href="tel:048823697"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-700"
                  >
                    📞 Call Now
                  </motion.a>
                  <motion.a
                    href="https://wa.me/971529634682"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-700"
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
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-red-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">{currentContent.title}</span>
              </div>
              <p className="text-slate-400">
                Premium services in Dubai, UAE
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-slate-400 text-sm mb-2">{currentContent.contact.address}</p>
              <p className="text-slate-400 text-sm">{currentContent.contact.hotline}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <p className="text-slate-400 text-sm">{currentContent.contact.hours}</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-500">
              &copy; 2024 {currentContent.title}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UAEWebsite;
