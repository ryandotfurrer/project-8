-- Create public bucket for event images
INSERT INTO storage.buckets (id, name, public)
VALUES ('events', 'events', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to event images
CREATE POLICY "Public can view event images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'events');

-- Allow authenticated users to upload event images
CREATE POLICY "Users can upload event images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'events' AND auth.uid() = owner);

-- Allow users to delete their own images
CREATE POLICY "Users can delete their own event images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'events' AND auth.uid() = owner);