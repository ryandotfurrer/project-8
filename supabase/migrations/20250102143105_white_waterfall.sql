/*
  # Add images array to events table

  1. Changes
    - Add images column to events table as text array
    - Update existing events to use thumbnail as first image
*/

ALTER TABLE events 
ADD COLUMN IF NOT EXISTS images text[] DEFAULT '{}';

-- Update existing events to use thumbnail as first image
UPDATE events 
SET images = ARRAY[thumbnail]
WHERE images = '{}' AND thumbnail IS NOT NULL;