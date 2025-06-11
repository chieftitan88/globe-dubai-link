
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';
import ShopHeader from '@/components/shop/ShopHeader';
import CategorySidebar from '@/components/shop/CategorySidebar';
import ProductGrid from '@/components/shop/ProductGrid';
import ShopFooter from '@/components/shop/ShopFooter';

const UAEShop = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const content = {
    en: {
      title: "MAXIMUM 88",
      subtitle: "CORPORATION",
      tagline: "Discover the best you, inside and out, with our integrated beauty and wellness products.",
      backToMain: "← Back to Main Page"
    },
    ar: {
      title: "ماكسيموم 88",
      subtitle: "المؤسسة",
      tagline: "اكتشف أفضل ما لديك، من الداخل والخارج، مع منتجاتنا المتكاملة للجمال والعافية.",
      backToMain: "← العودة للصفحة الرئيسية"
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <ShopHeader 
        language={language}
        content={currentContent}
        onNavigateBack={() => navigate('/uae')}
        onLanguageChange={setLanguage}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <CategorySidebar 
            language={language}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProductGrid 
            language={language}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>

      <ShopFooter language={language} />
    </div>
  );
};

export default UAEShop;
