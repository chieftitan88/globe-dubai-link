
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      useLinks: "USE LINK",
      exploreMore: "EXPLORE MORE",
      contact: "CONTACT",
      home: "HOME",
      shop: "SHOP",
      about: "ABOUT US",
      joinUs: "JOIN US",
      cookiePolicy: "COOKIE POLICY",
      incomeDisclosure: "INCOME DISCLOSURE STATEMENT",
      accessibility: "ACCESSIBILITY",
      privacyNotice: "PRIVACY NOTICE",
      returnPolicy: "RETURN POLICY",
      address: "836B 8th Floor, Al Ghurair Office Center, Riga, Deira, Dubai, UAE",
      support: "support@maximum88.com",
      copyright: "Copyright 2024 Designed & Built by Maximum88.ae"
    },
    ar: {
      useLinks: "استخدم الرابط",
      exploreMore: "اكتشف المزيد",
      contact: "اتصل بنا",
      home: "الرئيسية",
      shop: "المتجر",
      about: "من نحن",
      joinUs: "انضم إلينا",
      cookiePolicy: "سياسة ملفات تعريف الارتباط",
      incomeDisclosure: "بيان الكشف عن الدخل",
      accessibility: "إمكانية الوصول",
      privacyNotice: "إشعار الخصوصية",
      returnPolicy: "سياسة الإرجاع",
      address: "836B الطابق الثامن، مركز الغرير التجاري، ريغا، ديرة، دبي، الإمارات العربية المتحدة",
      support: "support@maximum88.com",
      copyright: "حقوق الطبع والنشر 2024 مصمم ومبني بواسطة Maximum88.ae"
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-white py-20 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-20 h-20">
                <img 
                  src="/lovable-uploads/9aa1c07e-adbb-4d87-9f95-1f5ebcb608ae.png" 
                  alt="Maximum 88 Corporation Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Use Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-lg tracking-wide">{currentContent.useLinks}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-base">{currentContent.home}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-base">{currentContent.shop}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-base">{currentContent.about}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-base">{currentContent.joinUs}</a></li>
            </ul>
          </div>

          {/* Explore More */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-lg tracking-wide">{currentContent.exploreMore}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed">{currentContent.cookiePolicy}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed">{currentContent.incomeDisclosure}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed">{currentContent.accessibility}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed">{currentContent.privacyNotice}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed">{currentContent.returnPolicy}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900 text-lg tracking-wide">{currentContent.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gray-500" />
                <p className="text-gray-600 text-sm leading-relaxed">{currentContent.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-500" />
                <p className="text-gray-600 text-sm">04 882 3697</p>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0 text-gray-500" />
                <p className="text-gray-600 text-sm">+971 52 963 4682</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-500" />
                <p className="text-gray-600 text-sm">{currentContent.support}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 mb-12">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
            <Facebook className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
            <Instagram className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Payment icons */}
        <div className="flex justify-end space-x-3 mb-12">
          <div className="w-12 h-8 bg-blue-600 rounded-md flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-bold">VISA</span>
          </div>
          <div className="w-12 h-8 bg-red-600 rounded-md flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-bold">MC</span>
          </div>
          <div className="w-12 h-8 bg-blue-800 rounded-md flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-bold">AE</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
