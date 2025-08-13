import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Diamond, Circle } from 'lucide-react';

export default function AccessPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle Background Accent Overlay (keeps current site background visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/10 to-blue-300/10 pointer-events-none" />
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Diagonal Lines */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <line x1="0" y1="100" x2="100" y2="0" stroke="url(#lineGradient)" strokeWidth="0.08" />
          <line x1="10" y1="100" x2="90" y2="0" stroke="url(#lineGradient)" strokeWidth="0.05" />
          <line x1="20" y1="100" x2="80" y2="0" stroke="url(#lineGradient)" strokeWidth="0.05" />
        </svg>
        
        {/* Glowing Circles */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full blur-[2px]"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full blur-[1px]"
          animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full blur-[1px]"
          animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Diamond Shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 transform rotate-45 opacity-20"
          animate={{ rotate: [45, 225, 45], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-500 transform rotate-45 opacity-15"
          animate={{ rotate: [45, -135, 45], opacity: [0.06, 0.16, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Section - Typography and Content */}
        <motion.div 
          className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <motion.p 
            className="text-gray-600 font-light text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            once upon a time in
          </motion.p>
          
          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            BERLIN
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Calendar Button */}
            <motion.button 
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open calendar"
            >
              <Calendar size={20} />
            </motion.button>
            
            {/* Arrow Button */}
            <motion.button 
              className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Proceed"
            >
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section - Diagonal Split with Image */}
        <motion.div 
          className="hidden lg:block w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Diagonal Mask */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-white/70 transform skew-x-12 origin-top-left" />
          
          {/* Image Container */}
          <div className="relative h-full overflow-hidden">
            {/* Berlin Cathedral Image Placeholder (high-contrast b/w) */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-sm">Berlin Cathedral</p>
                  <p className="text-xs text-gray-500 mt-1">High-contrast photograph</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Geometric Elements Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Thin Lines */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="20" y1="80" x2="80" y2="20" stroke="rgba(59, 130, 246, 0.18)" strokeWidth="0.1" />
              <line x1="30" y1="70" x2="70" y2="30" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="0.05" />
            </svg>
            
            {/* Additional Glowing Elements */}
            <motion.div 
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full blur-[1px]"
              animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.6, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-purple-400 rounded-full blur-[1px]"
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.8, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Geometric Elements */}
      <div className="absolute bottom-8 left-8 flex items-center space-x-4">
        <motion.div 
          className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 opacity-30"
          animate={{ scaleY: [1, 1.15, 1], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="w-2 h-2 bg-blue-400 rounded-full opacity-40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="w-1 h-6 bg-gradient-to-b from-purple-400 to-blue-500 opacity-25"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.12, 0.26, 0.12] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Top Right Corner Element */}
      <motion.div 
        className="absolute top-8 right-8 w-16 h-16 border border-gray-300 rounded-lg flex items-center justify-center bg-white/30 backdrop-blur-[2px]"
        animate={{ rotate: [0, 5, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Diamond size={24} className="text-blue-500 opacity-70" />
      </motion.div>
    </div>
  );
}
