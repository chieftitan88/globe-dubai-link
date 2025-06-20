import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { validateExternalURL, sanitizeInput } from '@/utils/security';
import { 
  cardHoverVariants, 
  breathingVariants, 
  flagVariants, 
  backgroundGradientVariants,
  staggerVariants,
  selectionRingVariants,
  generateParticleAnimation,
  createAnticipationDetector,
  getDeviceCapabilities,
  createAnimationCleanup,
  withPerformanceMonitoring,
  createRateLimiter,
  COUNTRY_THEMES
} from '@/utils/animationHelpers';

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
    description: 'Excellence in service across the land of opportunity',
    gradient: 'from-blue-600 to-red-600',
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    description: 'Premium services in the heart of the Middle East',
    gradient: 'from-green-600 to-red-600',
    route: '/uae',
  },
];

interface CountrySelectorProps {
  selectedCountry: string | null;
  onCountrySelect: (countryId: string) => void;
}

const CountrySelector = ({ selectedCountry, onCountrySelect }: CountrySelectorProps) => {
  const navigate = useNavigate();
  const [isAnticipating, setIsAnticipating] = useState<{ [key: string]: boolean }>({});
  const [deviceCapabilities, setDeviceCapabilities] = useState({ supportsAdvancedAnimations: true, isLowEndDevice: false });
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const cleanupRef = useRef<{ addCleanup: (fn: () => void) => void; cleanup: () => void } | null>(null);

  // Initialize device capabilities and animation cleanup
  useEffect(() => {
    const capabilities = getDeviceCapabilities();
    setDeviceCapabilities(capabilities);
    
    const animationCleanup = createAnimationCleanup();
    cleanupRef.current = animationCleanup;
    
    return () => {
      animationCleanup.cleanup();
    };
  }, []);

  // Setup anticipatory hover detection
  useEffect(() => {
    if (!deviceCapabilities.supportsAdvancedAnimations) return;
    
    const cleanupFunctions: (() => void)[] = [];
    
    countries.forEach(country => {
      const element = cardRefs.current[country.id];
      if (element) {
        const cleanup = createAnticipationDetector(element, (isNear) => {
          setIsAnticipating(prev => ({ ...prev, [country.id]: isNear }));
        });
        cleanupFunctions.push(cleanup);
        cleanupRef.current?.addCleanup(cleanup);
      }
    });
    
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [deviceCapabilities.supportsAdvancedAnimations]);

  const rateLimiter = createRateLimiter(1000);

  const handleCountryClick = async (country: Country) => {
    if (!rateLimiter()) return;

    try {
      const sanitizedId = sanitizeInput(country.id);
      onCountrySelect(sanitizedId);

      if (country.externalUrl) {
        const isValidUrl = await validateExternalURL(country.externalUrl);
        if (isValidUrl) {
          window.open(country.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
          console.warn('Invalid external URL detected');
        }
      } else if (country.route) {
        navigate(country.route);
      }
    } catch (error) {
      console.error('Error handling country selection:', error);
    }
  };

  const renderParticles = (countryId: string) => {
    if (!deviceCapabilities.supportsAdvancedAnimations) return null;
    
    return Array.from({ length: 3 }, (_, i) => (
      <motion.div
        key={`particle-${countryId}-${i}`}
        className={`particle-enhanced ${countryId} absolute w-2 h-2`}
        style={{
          top: `${20 + i * 25}%`,
          left: `${15 + i * 20}%`,
        }}
        animate={generateParticleAnimation(i, countryId)}
      />
    ));
  };

  const renderGeometricPattern = (countryId: string) => {
    if (!deviceCapabilities.supportsAdvancedAnimations) return null;
    
    return (
      <div 
        className={`geometric-pattern ${countryId} absolute inset-0`}
        style={{ zIndex: 0 }}
      />
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {countries.map((country, index) => (
          <motion.div
            key={country.id}
            ref={(el) => { cardRefs.current[country.id] = el; }}
            custom={index}
            variants={staggerVariants}
            className={`
              country-card-enhanced country-card-optimized gpu-layer
              ${isAnticipating[country.id] ? 'card-anticipation near' : 'card-anticipation'}
              ${deviceCapabilities.supportsAdvancedAnimations ? 'card-breathing' : ''}
            `}
            data-country={country.id}
          >
            {/* Selection Ring */}
            {selectedCountry === country.id && (
              <motion.div
                className="selection-ring-enhanced"
                variants={selectionRingVariants}
                initial="initial"
                animate="animate"
              />
            )}

            {/* Geometric Pattern Background */}
            {renderGeometricPattern(country.id)}

            {/* Particles */}
            {renderParticles(country.id)}

            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleCountryClick(country)}
              className="relative cursor-pointer group h-full"
            >
              {/* Cultural Background Gradient */}
              <motion.div
                className={`card-background absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-0 rounded-2xl`}
                variants={backgroundGradientVariants}
                initial="initial"
                whileHover="hover"
              />

              <motion.div 
                className="relative bg-white/90 rounded-2xl p-8 h-full country-card-content will-change-transform"
                style={{ minHeight: '280px' }}
              >
                {/* Flag with Enhanced Animation */}
                <motion.div
                  className="flag-enhanced text-6xl mb-6 text-center"
                  variants={flagVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {country.flag}
                </motion.div>

                {/* Enhanced Title */}
                <motion.h3 
                  className="title-enhanced text-2xl font-bold text-center mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {country.name}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {country.description}
                </p>

                {/* Enhanced CTA Button */}
                <motion.div
                  className="flex items-center justify-center space-x-2 text-red-600 font-semibold micro-glow"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span>Explore Services</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 group-hover:left-full transition-all duration-700 ease-out" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cultural Context Indicator */}
      {selectedCountry && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Selected: {countries.find(c => c.id === selectedCountry)?.name}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CountrySelector;
