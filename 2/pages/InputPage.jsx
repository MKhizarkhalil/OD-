import React, { useState } from "react";

const InputPage = ({ onSubmit }) => {
    const [lambda, setLambda] = useState("");
    const [mu, setMu] = useState("");
    const [sigma, setSigma] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            lambda: parseFloat(lambda),
            mu: parseFloat(mu),
            sigma: parseFloat(sigma)
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-bold">M/G/1 Queue Simulator</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
                <input type="number" placeholder="Arrival Rate (λ)" step="0.01" value={lambda} onChange={e => setLambda(e.target.value)} required />
                <input type="number" placeholder="Mean Service Time (μ)" step="0.01" value={mu} onChange={e => setMu(e.target.value)} required />
                <input type="number" placeholder="Service Time Std Dev (σ)" step="0.01" value={sigma} onChange={e => setSigma(e.target.value)} required />
                <button type="submit" className="bg-blue-600 text-white py-1 rounded">Simulate</button>
            </form>
        </div>
    );
};

export default InputPage;
