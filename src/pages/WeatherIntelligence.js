import { motion } from "framer-motion";
import "./WeatherIntelligence.css";

export default function WeatherIntelligence() {
  return (
    <div className="weather-container">

      {/* HEADER */}
      <section className="weather-header">
        <h1>🌦️ Weather Intelligence</h1>
        <p>AI-powered weather insights for smart farming decisions</p>
      </section>

      {/* TODAY OVERVIEW */}
      <section className="weather-grid">
        <WeatherCard title="Rain Chance" value="68%" note="Moderate rainfall likely" />
        <WeatherCard title="Temperature" value="31°C" note="Safe for crops" />
        <WeatherCard title="Wind Speed" value="14 km/h" note="Spraying allowed" />
        <WeatherCard title="Humidity Risk" value="High" note="Fungal risk ↑" />
      </section>

      {/* AI FARM ADVICE */}
      <section className="weather-ai">
        <h2>🤖 AI Farm Advisory</h2>
        <ul>
          <li>❌ Avoid pesticide spraying today</li>
          <li>✅ Best irrigation time: Tomorrow morning</li>
          <li>⚠️ Monitor leaf diseases (high humidity)</li>
        </ul>
      </section>

      {/* HARVEST INTELLIGENCE */}
      <section className="harvest-section">
        <h2>🌾 Harvest Intelligence</h2>
        <div className="harvest-cards">
          <HarvestCard title="Best Harvest Day" value="Thursday" />
          <HarvestCard title="Drying Suitability" value="Good" />
          <HarvestCard title="Storage Risk" value="Low" />
        </div>
      </section>

      {/* WEATHER ALERTS */}
      <section className="alert-section">
        <h2>⚠️ Weather Alerts</h2>
        <Alert text="Heavy rainfall expected in next 48 hours" />
        <Alert text="High humidity may increase fungal disease risk" />
      </section>

    </div>
  );
}

/* COMPONENTS */

function WeatherCard({ title, value, note }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="weather-card"
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
      <small>{note}</small>
    </motion.div>
  );
}

function HarvestCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="harvest-card"
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </motion.div>
  );
}

function Alert({ text }) {
  return <div className="weather-alert">{text}</div>;
}
