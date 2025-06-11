
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
    <footer className="bg-white py-8 px-4 border-t mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">88</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">MAXIMUM 88</h3>
              <p className="text-red-600 font-medium">CORPORATION</p>
            </div>
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
        <div className="flex justify-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
            <Facebook className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center">
            <Instagram className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-6 border-t">
          <p>{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default ShopFooter;
