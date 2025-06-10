
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  language: 'en' | 'ar';
  onLanguageChange: (language: 'en' | 'ar') => void;
}

const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center bg-white/60 backdrop-blur-lg rounded-full p-1 border border-white/20">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onLanguageChange('en')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-emerald-600 text-white shadow-lg'
            : 'text-slate-600 hover:text-emerald-600'
        }`}
      >
        🇬🇧 EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onLanguageChange('ar')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'ar'
            ? 'bg-emerald-600 text-white shadow-lg'
            : 'text-slate-600 hover:text-emerald-600'
        }`}
      >
        🇦🇪 AR
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
