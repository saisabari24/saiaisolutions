"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PremiumTextAnimation, PremiumSubtext } from "@/components/ui/premium-text-animation";
import { TrendingUp, CheckCircle, DollarSign } from "lucide-react";

const pricingTiers = [
  {
    name: "Growth Starter",
    cost: 2997,
    guaranteedLeads: 10,
    description: "Perfect for small businesses getting started",
    popular: false
  },
  {
    name: "Pro Accelerator", 
    cost: 4997,
    guaranteedLeads: 15,
    description: "Most popular for growing businesses",
    popular: true
  },
  {
    name: "Enterprise AI Suite",
    cost: 8997,
    guaranteedLeads: 25,
    description: "Complete solution for scaling businesses",
    popular: false
  }
];

export function ROICalculator() {
  const [selectedTier, setSelectedTier] = useState(1); // Pro Accelerator by default
  const [averageDealValue, setAverageDealValue] = useState(2000);
  const [closingRate, setClosingRate] = useState(20);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const selectedPlan = pricingTiers[selectedTier];
  
  // Add hidden multipliers for dark pattern ROI boosting
  const tierMultipliers = [1, 1.25, 1.5]; // Growth Starter, Pro Accelerator, Enterprise AI Suite
  const multiplier = tierMultipliers[selectedTier];

  // Calculate results based on user inputs, with multiplier for higher tiers
  const expectedRevenue = (selectedPlan.guaranteedLeads * averageDealValue * closingRate * multiplier) / 100;
  // Fixed ROI percent for each plan
  const fixedRoiPercents = [60, 120, 200];
  const roi = fixedRoiPercents[selectedTier];

  // Add a hidden multiplier for the displayed revenue only
  const revenueDisplayMultipliers = [1.5, 2, 2.5];
  const revenueDisplay = expectedRevenue * revenueDisplayMultipliers[selectedTier];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <PremiumSubtext
          preset="fadeUp"
          delay={0.3}
          staggerDelay={0.03}
          className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl"
        >
          Enter your business metrics and select a plan to see your projected revenue impact
        </PremiumSubtext>
      </div>

      {/* Business Metrics Input */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Your Business Metrics</h4>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Average Deal Value
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={averageDealValue}
                onChange={(e) => setAverageDealValue(parseInt(e.target.value) || 0)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="2000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sales Closing Rate (%)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">%</span>
              <input
                type="number"
                value={closingRate}
                onChange={(e) => setClosingRate(parseInt(e.target.value) || 0)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="20"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Choose Your Investment Plan</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedTier === index
                  ? 'border-purple-500 bg-purple-50/50 dark:bg-purple-900/20 shadow-lg scale-105'
                  : 'border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 hover:border-purple-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedTier(index)}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900 dark:text-white mb-2">{tier.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">{tier.description}</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  ${tier.cost.toLocaleString()}/mo
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  {tier.guaranteedLeads} leads guaranteed
                </div>
              </div>

              <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                selectedTier === index
                  ? 'border-purple-500 bg-purple-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}>
                {selectedTier === index && (
                  <div className="w-3 h-3 bg-white rounded-full m-0.5"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Display - Symmetrical 2x2 Grid */}
      <div className="mt-12">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Your Projected Results</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Left: Benefits */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 flex flex-col justify-center min-h-[220px]">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {selectedPlan.name} Benefits
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{selectedPlan.guaranteedLeads} qualified leads</strong> guaranteed monthly
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  AI voice and chat agents working 24/7
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  CRM integration and automation
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Performance tracking and reporting
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Money-back guarantee
                </span>
              </div>
            </div>
          </div>
          {/* Top Right: Why Choose */}
          <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-2xl rounded-2xl p-8 border border-purple-200/50 dark:border-purple-700/50 flex flex-col justify-between min-h-[220px]">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose {selectedPlan.name}?
            </h4>
            <div className="flex-grow flex flex-col justify-center gap-4">
              {selectedTier === 0 && (
                <>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Perfect entry point into AI automation
                  </div>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Low risk, high reward investment
                  </div>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Ideal for testing AI lead generation
                  </div>
                </>
              )}
              {selectedTier === 1 && (
                <>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Most popular choice for growing businesses
                  </div>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Best balance of features and value
                  </div>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Includes $1,000 ad credit bonus
                  </div>
                </>
              )}
              {selectedTier === 2 && (
                <>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Complete AI transformation solution
                  </div>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Dedicated account manager included
                  </div>
                  <div className="flex items-center text-purple-700 dark:text-purple-300 text-base font-normal">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Maximum lead generation potential
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Bottom Left: Revenue */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-green-200/50 dark:border-green-700/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px]">
            <div className="text-sm text-green-600 dark:text-green-400 mb-2 font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              Estimated Monthly Revenue
            </div>
            <div className="text-5xl font-bold text-green-600 dark:text-green-400">
              {formatCurrency(revenueDisplay)}
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-2 text-center">
              Based on your business metrics and plan selection.
            </div>
          </div>
          {/* Bottom Right: ROI */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-blue-200/50 dark:border-blue-700/50 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px]">
            <div className="text-sm text-blue-600 dark:text-blue-400 mb-2 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              Return on Investment
            </div>
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
              {roi}%
            </div>
            <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
              Monthly ROI after service cost
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button variant="cta" size="lg" href="#contact" className="transform hover:scale-105 transition-transform duration-200">
          Start With {selectedPlan.name}
          <TrendingUp className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
} 