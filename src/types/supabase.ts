// src/types/supabase.ts

export type Database = {
    public: {
      Tables: {
        events: {
          Row: {
            id: string;
            title: string;
            description: string;
            time: string;
            thumbnail: string;
            link: string;
            date: string;
            created_at: string;
            user_id: string;
            images: string[]; // Array of text
          };
          Insert: {
            id?: string;
            title: string;
            description: string;
            time: string;
            thumbnail: string;
            link: string;
            date: string;
            created_at?: string;
            user_id: string;
            images?: string[];
          };
          Update: {
            id?: string;
            title?: string;
            description?: string;
            time?: string;
            thumbnail?: string;
            link?: string;
            date?: string;
            created_at?: string;
            user_id?: string;
            images?: string[];
          };
        };
        carousel_images: {
          Row: {
            id: string;
            url: string;
            created_at: string;
            user_id: string;
          };
          Insert: {
            id?: string;
            url: string;
            created_at?: string;
            user_id: string;
          };
          Update: {
            id?: string;
            url?: string;
            created_at?: string;
            user_id?: string;
          };
        };
      };
    };
  };