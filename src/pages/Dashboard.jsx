import React from "react";
import ArrivalTimeGraph from "../components/ArrivalTimeGraph";
import ServiceTimeGraph from "../components/ServiceTimeGraph";
import WaitTimeGraph from "../components/WaitTimeGraph";
import ServerStateGraph from "../components/ServerStateGraph";
import UtilizationGraph from "../components/UtilizationGraph";
import StatCard from "../components/StatCard";
import Analysis from "../components/Analysis";
import SimulationTable from "../components/SimulationTable";
import GanttChart from "../components/GanttChart";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard />
        <Analysis />
        <UtilizationGraph />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArrivalTimeGraph />
        <ServiceTimeGraph />
        <WaitTimeGraph />
        <ServerStateGraph />


      </div>
      <GanttChart />

      <SimulationTable />

    </div>
  );
};

export default Dashboard;