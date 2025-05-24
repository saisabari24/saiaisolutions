"use client";

import React from "react";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Demo } from "@/components/ui/demo";
import { TextEffect } from "@/components/ui/text-effect";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { HeroSection } from "@/components/ui/hero-section-dark";
import { PremiumStats } from "@/components/ui/premium-stats";
import { CaseStudies } from "@/components/ui/case-studies";
import { SecurityCompliance } from "@/components/ui/security-compliance";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { MessageSquare, Phone, Code, Building2, ChevronRight, Home as HomeIcon, Briefcase, FileText, Users, Mail, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "/", icon: <HomeIcon size={20} /> },
  { name: "Services", link: "#services", icon: <Briefcase size={20} /> },
  { name: "Case Studies", link: "#case-studies", icon: <FileText size={20} /> },
  { name: "About", link: "#about", icon: <Users size={20} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={20} /> },
];

// Premium enterprise stats data
const enterpriseStats = [
  {
    value: "500M+",
    label: "API Calls Processed",
    description: "Monthly AI interactions across our enterprise client base",
    animatedValue: 500,
    suffix: "M+"
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise-grade reliability with 24/7 monitoring",
    animatedValue: 99.9,
    suffix: "%"
  },
  {
    value: "45%",
    label: "Average Cost Reduction",
    description: "Operational savings achieved by our Fortune 500 clients",
    animatedValue: 45,
    suffix: "%"
  },
  {
    value: "72h",
    label: "Implementation Time",
    description: "Average deployment time for enterprise AI solutions",
    animatedValue: 72,
    suffix: "h"
  }
];

// Premium case studies data
const caseStudiesData = [
  {
    id: "fintech-leader",
    client: {
      name: "Global FinTech Leader",
      industry: "Financial Services",
      size: "50,000+ employees"
    },
    challenge: "Manual customer service operations were overwhelming their support team with 100,000+ monthly inquiries, leading to 48-hour response times and declining customer satisfaction scores.",
    solution: "Implemented our enterprise AI customer service platform with natural language processing, sentiment analysis, and seamless human handoff capabilities across 12 languages.",
    results: [
      {
        metric: "Response Time Reduction",
        value: "94%",
        description: "From 48 hours to 3 minutes average",
        icon: <Clock className="w-5 h-5" />
      },
      {
        metric: "Cost Savings",
        value: "$2.4M",
        description: "Annual operational cost reduction",
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        metric: "Customer Satisfaction",
        value: "+67%",
        description: "CSAT score improvement",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "SAI AI Solutions transformed our customer service operations beyond our expectations. The AI agents handle complex financial queries with remarkable accuracy, and our customers love the instant responses.",
      author: "Sarah Chen",
      position: "Chief Technology Officer"
    },
    tags: ["Customer Service AI", "NLP", "Multi-language", "Enterprise Scale"],
    featured: true
  },
  {
    id: "healthcare-network",
    client: {
      name: "Healthcare Network",
      industry: "Healthcare",
      size: "25,000+ employees"
    },
    challenge: "Appointment scheduling and patient inquiries were consuming 60% of staff time, creating bottlenecks and reducing time available for patient care.",
    solution: "Deployed HIPAA-compliant AI voice agents for appointment scheduling, prescription refills, and general inquiries with seamless EHR integration.",
    results: [
      {
        metric: "Staff Time Saved",
        value: "60%",
        description: "More time for patient care",
        icon: <Clock className="w-5 h-5" />
      },
      {
        metric: "Appointment Efficiency",
        value: "+85%",
        description: "Faster scheduling process",
        icon: <Zap className="w-5 h-5" />
      },
      {
        metric: "Patient Satisfaction",
        value: "+52%",
        description: "Improved patient experience",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    testimonial: {
      quote: "The AI voice agents have revolutionized our patient interactions. They handle routine tasks flawlessly while maintaining the personal touch our patients expect.",
      author: "Dr. Michael Rodriguez",
      position: "Chief Medical Officer"
    },
    tags: ["Voice AI", "HIPAA Compliant", "EHR Integration", "Healthcare"]
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          // src="/gradient-bg.jpeg"
          src="/Syntone2024.jpg"
          alt="Gradient Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <SplashCursor 
        SPLAT_RADIUS={0.5}
        COLOR_UPDATE_SPEED={10}
        DENSITY_DISSIPATION={2}
        VELOCITY_DISSIPATION={1.5}
        SPLAT_FORCE={8000}
        CURL={15}
      />
      
      <div className="relative z-10">
        <FloatingNav items={navItems} className="z-50" />

        {/* Hero Section */}
        <HeroSection
          title="Enterprise AI Solutions for Fortune 500 Companies"
          subtitle={{
            regular: "Transform your business operations with ",
            gradient: "intelligent AI systems",
          }}
          description="Deploy enterprise-grade AI solutions that deliver measurable ROI. Trusted by Fortune 500 companies to automate operations, enhance customer experience, and drive growth at scale."
          ctaText="Schedule Enterprise Demo"
          ctaHref="#contact"
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
        
        {/* Trusted By Section */}
        <div className="relative z-10 py-16">
          <Demo />
        </div>

        {/* Premium Enterprise Stats */}
        <PremiumStats stats={enterpriseStats} />

        {/* Services Section */}
        <section id="services" className="relative py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Enterprise AI Solutions"
                preset="slide"
                highlightWords={["Enterprise", "AI"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Scalable AI solutions designed for enterprise environments with bank-level security and 99.9% uptime guarantee
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {/* Service Card 1 */}
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8" />}
                title="AI Customer Service Platform"
                description="Enterprise-grade conversational AI with multi-language support, sentiment analysis, and seamless human handoff capabilities."
              />
              
              {/* Service Card 2 */}
              <ServiceCard
                icon={<Phone className="h-8 w-8" />}
                title="Intelligent Voice Agents"
                description="HIPAA-compliant voice AI for appointment scheduling, lead qualification, and customer support with natural conversation flow."
              />
              
              {/* Service Card 3 */}
              <ServiceCard
                icon={<Code className="h-8 w-8" />}
                title="Custom AI Applications"
                description="Bespoke AI-powered web applications with advanced analytics, predictive modeling, and enterprise system integration."
              />
              
              {/* Service Card 4 */}
              <ServiceCard
                icon={<Building2 className="h-8 w-8" />}
                title="Enterprise AI Integration"
                description="Seamless integration with existing enterprise systems including CRM, ERP, and data warehouses with zero downtime deployment."
              />
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Case Studies Section */}
        <section id="case-studies">
          <CaseStudies studies={caseStudiesData} />
        </section>

        {/* Security & Compliance */}
        <SecurityCompliance />

        {/* How We Work Section */}
        <section id="process" className="relative py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <GradientText
                text="Enterprise Implementation Process"
                preset="slide"
                highlightWords={["Enterprise", "Implementation"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our proven enterprise methodology ensures successful AI deployment with minimal disruption to your operations
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <Accordion>
                <AccordionItem
                  value="step-1"
                  title="Enterprise Assessment & Strategy"
                >
                  We conduct a comprehensive analysis of your enterprise infrastructure, security requirements, 
                  and business objectives. Our team works with your stakeholders to develop a strategic AI roadmap 
                  that aligns with your digital transformation goals and compliance requirements.
                </AccordionItem>
                
                <AccordionItem
                  value="step-2"
                  title="Security-First Design & Architecture"
                >
                  Our enterprise architects design solutions with security, scalability, and compliance at the core. 
                  We create detailed technical specifications, security protocols, and integration plans that meet 
                  your enterprise standards and regulatory requirements.
                </AccordionItem>
                
                <AccordionItem
                  value="step-3"
                  title="Agile Development & Testing"
                >
                  Using enterprise-grade development practices, we build and rigorously test your AI solution. 
                  Our process includes security audits, performance testing, and compliance validation to ensure 
                  enterprise readiness before deployment.
                </AccordionItem>
                
                <AccordionItem
                  value="step-4"
                  title="Zero-Downtime Deployment"
                >
                  We deploy your AI solution using blue-green deployment strategies to ensure zero downtime. 
                  Our deployment process includes real-time monitoring, rollback capabilities, and comprehensive 
                  testing to guarantee smooth operations.
                </AccordionItem>
                
                <AccordionItem
                  value="step-5"
                  title="Enterprise Support & Optimization"
                >
                  Post-deployment, we provide 24/7 enterprise support with dedicated account management. 
                  Our team continuously monitors performance, provides regular optimization updates, and ensures 
                  your AI solution evolves with your business needs.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="relative py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Enterprise Impact Metrics"
                preset="slide"
                highlightWords={["Enterprise", "Impact"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Measurable business outcomes that drive enterprise value and competitive advantage
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <MetricCard
                value="$50M+"
                label="Client Cost Savings"
                description="Total operational cost savings achieved across our enterprise client portfolio in the last 12 months"
              />
              
              <MetricCard
                value="300%"
                label="Average ROI"
                description="Return on investment achieved by enterprise clients within the first year of AI implementation"
              />
              
              <MetricCard
                value="24/7"
                label="Enterprise Support"
                description="Round-the-clock monitoring and support with 99.9% uptime SLA and dedicated account management"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <GradientText
                text="Ready to Transform Your Enterprise with AI?"
                preset="scale"
                highlightWords={["Transform", "Enterprise", "AI"]}
              />
              
              <TextEffect
                text="Join Fortune 500 companies leveraging our enterprise AI solutions to drive efficiency, growth, and innovation at scale."
                preset="fade"
                className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                delay={0.05}
              />
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="cta" size="lg" href="#contact">
                  Schedule Enterprise Demo
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button variant="outline" size="lg" href="#case-studies">
                  View Case Studies
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                <p>✓ SOC 2 Type II Certified  ✓ GDPR Compliant  ✓ 99.9% Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white font-geist">
                    SAI AI Solutions
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Enterprise AI solutions that deliver measurable results. Trusted by Fortune 500 companies 
                to transform operations and drive growth through intelligent automation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                <span>© 2024 SAI AI Solutions</span>
                <span>•</span>
                <span>Enterprise AI Solutions</span>
                <span>•</span>
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="relative h-full w-full rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 transition-all duration-300 group-hover:shadow-2xl">
          {/* Icon with gradient background */}
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-transparent dark:from-purple-400/20 dark:via-pink-400/20 text-purple-600 dark:text-purple-400">
            {icon}
          </div>
          
          <h3 className="heading-sm text-gray-900 dark:text-white mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
          
          <div className="mt-auto">
            <Button variant="cta" size="sm" href="#" className="group-hover:scale-105 transition-transform duration-200">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-30" />
        <div className="relative h-full w-full rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 text-center transition-all duration-300 group-hover:shadow-2xl">
          <div className="text-5xl font-bold text-gradient-purple mb-3 font-heading">
            {value}
          </div>
          <div className="heading-xs text-gray-900 dark:text-white mb-3">{label}</div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
} 