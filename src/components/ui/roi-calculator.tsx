"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap } from "lucide-react";
import { Button } from "./button";

interface ROICalculatorProps {
  className?: string;
}

interface CalculatorInputs {
  employees: number;
  avgSalary: number;
  hoursPerWeek: number;
  automationPercentage: number;
}

interface ROIResults {
  annualSavings: number;
  monthlyROI: number;
  paybackPeriod: number;
  productivityGain: number;
}

export function ROICalculator({ className }: ROICalculatorProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 50,
    avgSalary: 75000,
    hoursPerWeek: 40,
    automationPercentage: 30
  });

  const [results, setResults] = useState<ROIResults>({
    annualSavings: 0,
    monthlyROI: 0,
    paybackPeriod: 0,
    productivityGain: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate ROI in real-time
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const hourlyRate = inputs.avgSalary / (52 * inputs.hoursPerWeek);
      const automatedHours = (inputs.hoursPerWeek * inputs.automationPercentage / 100);
      const weeklySavings = inputs.employees * automatedHours * hourlyRate;
      const annualSavings = weeklySavings * 52;
      
      // Assuming AI solution costs $50k implementation + $10k/month
      const implementationCost = 50000;
      const monthlyCost = 10000;
      const annualCost = implementationCost + (monthlyCost * 12);
      
      const monthlyROI = ((annualSavings - annualCost) / annualCost) * 100 / 12;
      const paybackPeriod = implementationCost / (weeklySavings * 4.33); // months
      const productivityGain = inputs.automationPercentage * 1.5; // Enhanced productivity

      setResults({
        annualSavings: Math.round(annualSavings),
        monthlyROI: Math.round(monthlyROI * 100) / 100,
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        productivityGain: Math.round(productivityGain * 10) / 10
      });
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputs]);

  const updateInput = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className={cn("relative py-32", className)}>
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-pink-50 dark:from-indigo-950 dark:via-purple-950/30 dark:to-pink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-800 mb-6"
          >
            <Calculator className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Interactive ROI Calculator
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-geist tracking-tighter text-center"
          >
            <span className="bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-transparent">
              Calculate Your{" "}
            </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              AI ROI
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            See the potential return on investment for implementing AI solutions in your organization
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative overflow-hidden rounded-3xl p-[2px]">
                <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366F1_0%,#8B5CF6_50%,#6366F1_100%)] opacity-20" />
                <div className="relative rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8">
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-geist flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                    Your Organization
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Number of Employees */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Number of Employees
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="range"
                          min="10"
                          max="1000"
                          step="10"
                          value={inputs.employees}
                          onChange={(e) => updateInput('employees', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <span>10</span>
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">{inputs.employees}</span>
                          <span>1000+</span>
                        </div>
                      </div>
                    </div>

                    {/* Average Salary */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Average Annual Salary ($)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="range"
                          min="40000"
                          max="150000"
                          step="5000"
                          value={inputs.avgSalary}
                          onChange={(e) => updateInput('avgSalary', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <span>$40k</span>
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">${inputs.avgSalary.toLocaleString()}</span>
                          <span>$150k+</span>
                        </div>
                      </div>
                    </div>

                    {/* Hours per Week */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Hours per Week
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="range"
                          min="20"
                          max="60"
                          step="5"
                          value={inputs.hoursPerWeek}
                          onChange={(e) => updateInput('hoursPerWeek', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <span>20h</span>
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">{inputs.hoursPerWeek}h</span>
                          <span>60h+</span>
                        </div>
                      </div>
                    </div>

                    {/* Automation Percentage */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Tasks to Automate (%)
                      </label>
                      <div className="relative">
                        <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="range"
                          min="10"
                          max="80"
                          step="5"
                          value={inputs.automationPercentage}
                          onChange={(e) => updateInput('automationPercentage', parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <span>10%</span>
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">{inputs.automationPercentage}%</span>
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Display */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-3xl p-[2px]">
                <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#3B82F6_50%,#10B981_100%)] opacity-30" />
                <div className="relative rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8">
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-geist flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-green-600 dark:text-green-400" />
                    Your ROI Projection
                  </h3>

                  <div className="grid gap-6">
                    {/* Annual Savings */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">Annual Savings</span>
                        <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className={cn(
                        "text-3xl font-bold text-green-600 dark:text-green-400 transition-all duration-300",
                        isCalculating && "animate-pulse"
                      )}>
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <p className="text-xs text-green-600/70 dark:text-green-400/70 mt-1">
                        Cost savings from automation
                      </p>
                    </div>

                    {/* Monthly ROI */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Monthly ROI</span>
                        <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className={cn(
                        "text-3xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300",
                        isCalculating && "animate-pulse"
                      )}>
                        {results.monthlyROI > 0 ? '+' : ''}{results.monthlyROI}%
                      </div>
                      <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">
                        Return on investment
                      </p>
                    </div>

                    {/* Payback Period */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Payback Period</span>
                        <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className={cn(
                        "text-3xl font-bold text-purple-600 dark:text-purple-400 transition-all duration-300",
                        isCalculating && "animate-pulse"
                      )}>
                        {results.paybackPeriod} months
                      </div>
                      <p className="text-xs text-purple-600/70 dark:text-purple-400/70 mt-1">
                        Time to break even
                      </p>
                    </div>

                    {/* Productivity Gain */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200/50 dark:border-orange-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Productivity Gain</span>
                        <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className={cn(
                        "text-3xl font-bold text-orange-600 dark:text-orange-400 transition-all duration-300",
                        isCalculating && "animate-pulse"
                      )}>
                        +{results.productivityGain}%
                      </div>
                      <p className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-1">
                        Overall efficiency boost
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button variant="cta" size="lg" className="w-full">
                      Get Your Custom ROI Analysis
                    </Button>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
                      Schedule a consultation to discuss your specific needs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 