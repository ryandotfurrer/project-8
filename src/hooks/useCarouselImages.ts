import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { CarouselImage } from '../types/carousel';

export function useCarouselImages() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('carousel_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (imageDataUrl: string) => {
    try {
      const userId = (await supabase.auth.getUser()).data.user?.id;
      if (!userId) throw new Error('User not authenticated');

      // Convert data URL to blob
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      
      // Upload to storage
      const fileName = `${userId}/${Date.now()}.${blob.type.split('/')[1]}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('carousel')
        .upload(fileName, blob);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('carousel')
        .getPublicUrl(fileName);

      // Save to database
      const { error: dbError } = await supabase
        .from('carousel_images')
        .insert([{ url: publicUrl, user_id: userId }]);

      if (dbError) throw dbError;
      await fetchImages();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
      throw err;
    }
  };

  return {
    images,
    loading,
    error,
    uploadImage
  };
}