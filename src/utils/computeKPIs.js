import { seasonalData, monthlyData } from "../data/wasteData";

export function computeKPIs(category, mode, period) {
  let result = {
    card1: { label: "", value: "-" },
    card2: { label: "", value: "-" },
    card3: { label: "", value: "-" },
  };

  // Validate category exists
  if (!seasonalData[category] || !monthlyData[category]) {
    console.warn("Invalid category:", category);
    return result;
  }

  const seasonRow = seasonalData[category];
  const monthRow = monthlyData[category];

  // YEARLY TOTAL (sum of all months)
  const yearly = Object.values(monthRow).reduce((a, b) => a + b, 0);

  // ======================
  // ⭐ SEASON MODE
  // ======================
  if (mode === "season") {
    const seasonValue = seasonRow[period] ?? 0;

    const peakSeason = Object.entries(seasonRow)
      .sort((a, b) => b[1] - a[1])[0][0];

    return {
      card1: { label: "Yearly Count", value: yearly },
      card2: { label: "Season Count", value: seasonValue },
      card3: { label: "Peak Season", value: peakSeason },
    };
  }

  // ======================
  // ⭐ MONTH MODE
  // ======================
  const monthMap = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4,
    May: 5, Jun: 6, Jul: 7, Aug: 8,
    Sep: 9, Oct: 10, Nov: 11, Dec: 12,
  };

  const monthIndex = monthMap[period];
  const monthValue = monthRow[monthIndex] ?? 0;

  // Compute peak month
  const peakValue = Math.max(...Object.values(monthRow));
  const peakMonthIndex = Object.values(monthRow).indexOf(peakValue) + 1;
  const peakMonth = Object.keys(monthMap)[peakMonthIndex - 1];

  // Buffer = difference between peak month and selected month
  const buffer = monthValue - peakValue;
  const displayBuffer = Math.abs(buffer);

  // Pass sign info
  const isPositive = buffer > 0;
  const isNegative = buffer < 0;
  return {
    card1: { label: "Month Count", value: monthValue },
    card2: { label: "Peak Month", value: peakMonth },
    card3: { label: "Delta (Δ)", value: displayBuffer, positive: isPositive,negative: isNegative },
  };
}
