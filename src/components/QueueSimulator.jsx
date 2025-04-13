import { useEffect } from "react";
import { useSimulator } from "../context/SimulatorContext";
import { simulateQueue } from "../utils/simulateQueue";

const QueueSimulator = ({ lambda, mu, sigma, customerCount }) => {
    const { setMetrics } = useSimulator();

    useEffect(() => {
        if (!lambda || !mu || !sigma) return;
        const results = simulateQueue(lambda, mu, sigma, customerCount);
        setMetrics(results);
    }, [lambda, mu, sigma, customerCount, setMetrics]);

    return null;
};

export default QueueSimulator;
