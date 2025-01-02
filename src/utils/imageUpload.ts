import { supabase } from '../lib/supabase';

export async function uploadImage(imageDataUrl: string, bucket: 'events' | 'carousel'): Promise<string> {
  try {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    if (!userId) throw new Error('User not authenticated');

    // Convert data URL to blob
    const response = await fetch(imageDataUrl);
    const blob = await response.blob();
    
    // Upload to storage
    const fileName = `${userId}/${Date.now()}.${blob.type.split('/')[1]}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, blob);

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('Failed to upload image:', error);
    throw error;
  }
}