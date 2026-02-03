export interface NavItem {
  label: string;
  path: string;
}

export interface Teacher {
  id: number;
  name: string;
  position: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  category: string;
}

export interface Achievement {
  id: number;
  title: string;
  student: string;
  level: string; // e.g., Kabupaten, Provinsi
  year: string;
}

export interface Activity {
  id: number;
  title: string;
  image: string;
}