export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ScanResult {
  extractedText: string;
  imageUrl: string;
}