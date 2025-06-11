
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '@/components/LanguageToggle';
import Header from '@/components/uae/Header';
import HeroSection from '@/components/uae/HeroSection';
import ProductShowcase from '@/components/uae/ProductShowcase';
import AboutSection from '@/components/uae/AboutSection';
import TropicalSecretsSection from '@/components/uae/TropicalSecretsSection';
import GoldSection from '@/components/uae/GoldSection';
import JoinFamilySection from '@/components/uae/JoinFamilySection';
import Footer from '@/components/uae/Footer';

const UAEWebsite = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      title: "MAXIMUM 88",
      subtitle: "CORPORATION",
      tagline: "Discover the best you, inside and out, with our integrated beauty and wellness products.",
      backToSelection: "← Back to Country Selection"
    },
    ar: {
      title: "ماكسيموم 88",
      subtitle: "المؤسسة",
      tagline: "اكتشف أفضل ما لديك، من الداخل والخارج، مع منتجاتنا المتكاملة للجمال والعافية.",
      backToSelection: "← العودة لاختيار البلد"
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header 
        language={language} 
        content={currentContent}
        onNavigateBack={() => navigate('/')}
        onLanguageChange={setLanguage}
      />
      
      <HeroSection language={language} />
      <ProductShowcase language={language} />
      <AboutSection language={language} />
      <TropicalSecretsSection language={language} />
      <GoldSection language={language} />
      <JoinFamilySection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default UAEWebsite;
