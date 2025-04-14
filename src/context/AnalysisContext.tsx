import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisData {
    productName: string;
    servingSize: string;
    servingsPerContainer: number;
    calories: number;
    ingredients: string[];
    macronutrients: Array<{
        name: string;
        dailyValue: number;
        amount: string;
    }>;
    micronutrients: Array<{
        name: string;
        dailyValue: number;
        amount: string;
    }>;
    labels: string[];
    healthScore: number;
    carbonScore: number;
    gwpValue: number;
    pros: string[];
    cons: string[];
    alternatives: string[];
    bonusTips: string[];
}

interface AnalysisContextType {
    analysisData: AnalysisData | null;
    setAnalysisData: (data: AnalysisData | null) => void;
   
    history: any[];   
   
    setHistory: (data: any[]) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
    const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
    const [history,setHistory] = useState<any[]>([]);

    return (
        <AnalysisContext.Provider value={{ analysisData, setAnalysisData,history,setHistory }}>
            {children}
        </AnalysisContext.Provider>
    );
}

export function useAnalysis() {
    const context = useContext(AnalysisContext);
    if (context === undefined) {
        throw new Error('useAnalysis must be used within an AnalysisProvider');
    }
    return context;
} 