export default function Tabs({ mode, setMode }) {
  const options = [
    { key: "season", label: "Season" },
    { key: "month", label: "Month" },
  ];

  return (
    <div className="inline-flex rounded-full border border-ferrari-red/60 bg-black/60 backdrop-blur-md p-0.5">
      {options.map(({ key, label }) => {
        const active = mode === key;
        return (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`px-5 py-1.5 text-xs md:text-sm rounded-full transition-all ${
              active
                ? "bg-ferrari-red text-black shadow-ferrari-card"
                : "text-neutral-200 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
