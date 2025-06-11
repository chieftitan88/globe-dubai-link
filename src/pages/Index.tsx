import { useState } from 'react';
import { motion } from 'framer-motion';
import CountrySelector from '@/components/CountrySelector';

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex flex-col relative overflow-hidden">
      {/* Bottom Gradient Background */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-red-700 via-red-800 to-transparent opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-800 via-red-700 to-transparent opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 via-red-700 to-white opacity-35 pointer-events-none" />

      {/* Enhanced Dynamic Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing Particle System */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Dynamic Wave Patterns */}
        <motion.div
          className="absolute w-96 h-2 bg-gradient-to-r from-red-300 via-red-500 to-red-300 opacity-20 rounded-full"
          style={{ top: '20%', left: '-10%' }}
          animate={{
            x: [0, window.innerWidth + 100],
            scaleX: [1, 2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute w-64 h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-400 opacity-30 rounded-full"
          style={{ top: '70%', right: '-10%' }}
          animate={{
            x: [0, -(window.innerWidth + 100)],
            scaleX: [1, 1.5, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Morphing Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-red-200 to-red-400 opacity-20"
          style={{ top: '15%', left: '10%' }}
          animate={{
            borderRadius: ["0%", "50%", "0%", "25%", "0%"],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.8, 1.2, 1],
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-br from-red-300 to-red-500 opacity-25"
          style={{ top: '60%', right: '15%' }}
          animate={{
            borderRadius: ["25%", "0%", "50%", "0%", "25%"],
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 0.7, 1.4, 0.9, 1],
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Floating Energy Orbs */}
        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-br from-red-300 to-transparent rounded-full opacity-40 blur-sm"
          style={{ top: '30%', left: '80%' }}
          animate={{
            scale: [1, 1.8, 1.2, 1.5, 1],
            opacity: [0.4, 0.8, 0.2, 0.6, 0.4],
            x: [0, -100, 50, -30, 0],
            y: [0, 50, -80, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute w-16 h-16 bg-gradient-to-br from-red-400 to-transparent rounded-full opacity-35 blur-sm"
          style={{ top: '80%', left: '20%' }}
          animate={{
            scale: [1, 1.4, 0.8, 1.6, 1],
            opacity: [0.35, 0.7, 0.15, 0.5, 0.35],
            x: [0, 80, -60, 40, 0],
            y: [0, -70, 40, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Pulsing Gradient Waves */}
        <motion.div
          className="absolute w-full h-32 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-10"
          style={{ top: '40%', left: '0%' }}
          animate={{
            scaleY: [1, 2, 1],
            opacity: [0.1, 0.3, 0.1],
            skewX: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Spiral Elements */}
        <motion.div
          className="absolute w-1 h-40 bg-gradient-to-b from-red-400 to-transparent opacity-30"
          style={{ top: '10%', left: '70%' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            transformOrigin: "bottom center",
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute w-1 h-32 bg-gradient-to-b from-red-400 to-transparent opacity-25"
          style={{ bottom: '20%', right: '30%' }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            transformOrigin: "top center",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />

        {/* Floating Debris */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`debris-${i}`}
            className="absolute w-1 h-1 bg-red-500 opacity-40"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              scale: [0, 1, 0],
              rotate: [0, Math.random() * 720],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between max-w-7xl mx-auto"
        >
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-28 h-28"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/lovable-uploads/ba86ee30-04da-4fa6-861a-8b8f1b494c1f.png" 
                alt="Maximum 88 Corporation Logo"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-red-600 transition-colors font-medium">About</a>
            <a href="#" className="text-slate-600 hover:text-red-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-slate-600 hover:text-red-600 transition-colors font-medium">Contact</a>
          </nav>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-red-600 to-red-800 bg-clip-text text-transparent leading-tight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Choose Your
              <br />
              <span className="text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
                Region
              </span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience our premium services tailored to your location. 
              Select your region to continue with localized content and support.
            </p>
          </motion.div>

          <CountrySelector selectedCountry={selectedCountry} onSelectCountry={setSelectedCountry} />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-red-500"
        >
          <p>&copy; 2024 Maximum88. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
