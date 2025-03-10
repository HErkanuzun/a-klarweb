"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Yaşam Kompleksi",
    location: "İstanbul, Kadıköy",
    description: "200 daireli modern yaşam kompleksi, sosyal alanlar ve yeşil alanlarıyla komple bir yaşam alanı.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Tamamlandı",
  },
  {
    id: 2,
    title: "Yeşil Vadi Rezidans",
    location: "Ankara, Çankaya",
    description: "Sürdürülebilir mimari ile tasarlanmış, LEED sertifikalı rezidans projesi.",
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Tamamlandı",
  },
  {
    id: 3,
    title: "Marina Plaza",
    location: "İzmir, Karşıyaka",
    description: "Deniz manzaralı ofis ve residence kompleksi.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Devam Ediyor",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h1>
          <p className="text-lg text-gray-600">
            Tamamlanan ve devam eden projelerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projeler/${project.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-gray-600 line-clamp-2">{project.description}</p>
                    <div className="mt-4 flex justify-end">
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