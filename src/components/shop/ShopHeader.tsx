
import { ShoppingCart, Menu, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import HeaderMenu from '@/components/HeaderMenu';

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
      <div className="w-full">
        {/* Top bar with tagline and language selector */}
        <div className="bg-red-600 text-white py-2 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="text-center flex-1">
              {content.tagline}
            </div>
            <HeaderMenu 
              language={language}
              onLanguageChange={onLanguageChange}
              onNavigateBack={onNavigateBack}
              backToSelectionText={content.backToMain}
            />
          </div>
        </div>
        
        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button 
                onClick={onNavigateBack}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-16 h-16 mr-3">
                <img 
                  src="/lovable-uploads/ce2fa53d-c515-4f84-a3e2-3d4b5f4c73ad.png" 
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
              <button 
                onClick={onNavigateBack}
                className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm transition-colors"
              >
                {currentNav.home}
              </button>
              <span className="text-red-600 font-medium tracking-wide text-sm">{currentNav.shop}</span>
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

export default ShopHeader;
