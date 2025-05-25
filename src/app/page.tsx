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
import { ContactForm } from "@/components/ui/contact-form";
import { ROICalculator } from "@/components/ui/roi-calculator";
import { PricingPackages } from "@/components/ui/pricing-packages";
import { 
  MessageSquare, 
  Phone, 
  TrendingUp, 
  Target, 
  ChevronRight, 
  Home as HomeIcon, 
  Briefcase, 
  FileText, 
  Users, 
  Mail,
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Clock,
  Award
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "/", icon: <HomeIcon size={20} /> },
  { name: "Services", link: "#services", icon: <Briefcase size={20} /> },
  { name: "Guarantee", link: "#guarantee", icon: <Shield size={20} /> },
  { name: "Case Studies", link: "#case-studies", icon: <FileText size={20} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={20} /> },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src="/Syntone2024.jpg"
          alt="Premium AI Background"
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
          title="Generate 10+ Qualified Leads in 30 Days"
          subtitle={{
            regular: "Or get your ",
            gradient: "money back guaranteed",
          }}
          description="Our AI voice and chat agents work 24/7 to qualify prospects, book appointments, and fill your sales pipeline with ready-to-close leads."
          ctaText="Book Strategy Call"
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

        {/* Guarantee Section */}
        <section id="guarantee" className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-pink-50/40 to-purple-50/40 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-purple-950/30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 mb-8">
                <Shield className="h-10 w-10 text-white" />
              </div>
              
              <GradientText
                text="Our Iron-Clad Guarantee"
                preset="scale"
                highlightWords={["Iron-Clad", "Guarantee"]}
                className="mb-8"
              />
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-green-200 dark:border-green-800 rounded-3xl p-12">
                  <div className="text-6xl font-bold text-gradient-green mb-6 font-heading">
                    10+
                  </div>
                  <h3 className="heading-lg text-gray-900 dark:text-white mb-4">
                    Qualified Leads in 30 Days
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    If our AI agents don't deliver at least 10 qualified leads ready for your sales team within 30 days, we'll refund every penny. No questions asked.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Qualified Prospects</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Booked Appointments</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Sales-Ready Leads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Lead Generation Arsenal"
                preset="slide"
                highlightWords={["Lead", "Generation"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge AI agents that work around the clock to fill your pipeline with qualified prospects
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              <ServiceCard
                icon={<Phone className="h-8 w-8" />}
                title="AI Voice Agents"
                description="Human-like AI agents that make outbound calls, qualify prospects, and book appointments automatically."
                features={["24/7 Operation", "Natural Conversations", "CRM Integration"]}
              />
              
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8" />}
                title="AI Chat Agents"
                description="Intelligent chatbots that engage website visitors, qualify leads, and schedule sales calls instantly."
                features={["Website Integration", "Lead Qualification", "Instant Response"]}
              />
              
              <ServiceCard
                icon={<TrendingUp className="h-8 w-8" />}
                title="AI Social Media Management"
                description="AI-powered social media strategies that attract, engage, and convert your ideal prospects."
                features={["Content Creation", "Audience Targeting", "Performance Analytics"]}
              />
              
              <ServiceCard
                icon={<Target className="h-8 w-8" />}
                title="AI-Optimized Ads"
                description="Data-driven advertising campaigns optimized by AI to maximize lead quality and ROI."
                features={["Smart Targeting", "A/B Testing", "Cost Optimization"]}
              />
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section id="case-studies" className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Client Success Stories"
                preset="slide"
                highlightWords={["Success"]}
              />
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real results from businesses that transformed their lead generation with our AI agents
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <CaseStudyCard
                industry="SaaS Company"
                result="300% increase in qualified leads"
                timeframe="First 60 days"
                description="Implemented AI voice agents for outbound prospecting and chat agents for website conversion."
              />
              
              <CaseStudyCard
                industry="Real Estate Firm"
                result="52 appointments booked"
                timeframe="30 days"
                description="AI agents handled property inquiries and scheduled viewings with pre-qualified buyers."
              />
              
              <CaseStudyCard
                industry="Digital Agency"
                result="$150K in new revenue"
                timeframe="90 days"
                description="AI-powered lead generation and social media management filled their sales pipeline."
              />
            </div>
            
            <div className="text-center mt-12">
              <Button variant="cta" size="lg" href="#contact" className="transform hover:scale-105 transition-transform duration-200">
                See Full Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="What Our Clients Say"
                preset="slide"
                highlightWords={["Clients"]}
              />
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <TestimonialCard
                quote="SAI's AI agents generated 15 qualified leads in the first month. Best ROI we've ever seen."
                author="Sarah Johnson"
                role="CEO, TechFlow Solutions"
                rating={5}
              />
              
              <TestimonialCard
                quote="Their AI voice agents sound so natural, prospects don't even realize they're talking to AI."
                author="Michael Chen"
                role="Sales Director, GrowthCorp"
                rating={5}
              />
              
              <TestimonialCard
                quote="Finally, a team that delivers on their promises. 23 qualified leads in 30 days, exactly as guaranteed."
                author="Emily Rodriguez"
                role="Founder, PropTech Innovations"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Calculate Your ROI"
                preset="scale"
                highlightWords={["ROI"]}
              />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <GradientText
                text="Pricing Packages"
                preset="scale"
                highlightWords={["Pricing"]}
              />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <PricingPackages />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-pink-50/40 to-purple-50/40 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-purple-950/30" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <GradientText
                text="Ready to 10x Your Lead Generation?"
                preset="scale"
                highlightWords={["10x", "Lead", "Generation"]}
              />
              
              <TextEffect
                text="Book a strategy call to discover how our AI agents can fill your pipeline with qualified prospects in the next 30 days."
                preset="fade"
                className="mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                delay={0.05}
              />
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="cta" size="lg" href="#contact" className="transform hover:scale-105 transition-transform duration-200">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Button>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="text-sm">Free 30-minute consultation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-950/50 dark:to-black/50" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 rounded-3xl p-12">
                <ContactForm />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-20 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider font-medium">
                Trusted by Industry Leaders
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <TrustBadge text="AI Certified Partner" icon={<Award className="h-5 w-5" />} />
                <TrustBadge text="SOC 2 Compliant" icon={<Shield className="h-5 w-5" />} />
                <TrustBadge text="GDPR Compliant" icon={<CheckCircle className="h-5 w-5" />} />
                <TrustBadge text="Enterprise Grade Security" icon={<Shield className="h-5 w-5" />} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/10 dark:border-white/5 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-950/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <Image src="/logo.png" alt="SAI AI Solutions" width={64} height={45} className="mr-3" />
                  <span className="heading-xs text-gray-900 dark:text-white">SAI AI Solutions</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-8">
                  We guarantee 10+ qualified leads in 30 days with our AI voice and chat agents, or your money back.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">hello@saiaisolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300">+1 (888) 123-4567</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">AI Voice Agents</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">AI Chat Agents</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">AI Social Media</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">AI Advertising</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#guarantee" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Our Guarantee</a></li>
                  <li><a href="#case-studies" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Case Studies</a></li>
                  <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Book a Call</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 dark:border-white/5 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} SAI AI Solutions. All rights reserved. • 10+ Leads Guaranteed or Money Back
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Enhanced Service Card Component
function ServiceCard({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group relative">
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="relative h-full w-full rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 transition-all duration-300 group-hover:shadow-2xl">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-transparent dark:from-purple-400/20 dark:via-pink-400/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          <h3 className="heading-sm text-gray-900 dark:text-white mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
          
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <Button variant="cta" size="sm" href="#contact" className="group-hover:scale-105 transition-transform duration-200 w-full">
              Get Started
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Case Study Card Component
function CaseStudyCard({
  industry,
  result,
  timeframe,
  description,
}: {
  industry: string;
  result: string;
  timeframe: string;
  description: string;
}) {
  return (
    <div className="group relative">
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-20" />
        <div className="relative h-full w-full rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 transition-all duration-300 group-hover:shadow-2xl">
          <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{industry}</div>
          <div className="text-2xl font-bold text-gradient-purple mb-2 font-heading">{result}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{timeframe}</div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
}) {
  return (
    <div className="group relative">
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="relative h-full w-full rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 transition-all duration-300 group-hover:shadow-2xl">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
            "{quote}"
          </blockquote>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Trust Badge Component
function TrustBadge({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
} 