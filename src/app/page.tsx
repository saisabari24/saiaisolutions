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
import { MessageSquare, Phone, Code, Building2, ChevronRight, Home as HomeIcon, Briefcase, FileText, Users, Mail } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "/", icon: <HomeIcon size={20} /> },
  { name: "Services", link: "#services", icon: <Briefcase size={20} /> },
  { name: "Case Studies", link: "#case-studies", icon: <FileText size={20} /> },
  { name: "About", link: "#about", icon: <Users size={20} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={20} /> },
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
          title="AI Solutions for Modern Business"
          subtitle={{
            regular: "Transform your ideas into ",
            gradient: "intelligent digital experiences",
          }}
          description="Leverage cutting-edge AI technology to revolutionize your business operations with our suite of intelligent voice agents, chatbots, and custom web applications."
          ctaText="Explore Solutions"
          ctaHref="#services"
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

        {/* Services Section */}
        <section id="services" className="relative py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Our Intelligent Services"
                preset="slide"
                highlightWords={["Intelligent"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI solutions designed for the modern enterprise
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {/* Service Card 1 */}
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8" />}
                title="Customer Service AI"
                description="Intelligent chat & voice agents that handle customer inquiries with human-like understanding and efficiency."
              />
              
              {/* Service Card 2 */}
              <ServiceCard
                icon={<Phone className="h-8 w-8" />}
                title="Outbound Calling Agents"
                description="AI voice agents that conduct calls for sales, appointments, and follow-ups with natural conversation flow."
              />
              
              {/* Service Card 3 */}
              <ServiceCard
                icon={<Code className="h-8 w-8" />}
                title="AI-Driven Web Apps"
                description="Custom web applications enhanced with AI capabilities for improved user experience and business outcomes."
              />
              
              {/* Service Card 4 */}
              <ServiceCard
                icon={<Building2 className="h-8 w-8" />}
                title="Enterprise AI Integration"
                description="Seamless integration of AI solutions into your existing business systems and workflows."
              />
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="process" className="relative py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <GradientText
                text="How We Work"
                preset="slide"
                highlightWords={["Work"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our proven methodology ensures successful AI implementation from concept to deployment
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <Accordion>
                <AccordionItem
                  value="step-1"
                  title="Discovery & Strategy"
                >
                  We begin with a thorough analysis of your business needs, goals, and challenges. 
                  Our team works with you to develop a strategic roadmap that outlines how AI can 
                  drive value for your organization.
                </AccordionItem>
                
                <AccordionItem
                  value="step-2"
                  title="Design & Prototyping"
                >
                  Our design team creates intuitive, user-centered interfaces and experiences. 
                  We develop functional prototypes to test concepts and gather feedback before 
                  moving to full development.
                </AccordionItem>
                
                <AccordionItem
                  value="step-3"
                  title="Development & Integration"
                >
                  Our engineers build robust, scalable solutions using cutting-edge AI technologies. 
                  We ensure seamless integration with your existing systems and workflows.
                </AccordionItem>
                
                <AccordionItem
                  value="step-4"
                  title="Testing & Optimization"
                >
                  We rigorously test all aspects of your solution to ensure performance, security, 
                  and reliability. Continuous optimization ensures your AI solution improves over time.
                </AccordionItem>
                
                <AccordionItem
                  value="step-5"
                  title="Launch & Support"
                >
                  We provide comprehensive support during launch and beyond. Our team is available 
                  for ongoing maintenance, updates, and enhancements to your AI solution.
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
                text="The Impact We Deliver"
                preset="slide"
                highlightWords={["Impact"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real results that drive business growth and operational excellence
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <MetricCard
                value="150+"
                label="Successful Projects"
                description="Delivering transformative AI solutions across industries."
              />
              
              <MetricCard
                value="85%"
                label="Time Saved"
                description="Average efficiency improvement for our clients' operations."
              />
              
              <MetricCard
                value="4.2x"
                label="ROI"
                description="Average return on investment within the first year."
              />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <GradientText
                text="Ready to Transform Your Business with AI?"
                preset="scale"
                highlightWords={["Transform", "AI"]}
              />
              
              <TextEffect
                text="Join the companies leveraging our AI solutions to drive efficiency, growth, and innovation."
                preset="fade"
                className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                delay={0.05}
              />
              
              <div className="mt-12">
                <Button variant="cta" size="lg" href="#services" className="transform hover:scale-105 transition-transform duration-200">
                  Transform Your Business
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/10 dark:border-white/5 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-950/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="flex items-center mb-6">
                  <Image src="/logo.png" alt="SAI AI Solutions" width={64} height={45} className="mr-3" />
                  <span className="heading-xs text-gray-900 dark:text-white">SAI AI Solutions</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
                  Intelligent digital products and AI solutions for the modern business. Transform your operations with cutting-edge technology.
                </p>
              </div>
              
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Customer Service AI</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Outbound Calling Agents</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">AI-Driven Web Apps</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Enterprise AI Integration</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Case Studies</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Blog</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Contact</h4>
                <ul className="space-y-3">
                  <li className="text-gray-600 dark:text-gray-300">hello@saiaisolutions.com</li>
                  <li className="text-gray-600 dark:text-gray-300">+1 (888) 123-4567</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 dark:border-white/5 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Sai AI Solutions. All rights reserved.
              </p>
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