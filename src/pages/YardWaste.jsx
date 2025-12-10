import { useState } from "react";
import AppShell from "../components/layout/AppShell";
import DashboardNav from "../components/dashboard/DashboardNav";
import MapCard from "../components/dashboard/MapCard";
import ChartCard from "../components/dashboard/ChartCard";
import KpiCard from "../components/dashboard/KpiCard";
import { computeKPIs } from "../utils/computeKPIs";

export default function YardWaste() {
  const category = "Yard Waste"; // MUST MATCH wasteData.js exactly
  const [mode, setMode] = useState("season");
  const [period, setPeriod] = useState("Spring");

  // Compute KPIs for Yard Waste
  const kpi = computeKPIs(category, mode, period);

  return (
    <AppShell>

      {/* NAVIGATION (Season / Month / Sub-options) */}
      <DashboardNav
        mode={mode}
        setMode={setMode}
        period={period}
        setPeriod={setPeriod}
      />

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-semibold tracking-[0.2em] uppercase mt-40 mb-8">
        Yard Waste Dashboard
      </h1>

      {/* PAGE GRID LAYOUT */}
      <div className="grid grid-cols-12 gap-8 mt-8">

        {/* LEFT — MAP */}
        <div className="col-span-12 lg:col-span-7">
          <MapCard category="yard" period={period} />
        </div>

        {/* RIGHT — KPI CARDS + CHART */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">

          {/* KPI CARDS */}
          <div className="grid grid-cols-3 gap-4">
            <KpiCard
              label={kpi.card1.label}
              value={kpi.card1.value}
              positive={kpi.card1.positive}
              negative={kpi.card1.negative}
            />

            <KpiCard
              label={kpi.card2.label}
              value={kpi.card2.value}
              positive={kpi.card2.positive}
              negative={kpi.card2.negative}
            />

            <KpiCard
              label={kpi.card3.label}
              value={kpi.card3.value}
              positive={kpi.card3.positive}
              negative={kpi.card3.negative}
            />
          </div>

          {/* TREND CHART */}
          <ChartCard
            category="Yard Waste"
            period={period}
            mode={mode}
            title={`Yard Waste — ${period} Trends`}
          />
        </div>

      </div>
    </AppShell>
  );
}
