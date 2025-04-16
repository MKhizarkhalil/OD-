import React from "react";
import { useSimulator } from "../context/SimulatorContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const UtilizationGraph = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    const totalTime = metrics.busyTime + metrics.idleTime;

    const data = [
        {
            name: "Busy",
            value: metrics.busyTime,
            percentage: ((metrics.busyTime / totalTime) * 100).toFixed(2),
        },
        {
            name: "Idle",
            value: metrics.idleTime,
            percentage: ((metrics.idleTime / totalTime) * 100).toFixed(2),
        },
    ];

    const COLORS = ["#A855F7", "#D946EF"];

    return (
        <div className="backdrop-blur-md bg-white/10 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-lg mb-4">
                💼 Server Utilization (Time in minutes)
            </h3>
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
                        formatter={(value, name, props) => {
                            const percentage = data.find(d => d.name === name)?.percentage;
                            return [`${value.toFixed(2)} min (${percentage}%)`, name];
                        }}
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
