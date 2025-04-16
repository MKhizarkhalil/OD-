import React, { useMemo } from "react";
import { useSimulator } from "../context/SimulatorContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";

const GanttChart = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Memoize the data for performance optimization
    const data = useMemo(() =>
        metrics.history.map((item) => ({
            name: `Cust ${item.id}`,
            start: item.startTime,
            duration: item.serviceTime,
            end: item.endTime
        })), [metrics.history]);

    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg mb-2">📊 Gantt Chart (Customer Service Timeline)</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={['dataMin', 'dataMax']}>
                        <Label value="Time (min)" offset={-10} position="insideBottom" />
                    </XAxis>
                    <YAxis type="category" dataKey="name" />
                    <Tooltip
                        formatter={(value, name) => name === 'duration' ? [`${value} min`, 'Duration'] : value}
                        labelFormatter={(label) => `Customer: ${label}`}
                    />
                    <Bar
                        dataKey="duration"
                        fill="#8884d8"
                        background={{ fill: "#eee" }}
                        label={{ position: "right", formatter: (v) => `${v} min` }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GanttChart;
