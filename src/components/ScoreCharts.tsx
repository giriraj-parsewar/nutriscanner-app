import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ScoreChartsProps {
    healthScore: number;
    carbonScore: number;
}

export function ScoreCharts({ healthScore, carbonScore }: ScoreChartsProps) {
    const getHealthCategory = (score: number) => {
        if (score >= 70) return '✅ Healthy';
        if (score >= 40) return '⚠️ Moderately Healthy';
        return '❌ Unhealthy';
    };

    const getCarbonCategory = (score: number) => {
        if (score >= 70) return '✅ Low Impact';
        if (score >= 40) return '⚠️ Moderate Impact';
        return '❌ High Impact';
    };

    const healthData = {
        labels: ['Score'],
        datasets: [
            {
                data: [healthScore, 100 - healthScore],
                backgroundColor: [
                    `hsl(${healthScore * 1.2}, 70%, 50%)`,
                    '#f3f4f6'
                ],
                borderWidth: 0,
            },
        ],
    };

    const carbonData = {
        labels: ['Score'],
        datasets: [
            {
                data: [carbonScore, 100 - carbonScore],
                backgroundColor: [
                    `hsl(${carbonScore * 1.2}, 70%, 50%)`,
                    '#f3f4f6'
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '75%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Health Score</h3>
                <div className="h-48 relative">
                    <Doughnut data={healthData} options={options} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">{healthScore}</span>
                        <span className="text-sm text-gray-600">/100</span>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <span className="text-lg font-medium">{getHealthCategory(healthScore)}</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Carbon Footprint Score</h3>
                <div className="h-48 relative">
                    <Doughnut data={carbonData} options={options} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">{carbonScore}</span>
                        <span className="text-sm text-gray-600">/100</span>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <span className="text-lg font-medium">{getCarbonCategory(carbonScore)}</span>
                </div>
            </div>
        </div>
    );
} 