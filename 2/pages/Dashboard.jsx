import React from "react";
import StatCard from "../components/StatCard";
import Analysis from "../components/Analysis";
import ArrivalTimeGraph from "../components/ArrivalTimeGraph";
import WaitTimeGraph from "../components/WaitTimeGraph";
import ServiceTimeGraph from "../components/ServiceTimeGraph";
import ServerStateGraph from "../components/ServerStateGraph";
import UtilizationGraph from "../components/UtilizationGraph";

const Dashboard = () => {
    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard />
            <Analysis />
            <UtilizationGraph />
            <WaitTimeGraph />
            <ServiceTimeGraph />
            <ServerStateGraph />
            <ArrivalTimeGraph />
        </div>
    );
};

export default Dashboard;
