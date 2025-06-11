
import { Globe, ChevronDown, ArrowLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface HeaderMenuProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
  onNavigateBack: () => void;
  backToSelectionText: string;
}

const HeaderMenu = ({ language, onLanguageChange, onNavigateBack, backToSelectionText }: HeaderMenuProps) => {
  const languageOptions = {
    en: { label: 'English', flag: '🇬🇧' },
    ar: { label: 'العربية', flag: '🇦🇪' }
  };

  const currentLanguage = languageOptions[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
          <Globe className="w-5 h-5" />
          <span className="hidden sm:inline text-sm">{currentLanguage.flag} {currentLanguage.label}</span>
          <span className="sm:hidden text-sm">{currentLanguage.flag}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-semibold text-gray-700">Language</div>
        <DropdownMenuItem 
          onClick={() => onLanguageChange('en')}
          className={`flex items-center space-x-2 ${language === 'en' ? 'bg-red-50 text-red-600' : ''}`}
        >
          <span>🇬🇧</span>
          <span>English</span>
          {language === 'en' && <span className="ml-auto text-red-600">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onLanguageChange('ar')}
          className={`flex items-center space-x-2 ${language === 'ar' ? 'bg-red-50 text-red-600' : ''}`}
        >
          <span>🇦🇪</span>
          <span>العربية</span>
          {language === 'ar' && <span className="ml-auto text-red-600">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onNavigateBack} className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>{backToSelectionText}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
