import React from "react";
import { useSimulator } from "../context/SimulatorContext";

const Analysis = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Get raw max wait time in seconds
    const maxWait = Math.max(...metrics.history.map(h => h.waitTime)); // in seconds
    const maxWaitInMinutes = (maxWait).toFixed(2); // in minutes

    // Calculate throughput (customers served per minute)
    const totalTime = metrics.busyTime + metrics.idleTime; // total simulation time in minutes
    const throughput = (metrics.served / totalTime).toFixed(2); // cust/min

    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-center">📌 Detailed Analysis</h3>
            <div className="flex flex-col space-y-2">
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
