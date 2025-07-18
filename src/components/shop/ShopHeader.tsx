
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
        {/* Top bar with tagline and language selector - using 3-column grid */}
        <div className="bg-red-600 text-white py-2 text-sm">
          <div className="w-full px-4 grid grid-cols-3 items-center">
            {/* Left column - empty for balance */}
            <div></div>
            
            {/* Center column - tagline */}
            <div className="text-center">
              {content.tagline}
            </div>
            
            {/* Right column - language selector */}
            <div className="flex justify-end">
              <HeaderMenu 
                language={language}
                onLanguageChange={onLanguageChange}
                onNavigateBack={onNavigateBack}
                backToSelectionText={content.backToMain}
              />
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <button 
                onClick={onNavigateBack}
                className="mr-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-16 h-16 mr-3">
                <img 
                  src="/lovable-uploads/ba86ee30-04da-4fa6-861a-8b8f1b494c1f.png" 
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
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer transition-colors" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    onNavigateBack();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm transition-colors px-2 py-1 text-left"
                >
                  {currentNav.home}
                </button>
                <span className="text-red-600 font-medium tracking-wide text-sm px-2 py-1">{currentNav.shop}</span>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-medium tracking-wide text-sm transition-colors px-2 py-1">
                  {currentNav.about}
                </a>
                
                <div className="flex flex-col space-y-3 px-2 pt-4 border-t border-gray-200">
                  <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors text-sm tracking-wide">
                    {currentNav.joinUs}
                  </button>
                  <button className="border border-red-600 text-red-600 px-4 py-2 rounded font-medium hover:bg-red-600 hover:text-white transition-colors text-sm tracking-wide">
                    {currentNav.logIn}
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
