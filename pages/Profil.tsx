import React from 'react';
import PageHeader from '../components/PageHeader';

const Profil: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHeader 
        title="Profil Sekolah" 
        subtitle="Mengenal lebih dekat sejarah, visi, dan nilai-nilai luhur MIS Al-Falah Kanigoro."
        image="https://picsum.photos/id/122/1920/800"
      />

      <div className="container mx-auto px-4 -mt-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Sejarah */}
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">Sejarah Singkat</h2>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  MIS Al-Falah Kanigoro berdiri pada tahun 1985 atas prakarsa para tokoh agama dan masyarakat setempat yang menginginkan adanya lembaga pendidikan Islam yang berkualitas di wilayah Kanigoro, Blitar.
                </p>
                <p className="mb-4">
                  Berawal dari bangunan sederhana dengan 3 ruang kelas, kini MIS Al-Falah telah berkembang menjadi madrasah modern dengan fasilitas lengkap yang menunjang pembelajaran abad 21. Sejak awal berdirinya, madrasah ini konsisten menanamkan nilai-nilai Aswaja (Ahlussunnah wal Jamaah) sebagai landasan karakter peserta didik.
                </p>
              </div>
            </section>

            {/* Visi Misi */}
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Visi & Misi</h2>
              
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Visi</h3>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-primary italic text-gray-700">
                  "Terwujudnya Generasi Muslim yang Beriman, Berilmu, Beramal, dan Berakhlak Mulia serta Unggul dalam Prestasi."
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Misi</h3>
                <ul className="space-y-3">
                  {[
                    "Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran Islam.",
                    "Melaksanakan pembelajaran aktif, inovatif, kreatif, efektif dan menyenangkan.",
                    "Mengembangkan potensi akademik dan non-akademik peserta didik.",
                    "Mewujudkan budaya sekolah yang disiplin, bersih, dan ramah lingkungan."
                  ].map((misi, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5">{index + 1}</span>
                      <span>{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar Data */}
          <div className="md:col-span-1">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Identitas Madrasah</h3>
                <ul className="space-y-4 text-sm">
                  <li className="pb-3 border-b border-gray-100">
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">Nama Sekolah</span>
                    <span className="font-medium text-gray-800">MIS Al-Falah Kanigoro</span>
                  </li>
                  <li className="pb-3 border-b border-gray-100">
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">NPSN</span>
                    <span className="font-medium text-gray-800">60701234</span>
                  </li>
                  <li className="pb-3 border-b border-gray-100">
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">Status</span>
                    <span className="font-medium text-green-600 bg-green-50 px-2 py-1 rounded inline-block mt-1">SWASTA</span>
                  </li>
                  <li className="pb-3 border-b border-gray-100">
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">Akreditasi</span>
                    <span className="font-medium text-white bg-primary px-2 py-1 rounded inline-block mt-1">A (Unggul)</span>
                  </li>
                  <li className="pb-3 border-b border-gray-100">
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">Naungan</span>
                    <span className="font-medium text-gray-800">Kementerian Agama RI</span>
                  </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profil;