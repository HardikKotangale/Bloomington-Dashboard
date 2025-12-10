import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { seasonalData, monthlyData } from "../../data/wasteData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// ---------------------------------------
// 🔥 GLOW PLUGIN (works for both charts)
// ---------------------------------------
const glowPlugin = {
  id: "barGlow",
  beforeDatasetsDraw(chart) {
    const { ctx, tooltip, chartArea } = chart;
    if (!tooltip?._active?.length) return;

    const bar = tooltip._active[0].element;

    ctx.save();
    ctx.shadowColor = "rgba(255, 60, 60, 0.55)";
    ctx.shadowBlur = 35;

    ctx.fillStyle = bar.options.backgroundColor;
    ctx.fillRect(
      bar.x - bar.width / 2,
      bar.y,
      bar.width,
      chartArea.bottom - bar.y
    );

    ctx.restore();
  }
};

ChartJS.register(glowPlugin);

// ---------------------------------------
//     ⭐ MAIN CHART COMPONENT
// ---------------------------------------
export default function ChartCard({ category, period, mode }) {
  const SEASONS = ["Winter", "Spring", "Summer", "Fall"];
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const seasonalRow = seasonalData[category];
  const monthlyRow = monthlyData[category];

  // -----------------------------------
  // ⭐ SEASONAL CHART DATA
  // -----------------------------------
  const seasonalValues = SEASONS.map((s) => seasonalRow[s]);

  const seasonalColors = SEASONS.map((s) =>
    s === period ? "#ff2d2d" : "rgba(255,255,255,0.25)"
  );

  // -----------------------------------
  // ⭐ MONTHLY CHART DATA
  // -----------------------------------
  const monthlyValues = MONTHS.map((_, i) => monthlyRow[i + 1]);

  const monthlyColors = MONTHS.map((m) =>
    m === period ? "#ff2d2d" : "rgba(255,255,255,0.25)"
  );

  // -----------------------------------
  // ⭐ DYNAMIC CHART DATA SOURCE
  // -----------------------------------
  const isSeason = mode === "season";

  const chartData = {
    labels: isSeason ? SEASONS : MONTHS,
    datasets: [
      {
        label: `${category} Requests`,
        data: isSeason ? seasonalValues : monthlyValues,
        backgroundColor: isSeason ? seasonalColors : monthlyColors,
        borderRadius: 6,
        hoverBackgroundColor: isSeason
          ? seasonalColors.map((c) =>
              c === "#ff2d2d" ? "#ff4747" : "rgba(255,255,255,0.7)"
            )
          : monthlyColors.map((c) =>
              c === "#ff2d2d" ? "#ff4747" : "rgba(255,255,255,0.7)"
            ),
      },
    ],
  };

  // -----------------------------------
  // ⭐ CHART OPTIONS
  // -----------------------------------
  const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,   // ⭐ FORCE FULL FIT
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.85)",
      padding: 12,
      titleColor: "white",
      bodyColor: "white",
      borderColor: "rgba(255,255,255,0.2)",
      borderWidth: 1,
      callbacks: {
        label: (ctx) => `Requests: ${ctx.raw}`,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "white" },
      grid: { display: false },
    },
    y: {
      ticks: { color: "white" },
      grid: { color: "rgba(255,255,255,0.05)" },
      beginAtZero: true,
    },
  },
  animation: {
    duration: 600,
    easing: "easeOutQuart",
  },
};


return (
  <div className="rounded-3xl bg-black/40 border border-white/10 p-4 pt-6 backdrop-blur-xl">
    <h2 className="text-sm tracking-[0.15em] uppercase text-neutral-300 mb-4">
      {isSeason ? "Seasonal Trend" : "Monthly Trend"}
    </h2>

    <div className="w-full h-[420px]">
      <Bar data={chartData} options={chartOptions} />
    </div>
  </div>
);

}
