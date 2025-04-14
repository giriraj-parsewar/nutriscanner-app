import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from '../components/ImageUpload';
import { Loader2 } from 'lucide-react';
import apiClient from '../apiClient';
// import { useAnalysis } from '../context/AnalysisContext';

export function Scan() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [ImageFile, SetImageFile] = useState<File | null>(null);
  const navigate = useNavigate();
  // const { setAnalysisData } = useAnalysis();

  const handleImageSelect = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      SetImageFile(file);
      setSelectedImage(imageUrl);
    } else {
      SetImageFile(null);
      setSelectedImage(null);
    }
  };

  const handleScan = async () => {
    if (!ImageFile) return;
    setIsScanning(true);
    const formData = new FormData();
    formData.append("file", ImageFile);
    try {
      const response = await apiClient.post("/upload-image", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      try {
        const id = response?.data?.sessionId;
        
        if (!id) {
          throw new Error("Session ID is undefined or null");
        }
      
        navigate('/analysis/' + id);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error navigating to analysis:", error.message);
        } else {
          console.error("Error navigating to analysis:", error);
        }
       
      }
      
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsScanning(false);
    }
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