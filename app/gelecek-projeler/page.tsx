"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

const futureProjects = [
  {
    id: 1,
    title: "Akıllı Şehir Projesi",
    location: "İstanbul, Başakşehir",
    description: "1000 konutluk akıllı şehir projesi, IoT teknolojileri ve sürdürülebilir enerji sistemleriyle donatılmış.",
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    startDate: "2024 Q4",
  },
  {
    id: 2,
    title: "Ekolojik Yaşam Vadisi",
    location: "Antalya, Konyaaltı",
    description: "Doğayla iç içe, sıfır karbon emisyonlu yaşam alanları.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    startDate: "2025 Q1",
  },
];

export default function FutureProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gelecek Projelerimiz</h1>
          <p className="text-lg text-gray-600">
            Yakında hayata geçireceğimiz yenilikçi projeler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {futureProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/gelecek-projeler/${project.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="text-white">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <p className="text-sm">Başlangıç: {project.startDate}</p>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <p className="text-sm opacity-90">{project.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-end">
                      <span className="text-primary font-semibold">Detayları İncele →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}