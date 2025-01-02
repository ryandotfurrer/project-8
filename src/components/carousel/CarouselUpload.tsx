import React from 'react';
import { Upload } from 'lucide-react';
import { useCarouselImages } from '../../hooks/useCarouselImages';
import ImageUpload from '../ImageUpload';

interface CarouselUploadProps {
  onClose: () => void;
}

export default function CarouselUpload({ onClose }: CarouselUploadProps) {
  const { uploadImage } = useCarouselImages();

  const handleImageSelect = async (imageDataUrl: string) => {
    try {
      await uploadImage(imageDataUrl);
      onClose();
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Upload Community Image</h2>
        <ImageUpload onImageSelect={handleImageSelect} />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}