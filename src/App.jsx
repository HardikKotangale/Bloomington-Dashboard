import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Trash from "./pages/Trash";
import YardWaste from "./pages/YardWaste";
import Recycle from "./pages/Recycle";

export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/yard-waste" element={<YardWaste />} />
      <Route path="/recycle" element={<Recycle />} />
    </Routes>
  );
}
