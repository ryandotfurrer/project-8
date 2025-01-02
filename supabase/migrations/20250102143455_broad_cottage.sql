/*
  # Create storage bucket for carousel images

  1. Storage Setup
    - Create public bucket for carousel images
    - Set up storage policies for public access and user management

  2. Security
    - Allow public read access to carousel bucket
    - Allow authenticated users to upload and manage their own images
*/

-- Create public bucket for carousel images
INSERT INTO storage.buckets (id, name, public)
VALUES ('carousel', 'carousel', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to carousel bucket
CREATE POLICY "Public can view carousel images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'carousel');

-- Allow authenticated users to upload to carousel bucket
CREATE POLICY "Users can upload carousel images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'carousel' AND auth.uid() = owner);

-- Allow users to delete their own images
CREATE POLICY "Users can delete their own carousel images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'carousel' AND auth.uid() = owner);