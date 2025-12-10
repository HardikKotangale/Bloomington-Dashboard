import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapCard({ category, period }) {
  // normalize names
  const categoryKey = category.toLowerCase().replace(" ", "");
  const periodKey = period.toLowerCase();

  const mapPath = `/maps/${categoryKey}/${categoryKey}_${periodKey}.html`;

  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 w-[96%] mx-0">
      <iframe
        key={mapPath} 
        src={mapPath}
        className="w-full h-[650px] border-0 rounded-3xl"
      />
    </div>
  );
}
