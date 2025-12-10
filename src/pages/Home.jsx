import AppShell from "../components/layout/AppShell";

export default function Home() {
  return (
    <AppShell>

      {/* 🔥 BACKGROUND ANIMATED GLOW */}
      <div className="bg-animated-glow bg-blue-500/20 w-full h-full"></div>

      {/* HERO TITLE */}
      <section className="text-center mb-14 mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.25em] uppercase leading-snug">
          Bloomington Waste
          <span className="block">Dashboard</span>
        </h1>

        <h2 className="mt-6 text-lg md:text-xl font-semibold">
          Bloomington Waste Management Insights
        </h2>

        <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-3xl mx-auto">
          A data-driven exploration of spatial, seasonal, and service-based
          waste-management patterns across Bloomington, Indiana.
        </p>
      </section>

      {/* NARRATIVE CARD */}
      <section>
        <div className="rounded-3xl border border-ferrari-red/60 bg-black/50 shadow-ferrari-card px-8 py-7 md:px-10 md:py-9">
          <h3 className="text-xl md:text-2xl font-semibold text-ferrari-red mb-4">
            Key Narrative
          </h3>

          <p className="text-sm md:text-base text-neutral-200 leading-relaxed mb-4">
            Bloomington’s waste-management demand follows clear{" "}
            <span className="font-semibold">spatial</span> and{" "}
            <span className="font-semibold">seasonal rhythms, </span> 
            driven by rental-housing density, student cycles, and environmental
            patterns.
          </p>

          <ul className="list-disc pl-6 text-sm md:text-base text-neutral-200 space-y-2 leading-relaxed mb-4">
            <li>Hotspots align with <strong>high rental density</strong>.</li>
            <li>
              Requests peak in <strong>summer</strong> and{" "}
              <strong>early fall</strong>.
            </li>
            <li>
              Users can explore <strong>where</strong> issues emerge,
              <strong> when</strong> demand spikes, and
              <strong> which services</strong> drive load.
            </li>
          </ul>

          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            These insights guide optimized staffing, routing, and waste-collection
            decision-making for Bloomington planners.
          </p>
        </div>
      </section>

      {/* 3 FEATURE CARDS */}
      <section className="mt-16 mb-24">
        <h3 className="text-center text-xl md:text-2xl font-semibold tracking-wide text-neutral-200 mb-10">
          What This Dashboard Provides
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-7 hover:scale-[1.02] transition-all">
            <h4 className="text-lg font-semibold text-ferrari-red mb-3">
              Interactive Heatmaps
            </h4>
            <p className="text-neutral-300 text-sm">
              Explore Trash, Recycling, and Yard Waste hotspots with spatial
              clustering powered by city-wide heatmaps.
            </p>
          </div>

          <div className="rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-7 hover:scale-[1.02] transition-all">
            <h4 className="text-lg font-semibold text-ferrari-red mb-3">
              Seasonal & Monthly Trends
            </h4>
            <p className="text-neutral-300 text-sm">
              See how demand rises and falls over time monthly spikes, seasonal
              peaks, and long-term patterns.
            </p>
          </div>

          <div className="rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-7 hover:scale-[1.02] transition-all">
            <h4 className="text-lg font-semibold text-ferrari-red mb-3">
              KPI Insights
            </h4>
            <p className="text-neutral-300 text-sm">
              Yearly totals, peak months, and usage comparisons help city leaders
              make informed, data-driven decisions.
            </p>
          </div>

        </div>
      </section>

    </AppShell>
  );
}
