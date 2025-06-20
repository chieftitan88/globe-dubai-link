import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountrySelector from '@/components/CountrySelector';
import { getDeviceCapabilities, prefersReducedMotion } from '@/utils/animationHelpers';

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [deviceCapabilities, setDeviceCapabilities] = useState(() => {
    // Initialize immediately with device capabilities
    if (typeof window !== 'undefined') {
      return getDeviceCapabilities();
    }
    return { supportsAdvancedAnimations: true, isLowEndDevice: false };
  });

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    
    // Only update if capabilities haven't been set yet
    if (typeof window !== 'undefined') {
      const capabilities = getDeviceCapabilities();
      setDeviceCapabilities(capabilities);
    }
    
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleCountrySelect = (countryId: string) => {
    setSelectedCountry(countryId);
  };

  // Enhanced floating particles with more variety
  const renderFloatingParticles = () => {
    if (!deviceCapabilities.supportsAdvancedAnimations || prefersReducedMotion()) {
      return null;
    }

    const particleCount = deviceCapabilities.isLowEndDevice ? 8 : 15;
    
    return Array.from({ length: particleCount }, (_, i) => (
      <motion.div
        key={`floating-particle-${i}`}
        className="absolute rounded-full gpu-layer"
        style={{
          width: `${10 + Math.random() * 30}px`,
          height: `${10 + Math.random() * 30}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: i % 3 === 0 ? 
            'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(220, 38, 38, 0.2))' :
            i % 3 === 1 ?
            'linear-gradient(135deg, rgba(248, 113, 113, 0.25), rgba(239, 68, 68, 0.15))' :
            'linear-gradient(135deg, rgba(252, 165, 165, 0.2), rgba(248, 113, 113, 0.1))',
          boxShadow: '0 0 20px rgba(220, 38, 38, 0.1)',
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
          y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
          scale: [0.5, 1.5, 1, 0.5],
          opacity: [0.2, 0.8, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12 + Math.random() * 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2, // Random small delay instead of sequential
        }}
      />
    ));
  };



  // Animated grid pattern
  const renderAnimatedGrid = () => {
    if (!deviceCapabilities.supportsAdvancedAnimations || prefersReducedMotion()) {
      return null;
    }

    return (
      <motion.div
        className="absolute inset-0 gpu-layer"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0, // Start immediately
        }}
      />
    );
  };

  // Large geometric shapes
  const renderGeometricShapes = () => {
    if (!deviceCapabilities.supportsAdvancedAnimations || prefersReducedMotion()) {
      return null;
    }

    return (
      <>
        {/* Large Rotating Hexagon */}
        <motion.div
          className="absolute w-40 h-40 gpu-layer"
          style={{
            top: '15%',
            left: '10%',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))',
            filter: 'blur(1px)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Diamond Shape */}
        <motion.div
          className="absolute w-32 h-32 gpu-layer"
          style={{
            top: '70%',
            right: '15%',
            transform: 'rotate(45deg)',
            background: 'linear-gradient(45deg, rgba(248, 113, 113, 0.15), rgba(252, 165, 165, 0.08))',
            borderRadius: '8px',
            filter: 'blur(0.5px)',
          }}
          animate={{
            rotate: [45, 405],
            scale: [0.7, 1.3, 0.7],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Triangle */}
        <motion.div
          className="absolute w-28 h-28 gpu-layer"
          style={{
            top: '45%',
            left: '75%',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(220, 38, 38, 0.06))',
            filter: 'blur(1px)',
          }}
          animate={{
            rotate: [0, -360],
            scale: [0.9, 1.4, 0.9],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </>
    );
  };

  // Energy orbs with trails
  const renderEnergyOrbs = () => {
    if (!deviceCapabilities.supportsAdvancedAnimations || prefersReducedMotion()) {
      return null;
    }

    return (
      <>
        {/* Primary Energy Orb */}
        <motion.div
          className="absolute w-48 h-48 rounded-full gpu-layer"
          style={{
            top: '25%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, rgba(239, 68, 68, 0.1) 40%, transparent 70%)',
            filter: 'blur(2px)',
          }}
          animate={{
            scale: [1, 1.5, 1.2, 1],
            opacity: [0.4, 0.8, 0.6, 0.4],
            x: [0, -30, 20, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Energy Orb */}
        <motion.div
          className="absolute w-32 h-32 rounded-full gpu-layer"
          style={{
            bottom: '30%',
            left: '25%',
            background: 'radial-gradient(circle, rgba(248, 113, 113, 0.25) 0%, rgba(252, 165, 165, 0.12) 50%, transparent 80%)',
            filter: 'blur(1.5px)',
          }}
          animate={{
            scale: [0.8, 1.3, 1, 0.8],
            opacity: [0.3, 0.7, 0.5, 0.3],
            x: [0, 40, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3, // Minimal delay for sequence
          }}
        />

        {/* Tertiary Energy Orb */}
        <motion.div
          className="absolute w-24 h-24 rounded-full gpu-layer"
          style={{
            top: '60%',
            right: '40%',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.15) 60%, transparent 90%)',
            filter: 'blur(1px)',
          }}
          animate={{
            scale: [0.9, 1.4, 1.1, 0.9],
            opacity: [0.35, 0.75, 0.55, 0.35],
            x: [0, -50, 25, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6, // Minimal delay for sequence
          }}
        />
      </>
    );
  };

  // Pulsing background elements
  const renderPulsingElements = () => {
    if (!deviceCapabilities.supportsAdvancedAnimations || prefersReducedMotion()) {
      return null;
    }

    return (
      <>
        {/* Corner Pulses */}
        <motion.div
          className="absolute w-64 h-64 rounded-full gpu-layer"
          style={{
            top: '-10%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
            filter: 'blur(3px)',
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-48 h-48 rounded-full gpu-layer"
          style={{
            bottom: '-5%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(248, 113, 113, 0.12) 0%, transparent 70%)',
            filter: 'blur(2px)',
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex flex-col relative overflow-hidden">
      {/* Enhanced Multi-Layer Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-transparent to-red-100/15" />
        
        {/* Animated grid pattern */}
        {renderAnimatedGrid()}
        
        {/* Floating particles */}
        {renderFloatingParticles()}
        
        {/* Large geometric shapes */}
        {renderGeometricShapes()}
        
        {/* Energy orbs with trails */}
        {renderEnergyOrbs()}
        
        {/* Pulsing background elements */}
        {renderPulsingElements()}
        
        {/* Cultural context overlay */}
        {selectedCountry && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div 
              className={`absolute inset-0 ${
                selectedCountry === 'philippines' ? 'bg-blue-500/8' :
                selectedCountry === 'usa' ? 'bg-blue-600/8' :
                selectedCountry === 'uae' ? 'bg-yellow-500/8' :
                'bg-red-500/8'
              }`} 
            />
            
            {/* Cultural-specific particles */}
            {selectedCountry === 'philippines' && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }} // Start visible immediately
                animate={{ opacity: 1 }}
                transition={{ delay: 0 }} // No delay
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`cultural-particle-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-blue-400/20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() * 40 - 20, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 0.5, // Minimal random delay
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Header Section */}
      <motion.header 
        className="relative z-10 text-center py-16 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
                <motion.div
          className="flex flex-col items-center space-y-6 mb-8"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Logo and Company Name Row */}
          <motion.div 
            className="flex items-center space-x-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 relative">
                {/* Use uploaded logo */}
                <img 
                  src="/lovable-uploads/0527690b-04bb-403d-84f3-225576571139.png"
                  alt="Maximum 88 Corporation Logo"
                  className="w-full h-full object-contain shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(220, 38, 38, 0.3))',
                  }}
                />
                
                {/* Subtle glow effect behind logo */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30 blur-xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
                    transform: 'scale(1.2)',
                    zIndex: -1,
                  }}
                />
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.div 
              className="text-left space-y-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* MAXIMUM 88 */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-red-600"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.span 
                  className="relative inline-block"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(220, 38, 38, 0.5)',
                      '0 0 10px rgba(220, 38, 38, 0.8)',
                      '0 0 0px rgba(220, 38, 38, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  MAXIMUM 88
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-2 -right-4 w-3 h-3 bg-red-500 rounded-full opacity-60"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-4 w-2 h-2 bg-red-400 rounded-full opacity-50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </motion.span>
              </motion.h1>

              {/* CORPORATION */}
              <motion.div 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700"
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0.5em' }}
                transition={{ delay: 0.8, duration: 1 }}
                style={{
                  letterSpacing: '0.5em',
                }}
              >
                CORPORATION
              </motion.div>
            </motion.div>
          </motion.div>


        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Choose your region to access premium services tailored to your location
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-32 h-32 border border-red-200 rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          <div className="w-24 h-24 border border-red-200 rounded-full" />
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="flex-1 relative z-10 px-4 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <CountrySelector 
            selectedCountry={selectedCountry} 
            onCountrySelect={handleCountrySelect} 
          />
        </div>
      </motion.main>

      {/* Enhanced Footer */}
      <motion.footer 
        className="relative z-10 text-center py-8 px-4 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
          <span>© 2024 Maximum88 Corporation</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          <span>Global Excellence</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          <span>Premium Services</span>
        </div>
        
        {/* Performance indicator (development only) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            className="mt-4 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gray-100/50 rounded-full px-3 py-1">
              <div className={`w-2 h-2 rounded-full ${deviceCapabilities.supportsAdvancedAnimations ? 'bg-green-500' : 'bg-yellow-500'}`} />
              <span>
                {deviceCapabilities.supportsAdvancedAnimations ? 'Enhanced Mode' : 'Performance Mode'}
              </span>
            </div>
          </motion.div>
        )}
      </motion.footer>
    </div>
  );
};

export default Index;
