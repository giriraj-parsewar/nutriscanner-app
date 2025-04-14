import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductAnalysis } from '../components/ProductAnalysis';
import { ChatInterface } from '../components/ChatInterface';
import { Message } from '../types';
import { useAnalysis } from '../context/AnalysisContext';
import apiClient from '../apiClient';


const first:Message =  {
  role: 'assistant',
  text: 'I\'ve analyzed the ingredients. What would you like to know about this product?'
}
export function Analysis() {
  const {id} = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  const { analysisData,setAnalysisData } = useAnalysis();
  const [loading,setLoading] = useState(true);
  
  const [messages, setMessages] = useState<Message[]>([first,
  ]);


  useEffect(()=>{
    setLoading(true);
    if(!analysisData){
      apiClient.get(`/analysis/${id}`)
      .then((response) => {
        const out = response.data;
        if(out){
          setAnalysisData(out.data);
          setMessages([first,...out.history])
      }

      setLoading(false);
    }).catch(()=>{
      setLoading(false);
    });
  }
},[]);


  const handleScanAnother = () => {
    navigate('/scan');
  };

  const handleSendMessage = (content: string) => {
    const newMessages:Message[] = [
      ...messages,
      {
        role: 'user',
        text: content,
      },
    ]
    setMessages([...newMessages]);
 
    apiClient.post(`/chat/${id}`, { message:content }).then((response) => {
      return response.data

    }).then((data) => {
      setMessages([...newMessages,data]);
    })


 
  };

  if(loading){
    return <div>Loading...</div>
  }

  if (!analysisData) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">No Analysis Data Available</h2>
          <button
            onClick={handleScanAnother}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Scan Another Product
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <ProductAnalysis
            {...analysisData}
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