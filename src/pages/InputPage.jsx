import React, { useState } from "react";

const InputPage = ({ onStart }) => {
  const [lambda, setLambda] = useState(2);
  const [mu, setMu] = useState(3);
  const [sigma, setSigma] = useState(1);
  const [customers, setCustomers] = useState(100);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const rho = lambda / mu;
    if (rho > 1) {
      setError("ρ (lambda / mu) must not exceed 1. The system would become unstable.");
      return;
    }
    setError("");
    onStart({ lambda: +lambda, mu: +mu, sigma: +sigma, customerCount: +customers });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/10 text-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="OD Logo" className="w-20 h-20 mb-2" />
          <h1 className="text-3xl font-bold tracking-wide">OD Cafe Queue Simulator</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Arrival Rate (λ)</label>
            <input
              type="number"
              value={lambda}
              onChange={(e) => setLambda(e.target.value)}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 p-2 rounded"
              placeholder="e.g., 2"
              step="any"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mean Service Rate (μ)</label>
            <input
              type="number"
              value={mu}
              onChange={(e) => setMu(e.target.value)}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 p-2 rounded"
              placeholder="e.g., 3"
              step="any"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Standard Deviation (σ)</label>
            <input
              type="number"
              value={sigma}
              onChange={(e) => setSigma(e.target.value)}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 p-2 rounded"
              placeholder="e.g., 1"
              step="any"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Customer Count</label>
            <input
              type="number"
              value={customers}
              onChange={(e) => setCustomers(e.target.value)}
              className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 p-2 rounded"
              placeholder="e.g., 100"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm font-semibold">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Start Simulation
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputPage;
