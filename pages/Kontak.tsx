import React from 'react';
import { SCHOOL_ADDRESS, SCHOOL_EMAIL, SCHOOL_PHONE } from '../constants';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Kontak: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <PageHeader 
        title="Hubungi Kami" 
        subtitle="Punya pertanyaan? Jangan ragu untuk menghubungi kami melalui kontak di bawah ini."
        image="https://picsum.photos/id/1033/1920/800"
      />

      <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Form & Map */}
            <div className="space-y-8">
               
               {/* Contact Form */}
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Nama Anda" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="08xxx" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                        <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Tulis pesan Anda disini..."></textarea>
                     </div>
                     <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition flex items-center justify-center gap-2">
                        <Send size={18} /> Kirim Pesan
                     </button>
                  </form>
               </div>

            </div>

            {/* Right Column: Info & Map */}
            <div className="space-y-8">
               {/* Info Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col gap-3">
                     <div className="bg-green-50 p-3 rounded-full text-primary w-fit">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900">Alamat</h3>
                        <p className="text-gray-600 text-sm">{SCHOOL_ADDRESS}</p>
                     </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col gap-3">
                     <div className="bg-green-50 p-3 rounded-full text-primary w-fit">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900">Telepon / WA</h3>
                        <p className="text-gray-600 text-sm">{SCHOOL_PHONE}</p>
                     </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col gap-3">
                     <div className="bg-green-50 p-3 rounded-full text-primary w-fit">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900">Email</h3>
                        <p className="text-gray-600 text-sm">{SCHOOL_EMAIL}</p>
                     </div>
                  </div>

                   <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col gap-3">
                     <div className="bg-green-50 p-3 rounded-full text-primary w-fit">
                        <Clock size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900">Jam Kerja</h3>
                        <p className="text-gray-600 text-xs">Senin-Kamis: 07.00-14.00</p>
                        <p className="text-gray-600 text-xs">Jumat-Sabtu: 07.00-12.00</p>
                     </div>
                  </div>
               </div>

                {/* Map */}
               <div className="bg-white p-2 rounded-xl shadow-sm h-[300px]">
                  <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0!2d112.2!3d-8.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnMDAuMCJTIDExMsKwMTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
                     width="100%" 
                     height="100%" 
                     style={{border:0, borderRadius: '0.5rem'}} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                     title="School Location"
                  ></iframe>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Kontak;