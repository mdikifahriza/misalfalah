import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Shield, Award, Heart, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, HIGHLIGHTS, LATEST_NEWS, SCHOOL_NAME, ACTIVITIES } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <>
      {/* Hero Section Slider */}
      <section className="relative h-[85vh] md:h-[650px] flex items-center overflow-hidden">
        {/* Slides */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Zoom Animation */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
        ))}

        {/* Content */}
        <div className="container mx-auto px-4 z-20 relative text-center md:text-left h-full flex items-center">
          <div className="max-w-3xl">
             {/* Text Content - Renders based on currentSlide */}
             <div key={currentSlide} className="animate-[fadeInUp_0.8s_ease-out]">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/30 text-green-100 border border-green-400/30 text-sm font-medium mb-4 backdrop-blur-md">
                  Selamat Datang di {SCHOOL_NAME}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {HERO_SLIDES[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link 
                    to="/ppdb" 
                    className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 border-2 border-transparent"
                  >
                    Daftar PPDB Sekarang <ArrowRight size={18} />
                  </Link>
                  <Link 
                    to="/profil" 
                    className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-semibold hover:bg-white hover:text-primary transition-all flex items-center justify-center"
                  >
                    Profil Sekolah
                  </Link>
                </div>
             </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 hover:bg-primary text-white rounded-full transition-all hover:scale-110 hidden md:block backdrop-blur-sm border border-white/10"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 hover:bg-primary text-white rounded-full transition-all hover:scale-110 hidden md:block backdrop-blur-sm border border-white/10"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white w-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="py-16 bg-white relative -mt-10 md:-mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Keunggulan</h2>
             <h3 className="text-3xl font-bold text-gray-900">Kenapa Memilih {SCHOOL_NAME}?</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Kurikulum Islami", desc: "Integrasi kurikulum nasional dengan nilai-nilai agama yang kuat.", icon: <Shield size={32} /> },
                { title: "Guru Berkompeten", desc: "Dididik oleh tenaga pengajar profesional dan berpengalaman.", icon: <Award size={32} /> },
                { title: "Fasilitas Nyaman", desc: "Lingkungan belajar yang kondusif, bersih, dan representatif.", icon: <CheckCircle size={32} /> },
                { title: "Pembinaan Akhlak", desc: "Fokus utama pada pembentukan karakter dan adab siswa.", icon: <Heart size={32} /> },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center group">
                   <div className="mx-auto w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                     {feature.icon}
                   </div>
                   <h4 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h4>
                   <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-xl"></div>
                <img 
                  src="https://picsum.photos/id/1005/600/800" 
                  alt="Kepala Madrasah" 
                  className="rounded-xl shadow-lg relative z-10 w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Sambutan Kepala Madrasah</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mewujudkan Generasi Islami yang Kompetitif</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  "Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan ke hadirat Allah SWT. {SCHOOL_NAME} hadir sebagai lembaga pendidikan yang berkomitmen mencetak generasi yang tidak hanya cerdas secara intelektual, namun juga matang secara spiritual."
                </p>
                <p>
                  "Kami memadukan kurikulum nasional dengan nilai-nilai pesantren untuk membentuk karakter siswa yang berakhlak karimah, mandiri, dan siap menghadapi tantangan zaman."
                </p>
              </div>
              <div className="mt-8">
                <p className="font-bold text-gray-900">Drs. H. Ahmad Fauzi, M.Pd</p>
                <p className="text-gray-500">Kepala Madrasah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Singkat */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="flex justify-between items-end mb-8">
             <h2 className="text-2xl font-bold text-gray-900">Galeri Kegiatan</h2>
             <Link to="/kesiswaan" className="text-primary font-semibold text-sm hover:underline">Lihat Semua</Link>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {ACTIVITIES.slice(0, 4).map((act, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden group aspect-square">
                   <img src={act.image} alt={act.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="text-white" size={24} />
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Kabar Madrasah</h2>
              <p className="text-gray-500">Berita, prestasi, dan agenda terbaru.</p>
            </div>
            <Link to="/berita" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              Lihat Semua <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATEST_NEWS.map((news) => (
              <article key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={news.thumbnail} alt={news.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">{news.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-xs mb-3">
                    <Calendar size={14} className="mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors line-clamp-2">
                    <Link to="/berita">{news.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {news.excerpt}
                  </p>
                  <Link to="/berita" className="text-primary font-medium text-sm hover:underline mt-auto inline-block">
                    Baca Selengkapnya
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/berita" className="inline-flex items-center text-primary font-semibold">
              Lihat Semua Berita <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* PPDB CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-white/5"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Penerimaan Peserta Didik Baru</h2>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Bergabunglah bersama keluarga besar {SCHOOL_NAME}. Mari wujudkan generasi Qur'ani yang cerdas dan berakhlak mulia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ppdb" 
              className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Daftar Sekarang
            </Link>
            <Link 
              to="/kontak" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Hubungi Panitia
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-green-100">
             <div className="flex items-center gap-2"><CheckCircle size={20} /> Fasilitas Lengkap</div>
             <div className="flex items-center gap-2"><CheckCircle size={20} /> Biaya Terjangkau</div>
             <div className="flex items-center gap-2"><CheckCircle size={20} /> Ekstrakurikuler Beragam</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;