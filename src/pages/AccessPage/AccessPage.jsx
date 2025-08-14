import React from 'react';
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
    Vote
} from 'lucide-react';
import CredentialCard from '../../components/CredentialCard';
import CoinGeckoChart from '../../components/CoinGeckoChart';

export default function AccessPage() {
  return (
        <div className="min-h-screen relative overflow-hidden bg-blue-100">
            {/* Modern Background Pattern */}
      <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.05)_75%)] bg-[length:20px_20px]"></div>
            </div>

            {/* Floating Elements */}
        <motion.div 
                className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
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
                className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl"
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

            {/* Modern 3D Access Pass */}
        <motion.div 
                className="absolute top-8 right-8 z-30 w-40 h-56 bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-700 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20"
                animate={{
                    rotateY: [0, 15, 0],
                    rotateX: [0, 5, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
                
                <div className="relative h-full p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="text-white">
                            <div className="text-xs font-bold tracking-wider">COPYM</div>
                            <div className="text-xs opacity-80">ACCESS PASS</div>
                        </div>
                        <div className="w-8 h-6 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30"></div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <div className="text-3xl">🔗</div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-xs font-mono text-white/90 tracking-wider">ID: COPYM-ACCESS</div>
                    </div>
      </div>
                
                <div className="absolute inset-0 rounded-2xl border border-white/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
            </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex">
                {/* Left Section - Modern Content */}
        <motion.div 
                    className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
                    {/* Modern Hero Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-sm font-medium text-blue-700">Real-World Asset Tokenization</span>
                        </motion.div>
          
          {/* Main Title */}
          <motion.h1 
                            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
                            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Your Gateway to
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                COPYm's Exclusive World
                            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
                            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
                            Unlock premium access to real-world assets, member-only rewards, and the next wave of Web3 innovation with your exclusive access pass.
          </motion.p>
          
                        {/* Modern CTA Button */}
                        <motion.button
                            className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center">
                                Mint Your Pass Now
                                <motion.div
                                    className="ml-3 w-5 h-5 bg-white/20 rounded-full"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Modern Value Cards */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mr-4"></div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Why Get the COPYm Access Pass?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Rocket,
                                    title: "Priority Drops",
                                    description: "First in line for high-demand real-world asset listings",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: Gift,
                                    title: "Exclusive Rewards",
                                    description: "Special NFT airdrops, discounts, and fee reductions",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: Users,
                                    title: "Community Power",
                                    description: "Vote on future asset listings & platform features",
                                    gradient: "from-emerald-500 to-teal-500"
                                },
                                {
                                    icon: Ticket,
                                    title: "VIP Events",
                                    description: "Access to private IRL & virtual events",
                                    gradient: "from-orange-500 to-red-500"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-white/80 p-6 rounded-2xl border border-gray-200/50 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 overflow-hidden"
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    <div className="relative flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-gray-800 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Modern Benefits Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 mr-4"></div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Everything Your Pass Unlocks
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: FileText, text: "Token-gated content and insider market reports" },
                                { icon: Percent, text: "Lower platform trading fees" },
                                { icon: Image, text: "Limited-edition NFT collectibles" },
                                { icon: Calendar, text: "Invitations to COPYm IRL meetups and global summits" },
                                { icon: Zap, text: "Early access to new asset tokenizations" },
                                { icon: Vote, text: "Governance voting rights in COPYm DAO decisions" }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="group flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-gray-200/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                                        <benefit.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium leading-relaxed">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Modern Features List */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 mr-4"></div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Platform Features
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Shield, text: "Compliance‑first: KYC/AML, transfer restrictions, whitelisting and audit trails.", color: "from-blue-500 to-cyan-500" },
                                { icon: Wallet, text: "Utility & access: early allocations, fee discounts, governance & staking perks.", color: "from-purple-500 to-pink-500" },
                                { icon: Globe, text: "Multi‑asset support: equity, debt, real estate, commodities, carbon & more.", color: "from-emerald-500 to-teal-500" },
                                { icon: Diamond, text: "Institutional rails: custody, settlement, and data rooms integrated.", color: "from-orange-500 to-red-500" }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="group flex items-start gap-4 p-5 bg-white/70 rounded-xl border border-gray-200/50 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                                        <feature.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Modern Benefits Comparison Table */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 mr-4"></div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Benefits Comparison
                            </h2>
                        </div>
                        <div className="bg-white/80 rounded-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm shadow-xl">
                            <div className="grid grid-cols-3 text-sm font-bold text-gray-600 border-b border-gray-200/50">
                                <div className="p-4 bg-gray-50/80 backdrop-blur-sm">FEATURE</div>
                                <div className="p-4 bg-green-50/80 text-green-700 backdrop-blur-sm">TOKENIZATION</div>
                                <div className="p-4 bg-gray-50/80 backdrop-blur-sm">TRADITIONAL</div>
                            </div>
                            
                            {[
                                { feature: 'Minimum Investment', tokenization: '$50-$500', traditional: '$50K+' },
                                { feature: 'Liquidity', tokenization: '24/7 global', traditional: 'Months' },
                                { feature: 'Transparency', tokenization: 'On-chain', traditional: 'Opaque' },
                                { feature: 'Fees', tokenization: '0.5-2%', traditional: '5-15%' },
                                { feature: 'Access', tokenization: 'Global', traditional: 'Local' }
                            ].map((row, index) => (
                                <div key={index} className="grid grid-cols-3 text-sm border-b border-gray-100/50 last:border-b-0 hover:bg-gray-50/30 transition-colors">
                                    <div className="p-4 font-semibold text-gray-900">{row.feature}</div>
                                    <div className="p-4 text-green-600 font-bold">{row.tokenization}</div>
                                    <div className="p-4 text-gray-600">{row.traditional}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Modern Supported Networks */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 mr-4"></div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Supported Networks
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {[
                                { key: 'ethereum', name: 'Ethereum', ticker: 'ETH', gradient: 'from-[#627EEA] to-[#3C5FAD]' },
                                { key: 'solana', name: 'Solana', ticker: 'SOL', gradient: 'from-[#14F195] to-[#9945FF]' },
                                { key: 'polygon', name: 'Polygon', ticker: 'POL', gradient: 'from-[#8247E5] to-[#6C3BB4]' },
                                { key: 'avalanche', name: 'Avalanche', ticker: 'AVAX', gradient: 'from-[#E84142] to-[#B03334]' },
                                { key: 'optimism', name: 'Optimism', ticker: 'OP', gradient: 'from-[#FF0420] to-[#B30216]' },
                                { key: 'ripple', name: 'Ripple', ticker: 'XRP', gradient: 'from-[#0A74FF] to-[#003366]' },
                                { key: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', gradient: 'from-[#F7931A] to-[#C06A00]' },
                                { key: 'sepolia', name: 'Sepolia', ticker: 'SEP', gradient: 'from-[#8E8E8E] to-[#5A5A5A]' }
                            ].map((network) => (
                                <motion.div
                                    key={network.key}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative bg-white/80 p-4 rounded-2xl border border-gray-200/50 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${network.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                    <div className="relative flex items-center gap-3">
                                        {(() => {
                                            const logoMap = {
                                                ethereum: '/assets/blockchains/ethereum.png',
                                                solana: '/assets/blockchains/solana.png',
                                                polygon: '/assets/blockchains/Polygon.png',
                                                optimism: '/assets/blockchains/logoOptimism.png',
                                                avalanche: '/assets/blockchains/avalanche.png',
                                                ripple: '/assets/blockchains/ripple.png',
                                                bitcoin: '/assets/blockchains/bitcoin.png',
                                                sepolia: '/assets/blockchains/ethereum.png'
                                            };
                                            const src = logoMap[network.key];
                                            return src ? (
                                                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center ring-1 ring-gray-200/50 overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                                                    <img src={src} alt={`${network.name} logo`} className="h-7 w-7 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                                </div>
                                            ) : (
                                                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${network.gradient} text-white flex items-center justify-center text-xs font-bold shadow-md group-hover:shadow-lg transition-all duration-300`}>
                                                    {network.ticker}
                                                </div>
                                            );
                                        })()}
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">{network.name}</div>
                                            <div className="text-xs text-gray-500">{network.ticker}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Modern Credential Preview */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.9 }}
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mr-4"></div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Your Access Credential
                            </h2>
                        </div>
                        <div className="overflow-x-auto">
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
          </motion.div>
        </motion.div>

                {/* Right Section - Chart */}
        <motion.div 
          className="hidden lg:block w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
                    <div className="relative h-full overflow-auto p-6">
                        <CoinGeckoChart />
          </div>
        </motion.div>
      </div>
    </div>
  );
}