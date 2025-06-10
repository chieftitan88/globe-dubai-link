
import { useState } from 'react';
import { motion } from 'framer-motion';
import CountrySelector from '@/components/CountrySelector';
import { Globe } from 'lucide-react';

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <header className="relative z-10 p-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between max-w-7xl mx-auto"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Maximum88
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Choose Your
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
                Region
              </span>
            </h1>
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
