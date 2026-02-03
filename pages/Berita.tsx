import React from 'react';
import { LATEST_NEWS } from '../constants';
import { Calendar, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Berita: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <PageHeader 
        title="Berita & Pengumuman" 
        subtitle="Informasi terkini, prestasi, dan agenda kegiatan di lingkungan madrasah."
        image="https://picsum.photos/id/366/1920/800"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: News List */}
          <div className="lg:col-span-2 space-y-8">
            {LATEST_NEWS.map((news) => (
              <article key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition">
                 <div className="md:w-1/3 h-48 md:h-auto">
                    <img src={news.thumbnail} alt={news.title} className="w-full h-full object-cover" />
                 </div>
                 <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                       <span className="flex items-center gap-1"><Calendar size={12} /> {news.date}</span>
                       <span className="text-primary font-medium bg-green-50 px-2 py-0.5 rounded">{news.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary cursor-pointer">{news.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                    <button className="text-primary font-medium text-sm self-start hover:underline">Baca Selengkapnya</button>
                 </div>
              </article>
            ))}
             {/* Mock Pagination */}
            <div className="flex justify-center mt-8 gap-2">
               <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">1</button>
               <button className="w-10 h-10 rounded-full bg-white text-gray-600 hover:bg-gray-100 flex items-center justify-center">2</button>
               <button className="w-10 h-10 rounded-full bg-white text-gray-600 hover:bg-gray-100 flex items-center justify-center">3</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
             {/* Categories */}
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Kategori</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                   <li className="flex justify-between hover:text-primary cursor-pointer"><span>Berita Sekolah</span> <span className="bg-gray-100 px-2 rounded-full text-xs py-0.5">12</span></li>
                   <li className="flex justify-between hover:text-primary cursor-pointer"><span>Prestasi</span> <span className="bg-gray-100 px-2 rounded-full text-xs py-0.5">5</span></li>
                   <li className="flex justify-between hover:text-primary cursor-pointer"><span>Agenda</span> <span className="bg-gray-100 px-2 rounded-full text-xs py-0.5">3</span></li>
                   <li className="flex justify-between hover:text-primary cursor-pointer"><span>Artikel Guru</span> <span className="bg-gray-100 px-2 rounded-full text-xs py-0.5">8</span></li>
                </ul>
             </div>

             {/* Recent Posts Mini */}
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Terpopuler</h3>
                <div className="space-y-4">
                   {[1,2,3].map((i) => (
                      <div key={i} className="flex gap-3 items-start group cursor-pointer">
                         <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden shrink-0">
                            <img src={`https://picsum.photos/id/${1050+i}/100/100`} className="w-full h-full object-cover" />
                         </div>
                         <div>
                            <h4 className="font-medium text-sm text-gray-900 group-hover:text-primary line-clamp-2">Kegiatan Tengah Semester Genap Tahun 2023</h4>
                            <span className="text-xs text-gray-500">12 Okt 2023</span>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Berita;