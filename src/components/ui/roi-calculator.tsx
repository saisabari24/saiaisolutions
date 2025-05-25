"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [inputs, setInputs] = useState({
    averageDealValue: 5000,
    closingRate: 20,
    currentLeads: 5,
    monthlyAdSpend: 2000
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    additionalRevenue: 0,
    roi: 0
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    // Current monthly revenue
    const currentRevenue = (inputs.currentLeads * inputs.averageDealValue * inputs.closingRate) / 100;
    
    // With our service (15 additional qualified leads minimum)
    const totalLeads = inputs.currentLeads + 15;
    const projectedRevenue = (totalLeads * inputs.averageDealValue * inputs.closingRate) / 100;
    
    // Additional revenue from our service
    const additionalRevenue = projectedRevenue - currentRevenue;
    
    // Assume our service costs $3000/month
    const serviceCost = 3000;
    const roi = ((additionalRevenue - serviceCost) / serviceCost) * 100;

    setResults({
      currentRevenue,
      projectedRevenue,
      additionalRevenue,
      roi
    });
    
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs({
      ...inputs,
      [field]: parseFloat(value) || 0
    });
    setShowResults(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 mb-6">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <h3 className="heading-lg text-gray-900 dark:text-white mb-4">
          ROI Calculator
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          See how much additional revenue our AI lead generation service could generate for your business
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Input Section */}
        <div className="space-y-6">
          <h4 className="heading-sm text-gray-900 dark:text-white mb-6">Your Business Metrics</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Average Deal Value
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={inputs.averageDealValue}
                onChange={(e) => handleInputChange('averageDealValue', e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="5000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sales Closing Rate (%)
            </label>
            <input
              type="number"
              value={inputs.closingRate}
              onChange={(e) => handleInputChange('closingRate', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="20"
              min="0"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Qualified Leads per Month
            </label>
            <input
              type="number"
              value={inputs.currentLeads}
              onChange={(e) => handleInputChange('currentLeads', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Marketing/Ad Spend
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={inputs.monthlyAdSpend}
                onChange={(e) => handleInputChange('monthlyAdSpend', e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="2000"
              />
            </div>
          </div>

          <Button
            onClick={calculateROI}
            variant="cta"
            size="lg"
            className="w-full transform hover:scale-105 transition-transform duration-200"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate My ROI
          </Button>
        </div>

        {/* Results Section */}
        <div className={`transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
          <h4 className="heading-sm text-gray-900 dark:text-white mb-6">Projected Results</h4>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-600/10 rounded-xl blur-xl" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current Monthly Revenue</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(results.currentRevenue)}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-xl blur-xl" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-green-200 dark:border-green-800 rounded-xl p-6">
                <div className="text-sm text-green-600 dark:text-green-400 mb-2">Projected Monthly Revenue</div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(results.projectedRevenue)}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                  +{Math.round(((results.projectedRevenue - results.currentRevenue) / Math.max(results.currentRevenue, 1)) * 100)}% increase
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-xl" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">Additional Monthly Revenue</div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {formatCurrency(results.additionalRevenue)}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-xl blur-xl" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Return on Investment
                </div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(results.roi)}%
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  Monthly ROI after service cost
                </div>
              </div>
            </div>
          </div>

          {showResults && results.roi > 100 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">Excellent ROI Potential!</h5>
              <p className="text-sm text-green-700 dark:text-green-400">
                Based on your metrics, our AI lead generation service could generate significant positive returns. 
                Book a strategy call to discuss how we can achieve these results for your business.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          * Calculations based on our guaranteed minimum of 15 additional qualified leads per month
        </p>
        <Button variant="cta" size="lg" href="#contact" className="transform hover:scale-105 transition-transform duration-200">
          Get My Custom Strategy
          <TrendingUp className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
} 