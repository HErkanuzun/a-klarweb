"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Timeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const timelineItems = [
    {
      year: "2003",
      title: "Şirketin Kuruluşu",
      description: "Açıklar İnşaat'ın temelleri atıldı.",
    },
    {
      year: "2008",
      title: "İlk Büyük Proje",
      description: "100 dairelik ilk toplu konut projemizi tamamladık.",
    },
    {
      year: "2015",
      title: "Teknoloji Entegrasyonu",
      description: "Akıllı ev sistemlerini projelerimize entegre etmeye başladık.",
    },
    {
      year: "2020",
      title: "Sürdürülebilirlik Odağı",
      description: "Yeşil bina sertifikası alan ilk projemizi tamamladık.",
    },
    {
      year: "2024",
      title: "Dijital Dönüşüm",
      description: "BIM teknolojisini tüm projelerimizde kullanmaya başladık.",
    },
  ];

  return (
    <section ref={targetRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Başarı Hikayemiz
          </h2>
          <p className="text-lg text-gray-600">
            20 yıllık yolculuğumuzda önemli dönüm noktaları
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-8`}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <span className="text-primary font-bold text-xl">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}