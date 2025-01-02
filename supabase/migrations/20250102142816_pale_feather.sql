/*
  # Add carousel images functionality

  1. New Tables
    - `carousel_images`
      - `id` (uuid, primary key)
      - `url` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on carousel_images table
    - Add policies for viewing and managing images
*/

-- Create carousel images table
CREATE TABLE IF NOT EXISTS carousel_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE carousel_images ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read carousel images
CREATE POLICY "Carousel images are viewable by everyone"
  ON carousel_images
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload carousel images"
  ON carousel_images
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own images
CREATE POLICY "Users can delete their own carousel images"
  ON carousel_images
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);