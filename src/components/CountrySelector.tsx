
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Country {
  id: string;
  name: string;
  flag: string;
  description: string;
  gradient: string;
  route?: string;
  externalUrl?: string;
}

const countries: Country[] = [
  {
    id: 'philippines',
    name: 'Philippines',
    flag: '🇵🇭',
    description: 'Serving the beautiful archipelago with premium services',
    gradient: 'from-red-500 to-red-700',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    description: 'Excellence in service across the United States',
    gradient: 'from-red-600 to-red-800',
    externalUrl: 'https://www.maximum88.us',
  },
  {
    id: 'uae',
    name: 'Dubai, UAE',
    flag: '🇦🇪',
    description: 'Premium services in the heart of the Middle East',
    gradient: 'from-red-500 to-red-700',
    route: '/uae',
  },
];

interface CountrySelectorProps {
  selectedCountry: string | null;
  onSelectCountry: (countryId: string) => void;
}

const CountrySelector = ({ selectedCountry, onSelectCountry }: CountrySelectorProps) => {
  const navigate = useNavigate();

  const handleCountryClick = (country: Country) => {
    onSelectCountry(country.id);
    
    if (country.externalUrl) {
      setTimeout(() => {
        window.open(country.externalUrl, '_blank');
      }, 500);
    } else if (country.route) {
      setTimeout(() => {
        navigate(country.route!);
      }, 500);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {countries.map((country, index) => (
        <motion.div
          key={country.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4 + index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          className={`cursor-pointer group text-center ${
            selectedCountry === country.id ? 'ring-4 ring-red-500 rounded-3xl p-4' : 'p-4'
          }`}
          onClick={() => handleCountryClick(country)}
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
            {country.flag}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
            {country.name}
          </h3>
          
          <p className="text-slate-600 mb-6 leading-relaxed">
            {country.description}
          </p>
          
          <div className="flex items-center justify-center text-red-600 group-hover:text-red-700 font-semibold">
            <span className="mr-2">Select Region</span>
            <ArrowRight 
              size={16} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountrySelector;
