import React from 'react';
import LLMIntegrationSection from './sections/LLMIntegrationSection';

const AgentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 via-green-900 to-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transform origin-left" 
           style={{ transform: 'scaleX(0)' }} 
           id="progress-bar" />
      
      {/* Main Content */}
      <main className="relative">
        {/* AI Agent Page Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Introducing CopymAI
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-8">
              Revolutionizing Real-World Asset Investment
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We're building a next-gen AI-powered investment platform that uses artificial intelligence and blockchain to make investing in high-value real-world assets (like real estate, art, or rare collectibles) easy, accessible, and profitable — even for everyday investors.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Invest in Assets
              </button>
              <button className="px-8 py-4 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                Partner With CopymAI
              </button>
            </div>
          </div>
        </div>

        {/* LLM Integration Section */}
        <LLMIntegrationSection />

      </main>
    </div>
  );
};

export default AgentPage; 