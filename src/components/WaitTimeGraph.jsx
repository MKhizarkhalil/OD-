import React from "react";
import { useSimulator } from "../context/SimulatorContext";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
} from "recharts";

const WaitTimeGraph = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    return (
        <div className="backdrop-blur-md bg-white/10 text-white rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                ⏱ Wait Time
            </h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={metrics.history}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4CAF50" />
                    <XAxis dataKey="id" stroke="#00BFAE">
                        <Label value="Customer ID" position="insideBottom" offset={-5} fill="#00BFAE" />
                    </XAxis>
                    <YAxis stroke="#00BFAE">
                        <Label value="Wait Time (min)" angle={-90} position="insideLeft" fill="#00BFAE" />
                    </YAxis>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#263238",
                            borderRadius: "8px",
                            border: "none",
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="waitTime"
                        stroke="#FF4081"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WaitTimeGraph;
