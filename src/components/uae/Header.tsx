
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import HeaderMenu from '@/components/HeaderMenu';
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
            <div className="w-20 h-20 mr-2">
              <img 
                src="/lovable-uploads/4993a705-708a-44cc-8eb9-8503fe85a00a.png" 
                alt="Maximum 88 Corporation Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="ml-1">
              <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
              <p className="text-sm text-red-600 font-medium">{content.subtitle}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm transition-colors">
              {currentNav.home}
            </a>
            <button 
              onClick={() => navigate('/uae/shop')}
              className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm transition-colors"
            >
              {currentNav.shop}
            </button>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm transition-colors">
              {currentNav.about}
            </a>
            
            <div className="flex items-center space-x-6 ml-8">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer transition-colors" />
              
              <div className="flex items-center space-x-3">
                <button className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors text-sm tracking-wide">
                  {currentNav.joinUs}
                </button>
                <button className="border border-red-600 text-red-600 px-6 py-2 rounded font-medium hover:bg-red-600 hover:text-white transition-colors text-sm tracking-wide">
                  {currentNav.logIn}
                </button>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <HeaderMenu 
              language={language}
              onLanguageChange={onLanguageChange}
              onNavigateBack={onNavigateBack}
              backToSelectionText={content.backToSelection}
            />
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
