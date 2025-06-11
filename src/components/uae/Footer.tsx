
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
    <footer className="bg-white py-16 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-3">
                <img 
                  src="/lovable-uploads/9aa1c07e-adbb-4d87-9f95-1f5ebcb608ae.png" 
                  alt="Maximum 88 Corporation Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Use Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{currentContent.useLinks}</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-red-600">{currentContent.home}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.shop}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.about}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.joinUs}</a></li>
            </ul>
          </div>

          {/* Explore More */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{currentContent.exploreMore}</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-red-600">{currentContent.cookiePolicy}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.incomeDisclosure}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.accessibility}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.privacyNotice}</a></li>
              <li><a href="#" className="hover:text-red-600">{currentContent.returnPolicy}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{currentContent.contact}</h4>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>{currentContent.address}</p>
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
                <p>{currentContent.support}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
            <Facebook className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
            <Instagram className="w-6 h-6 text-white" />
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
          <p>{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
