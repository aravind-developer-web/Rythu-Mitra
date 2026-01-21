import { useState } from "react";
import { motion } from "framer-motion";
import "./Transport.css";

export default function Transport() {
  const [vehicle, setVehicle] = useState("Mini Truck");
  const [weight, setWeight] = useState(2);
  const [distance, setDistance] = useState(10);
  const [status, setStatus] = useState(null);

  const priceMap = {
    Tractor: 600,
    "Mini Truck": 900,
    Lorry: 1500,
  };

  const total = priceMap[vehicle] + weight * 150 + distance * 12;

  return (
    <div className="transport-page">

      {/* HEADER */}
      <section className="transport-header">
        <h1>🚛 Transport Booking</h1>
        <p>Book vehicles for crop, fertilizer & farm goods transport</p>
      </section>

      {/* BOOKING BOX */}
      <section className="transport-box">

        <div className="transport-grid">

          <Field label="📍 Pickup Location">
            <input placeholder="Village / Farm location" />
          </Field>

          <Field label="📍 Drop Location">
            <input placeholder="Market / Warehouse" />
          </Field>

          <Field label="🌾 Crop / Goods">
            <select>
              <option>Paddy</option>
              <option>Maize</option>
              <option>Vegetables</option>
              <option>Fertilizer</option>
            </select>
          </Field>

          <Field label="🚜 Vehicle Type">
            <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
              <option>Tractor</option>
              <option>Mini Truck</option>
              <option>Lorry</option>
            </select>
          </Field>

          <Field label="⚖️ Load (tons)">
            <input
              type="number"
              min="1"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </Field>

          <Field label="🛣️ Distance (km)">
            <input
              type="number"
              min="1"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
          </Field>

        </div>

        {/* PRICE */}
        <div className="transport-price">
          <p>Base price for <b>{vehicle}</b>: ₹{priceMap[vehicle]}</p>
          <h2>Total Cost: ₹{total}</h2>
        </div>

        <button
          className="transport-btn"
          onClick={() => setStatus("pending")}
        >
          📦 Book Transport
        </button>

        {status && (
          <div className="transport-status">
            🚦 Status: <b>Vehicle Assigned (Tracking soon)</b>
          </div>
        )}

      </section>

      {/* VEHICLES */}
      <section className="vehicle-list">
        <h2>Available Vehicles Near You</h2>

        <div className="vehicle-cards">
          <VehicleCard name="Tractor" rate="₹600/hr" driver="Ramesh" />
          <VehicleCard name="Mini Truck" rate="₹900/hr" driver="Suresh" />
          <VehicleCard name="Lorry" rate="₹1500/hr" driver="Naresh" />
        </div>
      </section>

      {/* TRACKING */}
      <section className="transport-tracking">
        <h2>🛰️ Live Tracking</h2>
        <p>Driver & vehicle tracking will appear after booking confirmation</p>
      </section>

    </div>
  );
}

/* FIELD */
function Field({ label, children }) {
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  );
}

/* VEHICLE CARD */
function VehicleCard({ name, rate, driver }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="vehicle-card">
      <h3>🚚 {name}</h3>
      <p>Driver: {driver}</p>
      <span>{rate}</span>
      <span className="available">🟢 Available</span>
    </motion.div>
  );
}
