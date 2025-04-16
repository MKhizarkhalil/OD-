import React, { useState } from "react";
import { useSimulator } from "../context/SimulatorContext";

const SimulationTable = () => {
    const { metrics } = useSimulator();
    const [showTable, setShowTable] = useState(false);

    if (!metrics) return null;

    return (
        <div className="relative">
            <button
                onClick={() => setShowTable(!showTable)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition mx-auto block mb-4"
            >
                {showTable ? "Hide Simulation Table" : "Show Simulation Table"}
            </button>

            {showTable && (
                <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl shadow-lg overflow-x-auto border border-white/40 dark:border-gray-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white">
                        📋 Simulation Table (Time in Minutes)
                    </h3>
                    <table className="min-w-full text-sm text-white text-center">
                        <thead>
                            <tr className="bg-white/10 text-sm">
                                <th className="border px-4 py-2">Customer ID</th>
                                <th className="border px-4 py-2">Arrival</th>
                                <th className="border px-4 py-2">Service</th>
                                <th className="border px-4 py-2">Start</th>
                                <th className="border px-4 py-2">End</th>
                                <th className="border px-4 py-2">Wait</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metrics.history.map((entry) => (
                                <tr key={entry.id} className="hover:bg-white/10 transition">
                                    <td className="border px-4 py-2">{entry.id}</td>
                                    <td className="border px-4 py-2">{entry.arrivalTime}</td>
                                    <td className="border px-4 py-2">{entry.serviceTime}</td>
                                    <td className="border px-4 py-2">{entry.startTime}</td>
                                    <td className="border px-4 py-2">{entry.endTime}</td>
                                    <td className="border px-4 py-2">{entry.waitTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SimulationTable;
