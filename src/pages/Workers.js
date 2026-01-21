import { useState } from "react";
import { motion } from "framer-motion";
import "./Workers.css";

export default function Workers() {
  const [count, setCount] = useState(3);
  const [hours, setHours] = useState(4);
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("Morning");
  const [work, setWork] = useState("Harvesting");
  const [status, setStatus] = useState(null);

  const pricePerHour = 350;
  const total = count * hours * pricePerHour;

  return (
    <div className="worker-page">

      {/* HEADER */}
      <section className="worker-header">
        <h1>👨‍🌾 Worker Booking</h1>
        <p>Book skilled farm workers near you with live cost estimation</p>
      </section>

      {/* BOOKING FORM */}
      <section className="booking-box">

        <div className="booking-grid">

          <Field label="📍 Location">
            <select>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
            </select>
          </Field>

          <Field label="🌾 Crop">
            <select>
              <option>Paddy</option>
              <option>Maize</option>
              <option>Cotton</option>
            </select>
          </Field>

          <Field label="🧑‍🌾 Work Type">
            <select value={work} onChange={(e) => setWork(e.target.value)}>
              <option>Harvesting</option>
              <option>Weeding</option>
              <option>Spraying</option>
              <option>Ploughing</option>
            </select>
          </Field>

          <Field label="📅 Date">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Field>

          <Field label="🕒 Shift">
            <select value={shift} onChange={(e) => setShift(e.target.value)}>
              <option>Morning</option>
              <option>Evening</option>
              <option>Full Day</option>
            </select>
          </Field>

          <Field label="👥 Workers">
            <input
              type="number"
              min="1"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </Field>

          <Field label="⏱️ Hours">
            <input
              type="number"
              min="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
          </Field>

        </div>

        {/* PRICE SUMMARY */}
        <div className="price-box">
          <p>💰 ₹{pricePerHour} / hour / worker</p>
          <h2>Total: ₹{total}</h2>
        </div>

        <button
          className="book-btn"
          onClick={() => setStatus("pending")}
        >
          📅 Book Workers
        </button>

        {status && (
          <div className="booking-status">
            📡 Booking Status: <b>{status === "pending" ? "Pending Confirmation" : "Confirmed"}</b>
          </div>
        )}

      </section>

      {/* AVAILABLE WORKERS */}
      <section className="workers-list">
        <h2>Available Workers Near You</h2>

        <div className="worker-cards">
          <WorkerCard name="Raju" skill={work} rating="4.8" distance="2.3 km" />
          <WorkerCard name="Suresh" skill={work} rating="4.6" distance="3.1 km" />
          <WorkerCard name="Naresh" skill={work} rating="4.7" distance="1.9 km" />
        </div>
      </section>

      {/* TRACKING */}
      <section className="tracking-box">
        <h2>🛰️ Live Tracking</h2>
        <p>Worker location tracking will appear here after confirmation</p>
      </section>

    </div>
  );
}

/* FIELD WRAPPER */
function Field({ label, children }) {
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  );
}

/* WORKER CARD */
function WorkerCard({ name, skill, rating, distance }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="worker-card">
      <h3>👷 {name}</h3>
      <p>Skill: {skill}</p>
      <p>📍 {distance} away</p>
      <span>⭐ {rating}</span>
      <span className="available">🟢 Available</span>
    </motion.div>
  );
}
