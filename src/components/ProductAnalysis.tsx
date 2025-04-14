import React from 'react';
import { ScoreCharts } from './ScoreCharts';
import {
    Scale,
    Beaker,
    Apple,
    Leaf,
    Plus,
    CheckCircle2,
    AlertCircle,
    XCircle,
    ScanLine
} from 'lucide-react';

interface Nutrient {
    name: string;
    amount: string;
    dailyValue: number;
}

interface ProductAnalysisProps {
    productName: string;
    servingSize: string;
    servingsPerContainer: number;
    calories: number;
    ingredients: string[];
    macronutrients: Nutrient[];
    micronutrients: Nutrient[];
    labels: string[];
    healthScore: number;
    carbonScore: number;
    pros: string[];
    cons: string[];
    onScanAnother: () => void;
}

export function ProductAnalysis({
    productName,
    servingSize,
    servingsPerContainer,
    calories,
    ingredients,
    macronutrients,
    micronutrients,
    labels,
    healthScore,
    carbonScore,
    pros,
    cons,
    onScanAnother
}: ProductAnalysisProps) {
    return (
        <div className="space-y-8">
            {/* Product Name */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-900">{productName}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Serving Info */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <Scale className="h-6 w-6 text-green-500" />
                            <h2 className="text-xl font-semibold">Serving Information</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Serving Size</p>
                                <p className="font-medium">{servingSize}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Servings Per Container</p>
                                <p className="font-medium">{servingsPerContainer}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm text-gray-500">Calories</p>
                                <p className="font-medium">{calories} kcal</p>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <Beaker className="h-6 w-6 text-green-500" />
                            <h2 className="text-xl font-semibold">Ingredients</h2>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md max-h-48 overflow-y-auto">
                            <p className="text-sm text-gray-700">{ingredients.join(', ')}</p>
                        </div>
                    </div>

                    {/* Macronutrients */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <Apple className="h-6 w-6 text-green-500" />
                            <h2 className="text-xl font-semibold">Macronutrients</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2">Nutrient</th>
                                        <th className="text-left py-2">Amount</th>
                                        <th className="text-left py-2">% Daily Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {macronutrients.map((nutrient, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-2">{nutrient.name}</td>
                                            <td className="py-2">{nutrient.amount}</td>
                                            <td className="py-2">{nutrient.dailyValue}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Micronutrients */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <Beaker className="h-6 w-6 text-green-500" />
                            <h2 className="text-xl font-semibold">Micronutrients</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {micronutrients.map((nutrient, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 px-3 py-1 rounded-full text-sm"
                                >
                                    {nutrient.name}: {nutrient.dailyValue}%
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                            <h2 className="text-xl font-semibold">Product Labels</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {labels.map((label, index) => (
                                <div
                                    key={index}
                                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scores */}
                    <ScoreCharts healthScore={healthScore} carbonScore={carbonScore} />

                    {/* Pros and Cons */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <Leaf className="h-6 w-6 text-green-500" />
                            <h2 className="text-xl font-semibold">Analysis</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium text-green-600 mb-2">Pros</h3>
                                <ul className="space-y-2">
                                    {pros.map((pro, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-red-600 mb-2">Cons</h3>
                                <ul className="space-y-2">
                                    {cons.map((con, index) => (
                                        <li key={index} className="flex items-start">
                                            <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center">
                <button
                    onClick={onScanAnother}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    <ScanLine className="h-5 w-5 mr-2" />
                    Scan Another Product
                </button>
            </div>
        </div>
    );
} 