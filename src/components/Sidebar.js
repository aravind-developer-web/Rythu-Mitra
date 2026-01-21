import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="rm-sidebar">
      
      {/* LOGO */}
      <div className="rm-logo">
        <img
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
          alt="Rythu Mitra"
        />
        <h2>Rythu Mitra</h2>
      </div>

      {/* NAVIGATION */}
      <nav className="rm-nav">
        <Menu to="/dashboard" icon="📊" label="Dashboard" />
        <Menu to="/crop-recommendation" icon="🌱" label="AI Crop Recommendation" />
        <Menu to="/disease-detection" icon="🦠" label="AI Disease Detection" />
        <Menu to="/market-prices" icon="💹" label="Market Prices" />
        <Menu to="/weather" icon="🌦️" label="Weather Intelligence" />
        <Menu to="/workers" icon="👨‍🌾" label="Workers" />
        <Menu to="/transport" icon="🚜" label="Transport" />
        <Menu to="/profile" icon="👤" label="Profile" />
      </nav>

      {/* STATUS */}
      <div className="rm-sidebar-status">
        <p>📍 Location: Telangana</p>
        <p>🌾 Crop: Paddy</p>
        <p>🧠 AI Status: Active</p>
      </div>

      {/* FOOTER */}
      <div className="rm-sidebar-footer">
        <p>AI for Smart Farming</p>
      </div>

    </aside>
  );
}

/* ======================
   MENU LINK
====================== */
function Menu({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "rm-link active" : "rm-link"
      }
    >
      <span className="rm-icon">{icon}</span>
      <span className="rm-text">{label}</span>
    </NavLink>
  );
}
