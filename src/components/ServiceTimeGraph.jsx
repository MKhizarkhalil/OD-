import React from "react";
import { useSimulator } from "../context/SimulatorContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";

const ServiceTimeGraph = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Convert serviceTime from seconds to minutes
    const updatedHistory = metrics.history.map(item => ({
        ...item,
        serviceTime: (item.serviceTime / 60).toFixed(2),  // Convert service time to minutes
    }));

    return (
        <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-lg mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400">
                ⚙️ Service Time
            </h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={updatedHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="id" stroke="#ffffffb0">
                        <Label value="Customer ID" position="insideBottom" offset={-5} fill="#fff" />
                    </XAxis>
                    <YAxis stroke="#ffffffb0">
                        <Label value="Service Time (min)" angle={-90} position="insideLeft" fill="#fff" />
                    </YAxis>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f2937",
                            borderRadius: "8px",
                            border: "none",
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Line type="monotone" dataKey="serviceTime" stroke="#A855F7" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ServiceTimeGraph;
