import React, { useState } from "react";
import SideBar from "../component/admin/sideBar";
import SidebarCars from "../component/admin/sidebarCars";
import SidebarDashboard from "../component/admin/sidebarDashboard";
import "../styles/styleDashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardPage: React.FC = () => {
  const [activeSidebar, setActiveSideBar] = useState<
    "dashboard" | "cars" | null
  >("dashboard");
  const handleSidebarClick = (menu: "dashboard" | "cars") => {
    setActiveSideBar(menu);
  };
  return (
    <>
      <section className="dashboard">
        <div className="d-flex flex-row">
          <SideBar
            activeSidebar={activeSidebar}
            onSidebarClick={handleSidebarClick}
          />
          {activeSidebar === "dashboard" && <SidebarDashboard />}
          {activeSidebar === "cars" && <SidebarCars />}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
