import React from "react";
import { useSimulator } from "../context/SimulatorContext";

const Analysis = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Max wait time (already in minutes)
    const maxWait = Math.max(...metrics.history.map(h => h.waitTime));
    const maxWaitInMinutes = maxWait.toFixed(2);

    // Total simulation time (busy + idle)
    const simulationTime = (metrics.busyTime + metrics.idleTime).toFixed(2);

    // Throughput: customers served per minute
    const throughput = (metrics.served / simulationTime).toFixed(2);

    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-center">📌 Detailed Analysis</h3>
            <div className="flex flex-col space-y-2">
                <div className="bg-white/20 p-4 rounded-lg shadow-md">
                    <p className="text-xl">
                        ⏱️ <span className="font-semibold">Simulation Time:</span> {simulationTime} min
                    </p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg shadow-md">
                    <p className="text-xl">
                        🔁 <span className="font-semibold">Throughput Rate:</span> {throughput} cust/min
                    </p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg shadow-md">
                    <p className="text-xl">
                        📦 <span className="font-semibold">Max Wait Time:</span> {maxWaitInMinutes} min
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
