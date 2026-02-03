import React from 'react';
import { ACTIVITIES } from '../constants';
import { Camera, Music, PenTool, Activity } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Kesiswaan: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <PageHeader 
        title="Kesiswaan" 
        subtitle="Wadah kreativitas, bakat, dan pengembangan karakter siswa melalui berbagai kegiatan positif."
        image="https://picsum.photos/id/453/1920/800"
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Ekstrakurikuler */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">Ekstrakurikuler</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { name: "Pramuka", icon: <Activity /> },
               { name: "Drum Band", icon: <Music /> },
               { name: "Pencak Silat", icon: <Activity /> },
               { name: "Kaligrafi", icon: <PenTool /> },
               { name: "Qiro'ah", icon: <Music /> },
               { name: "Dokter Kecil", icon: <Activity /> },
               { name: "Robotika", icon: <ZapIcon /> },
               { name: "Futsal", icon: <Activity /> }
             ].map((ekskul, i) => (
               <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3 hover:border-primary transition cursor-default">
                  <div className="text-primary bg-green-50 p-2 rounded-full">{ekskul.icon}</div>
                  <span className="font-semibold text-gray-700">{ekskul.name}</span>
               </div>
             ))}
          </div>
        </section>

        {/* Pembiasaan Harian */}
        <section className="bg-white p-8 rounded-xl shadow-md">
           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pembiasaan Karakter</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                 <div className="text-4xl mb-2">🤝</div>
                 <h3 className="font-bold text-lg mb-2">5S (Senyum, Salam, Sapa, Sopan, Santun)</h3>
                 <p className="text-gray-500 text-sm">Dilakukan setiap pagi saat penyambutan siswa di gerbang.</p>
              </div>
              <div className="text-center">
                 <div className="text-4xl mb-2">🤲</div>
                 <h3 className="font-bold text-lg mb-2">Sholat Dhuha & Dzuhur</h3>
                 <p className="text-gray-500 text-sm">Dilakukan secara berjamaah untuk melatih kedisiplinan ibadah.</p>
              </div>
               <div className="text-center">
                 <div className="text-4xl mb-2">📖</div>
                 <h3 className="font-bold text-lg mb-2">Murajaah Pagi</h3>
                 <p className="text-gray-500 text-sm">Membaca surat pendek dan Asmaul Husna sebelum KBM dimulai.</p>
              </div>
           </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">Galeri Kegiatan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {ACTIVITIES.map((activity) => (
                <div key={activity.id} className="group relative overflow-hidden rounded-lg aspect-square">
                   <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">{activity.title}</span>
                   </div>
                </div>
             ))}
              {/* More placeholders to fill grid */}
             <div className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 flex flex-col items-center">
                  <Camera size={32} />
                  <span className="text-sm mt-2">Lihat Lainnya</span>
                </span>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Helper component for icon
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

export default Kesiswaan;