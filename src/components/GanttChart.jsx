import React, { useMemo } from "react";
import { useSimulator } from "../context/SimulatorContext";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label
} from "recharts";

const GanttChart = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    const data = useMemo(() =>
        metrics.history.map((item) => ({
            name: `Cust ${item.id}`,
            offset: item.startTime,
            duration: item.serviceTime
        })), [metrics.history]);

    return (
        <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg p-6">
            <h3 className="text-white text-2xl font-bold mb-4 text-center">📊 Gantt Chart (Customer Service Timeline)</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                    barCategoryGap={16}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                    <XAxis type="number" domain={['dataMin', 'dataMax']} stroke="#fff">
                        <Label value="Time (min)" offset={-10} position="insideBottom" fill="#fff" />
                    </XAxis>
                    <YAxis type="category" dataKey="name" stroke="#fff" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1e1e2f", border: "none", borderRadius: "8px", color: "#fff" }}
                        formatter={(value, name) =>
                            name === "duration"
                                ? [`${value} min`, "Service Time"]
                                : [`${value} min`, "Start Time"]
                        }
                        labelStyle={{ color: "#fff" }}
                        labelFormatter={(label) => `Customer: ${label}`}
                    />
                    <Bar dataKey="offset" stackId="a" fill="transparent" />
                    <Bar
                        dataKey="duration"
                        stackId="a"
                        fill="url(#ganttGradient)"
                        radius={[0, 8, 8, 0]}
                    />
                    <defs>
                        <linearGradient id="ganttGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GanttChart;
