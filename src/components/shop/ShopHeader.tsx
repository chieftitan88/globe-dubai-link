
import { ShoppingCart, Menu, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';

interface ShopHeaderProps {
  language: 'en' | 'ar';
  content: {
    title: string;
    subtitle: string;
    tagline: string;
    backToMain: string;
  };
  onNavigateBack: () => void;
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const ShopHeader = ({ language, content, onNavigateBack, onLanguageChange }: ShopHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navContent = {
    en: {
      home: "HOME",
      shop: "SHOP",
      about: "ABOUT US",
      joinUs: "JOIN US",
      logIn: "LOG IN"
    },
    ar: {
      home: "الرئيسية",
      shop: "المتجر",
      about: "من نحن",
      joinUs: "انضم إلينا",
      logIn: "تسجيل الدخول"
    }
  };

  const currentNav = navContent[language];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar with tagline */}
        <div className="bg-red-600 text-white text-center py-2 text-sm -mx-4">
          {content.tagline}
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button 
              onClick={onNavigateBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">88</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
              <p className="text-sm text-red-600 font-medium">{content.subtitle}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={onNavigateBack}
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              {currentNav.home}
            </button>
            <span className="text-red-600 font-medium">{currentNav.shop}</span>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">{currentNav.about}</a>
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
            <button className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700">
              {currentNav.joinUs}
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-2 rounded font-medium hover:bg-red-600 hover:text-white">
              {currentNav.logIn}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
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
  );
};

export default ShopHeader;
