import Header from "./Header";

export default function AppShell({
  children,
  selectedSeason,
  setSelectedSeason,
  selectedMonth,
  setSelectedMonth,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#140000] to-[#3a0000] text-neutral-50">
      <Header
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {children}
      </main>
    </div>
  );
}
