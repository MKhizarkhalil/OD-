import React, { useState } from "react";
import { SimulatorProvider } from "./context/SimulatorContext";
import QueueSimulator from "./components/QueueSimulator";
import InputPage from "./pages/InputPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  const [params, setParams] = useState(null);

  return (
    <SimulatorProvider>
      {!params ? (
        <InputPage onSubmit={setParams} />
      ) : (
        <>
          <QueueSimulator {...params} />
          <Dashboard />
        </>
      )}
    </SimulatorProvider>
  );
};

export default App;
