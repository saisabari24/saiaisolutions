"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Quote, TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import { Button } from "./button";

interface CaseStudy {
  id: string;
  client: {
    name: string;
    industry: string;
    size: string;
    logo?: string;
  };
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
    icon: React.ReactNode;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar?: string;
  };
  tags: string[];
  featured?: boolean;
}

interface CaseStudiesProps {
  studies: CaseStudy[];
  className?: string;
}

export function CaseStudies({ studies, className }: CaseStudiesProps) {
  return (
    <section className={cn("relative py-32", className)}>
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-950/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200 dark:border-green-800 mb-6"
          >
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Client Success Stories
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
              Transforming Businesses with{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 bg-clip-text text-transparent">
              AI Excellence
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real results from real clients. See how our AI solutions have driven measurable growth and operational excellence.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:gap-16 max-w-7xl mx-auto">
          {studies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={cn(
                "group relative",
                study.featured && "lg:scale-105"
              )}
            >
              {/* Premium card container */}
              <div className="relative overflow-hidden rounded-3xl p-[2px]">
                <div className={cn(
                  "absolute inset-[-1000%] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-50 transition-opacity duration-700",
                  study.featured 
                    ? "bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,#FF6B6B_25%,#4ECDC4_50%,#45B7D1_75%,#FFD700_100%)]"
                    : "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                )} />
                
                <div className="relative rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/20 dark:border-white/10 overflow-hidden">
                  
                  {/* Featured badge */}
                  {study.featured && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold">
                        FEATURED
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                      
                      {/* Left column - Client info and challenge */}
                      <div className="space-y-8">
                        {/* Client header */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
                              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                {study.client.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-geist">
                                {study.client.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {study.client.industry} • {study.client.size}
                              </p>
                            </div>
                          </div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Challenge */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            The Challenge
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        
                        {/* Solution */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Our Solution
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                      
                      {/* Right column - Results and testimonial */}
                      <div className="space-y-8">
                        
                        {/* Results metrics */}
                        <div className="space-y-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Results Achieved
                          </h4>
                          
                          <div className="grid gap-4">
                            {study.results.map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-purple-50/30 dark:from-gray-900/50 dark:to-purple-900/20 border border-gray-200/50 dark:border-gray-700/50"
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                                  {result.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                                    {result.value}
                                  </div>
                                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                    {result.metric}
                                  </div>
                                  <div className="text-xs text-gray-600 dark:text-gray-300">
                                    {result.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Testimonial */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50">
                          <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-300 dark:text-purple-600" />
                          
                          <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                              {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {study.testimonial.author}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                {study.testimonial.position}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <Button 
                        variant="cta" 
                        size="lg" 
                        href="#contact"
                        className="group-hover:scale-105 transition-transform duration-300"
                      >
                        Get Similar Results
                        <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 