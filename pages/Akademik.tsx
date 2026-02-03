import React from 'react';
import { Book, Zap, Layers, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Akademik: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <PageHeader 
        title="Akademik & Kurikulum" 
        subtitle="Memadukan ilmu pengetahuan umum dan nilai-nilai keislaman untuk mencetak generasi cerdas."
        image="https://picsum.photos/id/20/1920/800"
      />

      <div className="container mx-auto px-4 py-12 relative z-30 -mt-8">
        {/* Kurikulum Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Layers className="text-gold" /> Kurikulum Terintegrasi
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  MIS Al-Falah Kanigoro menerapkan kurikulum yang memadukan <strong>Kurikulum Nasional (K13 & Merdeka)</strong> dari Kemdikbud dengan <strong>Kurikulum Madrasah</strong> dari Kemenag.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Tujuannya adalah membekali siswa dengan kompetensi sains dan teknologi yang mumpuni, sekaligus pondasi agama yang kokoh.
                </p>
             </div>
             <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                <h3 className="font-bold text-gray-800 mb-3">Mata Pelajaran Khas:</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Al-Qur'an Hadits</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Akidah Akhlak</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Fiqih</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Sejarah Kebudayaan Islam</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Bahasa Arab</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div> Aswaja / Ke-NU-an</li>
                </ul>
             </div>
          </div>
        </section>

        {/* Program Unggulan */}
        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Program Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tahfidz Juz 30</h3>
              <p className="text-gray-600 text-sm">
                Program wajib bagi seluruh siswa untuk menghafal Juz 30 (Juz Amma) dengan tartil dan tajwid yang benar sebagai syarat kelulusan.
              </p>
            </div>

             <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bina Prestasi</h3>
              <p className="text-gray-600 text-sm">
                Bimbingan intensif bagi siswa berbakat dalam bidang Matematika, Sains (KSM), dan seni Islami untuk persiapan kompetisi.
              </p>
            </div>

             <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Classroom</h3>
              <p className="text-gray-600 text-sm">
                Pemanfaatan teknologi dalam pembelajaran menggunakan Smart TV dan Tablet untuk materi interaktif.
              </p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Akademik;