import React from "react";
import { useSimulator } from "../context/SimulatorContext";

const StatCard = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    const { served, totalWaitTime, totalServiceTime, busyTime, idleTime } = metrics;

    const avgWait = (totalWaitTime / served).toFixed(2);      // in minutes
    const avgService = (totalServiceTime / served).toFixed(2); // in minutes

    const totalTime = busyTime + idleTime;
    const utilization = ((busyTime / totalTime) * 100).toFixed(2);
    const idle = ((idleTime / totalTime) * 100).toFixed(2);

    return (
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-xl text-white">
            <h3 className="font-bold text-lg mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400">
                📊 Key Stats (in minutes)
            </h3>
            <ul className="space-y-1 text-sm">
                <li className="text-pink-400">☕ Customers Served: <span className="font-semibold">{served}</span></li>
                <li className="text-yellow-400">⏱ Average Wait Time: <span className="font-semibold">{avgWait} min</span></li>
                <li className="text-teal-400">⚙️ Average Service Time: <span className="font-semibold">{avgService} min</span></li>
                <li className="text-indigo-400">💼 Server Utilization: <span className="font-semibold">{utilization}%</span></li>
                <li className="text-green-400">🛋 Idle Time: <span className="font-semibold">{idle}%</span></li>
            </ul>
        </div>
    );
};

export default StatCard;
