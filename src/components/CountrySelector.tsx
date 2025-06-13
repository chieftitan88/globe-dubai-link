
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { validateExternalURL, createRateLimiter, sanitizeInput } from '@/utils/security';

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

// Create rate limiter for country selection (max 10 requests per minute)
const rateLimiter = createRateLimiter(10, 60000);

const CountrySelector = ({ selectedCountry, onSelectCountry }: CountrySelectorProps) => {
  const navigate = useNavigate();

  const handleCountryClick = (country: Country) => {
    // Rate limiting protection
    const clientId = 'country-selector';
    if (!rateLimiter(clientId)) {
      console.warn('Rate limit exceeded for country selection');
      return;
    }

    // Sanitize country ID
    const sanitizedId = sanitizeInput(country.id);
    onSelectCountry(sanitizedId);
    
    if (country.externalUrl) {
      // Validate external URL before redirecting
      const validation = validateExternalURL(country.externalUrl);
      
      if (!validation.isValid) {
        console.error('Invalid external URL:', validation.error);
        return;
      }
      
      setTimeout(() => {
        // Use secure method to open external URL
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          newWindow.location.href = validation.url!;
          newWindow.opener = null; // Prevent access to parent window
        }
      }, 500);
    } else if (country.route) {
      // Validate internal route
      const sanitizedRoute = sanitizeInput(country.route);
      setTimeout(() => {
        navigate(sanitizedRoute);
      }, 500);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {countries.map((country, index) => (
        <motion.div
          key={country.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotateY: 0,
            transition: {
              duration: 0.5, 
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 120,
              damping: 20
            }
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            rotateY: 3,
            transition: { 
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.25
            }
          }}
          whileTap={{ scale: 0.98 }}
          className={`relative overflow-hidden rounded-3xl cursor-pointer group shadow-2xl hover:shadow-3xl transition-all duration-300 ${
            selectedCountry === country.id ? 'ring-4 ring-red-500' : ''
          }`}
          onClick={() => handleCountryClick(country)}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-10`}
            whileHover={{ 
              opacity: 0.2, 
              transition: { duration: 0.25 } 
            }}
          />
          
          <div className="relative bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full shadow-xl">
            <div className="text-center">
              <motion.div 
                className="text-6xl mb-4 drop-shadow-lg"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -2, 2, 0],
                  transition: {
                    scale: { duration: 0.25 },
                    rotate: { duration: 0.6, repeat: Infinity }
                  }
                }}
              >
                {country.flag}
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-slate-800 mb-3 transition-colors duration-200"
                whileHover={{ 
                  color: "#dc2626", 
                  transition: { duration: 0.2 } 
                }}
              >
                {country.name}
              </motion.h3>
              
              <motion.p 
                className="text-slate-600 mb-6 leading-relaxed"
                whileHover={{ 
                  y: -1, 
                  transition: { duration: 0.2 } 
                }}
              >
                {country.description}
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center text-red-600 group-hover:text-red-700 font-semibold"
                whileHover={{ 
                  scale: 1.03, 
                  transition: { duration: 0.2 } 
                }}
              >
                <span className="mr-2">Select Region</span>
                <motion.div
                  whileHover={{ 
                    x: 6, 
                    transition: { duration: 0.25 } 
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {selectedCountry === country.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 border-4 border-red-500 rounded-3xl pointer-events-none"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountrySelector;
