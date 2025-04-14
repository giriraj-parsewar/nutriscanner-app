export interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export interface ScanResult {
  extractedText: string;
  imageUrl: string;
}