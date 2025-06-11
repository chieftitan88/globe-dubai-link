
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  language: 'en' | 'ar';
  content: {
    title: string;
    subtitle: string;
    tagline: string;
    backToSelection: string;
  };
  onNavigateBack: () => void;
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const Header = ({ language, content, onNavigateBack, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">88</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
              <p className="text-sm text-red-600 font-medium">{content.subtitle}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm">
              {currentNav.home}
            </a>
            <button 
              onClick={() => navigate('/uae/shop')}
              className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm"
            >
              {currentNav.shop}
            </button>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm">
              {currentNav.about}
            </a>
            
            {/* Cart icon with spacing */}
            <div className="ml-8">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
            </div>
            
            {/* Action buttons with proper spacing */}
            <div className="flex items-center space-x-4 ml-8">
              <button className="bg-red-600 text-white px-8 py-2.5 rounded font-medium hover:bg-red-700 transition-colors text-sm tracking-wide">
                {currentNav.joinUs}
              </button>
              <button className="border border-red-600 text-red-600 px-8 py-2.5 rounded font-medium hover:bg-red-600 hover:text-white transition-colors text-sm tracking-wide">
                {currentNav.logIn}
              </button>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <button
              onClick={onNavigateBack}
              className="text-gray-600 hover:text-red-600 text-sm hidden lg:block"
            >
              {content.backToSelection}
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
  );
};

export default Header;
