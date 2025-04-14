import React, { useState } from 'react';
import { ChatInterface } from '../components/ChatInterface';
import { Message } from '../types';

export function Analysis() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'I\'ve analyzed the ingredients. What would you like to know about this product?',
      timestamp: new Date(),
    },
  ]);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Extracted Information</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="whitespace-pre-wrap text-sm text-gray-700">
                {`Ingredients: Water, Wheat Flour, Sugar, Vegetable Oil (Palm, Canola), 
Salt, Yeast, Emulsifiers (E471, E472e), Preservative (Calcium Propionate), 
Soy Flour, Antioxidant (E300), Vitamins (Thiamine, Folate).`}
              </pre>
            </div>
          </div>

          <div>
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