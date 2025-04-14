import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductAnalysis } from '../components/ProductAnalysis';
import { ChatInterface } from '../components/ChatInterface';
import { Message } from '../types';

export function Analysis() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'I\'ve analyzed the ingredients. What would you like to know about this product?',
      timestamp: new Date(),
    },
  ]);

  // Sample data - in a real app, this would come from your OCR and analysis
  const sampleData ={"productName": "HERSHEY\'S ZERO SUGAR SYRUP", "servingSize": "1 tbsp (15g)", "servingsPerContainer": 32, "calories": 5, "ingredients": ["WATER", "COCOA PROCESSED WITH ALKALI*", "GLYCERIN", "ERYTHRITOL", "CONTAINS 2% OR LESS OF: SODIUM ACID SULFATE", "NATURAL & ARTIFICIAL FLAVOR", "XANTHAN GUM", "SALT", "POTASSIUM SORBATE (TO MAINTAIN FRESHNESS)", "SODIUM BENZOATE (TO MAINTAIN FRESHNESS)", "ACESULFAME POTASSIUM", "SUCRALOSE", "ZINC SULFATE", "VITAMIN E ACETATE", "NIACINAMIDE", "BIOTIN"], "macronutrients": [{"name": "Total Fat", "dailyValue": 0, "amount": "0g"}, {"name": "Saturated Fat", "dailyValue": 0, "amount": "0g"}, {"name": "Trans Fat", "dailyValue": 0, "amount": "0g"}, {"name": "Cholesterol", "dailyValue": 0, "amount": "0mg"}, {"name": "Sodium", "dailyValue": 1, "amount": "30mg"}, {"name": "Total Carbohydrate", "dailyValue": 1, "amount": "2g"}, {"name": "Dietary Fiber", "dailyValue": 0, "amount": "0g"}, {"name": "Total Sugars", "dailyValue": 0, "amount": "0g"}, {"name": "Incl. 0g Added Sugars", "dailyValue": 0, "amount": "0g"}, {"name": "Sugar Alcohols", "dailyValue": 0, "amount": "2g"}, {"name": "Protein", "dailyValue": 0, "amount": "0g"}], "micronutrients": [{"name": "Vitamin D", "dailyValue": 0, "amount": "0"}, {"name": "Calcium", "dailyValue": 0, "amount": "0"}, {"name": "Iron", "dailyValue": 2, "amount": "0"}, {"name": "Potassium", "dailyValue": 0, "amount": "0"}, {"name": "Vitamin E", "dailyValue": 25, "amount": "0"}, {"name": "Niacin", "dailyValue": 15, "amount": "0"}, {"name": "Biotin", "dailyValue": 140, "amount": "0"}, {"name": "Zinc", "dailyValue": 15, "amount": "0"}], "labels": ["Low Calorie", "Gluten Free"], "healthScore": 65, "carbonScore": 70, "gwpValue": 50, "pros": ["Zero Sugar", "Low Calorie"], "cons": ["Artificial Sweeteners"], "alternatives": ["Other Sugar-Free Syrups", "Fruits"]};

  const handleScanAnother = () => {
    navigate('/scan');
  };

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a simulated AI response. In the actual implementation, this would be replaced with the OpenAI API response.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <ProductAnalysis
            {...sampleData}
            onScanAnother={handleScanAnother}
          />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Chat with AI Assistant</h2>
            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}