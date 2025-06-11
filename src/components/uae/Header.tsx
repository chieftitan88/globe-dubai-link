
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
      <div className="w-full">
        {/* Top bar with tagline and language selector */}
        <div className="bg-red-600 text-white py-1 text-sm">
          <div className="w-full px-4 flex items-center justify-between">
            <div className="text-center flex-1">
              {content.tagline}
            </div>
            <HeaderMenu 
              language={language}
              onLanguageChange={onLanguageChange}
              onNavigateBack={onNavigateBack}
              backToSelectionText={content.backToSelection}
            />
          </div>
        </div>
        
        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3">
                <img 
                  src="/lovable-uploads/ef106ea1-c939-4e2e-aaea-1fc601d1a00d.png" 
                  alt="Maximum 88 Corporation Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-1">
                <h1 className="text-lg font-bold text-red-600 tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                  MAXIMUM 88
                </h1>
                <p className="text-xs text-red-600 font-bold tracking-widest" style={{ fontFamily: 'Arial, sans-serif' }}>
                  CORPORATION
                </p>
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
                  <button className="bg-red-600 text-white px-4 py-1.5 rounded font-medium hover:bg-red-700 transition-colors text-sm tracking-wide">
                    {currentNav.joinUs}
                  </button>
                  <button className="border border-red-600 text-red-600 px-4 py-1.5 rounded font-medium hover:bg-red-600 hover:text-white transition-colors text-sm tracking-wide">
                    {currentNav.logIn}
                  </button>
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-4 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
