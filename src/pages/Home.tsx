import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScanLine, Shield, Brain } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Make informed food choices
            <span className="block text-green-600">with NutriScan</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Scan food labels, understand ingredients, and get personalized nutritional insights powered by AI.
          </p>
          
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <button
              onClick={() => navigate('/scan')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <ScanLine className="h-5 w-5 mr-2" />
              Start Scanning
            </button>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <ScanLine className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quick Scanning</h3>
              <p className="mt-2 text-base text-gray-500">
                Easily scan food labels using your device's camera or upload existing photos.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Brain className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">AI Analysis</h3>
              <p className="mt-2 text-base text-gray-500">
                Get instant AI-powered analysis of ingredients and nutritional content.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Health Insights</h3>
              <p className="mt-2 text-base text-gray-500">
                Understand potential health impacts and make better food choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}