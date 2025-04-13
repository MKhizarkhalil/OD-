import React from "react";
import StatCard from "./StatCard";
import WaitTimeGraph from "./WaitTimeGraph";
import ServiceTimeGraph from "./ServiceTimeGraph";
import ServerStateGraph from "./ServerStateGraph";
import UtilizationGraph from "./UtilizationGraph";
import ArrivalTimeGraph from "./ArrivalTimeGraph";
import Analysis from "./Analysis";

const LayoutWrapper = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard />
        <UtilizationGraph />
        <Analysis />
        <WaitTimeGraph />
        <ServiceTimeGraph />
        <ServerStateGraph />
        <ArrivalTimeGraph />
        {/* Add more if needed */}
    </div>
);

export default LayoutWrapper;
