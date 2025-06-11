
import { useState } from 'react';
import { motion } from 'framer-motion';
import CountrySelector from '@/components/CountrySelector';

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 flex flex-col relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <motion.div
          className="absolute w-32 h-32 bg-red-100 rounded-full opacity-20"
          style={{ top: '10%', left: '5%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-slate-200 rounded-full opacity-15"
          style={{ top: '20%', right: '10%' }}
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute w-16 h-16 bg-red-200 rounded-full opacity-25"
          style={{ bottom: '30%', left: '15%' }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-20 h-20 bg-gradient-to-r from-red-300 to-red-400 opacity-10 transform rotate-45"
          style={{ top: '60%', right: '20%' }}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-28 h-1 bg-slate-300 opacity-20"
          style={{ top: '40%', left: '8%' }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            x: [0, 20, 0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-red-200 to-transparent rounded-full opacity-30 blur-xl"
          style={{ bottom: '10%', right: '5%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-gradient-to-br from-slate-200 to-transparent rounded-full opacity-20 blur-xl"
          style={{ top: '15%', left: '70%' }}
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
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
              className="w-20 h-20"
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
          className="text-center text-slate-500"
        >
          <p>&copy; 2024 Maximum88. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
