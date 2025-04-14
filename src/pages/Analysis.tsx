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
  const sampleData = {
    productName: 'Whole Grain Bread',
    servingSize: '1 slice (30g)',
    servingsPerContainer: 20,
    calories: 80,
    ingredients: [
      'Water',
      'Wheat Flour',
      'Sugar',
      'Vegetable Oil (Palm, Canola)',
      'Salt',
      'Yeast',
      'Emulsifiers (E471, E472e)',
      'Preservative (Calcium Propionate)',
      'Soy Flour',
      'Antioxidant (E300)',
      'Vitamins (Thiamine, Folate)'
    ],
    macronutrients: [
      { name: 'Total Fat', amount: '1g', dailyValue: 2 },
      { name: 'Saturated Fat', amount: '0.2g', dailyValue: 1 },
      { name: 'Trans Fat', amount: '0g', dailyValue: 0 },
      { name: 'Cholesterol', amount: '0mg', dailyValue: 0 },
      { name: 'Sodium', amount: '150mg', dailyValue: 7 },
      { name: 'Total Carbohydrate', amount: '15g', dailyValue: 5 },
      { name: 'Dietary Fiber', amount: '2g', dailyValue: 7 },
      { name: 'Total Sugars', amount: '2g', dailyValue: 4 },
      { name: 'Protein', amount: '3g', dailyValue: 6 }
    ],
    micronutrients: [
      { name: 'Vitamin D', amount: '0mcg', dailyValue: 0 },
      { name: 'Calcium', amount: '20mg', dailyValue: 2 },
      { name: 'Iron', amount: '1mg', dailyValue: 6 },
      { name: 'Potassium', amount: '60mg', dailyValue: 1 },
      { name: 'Thiamine', amount: '0.1mg', dailyValue: 8 },
      { name: 'Folate', amount: '20mcg', dailyValue: 5 }
    ],
    labels: [
      'Whole Grain',
      'Low Fat',
      'No Artificial Colors',
      'No High Fructose Corn Syrup'
    ],
    healthScore: 75,
    carbonScore: 65,
    pros: [
      'Good source of whole grains',
      'Low in saturated fat',
      'Contains essential vitamins and minerals',
      'No artificial preservatives'
    ],
    cons: [
      'Contains palm oil',
      'Moderate sodium content',
      'Added sugar present',
      'Contains emulsifiers'
    ]
  };

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