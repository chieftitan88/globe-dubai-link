
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, User, Menu, X, MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const UAEWebsite = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

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
        title: "Achieve Your",
        subtitle: "Feel Your",
        highlight: "BEST!",
        refreshing: "REFRESHING FROM GARDEN"
      },
      categories: {
        all: "All",
        beauty: "Beauty",
        wellness: "Wellness",
        healthBeverages: "Health Beverages"
      },
      products: {
        maxdiet: {
          title: "MAXDIET",
          description: "Feeling sluggish or weighed down? Unleash Your In",
          price: "$50.88",
          itemNumber: "Item # 107890"
        },
        pparPlus: {
          title: "PPAR Plus +",
          description: "Unlock the ocean's power for optimal health with",
          price: "$47.88",
          itemNumber: "Item # 107890"
        },
        maxivitrite: {
          title: "MAXIVITRITE",
          description: "A powerful ingredient combination for your daily supplement designed",
          price: "$53.00",
          itemNumber: "Item # 107890"
        },
        vertSoap: {
          title: "VERT SOAP",
          description: "Your 8-in-1 All-Natural Green Oasis for Glowing S",
          price: "$10.00",
          itemNumber: "Item # 107890"
        },
        rougeSoap: {
          title: "ROUGE SOAP",
          description: "Embrace a visibly brighter and healthier complexi",
          price: "$10.00",
          itemNumber: "Item # 107890"
        },
        kogenSoap: {
          title: "KOGEN SOAP",
          description: "Unveil your most radiant skin with Kogen Soap, th",
          price: "$10.00",
          itemNumber: "Item # 107890"
        },
        glutagenSoap: {
          title: "GLUTAGEN SOAP",
          description: "Reveal a luminous, even-toned you with M88 Glutag",
          price: "$10.00",
          itemNumber: "Item # 107890"
        }
      },
      buttons: {
        readMore: "Read More..",
        addToCart: "Add to Cart"
      },
      sections: {
        wellness: "Wellness that works. From the inside out. #BESTLIFEEVER",
        whoWeAre: "WHO WE ARE",
        aboutText: "At Maximum 88, we're passionate about empowering people to achieve their wellness goals – both physically and financially. Discover our amazing products designed to help you thrive, and join our community in the UAE this September – get ready for over-all wellness!",
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
        title: "حقق أفضل ما لديك",
        subtitle: "اشعر بأفضل ما لديك",
        highlight: "الأفضل!",
        refreshing: "منعش من الحديقة"
      },
      categories: {
        all: "الكل",
        beauty: "الجمال",
        wellness: "العافية",
        healthBeverages: "المشروبات الصحية"
      },
      products: {
        maxdiet: {
          title: "ماكس دايت",
          description: "هل تشعر بالخمول أو الثقل؟ أطلق حيويتك الداخلية",
          price: "$50.88",
          itemNumber: "رقم المنتج # 107890"
        },
        pparPlus: {
          title: "بي بار بلس +",
          description: "اكتشف قوة المحيط للصحة المثلى مع",
          price: "$47.88",
          itemNumber: "رقم المنتج # 107890"
        },
        maxivitrite: {
          title: "ماكسي فيتريت",
          description: "مزيج قوي من المكونات لمكملك الغذائي اليومي",
          price: "$53.00",
          itemNumber: "رقم المنتج # 107890"
        },
        vertSoap: {
          title: "صابون فيرت",
          description: "واحتك الخضراء الطبيعية 8 في 1 للبشرة المتوهجة",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        },
        rougeSoap: {
          title: "صابون روج",
          description: "احتضن بشرة أكثر إشراقاً وصحة بشكل واضح",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        },
        kogenSoap: {
          title: "صابون كوجين",
          description: "اكشف عن بشرتك الأكثر إشراقاً مع صابون كوجين",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        },
        glutagenSoap: {
          title: "صابون جلوتاجين",
          description: "اكشف عن إطلالة مضيئة ومتجانسة مع جلوتاجين",
          price: "$10.00",
          itemNumber: "رقم المنتج # 107890"
        }
      },
      buttons: {
        readMore: "اقرأ المزيد..",
        addToCart: "أضف للسلة"
      },
      sections: {
        wellness: "عافية تعمل. من الداخل إلى الخارج. #أفضل_حياة_على_الإطلاق",
        whoWeAre: "من نحن",
        aboutText: "في ماكسيموم 88، نحن متحمسون لتمكين الناس من تحقيق أهداف العافية - جسدياً ومالياً. اكتشف منتجاتنا المذهلة المصممة لمساعدتك على الازدهار، وانضم لمجتمعنا في الإمارات هذا سبتمبر - استعد للعافية الشاملة!",
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

  const categories = [
    currentContent.categories.all,
    currentContent.categories.beauty,
    currentContent.categories.wellness,
    currentContent.categories.healthBeverages
  ];

  const heroSlides = [
    {
      title: currentContent.hero.title,
      subtitle: currentContent.hero.subtitle,
      highlight: currentContent.hero.highlight,
      product: "MAXDIET",
      bgColor: "from-blue-400 to-purple-600"
    },
    {
      title: currentContent.hero.refreshing,
      subtitle: "",
      highlight: "FROM GARDEN",
      product: "VERT SOAP",
      bgColor: "from-green-400 to-green-600"
    }
  ];

  const products = [
    {
      id: 1,
      name: currentContent.products.maxdiet.title,
      description: currentContent.products.maxdiet.description,
      price: currentContent.products.maxdiet.price,
      itemNumber: currentContent.products.maxdiet.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageStyle: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      id: 2,
      name: currentContent.products.pparPlus.title,
      description: currentContent.products.pparPlus.description,
      price: currentContent.products.pparPlus.price,
      itemNumber: currentContent.products.pparPlus.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Health Beverages",
      imageStyle: "bg-gradient-to-br from-red-100 to-orange-100"
    },
    {
      id: 3,
      name: currentContent.products.maxivitrite.title,
      description: currentContent.products.maxivitrite.description,
      price: currentContent.products.maxivitrite.price,
      itemNumber: currentContent.products.maxivitrite.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Wellness",
      imageStyle: "bg-gradient-to-br from-pink-100 to-red-100"
    },
    {
      id: 4,
      name: currentContent.products.vertSoap.title,
      description: currentContent.products.vertSoap.description,
      price: currentContent.products.vertSoap.price,
      itemNumber: currentContent.products.vertSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      id: 5,
      name: currentContent.products.rougeSoap.title,
      description: currentContent.products.rougeSoap.description,
      price: currentContent.products.rougeSoap.price,
      itemNumber: currentContent.products.rougeSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-red-100 to-pink-100"
    },
    {
      id: 6,
      name: currentContent.products.kogenSoap.title,
      description: currentContent.products.kogenSoap.description,
      price: currentContent.products.kogenSoap.price,
      itemNumber: currentContent.products.kogenSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-orange-100 to-yellow-100"
    },
    {
      id: 7,
      name: currentContent.products.glutagenSoap.title,
      description: currentContent.products.glutagenSoap.description,
      price: currentContent.products.glutagenSoap.price,
      itemNumber: currentContent.products.glutagenSoap.itemNumber,
      rating: 5,
      reviews: 102,
      category: "Beauty",
      imageStyle: "bg-gradient-to-br from-red-200 to-white"
    }
  ];

  const filteredProducts = selectedCategory === 'All' || selectedCategory === currentContent.categories.all
    ? products
    : products.filter(product => {
        if (selectedCategory === currentContent.categories.beauty) return product.category === 'Beauty';
        if (selectedCategory === currentContent.categories.wellness) return product.category === 'Wellness';
        if (selectedCategory === currentContent.categories.healthBeverages) return product.category === 'Health Beverages';
        return true;
      });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

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

      {/* Hero Carousel */}
      <section className="relative h-[500px] overflow-hidden">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className={`relative h-[500px] bg-gradient-to-r ${slide.bgColor} flex items-center`}>
                  <div className="max-w-7xl mx-auto px-4 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="text-white">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                          {slide.title} <br />
                          {slide.subtitle} <br />
                          <span className="text-blue-200">{slide.highlight}</span>
                        </h1>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <div className="text-white text-center">
                            <div className="text-6xl mb-4">📦</div>
                            <p className="text-xl font-bold">{slide.product}</p>
                            <p className="text-sm opacity-90">Product Image Placeholder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carousel indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Categories Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h3 className="text-lg font-bold">{currentContent.categories.all}</h3>
                </div>
                <div className="divide-y">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left p-4 hover:bg-red-50 transition-colors ${
                        selectedCategory === category ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        {/* Product Image Placeholder */}
                        <div className={`h-48 ${product.imageStyle} rounded-lg mb-4 flex items-center justify-center`}>
                          <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📦</div>
                            <p className="text-sm">{product.name}</p>
                            <p className="text-xs opacity-70">Image Placeholder</p>
                          </div>
                        </div>

                        {/* Product Info */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                        
                        {/* Price */}
                        <div className="text-2xl font-bold text-gray-900 mb-2">{product.price}</div>
                        
                        {/* Item Number */}
                        <p className="text-sm text-gray-500 mb-3">{product.itemNumber}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          <div className="flex mr-2">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        </div>
                        
                        {/* Add to Cart Button */}
                        <button className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition-colors">
                          {currentContent.buttons.addToCart}
                        </button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
