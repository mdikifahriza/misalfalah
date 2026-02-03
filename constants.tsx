import { NavItem, Teacher, NewsItem, Achievement, Activity } from './types';
import { BookOpen, Users, Trophy, Star, Clock, MapPin, Phone, Mail } from 'lucide-react';

export const SCHOOL_NAME = "MIS Al-Falah Kanigoro";
export const SCHOOL_ADDRESS = "Jl. Raya Kanigoro No. 123, Blitar, Jawa Timur";
export const SCHOOL_PHONE = "+62 812-3456-7890";
export const SCHOOL_EMAIL = "info@misalfalahkanigoro.sch.id";
// Pastikan file logo.png ada di folder public
export const SCHOOL_LOGO = "/logo.png";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil', path: '/profil' },
  { label: 'Akademik', path: '/akademik' },
  { label: 'Kesiswaan', path: '/kesiswaan' },
  { label: 'Guru & Staf', path: '/guru' },
  { label: 'Berita', path: '/berita' },
  { label: 'PPDB', path: '/ppdb' },
  { label: 'Kontak', path: '/kontak' },
];

export const HERO_SLIDES = [
  {
    image: "https://picsum.photos/id/10/1920/1080",
    title: "Membangun Generasi Qur'ani",
    subtitle: "Pendidikan yang menyeimbangkan ilmu pengetahuan dan akhlak mulia."
  },
  {
    image: "https://picsum.photos/id/48/1920/1080",
    title: "Lingkungan Belajar Nyaman",
    subtitle: "Fasilitas lengkap yang mendukung kreativitas dan kenyamanan siswa dalam belajar."
  },
  {
    image: "https://picsum.photos/id/180/1920/1080",
    title: "Teknologi Pembelajaran Modern",
    subtitle: "Mengintegrasikan teknologi terkini untuk mempersiapkan siswa menghadapi era digital."
  },
  {
    image: "https://picsum.photos/id/201/1920/1080",
    title: "Berwawasan Global",
    subtitle: "Membuka wawasan siswa seluas-luasnya dengan tetap berpegang teguh pada nilai agama."
  },
  {
    image: "https://picsum.photos/id/365/1920/1080",
    title: "Prestasi Tiada Henti",
    subtitle: "Wadah pengembangan bakat dan minat untuk mencetak siswa berprestasi."
  }
];

export const HIGHLIGHTS = [
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Akreditasi A",
    desc: "Terakreditasi Unggul oleh BAN-S/M dengan standar pendidikan berkualitas."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Kurikulum Terpadu",
    desc: "Memadukan Kurikulum Merdeka dengan nilai-nilai Keislaman yang kuat."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Lingkungan Islami",
    desc: "Pembiasaan sholat berjamaah, tahfidz, dan adab sehari-hari."
  },
];

export const TEACHERS: Teacher[] = [
  { id: 1, name: "Drs. H. Ahmad Fauzi, M.Pd", position: "Kepala Madrasah", image: "https://picsum.photos/id/1005/300/400" },
  { id: 2, name: "Siti Aminah, S.Pd.I", position: "Waka Kurikulum", image: "https://picsum.photos/id/1011/300/400" },
  { id: 3, name: "Budi Santoso, S.Pd", position: "Guru Kelas 6", image: "https://picsum.photos/id/1025/300/400" },
  { id: 4, name: "Rina Wulandari, S.Pd", position: "Guru Tahfidz", image: "https://picsum.photos/id/1027/300/400" },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Juara 1 Lomba Tahfidz Tingkat Kabupaten",
    date: "20 Oktober 2023",
    excerpt: "Siswa MIS Al-Falah kembali menorehkan prestasi gemilang dalam ajang Porseni...",
    thumbnail: "https://picsum.photos/id/1040/800/600",
    category: "Prestasi"
  },
  {
    id: 2,
    title: "Kunjungan Edukasi ke Perpustakaan Daerah",
    date: "15 Oktober 2023",
    excerpt: "Untuk meningkatkan minat baca siswa, kelas 4 dan 5 mengadakan kunjungan...",
    thumbnail: "https://picsum.photos/id/1042/800/600",
    category: "Kegiatan"
  },
  {
    id: 3,
    title: "Peringatan Maulid Nabi Muhammad SAW",
    date: "28 September 2023",
    excerpt: "Suasana khidmat menyelimuti halaman madrasah dalam acara peringatan Maulid...",
    thumbnail: "https://picsum.photos/id/1047/800/600",
    category: "Agenda"
  }
];

export const ACTIVITIES: Activity[] = [
  { id: 1, title: "Sholat Dhuha Berjamaah", image: "https://picsum.photos/id/106/600/400" },
  { id: 2, title: "Ekstrakurikuler Pramuka", image: "https://picsum.photos/id/1062/600/400" },
  { id: 3, title: "Pembelajaran Multimedia", image: "https://picsum.photos/id/1076/600/400" },
  { id: 4, title: "Upacara Bendera", image: "https://picsum.photos/id/1077/600/400" },
];