import React, { useEffect } from "react";
import { useSimulator } from "../context/SimulatorContext";
import { simulateQueue } from "../utils/simulateQueue";

const QueueSimulator = ({ lambda, mu, sigma }) => {
    const { setMetrics } = useSimulator();

    useEffect(() => {
        const result = simulateQueue(lambda, mu, sigma);
        setMetrics(result);
    }, [lambda, mu, sigma, setMetrics]);

    return null; // This component only runs the simulation and sets global state
};

export default QueueSimulator;
