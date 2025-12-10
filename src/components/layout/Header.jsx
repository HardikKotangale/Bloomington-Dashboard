import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/home" className="flex items-center gap-4 group cursor-pointer">
          <img
            src={Logo}
            className="
              h-12 w-12 object-contain
              drop-shadow-[0_0_8px_rgba(255,0,0,0.35)]
              transition-transform duration-300
              group-hover:scale-125 active:scale-110
            "
          />
          <span className="text-sm tracking-[0.3em] uppercase text-neutral-200 group-hover:text-white">
            Bloomington Waste Dashboard
          </span>
        </NavLink>

        {/* Main Page Navigation */}
        <nav className="flex gap-6 text-sm text-neutral-300">
          {[
            ["Home", "/home"],
            ["Trash", "/trash"],
            ["Yard", "/yard-waste"],
            ["Recycle", "/recycle"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative pb-0.5 transition ${
                  isActive ? "text-white" : "hover:text-white/90"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
