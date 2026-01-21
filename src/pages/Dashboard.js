import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import ExplainableModal from "../components/ExplainableModal";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null);

  return (
    <div className="rm-dashboard">

      {/* ================= HERO ================= */}
      <section className="rm-hero">
        <div className="rm-hero-left">
          <span className="rm-badge">🌾 Smart Agriculture AI</span>

          <h1>Rythu Mitra</h1>
          <p>
            AI-powered agriculture intelligence platform helping farmers with
            crop planning, disease detection, market insights, and operations.
          </p>

          <div className="rm-hero-actions">
            <button onClick={() => navigate("/crop-recommendation")}>
              🌱 Get AI Crop Advice
            </button>
            <button className="secondary" onClick={() => navigate("/disease-detection")}>
              📸 Scan Crop Disease
            </button>
          </div>
        </div>

        <motion.div
          className="rm-ai-brief"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Today’s AI Farm Brief</h3>
          <ul>
            <li>🌾 Recommended crop: <b>Maize</b></li>
            <li>🦠 Disease risk: <b>Low (92%)</b></li>
            <li>🌦️ Rain expected in <b>48 hours</b></li>
            <li>💰 Market trend: <b>Favorable</b></li>
          </ul>
        </motion.div>
      </section>

      {/* ================= ALERT ================= */}
      <div className="rm-alert-strip">
        ⚠️ Light rainfall expected in next 48 hours — plan irrigation accordingly
      </div>

      {/* ================= INSIGHTS ================= */}
      <section className="rm-insights">
        <Insight
          title="Crop Health"
          value="92%"
          img="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200"
          reason="Healthy growth & nutrients"
          onClick={() =>
            setModalData({
              title: "Crop Health",
              value: "92%",
              confidence: 94,
              reasons: [
                "Balanced NPK nutrients",
                "Healthy chlorophyll levels",
                "Optimized irrigation cycle",
              ],
            })
          }
        />

        <Insight
          title="Disease Risk"
          value="Low"
          img="https://images.unsplash.com/photo-1598514982845-ecb2d1dc2f86?q=80&w=1200"
          reason="No leaf disease patterns"
          onClick={() =>
            setModalData({
              title: "Disease Risk",
              value: "Low",
              confidence: 92,
              reasons: [
                "No fungal spots detected",
                "Favorable humidity",
                "Healthy leaf texture",
              ],
            })
          }
        />

        <Insight
          title="Market Trend"
          value="Upward"
          img="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1200"
          reason="High mandi demand"
          onClick={() =>
            setModalData({
              title: "Market Trend",
              value: "Upward",
              confidence: 88,
              reasons: [
                "Increased buyer demand",
                "Lower current supply",
                "Seasonal price growth",
              ],
            })
          }
        />

        <Insight
          title="Weather Alert"
          value="Moderate"
          img="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1200"
          reason="Light rainfall forecast"
          onClick={() =>
            setModalData({
              title: "Weather Alert",
              value: "Moderate",
              confidence: 90,
              reasons: [
                "Rain expected in 48 hours",
                "No storm risk",
                "Good sowing conditions",
              ],
            })
          }
        />
      </section>

      {/* ================= AI MODULES ================= */}
      <section className="rm-modules">
        <h2>AI Intelligence Modules</h2>

        <div className="rm-module-grid">
          <Module
            title="AI Crop Recommendation"
            desc="Soil, season & climate-based crop suggestions."
            img="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200"
            onClick={() => navigate("/crop-recommendation")}
          />

          <Module
            title="AI Disease Detection"
            desc="Upload crop images to detect diseases & treatments."
            img="https://images.unsplash.com/photo-1598514982845-ecb2d1dc2f86?q=80&w=1200"
            onClick={() => navigate("/disease-detection")}
          />

          <Module
            title="Market Price Intelligence"
            desc="AI-powered mandi price forecasting."
            img="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1200"
            onClick={() => navigate("/market-prices")}
          />

          <Module
            title="Weather Intelligence"
            desc="Hyper-local weather alerts for farming."
            img="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1200"
            onClick={() => navigate("/weather")}
          />
        </div>
      </section>

      {/* ================= OPERATIONS ================= */}
      <section className="rm-operations">
        <Op
          title="Worker Booking"
          img="https://images.unsplash.com/photo-1592982537447-6f2a6a7d1a4d?q=80&w=1200"
          onClick={() => navigate("/workers")}
        />
        <Op
          title="Transport Booking"
          img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"
          onClick={() => navigate("/transport")}
        />
      </section>

      {/* ================= MODAL ================= */}
      <ExplainableModal
        open={Boolean(modalData)}
        data={modalData}
        onClose={() => setModalData(null)}
      />
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function Insight({ title, value, img, reason, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rm-insight"
      style={{ backgroundImage: `url(${img})` }}
      onClick={onClick}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
      <small>{reason}</small>
    </motion.div>
  );
}

function Module({ title, desc, img, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="rm-module" onClick={onClick}>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>Explore →</span>
      </div>
    </motion.div>
  );
}

function Op({ title, img, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rm-op"
      style={{ backgroundImage: `url(${img})` }}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </motion.div>
  );
}
