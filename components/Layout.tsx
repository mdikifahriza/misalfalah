import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_NAME, SCHOOL_ADDRESS, SCHOOL_PHONE, SCHOOL_EMAIL, SCHOOL_LOGO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {SCHOOL_PHONE}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {SCHOOL_EMAIL}</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition"><Facebook size={16} /></a>
            <a href="#" className="hover:text-accent transition"><Instagram size={16} /></a>
            <a href="#" className="hover:text-accent transition"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={SCHOOL_LOGO} 
                alt={`Logo ${SCHOOL_NAME}`} 
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback if image fails */}
              <div className="hidden w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">AF</div>
              
              <div className="leading-tight">
                <h1 className="text-lg md:text-xl font-bold text-primary">{SCHOOL_NAME}</h1>
                <p className="text-xs text-gray-500 tracking-wide">BLITAR - JAWA TIMUR</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-green-50'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/ppdb"
                className="ml-4 px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-secondary transition-colors shadow-sm"
              >
                Daftar PPDB
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
            <div className="flex flex-col p-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-green-50 text-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/ppdb"
                className="block text-center mt-4 px-4 py-3 bg-primary text-white rounded-md font-bold hover:bg-secondary"
              >
                DAFTAR PPDB SEKARANG
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: School Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-1.5 rounded-full w-12 h-12 flex items-center justify-center">
                  <img src={SCHOOL_LOGO} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white">{SCHOOL_NAME}</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                Mencetak generasi cerdas, berakhlak mulia, dan berwawasan global dengan landasan nilai-nilai Islami yang kuat.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><Facebook size={16} /></a>
                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><Instagram size={16} /></a>
                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"><Youtube size={16} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/profil" className="hover:text-primary transition">Profil Sekolah</Link></li>
                <li><Link to="/ppdb" className="hover:text-primary transition">Info PPDB</Link></li>
                <li><Link to="/berita" className="hover:text-primary transition">Berita & Kegiatan</Link></li>
                <li><Link to="/akademik" className="hover:text-primary transition">Kurikulum</Link></li>
                <li><Link to="/kontak" className="hover:text-primary transition">Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Kontak Kami</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 shrink-0" />
                  <span>{SCHOOL_ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>{SCHOOL_PHONE}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span>{SCHOOL_EMAIL}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;