import React from "react";
import { useSimulator } from "../context/SimulatorContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";

const ServerStateGraph = () => {
    const { metrics } = useSimulator();
    if (!metrics) return null;

    // Prepare the timeline data for server states (already in minutes)
    const timelineData = metrics.serverStates.map((state, i) => ({
        time: state.start.toFixed(2),  // No conversion needed since the times are in minutes
        state: state.state === "busy" ? 1 : 0,
    }));

    return (
        <div className="backdrop-blur-md bg-white/10 text-white rounded-2xl shadow-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                📈 Server Busy vs Idle
            </h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4CAF50" />
                    <XAxis dataKey="time" stroke="#D946EF">
                        <Label value="Time (min)" position="insideBottom" offset={-5} fill="#D946EF" />
                    </XAxis>
                    <YAxis ticks={[0, 1]} domain={[0, 1]} stroke="#D946EF">
                        <Label value="Server State" angle={-90} position="insideLeft" fill="#D946EF" />
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
                    <Line type="stepAfter" dataKey="state" stroke="#FF4081" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ServerStateGraph;
