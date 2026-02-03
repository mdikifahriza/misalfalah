import React from 'react';
import { SCHOOL_PHONE } from '../constants';
import { CheckCircle, Download, MessageCircle, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const PPDB: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <PageHeader 
        title="PPDB Online" 
        subtitle="Penerimaan Peserta Didik Baru Tahun Ajaran 2024/2025. Mari bergabung menjadi bagian dari keluarga besar kami."
        image="https://picsum.photos/id/201/1920/800"
      />

      <div className="container mx-auto px-4 -mt-10 relative z-30">
        
        {/* Banner Status */}
        <div className="text-center mb-8">
           <div className="inline-block bg-primary text-white px-8 py-3 rounded-full shadow-lg border-4 border-white/20 text-sm font-bold animate-bounce">
             STATUS: GELOMBANG 1 DIBUKA
           </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-gold">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Bergabunglah Bersama Kami</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                    Siapkan putra-putri Anda menjadi generasi yang Qur'ani, Cerdas, dan Berakhlak Mulia bersama MIS Al-Falah Kanigoro. Kuota terbatas!
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-bold transition flex items-center justify-center gap-2 shadow-md">
                       <FileText size={20} /> Isi Formulir Online
                    </button>
                    <a 
                       href={`https://wa.me/${SCHOOL_PHONE.replace(/[^0-9]/g, '')}`} 
                       className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-lg font-bold transition flex items-center justify-center gap-2"
                    >
                       <MessageCircle size={20} /> Tanya Admin
                    </a>
                 </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                 <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Jadwal Pendaftaran</h3>
                 <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                       <span className="text-gray-600">Gelombang 1</span>
                       <span className="font-bold text-primary">Jan - Mar 2024</span>
                    </li>
                    <li className="flex justify-between">
                       <span className="text-gray-600">Tes Observasi</span>
                       <span className="font-bold text-gray-800">April 2024</span>
                    </li>
                    <li className="flex justify-between">
                       <span className="text-gray-600">Pengumuman</span>
                       <span className="font-bold text-gray-800">Mei 2024</span>
                    </li>
                    <li className="flex justify-between">
                       <span className="text-gray-600">Daftar Ulang</span>
                       <span className="font-bold text-gray-800">Juni 2024</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Syarat */}
           <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Syarat Pendaftaran</h3>
              <ul className="space-y-4">
                 {[
                    "Mengisi Formulir Pendaftaran",
                    "Fotokopi Akta Kelahiran (2 lembar)",
                    "Fotokopi Kartu Keluarga (2 lembar)",
                    "Pas Foto 3x4 Background Merah (4 lembar)",
                    "Usia minimal 6 tahun pada bulan Juli"
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
                       <span className="text-gray-700">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Alur */}
           <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Alur Pendaftaran</h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-6">
                 {[
                    { title: "Daftar Online/Offline", desc: "Isi formulir via website atau datang ke sekolah." },
                    { title: "Verifikasi Berkas", desc: "Serahkan berkas persyaratan ke panitia." },
                    { title: "Tes Observasi", desc: "Calon siswa mengikuti pemetaan kemampuan dasar." },
                    { title: "Pengumuman & Daftar Ulang", desc: "Cek hasil dan lakukan pembayaran administrasi." }
                 ].map((step, i) => (
                    <div key={i} className="ml-6 relative">
                       <div className="absolute -left-[31px] bg-white border-2 border-primary w-4 h-4 rounded-full mt-1.5"></div>
                       <h4 className="font-bold text-gray-800">{step.title}</h4>
                       <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
        
        {/* Download Brosur */}
        <div className="mt-8 text-center">
           <button className="text-primary hover:text-secondary font-medium inline-flex items-center gap-2">
              <Download size={18} /> Download Brosur PPDB Lengkap
           </button>
        </div>

      </div>
    </div>
  );
};

export default PPDB;