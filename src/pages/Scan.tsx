import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from '../components/ImageUpload';
import { Loader2 } from 'lucide-react';

export function Scan() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleImageSelect = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleScan = async () => {
    setIsScanning(true);
    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false);
      navigate('/analysis');
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Scan Food Label</h1>
          <p className="mt-2 text-gray-600">
            Upload or take a photo of the food label to get started
          </p>
        </div>

        <ImageUpload
          onImageSelect={handleImageSelect}
          selectedImage={selectedImage}
        />

        {selectedImage && (
          <div className="mt-8 text-center">
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                'Scan Label'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}