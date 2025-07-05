"use client";

import React from "react";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Demo } from "@/components/ui/demo";
import { PremiumTextAnimation, PremiumHeading, PremiumSubtext } from "@/components/ui/premium-text-animation";
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
  Calculator,
  Award,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import Link from "next/link";

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
          draggable="false"
          style={{ display: 'block' }}
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

        {/* Hero + Trusted By - Single Viewport Layout */}
        <div className="min-h-screen flex flex-col pt-24">
          {/* Hero Section - 75% of viewport */}
          <div className="flex-[3]">
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
          </div>
          
          {/* Trusted By Section - 25% of viewport */}
          <div className="flex-1 relative z-10 flex items-center">
            <div className="w-full">
              <Demo />
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <section id="guarantee" className="relative py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-green-600/20 via-emerald-500/20 to-transparent text-green-600 dark:text-green-400">
                <Shield className="h-8 w-8" />
              </div>
              
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["Iron-Clad", "Guarantee"]}
                className="mb-8"
                staggerDelay={0.05}
                duration={0.6}
              >
                Our Iron-Clad Guarantee
              </PremiumHeading>
              
              <div className="group relative">
                <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full">
                  <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#059669_50%,#10b981_100%)] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative h-full w-full rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 p-12 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/80 dark:group-hover:bg-gray-900/80">
                    <div className="text-6xl sm:text-7xl font-geist font-normal tracking-tight text-gradient-green mb-6 group-hover:scale-105 transition-transform duration-300">
                      10+
                    </div>
                     <h3 className="text-4xl md:text-5xl lg:text-6xl font-geist tracking-tighter text-gray-900 dark:text-white mb-6">
                       Qualified Leads in 30 Days
                     </h3>
                     <p className="text-base md:text-lg lg:text-xl font-geist text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                       If our AI agents don't deliver at least 10 qualified leads ready for your sales team within 30 days, we'll refund every penny. No questions asked.
                     </p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-green-50/50 dark:bg-green-950/20 border border-green-200/30 dark:border-green-700/30">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center">Qualified Prospects</span>
                      </div>
                      <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-green-50/50 dark:bg-green-950/20 border border-green-200/30 dark:border-green-700/30">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center">Booked Appointments</span>
                      </div>
                      <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-green-50/50 dark:bg-green-950/20 border border-green-200/30 dark:border-green-700/30">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center">Sales-Ready Leads</span>
                      </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center justify-center space-x-3 text-green-600 dark:text-green-400 font-medium">
                        <Shield className="h-5 w-5" />
                        <span>100% Money-Back Guarantee • No Questions Asked</span>
                      </div>
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
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["Lead", "Generation"]}
                staggerDelay={0.05}
                duration={0.6}
                className="mb-6"
              >
                Lead Generation Arsenal
              </PremiumHeading>
              <PremiumSubtext
                preset="fadeUp"
                delay={0.3}
                staggerDelay={0.03}
                className="max-w-3xl mx-auto"
              >
                Cutting-edge AI agents that work around the clock to fill your pipeline with qualified prospects
              </PremiumSubtext>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto auto-rows-fr">
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
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["Success"]}
                staggerDelay={0.05}
                duration={0.6}
                className="mb-6"
              >
                Client Success Stories
              </PremiumHeading>
              <PremiumSubtext
                preset="fadeUp"
                delay={0.3}
                staggerDelay={0.03}
                className="max-w-3xl mx-auto"
              >
                Real results from businesses that transformed their lead generation with our AI agents
              </PremiumSubtext>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto auto-rows-fr">
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
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["Clients"]}
                staggerDelay={0.05}
                duration={0.6}
              >
                What Our Clients Say
              </PremiumHeading>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto auto-rows-fr">
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
            <div className="text-center mb-8">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-green-600/20 via-emerald-500/20 to-transparent text-green-600 dark:text-green-400">
          <Calculator className="h-8 w-8" />
        </div>
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["ROI"]}
                staggerDelay={0.05}
                duration={0.6}
              >
                Calculate Your ROI
              </PremiumHeading>
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
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["Investment"]}
                staggerDelay={0.05}
                duration={0.6}
              >
                Investment Plans
              </PremiumHeading>
            </div>
            
            <PricingPackages />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-32">
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <PremiumHeading
                level={1}
                preset="fadeUp"
                highlightWords={["Transform", "Revenue"]}
                staggerDelay={0.05}
                duration={0.6}
                className="mb-8"
              >
                Ready to Transform Your Revenue Pipeline?
              </PremiumHeading>
              
              <PremiumSubtext
                preset="fadeUp"
                delay={0.3}
                staggerDelay={0.03}
                className="max-w-3xl mx-auto md:text-lg lg:text-xl"
              >
                Schedule a strategic consultation to discover how our AI agents can accelerate your revenue growth and deliver qualified prospects within 30 days.
              </PremiumSubtext>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="cta" size="lg" href="#contact" className="transform hover:scale-105 transition-transform duration-200">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="text-sm">Complimentary 30-minute strategic session</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="relative py-32">
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Contact Form */}
            <div className="relative">
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
        <footer className="relative border-t border-white/10 dark:border-white/5 py-12 bg-black/20 dark:bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-3">
              {/* Company Info */}
              <div className="lg:col-span-2 md:col-span-2">
                <div className="flex items-center mb-4">
                  <img src="/logo.png" alt="SAI AI Solutions" width="150" height="50" className="mr-2" style={{ display: 'inline-block' }} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-6 text-sm">
                  We guarantee 10+ qualified leads in 30 days with our AI voice and chat agents, or your money back.
                </p>
                
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">hello@saiaisolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">+1 (888) 123-4567</span>
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">AI Voice Agents</a></li>
                  <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">AI Chat Agents</a></li>
                  <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">AI Social Media</a></li>
                  <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">AI Advertising</a></li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#guarantee" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">Our Guarantee</a></li>
                  <li><a href="#case-studies" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">Case Studies</a></li>
                  <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">Contact Us</a></li>
                  <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm">Book a Call</a></li>
                </ul>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white font-heading">Follow Us</h4>
                <div className="flex space-x-3">
                  <SocialLink
                    href="https://twitter.com/saiaisolutions"
                    icon={<Twitter className="h-4 w-4" />}
                    label="Twitter"
                  />
                  <SocialLink
                    href="https://instagram.com/saiaisolutions"
                    icon={<Instagram className="h-4 w-4" />}
                    label="Instagram"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/company/saiai-solutions"
                    icon={<Linkedin className="h-4 w-4" />}
                    label="LinkedIn"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/5 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-xs">
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
    <div className="group relative h-full">
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full h-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="relative h-full w-full rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/80 dark:group-hover:bg-gray-900/80 flex flex-col">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-600/20 via-emerald-500/20 to-transparent dark:from-green-400/20 dark:via-emerald-400/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          <h3 className="text-xl font-geist font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300 group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">{description}</p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <Button variant="cta" size="sm" href="#contact" className="group-hover:scale-105 transition-transform duration-300 w-full shadow-lg">
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
    <div className="group relative h-full">
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full h-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="relative h-full w-full rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/80 dark:group-hover:bg-gray-900/80 flex flex-col">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-400/20 border border-purple-200/30 dark:border-purple-400/30 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{industry}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-geist font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 group-hover:scale-105 transition-transform duration-300">
              {result}
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{timeframe}</div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">{description}</p>
          <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
              <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              View Full Case Study
            </div>
          </div>
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
    <div className="group relative h-full">
      <div className="relative inline-block overflow-hidden rounded-2xl p-[1.5px] w-full h-full">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
        <div className="relative h-full w-full rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/80 dark:group-hover:bg-gray-900/80 flex flex-col">
          <div className="flex mb-6 justify-center">
            <div className="flex space-x-1 p-2 bg-yellow-50/50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200/30 dark:border-yellow-700/30">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic text-center flex-grow group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
            "{quote}"
          </blockquote>
          <div className="text-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 dark:from-purple-400/30 dark:to-pink-400/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {author.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <PremiumTextAnimation
              text={author}
              preset="fadeUp"
              size="lg"
              staggerDelay={0.05}
              duration={0.5}
              className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
            />
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{role}</div>
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

// Social Link Component
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      aria-label={label}
    >
      <div className="relative inline-block overflow-hidden rounded-lg p-[1px]">
        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="relative w-10 h-10 rounded-lg bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:bg-white/80 dark:group-hover:bg-gray-900/80 group-hover:scale-110">
          <div className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
            {icon}
          </div>
        </div>
      </div>
    </a>
  );
} 