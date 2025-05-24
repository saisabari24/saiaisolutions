"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Lock, Eye, FileCheck, Globe, Zap, CheckCircle } from "lucide-react";

interface SecurityFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ComplianceBadge {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface SecurityComplianceProps {
  className?: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption, secure data handling, and SOC 2 Type II compliance ensure your data is protected at every level."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Zero-Trust Architecture",
    description: "Multi-layered security approach with continuous verification, ensuring no unauthorized access to your systems."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Privacy by Design",
    description: "GDPR and CCPA compliant data processing with granular privacy controls and transparent data usage policies."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Audit Trail & Monitoring",
    description: "Comprehensive logging and real-time monitoring with detailed audit trails for complete transparency."
  }
];

const complianceBadges: ComplianceBadge[] = [
  {
    name: "SOC 2 Type II",
    description: "Security, Availability & Confidentiality",
    icon: <Shield className="w-8 h-8" />
  },
  {
    name: "GDPR Compliant",
    description: "European Data Protection",
    icon: <Globe className="w-8 h-8" />
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    icon: <Lock className="w-8 h-8" />
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare Data Protection",
    icon: <FileCheck className="w-8 h-8" />
  }
];

export function SecurityCompliance({ className }: SecurityComplianceProps) {
  return (
    <section className={cn("relative py-32", className)}>
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200 dark:border-green-800 mb-6"
          >
            <Shield className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Enterprise Security & Compliance
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-geist tracking-tighter text-center"
          >
            <span className="bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.75)_100%)] bg-clip-text text-transparent">
              Bank-Level Security for{" "}
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Your AI Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Enterprise-grade security and compliance standards that Fortune 500 companies trust with their most sensitive data.
          </motion.p>
        </div>

        {/* Security Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl p-[1px] h-full">
                <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#3B82F6_50%,#10B981_100%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative h-full rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-500/10">
                  
                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 text-green-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 font-geist">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-geist">
              Certified & Compliant
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our security practices are validated by industry-leading certifications and compliance frameworks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl p-[1px]">
                  <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,#FFA500_50%,#FFD700_100%)] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative rounded-2xl bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 p-6 text-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-500/10">
                    
                    {/* Badge Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      {badge.icon}
                    </div>
                    
                    {/* Badge Info */}
                    <h4 className="text-lg font-bold text-white mb-2 font-geist">
                      {badge.name}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {badge.description}
                    </p>
                    
                    {/* Verified checkmark */}
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/50">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-geist">
              Trusted by Enterprise Leaders
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "SAI AI Solutions maintains the highest security standards we've seen in the AI industry. 
              Their commitment to compliance and data protection gives us complete confidence in deploying 
              their solutions across our global operations."
            </p>
            <div className="mt-6 text-gray-400">
              <strong>Chief Information Security Officer</strong> • Fortune 100 Financial Services
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 