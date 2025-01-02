export interface Event {
  id: string;
  title: string;
  description: string;
  time: string;
  thumbnail: string;
  images: string[];
  link: string;
  date: string; // ISO date string (YYYY-MM-DD)
}

export interface DayEvents {
  [key: string]: Event[];
}