import React from 'react';
import { TEACHERS } from '../constants';
import PageHeader from '../components/PageHeader';

const Guru: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <PageHeader 
        title="Guru & Tenaga Kependidikan" 
        subtitle="Pendidik profesional, sabar, dan berdedikasi tinggi dalam membimbing putra-putri Anda."
        image="https://picsum.photos/id/342/1920/800"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TEACHERS.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden text-center group">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-primary font-medium text-sm">{teacher.position}</p>
              </div>
            </div>
          ))}
          
          {/* Mock more items for demo purposes */}
          {[5,6,7,8].map((i) => (
             <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden text-center">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={`https://picsum.photos/id/${1030 + i}/300/400`} 
                  alt="Guru" 
                  className="w-full h-full object-cover object-top opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Guru Mata Pelajaran</h3>
                <p className="text-gray-500 text-sm">Staf Pengajar</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guru;