"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tamamlanan Projelerimiz
          </h2>
          <p className="text-lg text-gray-600">
            Kalite ve güvenilirlik ile tamamladığımız projelerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
                    <p className="text-gray-500 text-sm mb-3">{project.location}</p>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}