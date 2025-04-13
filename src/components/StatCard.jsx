import React from "react";
import { useSimulator } from "../context/SimulatorContext";

const StatCard = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    const { served, totalWaitTime, totalServiceTime, busyTime, idleTime } = metrics;

    // Calculate average wait and service time in minutes
    const avgWait = (totalWaitTime / served).toFixed(2);  // avg wait time in minutes
    const avgService = (totalServiceTime / served).toFixed(2);  // avg service time in minutes

    // Calculate server utilization and idle time as percentages
    const utilization = ((busyTime / (busyTime + idleTime)) * 100).toFixed(2);
    const idle = ((idleTime / (busyTime + idleTime)) * 100).toFixed(2);

    return (
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-xl text-white">
            <h3 className="font-bold text-lg mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400">
                📊 Key Stats
            </h3>
            <p className="text-pink-400">☕ Served: {served}</p>
            <p className="text-yellow-400">⏱ Avg Wait Time: {avgWait} min</p>
            <p className="text-teal-400">⚙️ Avg Service Time: {avgService} min</p>
            <p className="text-indigo-400">💼 Server Utilization: {utilization}%</p>
            <p className="text-green-400">🛋 Idle Time: {idle}%</p>
        </div>
    );
};

export default StatCard;
