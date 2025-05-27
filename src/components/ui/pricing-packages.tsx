"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PremiumTextAnimation } from "@/components/ui/premium-text-animation";
import { CheckCircle, Star, Zap, Crown, Sparkles, X } from "lucide-react";

const packages = [
  {
    name: "Growth Starter",
    description: "For new or small businesses just getting started with AI",
    price: "2,997",
    period: "month",
    icon: <Zap className="h-6 w-6" />,
    popular: false,
    features: [
      "AI Voice Agent (10 leads/month guaranteed)",
      "AI Chatbot (1 platform: Website or WhatsApp)",
      "Basic Website (template-based)",
      "Email support + Monthly performance report"
    ],
    excludes: [
      "Ad cost not included"
    ]
  },
  {
    name: "Pro Accelerator",
    description: "For growth-stage businesses that want to scale fast",
    price: "4,997",
    period: "month",
    icon: <Star className="h-6 w-6" />,
    popular: true,
    features: [
      "AI Voice Agent (15 leads/month guaranteed)",
      "Multi-platform Chatbot (Website + WhatsApp + FB)",
      "Visually attractive website with 100 SEO blogs",
      "CRM Integration + Automation",
      "GPT-4o Ad creatives & Social Media setup",
      "Priority phone support + Weekly reports",
      "$1,000 Ad spend credit (1st month only)"
    ]
  },
  {
    name: "Enterprise AI Suite",
    description: "Complete AI automation & conversion funnel for scaling businesses",
    price: "8,997",
    period: "month",
    icon: <Crown className="h-6 w-6" />,
    popular: false,
    features: [
      "Full AI Suite (Voice + Chat + Support Agents)",
      "25+ leads/month guaranteed",
      "Premium Custom Website (UI/UX Design)",
      "Custom CRM + Real-time dashboard",
      "Dedicated Account Manager",
      "UGC ads, SEO content, GPT-4o content generation",
      "24/7 Priority Support",
      "6-Months Free Maintenance ($1800 value)"
    ]
  }
];

const ultimatePackage = {
  name: "Ultimate AI Offer",
  description: "Limited Time – 50% Off Original Value: $107,964",
  yearPrice: "49,997",
  quarterlyPrice: "13,000",
  icon: <Sparkles className="h-8 w-8" />,
  features: [
    "12 months full AI Agent Suite (Voice, Chat, Support)",
    "25+ leads/month guaranteed",
    "Premium Custom Website",
    "CRM + Real-time dashboard + GPT-4o ad creatives",
    "100 SEO blogs + UGC-style ads",
    "Dedicated Account Manager",
    "$3,000 worth of bonus GPT-4o content",
    "Hosting, domain, chatbot infra included",
    "12 months full maintenance & support FREE"
  ]
};

export function PricingPackages() {
  return (
    <div className="w-full">
      {/* Monthly Packages */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-geist tracking-tighter text-gray-900 dark:text-white mb-4">
            Investment Plans
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Scalable AI solutions designed for your growth trajectory
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 auto-rows-fr">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative ${pkg.popular ? 'lg:scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="group relative h-full">
                <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full h-full">
                  <div className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${
                    pkg.popular 
                      ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-50' 
                      : 'bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-15 group-hover:opacity-35'
                  } transition-opacity duration-500`} />
                  
                  <div className={`relative h-full w-full rounded-2xl backdrop-blur-2xl border p-8 transition-all duration-500 ${
                    pkg.popular 
                      ? 'bg-white/80 dark:bg-gray-900/80 border-purple-200/50 dark:border-purple-700/50 shadow-2xl' 
                      : 'bg-white/60 dark:bg-gray-900/60 border-white/30 dark:border-gray-700/30 group-hover:shadow-2xl group-hover:bg-white/80 dark:group-hover:bg-gray-900/80'
                  }`}>
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        pkg.popular 
                          ? 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white'
                          : 'bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-transparent text-purple-600 dark:text-purple-400'
                      }`}>
                        {pkg.icon}
                      </div>
                      
                      <PremiumTextAnimation
                        text={pkg.name}
                        preset="fadeUp"
                        size="xl"
                        staggerDelay={0.05}
                        duration={0.5}
                        className="mb-2"
                      />
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{pkg.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-gray-900 dark:text-white">${pkg.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">/{pkg.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {pkg.excludes && pkg.excludes.map((exclude, excludeIndex) => (
                        <li key={`exclude-${excludeIndex}`} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <X className="h-3 w-3 text-red-500" />
                          </div>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">{exclude}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-auto flex justify-center">
                      <Button 
                        variant="cta" 
                        size="lg" 
                        href="#contact" 
                        className="w-full transform hover:scale-105 transition-transform duration-200 flex items-center justify-center"
                      >
                        {pkg.popular ? 'Get Started Now' : 'Choose This Plan'}
                      </Button>
                    </div>

                    {pkg.popular && (
                      <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Save $1,200 vs monthly billing
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Ultimate AI Offer */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-geist tracking-tighter text-gray-900 dark:text-white mb-4">
            Enterprise Annual Partnership
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Complete AI transformation with 50% savings – Original Value: $107,964
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="group relative">
            <div className="relative rounded-2xl w-full">
              <div className="relative h-full w-full rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-yellow-200/50 dark:border-yellow-700/50 p-8 transition-all duration-500 group-hover:shadow-2xl"
                   style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)' }}>
                
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-tr from-yellow-500 to-orange-500 text-white">
                    {ultimatePackage.icon}
                  </div>
                  
                  <PremiumTextAnimation
                    text={ultimatePackage.name}
                    preset="fadeUp"
                    size="2xl"
                    staggerDelay={0.05}
                    duration={0.5}
                    className="mb-2"
                    gradient={true}
                  />
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-6">{ultimatePackage.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Includes everything in Enterprise AI Suite, plus:</h4>
                    <ul className="space-y-3">
                      {ultimatePackage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Options */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Payment Options:</h4>
                      
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-xl border border-green-200/50 dark:border-green-700/50 rounded-xl p-6 relative overflow-hidden">
                          <div className="absolute top-2 right-2">
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">SAVE MORE</span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">One-time Payment</div>
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            ${ultimatePackage.yearPrice}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Save $7,968 vs monthly
                          </div>
                        </div>

                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6">
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quarterly Payment</div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            ${ultimatePackage.quarterlyPrice} × 4
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Total: $52,000
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Button Section - Centered below both columns */}
                <div className="mt-12 text-center">
                  <Button 
                    variant="cta" 
                    size="lg" 
                    href="#contact" 
                    className="transform hover:scale-105 transition-transform duration-200 px-12"
                  >
                    Secure Enterprise Partnership
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
          <h4 className="text-xl font-geist font-semibold tracking-tighter text-gray-900 dark:text-white mb-4">All Plans Include</h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 