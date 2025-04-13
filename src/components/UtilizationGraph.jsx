import React from "react";
import { useSimulator } from "../context/SimulatorContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const UtilizationGraph = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    const data = [
        { name: "Busy", value: metrics.busyTime },
        { name: "Idle", value: metrics.idleTime },
    ];

    const COLORS = ["#A855F7", "#D946EF"]; // Updated colors

    return (
        <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-lg mb-4">💼 Server Utilization</h3>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f2937",
                            borderRadius: "8px",
                            border: "none",
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UtilizationGraph;
