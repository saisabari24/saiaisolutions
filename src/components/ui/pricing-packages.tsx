"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI lead generation",
    price: "1,997",
    period: "month",
    icon: <Zap className="h-6 w-6" />,
    popular: false,
    features: [
      "AI Chat Agent for website",
      "10+ qualified leads guaranteed",
      "Basic CRM integration",
      "Email support",
      "Monthly performance report",
      "30-day money-back guarantee"
    ]
  },
  {
    name: "Professional",
    description: "Most popular choice for growing businesses",
    price: "3,997",
    period: "month",
    icon: <Star className="h-6 w-6" />,
    popular: true,
    features: [
      "AI Chat + Voice Agents",
      "25+ qualified leads guaranteed",
      "Advanced CRM integration",
      "AI Social Media Management",
      "Priority phone support",
      "Weekly performance reports",
      "A/B testing & optimization",
      "30-day money-back guarantee"
    ]
  },
  {
    name: "Enterprise",
    description: "Complete AI lead generation solution for established businesses",
    price: "7,997",
    period: "month",
    icon: <Crown className="h-6 w-6" />,
    popular: false,
    features: [
      "Full AI Agent Suite",
      "50+ qualified leads guaranteed",
      "Custom CRM integration",
      "AI Social Media + Ads",
      "Dedicated account manager",
      "Real-time analytics dashboard",
      "Custom AI training",
      "24/7 priority support",
      "60-day money-back guarantee"
    ]
  }
];

export function PricingPackages() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8 auto-rows-fr">
        {packages.map((pkg, index) => (
          <div key={index} className={`relative ${pkg.popular ? 'lg:scale-105' : ''}`}>
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
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
                <div className={`relative h-full w-full rounded-2xl backdrop-blur-2xl border p-8 transition-all duration-500 flex flex-col ${
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
                    
                    <h3 className="heading-sm text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">${pkg.price}</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">/{pkg.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button 
                      variant={pkg.popular ? "cta" : "outline"} 
                      size="lg" 
                      href="#contact" 
                      className={`w-full transform hover:scale-105 transition-transform duration-200 ${
                        pkg.popular ? '' : 'border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/50'
                      }`}
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

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
          <h4 className="heading-sm text-gray-900 dark:text-white mb-4">All Plans Include</h4>
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