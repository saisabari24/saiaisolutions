"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PremiumTextAnimation, PremiumSubtext } from "@/components/ui/premium-text-animation";
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
                    <PremiumTextAnimation
          text="Thank You!"
          preset="fadeUp"
          size="xl"
          gradient={true}
          staggerDelay={0.1}
          duration={0.6}
          className="mb-4"
        />
        <PremiumSubtext
          preset="fadeUp"
          delay={0.3}
          staggerDelay={0.03}
          className="mb-6 text-xl"
        >
          We've received your request and will contact you within 24 hours to discuss your lead generation strategy.
        </PremiumSubtext>
        <p className="text-gray-500 dark:text-gray-400">
          Check your email for a confirmation and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center px-2">
      <div className="my-16 w-full max-w-5xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-2xl shadow-xl p-0 flex flex-col items-center overflow-hidden">
        <div className="w-full px-8 pt-8 pb-4">
          <div className="px-2">
            <PremiumTextAnimation
              text="Book Your AI Strategy Consultation"
              preset="fadeUp"
              size="3xl"
              highlightWords={["AI Strategy Consultation"]}
              gradient={true}
              staggerDelay={0.05}
              duration={0.6}
              className="mb-4 text-center"
            />
            <PremiumSubtext
              preset="fadeUp"
              delay={0.3}
              staggerDelay={0.03}
              className="text-lg text-center mb-4"
            >
              Instantly schedule a meeting with our team to discover how SAI AI Solutions can accelerate your revenue growth and deliver qualified leads within 30 days.
            </PremiumSubtext>
          </div>
        </div>
        <div className="w-full flex-1 min-h-[600px]">
          <iframe
            src="https://cal.com/saiaisolutions/ai-strategy-consultation"
            width="100%"
            height="100%"
            className="w-full min-h-[600px] h-[70vh] border-0 rounded-b-2xl"
            title="Book a meeting with SAI AI Solutions"
            allow="camera; microphone; fullscreen; speaker"
            style={{ display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
} 