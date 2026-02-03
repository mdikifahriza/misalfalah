import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Akademik from './pages/Akademik';
import Kesiswaan from './pages/Kesiswaan';
import Guru from './pages/Guru';
import Berita from './pages/Berita';
import PPDB from './pages/PPDB';
import Kontak from './pages/Kontak';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/akademik" element={<Akademik />} />
          <Route path="/kesiswaan" element={<Kesiswaan />} />
          <Route path="/guru" element={<Guru />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;