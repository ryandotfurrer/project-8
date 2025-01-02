/*
  # Create storage buckets for carousel images

  1. Storage
    - Create public bucket for carousel images
    - Enable public access to carousel bucket
*/

-- Enable storage
CREATE EXTENSION IF NOT EXISTS "storage" SCHEMA "extensions";

-- Create public bucket for carousel images
INSERT INTO storage.buckets (id, name, public)
VALUES ('carousel', 'carousel', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to carousel bucket
CREATE POLICY "Carousel images are publicly accessible"
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