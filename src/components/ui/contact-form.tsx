"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send, Calendar, Phone, Mail, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    revenue: "",
    message: "",
    urgency: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="heading-md text-gray-900 dark:text-white mb-4">
          Thank You!
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          We've received your request and will contact you within 24 hours to discuss your lead generation strategy.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check your email for a confirmation and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="heading-lg text-gray-900 dark:text-white mb-4">
          Book Your Strategy Call
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get a free consultation and discover how we can generate 10+ qualified leads for your business in 30 days.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Primary Interest *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a service</option>
              <option value="ai-voice-agents">AI Voice Agents</option>
              <option value="ai-chat-agents">AI Chat Agents</option>
              <option value="ai-social-media">AI Social Media Management</option>
              <option value="ai-ads">AI-Optimized Advertising</option>
              <option value="full-package">Complete Lead Generation Package</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Revenue
            </label>
            <select
              id="revenue"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select range</option>
              <option value="under-500k">Under $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="over-10m">Over $10M</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Timeline *
          </label>
          <select
            id="urgency"
            name="urgency"
            required
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">When do you want to start?</option>
            <option value="asap">ASAP - Ready to start immediately</option>
            <option value="this-month">Within this month</option>
            <option value="next-month">Next month</option>
            <option value="quarter">Within next quarter</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tell us about your current lead generation challenges
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us about your business goals, current lead generation efforts, and what you'd like to achieve..."
          />
        </div>

        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Guarantee</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We guarantee 10+ qualified leads in 30 days or your money back. No contracts, no setup fees, just results.
              </p>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full transform hover:scale-105 transition-transform duration-200"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book My Strategy Call
          <Send className="ml-2 h-5 w-5" />
        </Button>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Free consultation • No obligation • Response within 24 hours</p>
        </div>
      </form>
    </div>
  );
} 