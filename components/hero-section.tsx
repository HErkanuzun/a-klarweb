"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function HeroSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Building2 className="h-16 w-16 text-primary" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6"
          >
            Geleceğin Yapılarını İnşa Ediyoruz
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            20 yılı aşkın tecrübemizle, modern mimari ve yüksek kalite standartlarını
            bir araya getirerek yaşam alanlarınızı şekillendiriyoruz.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="/projeler"
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Projelerimizi İnceleyin
            </a>
            <a
              href="/iletisim"
              className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold border-2 border-primary hover:bg-gray-50 transition-colors"
            >
              Bize Ulaşın
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}