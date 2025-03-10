"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Modern Yaşam Kompleksi",
    location: "İstanbul, Kadıköy",
    description: "200 daireli modern yaşam kompleksi, sosyal alanlar ve yeşil alanlarıyla komple bir yaşam alanı.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    status: "Tamamlandı",
    completionDate: "2023",
    features: [
      "200 Daire",
      "Kapalı Otopark",
      "Yüzme Havuzu",
      "Fitness Merkezi",
      "Çocuk Oyun Alanları",
      "24/7 Güvenlik"
    ],
    materials: [
      "Yüksek Kalite Seramik",
      "Akıllı Ev Sistemleri",
      "Isı Yalıtımlı Camlar",
      "Özel Tasarım Mutfak Dolapları"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 2,
    title: "Yeşil Vadi Rezidans",
    location: "Ankara, Çankaya",
    description: "Sürdürülebilir mimari ile tasarlanmış, LEED sertifikalı rezidans projesi.",
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Tamamlandı",
    completionDate: "2023",
    features: [
      "150 Daire",
      "Yeşil Çatı",
      "Güneş Panelleri",
      "Gri Su Sistemi",
      "Elektrikli Araç Şarj İstasyonları"
    ],
    materials: [
      "Geri Dönüştürülmüş Malzemeler",
      "Düşük VOC Boyalar",
      "FSC Sertifikalı Ahşap",
      "Enerji Verimli Pencereler"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 3,
    title: "Marina Plaza",
    location: "İzmir, Karşıyaka",
    description: "Deniz manzaralı ofis ve residence kompleksi.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Devam Ediyor",
    completionDate: "2024",
    features: [
      "Ofis Katları",
      "Residence Daireler",
      "Panoramik Deniz Manzarası",
      "Konferans Salonu",
      "Restoran ve Kafeler"
    ],
    materials: [
      "Akustik Yalıtım",
      "Yüksek Hızlı Asansörler",
      "Akıllı Bina Yönetim Sistemi",
      "UV Filtreli Camlar"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id as string));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Proje Bulunamadı</h1>
          <Link href="/" className="text-primary hover:underline">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                {project.location}
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <Calendar className="w-5 h-5 mr-2" />
                Tamamlanma: {project.completionDate}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <p className="text-gray-700">{project.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Kullanılan Malzemeler</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.materials.map((material, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span>{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}