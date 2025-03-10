"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

const futureProjects = [
  {
    id: 1,
    title: "Akıllı Şehir Projesi",
    location: "İstanbul, Başakşehir",
    description: "1000 konutluk akıllı şehir projesi, IoT teknolojileri ve sürdürülebilir enerji sistemleriyle donatılmış.",
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    startDate: "2024 Q4",
    completionDate: "2027",
    features: [
      "1000 Akıllı Konut",
      "Merkezi IoT Yönetim Sistemi",
      "Yenilenebilir Enerji Sistemleri",
      "Akıllı Ulaşım Çözümleri",
      "5G Altyapısı"
    ],
    plannedMaterials: [
      "Akıllı Sensörler",
      "Güneş Panelleri",
      "Enerji Depolama Sistemleri",
      "Elektrikli Araç Şarj İstasyonları"
    ],
    conceptImages: [
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  {
    id: 2,
    title: "Ekolojik Yaşam Vadisi",
    location: "Antalya, Konyaaltı",
    description: "Doğayla iç içe, sıfır karbon emisyonlu yaşam alanları.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    startDate: "2025 Q1",
    completionDate: "2027",
    features: [
      "500 Ekolojik Konut",
      "Organik Tarım Alanları",
      "Yağmur Suyu Toplama Sistemleri",
      "Biyolojik Atık Arıtma",
      "Permakültür Bahçeleri"
    ],
    plannedMaterials: [
      "Doğal Yapı Malzemeleri",
      "Yerel Kaynaklı Ahşap",
      "Geri Dönüştürülmüş Malzemeler",
      "Doğal İzolasyon Sistemleri"
    ],
    conceptImages: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  }
];

export default function FutureProjectDetail() {
  const { id } = useParams();
  const project = futureProjects.find(p => p.id === parseInt(id as string));

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
                {project.conceptImages.map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} Konsept ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                {project.location}
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                Başlangıç: {project.startDate}
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <Calendar className="w-5 h-5 mr-2" />
                Tahmini Bitiş: {project.completionDate}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <p className="text-gray-700">{project.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Planlanan Özellikler</h2>
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
                <h2 className="text-2xl font-semibold mb-4">Kullanılacak Malzemeler</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.plannedMaterials.map((material, index) => (
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