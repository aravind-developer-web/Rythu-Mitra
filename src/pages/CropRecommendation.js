import { useState } from "react";
import { motion } from "framer-motion";
import "./CropRecommendation.css";

export default function CropRecommendation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rm-crop">

      {/* HERO */}
      <section className="rm-crop-hero">
        <div>
          <h1>AI Crop Recommendation</h1>
          <p>
            Smart crop selection powered by AI, ML models, and real-time climate intelligence.
          </p>
        </div>
      </section>

      {/* INPUT FORM */}
      <section className="rm-crop-form">
        <h2>Enter Farm Details</h2>

        <div className="rm-form-grid">
          <input placeholder="📍 Location (e.g. Telangana)" />
          <select>
            <option>Soil Type</option>
            <option>Black Soil</option>
            <option>Red Soil</option>
            <option>Alluvial Soil</option>
          </select>

          <select>
            <option>Season</option>
            <option>Kharif</option>
            <option>Rabi</option>
            <option>Zaid</option>
          </select>

          <select>
            <option>Water Availability</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button onClick={() => setSubmitted(true)}>
          🧠 Run AI Prediction
        </button>
      </section>

      {/* AI RESULTS */}
      {submitted && (
        <section className="rm-ai-result">
          <h2>AI Recommended Crops</h2>

          <div className="rm-result-grid">
            <CropCard
              crop="Maize"
              yieldVal="4.2 tons/acre"
              profit="₹45,000 – ₹55,000"
              risk="Low"
              confidence="92%"
              img="https://images.unsplash.com/photo-1598514982845-ecb2d1dc2f86"
            />

            <CropCard
              crop="Cotton"
              yieldVal="3.1 tons/acre"
              profit="₹50,000 – ₹65,000"
              risk="Medium"
              confidence="86%"
              img="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            />

            <CropCard
              crop="Soybean"
              yieldVal="2.8 tons/acre"
              profit="₹38,000 – ₹48,000"
              risk="Low"
              confidence="81%"
              img="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            />
          </div>
        </section>
      )}

    </div>
  );
}

/* COMPONENT */
function CropCard({ crop, yieldVal, profit, risk, confidence, img }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="rm-crop-card"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay">
        <h3>{crop}</h3>
        <p>🌾 Yield: {yieldVal}</p>
        <p>💰 Profit: {profit}</p>
        <p>🦠 Risk: {risk}</p>
        <span>AI Confidence: {confidence}</span>
      </div>
    </motion.div>
  );
}
