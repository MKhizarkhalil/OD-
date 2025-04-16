import React, { createContext, useContext, useState } from "react";

const SimulatorContext = createContext();

export const SimulatorProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(null);

  return (
    <SimulatorContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </SimulatorContext.Provider>
  );
};

export const useSimulator = () => useContext(SimulatorContext);
