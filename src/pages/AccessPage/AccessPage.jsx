import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Diamond,
    Shield,
    Wallet,
    Globe,
    Rocket,
    Gift,
    Users,
    Ticket,
    FileText,
    Percent,
    Image,
    Calendar,
    Zap,
    Vote,
    ArrowRight,
    CheckCircle,
    Star,
    TrendingUp,
    Lock,
    Award,
    Crown,
    Sparkles,
    DollarSign
} from 'lucide-react';
import CredentialCard from '../../components/CredentialCard';
import CoinGeckoChart from '../../components/CoinGeckoChart';

export default function AccessPage() {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const networks = [
    { key: 'ethereum', name: 'Ethereum', ticker: 'ETH', gradient: 'from-[#627EEA] to-[#3C5FAD]', icon: '🔷' },
    { key: 'solana', name: 'Solana', ticker: 'SOL', gradient: 'from-[#14F195] to-[#9945FF]', icon: '☀️' },
    { key: 'polygon', name: 'Polygon', ticker: 'POL', gradient: 'from-[#8247E5] to-[#6C3BB4]', icon: '🔺' },
    { key: 'avalanche', name: 'Avalanche', ticker: 'AVAX', gradient: 'from-[#E84142] to-[#B03334]', icon: '❄️' },
    { key: 'optimism', name: 'Optimism', ticker: 'OP', gradient: 'from-[#FF0420] to-[#B30216]', icon: '⚡' },
    { key: 'ripple', name: 'Ripple', ticker: 'XRP', gradient: 'from-[#0A74FF] to-[#003366]', icon: '💎' },
    { key: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', gradient: 'from-[#F7931A] to-[#C06A00]', icon: '₿' },
    { key: 'sepolia', name: 'Sepolia', ticker: 'SEP', gradient: 'from-[#8E8E8E] to-[#5A5A5A]', icon: '🔗' }
  ];

  const benefits = [
    { icon: Rocket, title: "Priority Drops", description: "First in line for high-demand real-world asset listings", color: "from-blue-500 to-cyan-500" },
    { icon: Gift, title: "Exclusive Rewards", description: "Special NFT airdrops, discounts, and fee reductions", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Community Power", description: "Vote on future asset listings & platform features", color: "from-emerald-500 to-teal-500" },
    { icon: Ticket, title: "VIP Events", description: "Access to private IRL & virtual events", color: "from-orange-500 to-red-500" }
  ];

  const features = [
    { icon: Shield, title: "Compliance-first", description: "KYC/AML, transfer restrictions, whitelisting and audit trails", color: "from-blue-500 to-cyan-500" },
    { icon: Wallet, title: "Utility & Access", description: "Early allocations, fee discounts, governance & staking perks", color: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Multi-asset Support", description: "Equity, debt, real estate, commodities, carbon & more", color: "from-emerald-500 to-teal-500" },
    { icon: Diamond, title: "Institutional Rails", description: "Custody, settlement, and data rooms integrated", color: "from-orange-500 to-red-500" }
  ];

  const unlockFeatures = [
    { icon: FileText, text: "Token-gated content and insider market reports" },
    { icon: Percent, text: "Lower platform trading fees" },
    { icon: Image, text: "Limited-edition NFT collectibles" },
    { icon: Calendar, text: "Invitations to COPYM IRL meetups and global summits" },
    { icon: Zap, text: "Early access to new asset tokenizations" },
    { icon: Vote, text: "Governance voting rights in COPYM DAO decisions" }
  ];

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(37,95,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(21,163,110,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,95,153,0.03)_25%,rgba(37,95,153,0.03)_50%,transparent_50%,transparent_75%,rgba(37,95,153,0.03)_75%)] bg-[length:40px_40px]"></div>
      </div> */}

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#15a36e]/10 to-[#255f99]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#255f99]/20 rounded-full mb-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[#15a36e] rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-[#255f99]">Real-World Asset Tokenization</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="brand-title mb-8 text-[#255f99]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Your Gateway to{' '}
            <span className="relative text-[#15a36e]">
              COPYM's Exclusive World
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="brand-description max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unlock premium access to real-world assets, member-only rewards, and the next wave of Web3 innovation with your exclusive access pass.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-[#255f99] to-[#15a36e] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              Mint Your Pass Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>

        {/* Chart Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
            <CoinGeckoChart />
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4">
              Why Get the COPYM Access Pass?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#255f99] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unlock Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4">
              Everything Your Pass Unlocks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unlockFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#15a36e] to-[#255f99] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4">
              Platform Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group flex items-start gap-6 p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#255f99] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Comparison */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4">
              Benefits Comparison
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-white/50 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 text-sm font-bold text-gray-600 border-b border-gray-200/50">
              <div className="p-6 bg-gray-50/80 backdrop-blur-sm">FEATURE</div>
              <div className="p-6 bg-[#15a36e]/10 text-[#15a36e] backdrop-blur-sm">TOKENIZATION</div>
              <div className="p-6 bg-gray-50/80 backdrop-blur-sm">TRADITIONAL</div>
            </div>
            
            {[
              { feature: 'Minimum Investment', tokenization: '$50-$500', traditional: '$50K+', icon: DollarSign },
              { feature: 'Liquidity', tokenization: '24/7 global', traditional: 'Months', icon: TrendingUp },
              { feature: 'Transparency', tokenization: 'On-chain', traditional: 'Opaque', icon: Shield },
              { feature: 'Fees', tokenization: '0.5-2%', traditional: '5-15%', icon: Percent },
              { feature: 'Access', tokenization: 'Global', traditional: 'Local', icon: Globe }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-3 text-sm border-b border-gray-100/50 last:border-b-0 hover:bg-gray-50/30 transition-colors">
                <div className="p-6 font-semibold text-gray-900 flex items-center gap-3">
                  <row.icon className="w-5 h-5 text-[#255f99]" />
                  {row.feature}
                </div>
                <div className="p-6 text-[#15a36e] font-bold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {row.tokenization}
                </div>
                <div className="p-6 text-gray-600">{row.traditional}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Supported Networks */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="text-center mb-12">
            <h2 className="brand-section-title text-[#255f99] mb-4">
              Supported Networks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {networks.map((network) => (
              <motion.div
                key={network.key}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedNetwork(selectedNetwork === network.key ? null : network.key)}
                className={`group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 transition-all duration-300 overflow-hidden cursor-pointer ${
                  selectedNetwork === network.key 
                    ? 'border-[#15a36e] shadow-2xl scale-105' 
                    : 'border-white/50 shadow-xl hover:shadow-2xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${network.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${network.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <span className="text-2xl">{network.icon}</span>
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-1">{network.name}</div>
                  <div className="text-sm text-gray-500">{network.ticker}</div>
                  {selectedNetwork === network.key && (
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 bg-[#15a36e] rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Credential Preview */}
        <motion.div
                  className="mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                      <h2 className="brand-section-title text-[#255f99] mb-4">
                        Your Access Credential
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] lg:mx-0 mx-auto rounded-full mb-6"></div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Your digital identity that unlocks exclusive access to the COPYM ecosystem. 
                        Secure, verifiable, and always with you.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#15a36e]" />
                          <span>Secure blockchain verification</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#15a36e]" />
                          <span>Instant access to all features</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#15a36e]" />
                          <span>Portable across devices</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl p-8">
                        <CredentialCard
                          user={{
                            name: 'Alex Morgan',
                            employeeNumber: 'EMP-2048',
                            passNumber: 'PASS-7F32',
                            points: '1,250',
                            qrImage: ''
                          }}
                          variant="bottleGreen"
                          stacked
                          backVariant="darkBlue"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <div className="bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-3xl p-12 text-white">
            <Crown className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Elite?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't miss out on exclusive access to the future of real-world asset tokenization.
            </p>
            <button className="group bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center mx-auto">
              <Sparkles className="mr-3 w-5 h-5" />
              Get Your Access Pass Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}