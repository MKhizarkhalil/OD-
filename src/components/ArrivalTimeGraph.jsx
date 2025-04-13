import React from "react";
import { useSimulator } from "../context/SimulatorContext.jsx";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";

const ArrivalTimeGraph = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Convert arrival time from seconds to minutes (if necessary)
    const dataWithConvertedTimes = metrics.history.map(item => ({
        ...item,
        arrivalTime: (item.arrivalTime / 60).toFixed(2), // Convert to minutes
    }));

    return (
        <div className="bg-white p-4 rounded shadow backdrop-blur-md bg-white/20 text-white">
            <h3 className="font-bold text-lg mb-2">📍 Customer vs Arrival Time</h3>
            <ResponsiveContainer width="100%" height={250}>
                <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#A855F7" />
                    <XAxis dataKey="id" stroke="#fff">
                        <Label value="Customer ID" position="insideBottom" offset={-5} fill="#fff" />
                    </XAxis>
                    <YAxis dataKey="arrivalTime" stroke="#fff">
                        <Label value="Arrival Time (min)" angle={-90} position="insideLeft" fill="#fff" />
                    </YAxis>
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", border: "none" }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Scatter data={dataWithConvertedTimes} fill="#D946EF" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ArrivalTimeGraph;
