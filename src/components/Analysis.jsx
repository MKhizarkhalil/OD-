import React from "react";
import { useSimulator } from "../context/SimulatorContext";

const Analysis = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Calculate throughput and max wait time based on minutes
    const throughput = (metrics.served / (metrics.busyTime + metrics.idleTime)).toFixed(2);
    const maxWait = Math.max(...metrics.history.map(h => h.waitTime)).toFixed(2);

    // Convert values to minutes (assumes your times are in seconds in the raw data)
    const maxWaitInMinutes = (maxWait / 60).toFixed(2);
    const throughputInMinutes = (throughput / 60).toFixed(2);

    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-center">📌 Detailed Analysis</h3>
            <div className="flex flex-col space-y-2">
                <div className="bg-white/20 p-4 rounded-lg shadow-md">
                    <p className="text-xl">🔁 <span className="font-semibold">Throughput Rate:</span> {throughputInMinutes} cust/min</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg shadow-md">
                    <p className="text-xl">📦 <span className="font-semibold">Max Wait Time:</span> {maxWaitInMinutes} min</p>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
