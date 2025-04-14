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
                className="  container mx-auto h-[100px] hover:bg-blue-700 transition"
            >
                {showTable ? "Hide Table" : "Show Table"}
            </button>

            {showTable && (
                <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl shadow-lg overflow-x-auto border border-white/40 dark:border-gray-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white">📋 Simulation Table</h3>
                    <table className="min-w-full text-sm text-white">
                        <thead>
                            <tr className="bg-white/10">
                                <th className="border px-4 py-2">Customer ID</th>
                                <th className="border px-4 py-2">Arrival Time (min)</th>
                                <th className="border px-4 py-2">Service Time (min)</th>
                                <th className="border px-4 py-2">Start Time (min)</th>
                                <th className="border px-4 py-2">End Time (min)</th>
                                <th className="border px-4 py-2">Wait Time (min)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metrics.history.map((entry) => (
                                <tr key={entry.id} className="hover:bg-white/20">
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
