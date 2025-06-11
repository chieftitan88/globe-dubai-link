
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';

interface ShopFooterProps {
  language: 'en' | 'ar';
}

const ShopFooter = ({ language }: ShopFooterProps) => {
  const content = {
    en: {
      contact: "CONTACT",
      address: "836B 8th Floor, Al Ghurair Office Center, Riga, Deira, Dubai, UAE",
      support: "support@maximum88.com",
      copyright: "Copyright 2024 Designed & Built by Maximum88.ae"
    },
    ar: {
      contact: "اتصل بنا",
      address: "836B الطابق الثامن، مركز الغرير التجاري، ريغا، ديرة، دبي، الإمارات العربية المتحدة",
      support: "support@maximum88.com",
      copyright: "حقوق الطبع والنشر 2024 مصمم ومبني بواسطة Maximum88.ae"
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-white py-16 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo only */}
          <div className="flex justify-center md:justify-start">
            <div className="w-20 h-20">
              <img 
                src="/lovable-uploads/9aa1c07e-adbb-4d87-9f95-1f5ebcb608ae.png" 
                alt="Maximum 88 Corporation Logo"
                className="w-full h-full object-contain"
              />
            </div>
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

export default ShopFooter;
