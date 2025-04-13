import React, { useState } from "react";
import { SimulatorProvider } from "./context/SimulatorContext";
import QueueSimulator from "./components/QueueSimulator";
import InputPage from "./pages/InputPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [params, setParams] = useState(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-pink-900 text-white  justify-center"

    >
      <SimulatorProvider>
        {!params ? (
          <InputPage onStart={setParams} />
        ) : (
          <>
            <QueueSimulator {...params} />
            <Dashboard />
          </>
        )}
      </SimulatorProvider>
    </div>
  );
};

export default App;
