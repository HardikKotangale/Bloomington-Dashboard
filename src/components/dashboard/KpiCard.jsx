export default function KpiCard({ label, value ,positive, negative}) {
  return (
    <div className="rounded-2xl bg-black/30 border border-white/10 p-6 text-center backdrop-blur-lg flex flex-col items-center justify-center gap-2">
      
      {/* LABEL */}
      <div className="text-xs md:text-sm text-neutral-400 tracking-wide leading-none">
        {label}
      </div>

      {/* VALUE */}
      <div className={
          "text-2xl font-semibold mt-2 " +
          (negative
            ? "text-red-500"
            : positive
            ? "text-green-400"
            : "text-neutral-300")
        }
      >
        {value}
      </div>

    </div>
  );
}
