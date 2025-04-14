import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage: string | null;
}

export function ImageUpload({ onImageSelect, selectedImage }: ImageUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      onImageSelect(acceptedFiles[0]);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: false
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!selectedImage ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-4">
            <Upload className="h-12 w-12 text-gray-400" />
            <div className="text-gray-600">
              <p className="font-medium">Drop your image here, or click to select</p>
              <p className="text-sm">Supports JPG, JPEG, PNG</p>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Camera className="h-4 w-4 mr-2" />
              Take Photo
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={selectedImage}
            alt="Selected food label"
            className="w-full rounded-lg shadow-lg"
          />
          <button
            onClick={() => onImageSelect(null as any)}
            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            Change Image
          </button>
        </div>
      )}
    </div>
  );
}