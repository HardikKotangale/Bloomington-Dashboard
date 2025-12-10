import React from "react";

export default function DashboardNav({
  mode,
  setMode,
  period,
  setPeriod,
}) {
  const seasons = ["Spring", "Summer", "Fall", "Winter"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="flex flex-col gap-4 mt-6 mb-10">

      {/* SECOND NAVBAR — MODE SELECTOR */}
      <div className="flex justify-center gap-10 text-lg font-medium">
        <button
          onClick={() => setMode("season")}
          className={`pb-1 ${
            mode === "season"
              ? "border-b-2 border-ferrari-red text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Season
        </button>

        <button
          onClick={() => setMode("month")}
          className={`pb-1 ${
            mode === "month"
              ? "border-b-2 border-ferrari-red text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Months
        </button>
      </div>

      {/* THIRD NAVBAR — CONDITIONAL OPTIONS */}
      <div className="flex justify-center gap-8 text-lg">
        {(mode === "season" ? seasons : months).map((item) => (
          <button
            key={item}
            onClick={() => setPeriod(item)}
            className={`pb-0.5 transition ${
              period === item
                ? "text-ferrari-red font-semibold border-b border-ferrari-red"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
