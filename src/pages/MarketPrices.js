import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MarketPrices.css";

export default function MarketPrices() {
  const [crop, setCrop] = useState("");
  const [timeline, setTimeline] = useState("1Y");
  const [showAI, setShowAI] = useState(false);
  const [selectedMandi, setSelectedMandi] = useState("");
  const [priceDelta, setPriceDelta] = useState(null);

  const cropData = {
    Paddy: {
      price: 2150,
      trend: "Upward",
      mandi: "Karimnagar",
      bestDay: "Next 6–8 days",
      confidence: 92,
      loss: 260,
      history: { "6M": 2050, "1Y": 1980, "5Y": 1820 },
      mandis: [
        { name: "Karimnagar", price: 2150 },
        { name: "Warangal", price: 2080 },
        { name: "Nizamabad", price: 2025 },
      ],
    },
    Maize: {
      price: 2250,
      trend: "Stable",
      mandi: "Warangal",
      bestDay: "Hold for 10 days",
      confidence: 88,
      loss: 190,
      history: { "6M": 2200, "1Y": 2150, "5Y": 2000 },
      mandis: [
        { name: "Warangal", price: 2250 },
        { name: "Khammam", price: 2210 },
        { name: "Karimnagar", price: 2180 },
      ],
    },
    Cotton: {
      price: 6900,
      trend: "Volatile",
      mandi: "Adilabad",
      bestDay: "Sell partially",
      confidence: 84,
      loss: 520,
      history: { "6M": 7100, "1Y": 6800, "5Y": 6200 },
      mandis: [
        { name: "Adilabad", price: 6900 },
        { name: "Nanded", price: 6720 },
        { name: "Yavatmal", price: 6600 },
      ],
    },
  };

  const data = crop ? cropData[crop] : null;

  /* ===== PRICE CHANGE ANIMATION ===== */
  useEffect(() => {
    if (!data) return;
    const diff = data.price - data.history[timeline];
    setPriceDelta(diff);
  }, [timeline, crop]);

  return (
    <div className="mp-dashboard">

      {/* ================= SELECT CROP ================= */}
      <section className="mp-select">
        <h1>Market Price Intelligence</h1>
        <p>Select a crop to unlock AI-powered market insights</p>

        <select
          value={crop}
          onChange={(e) => {
            setCrop(e.target.value);
            setSelectedMandi("");
            setTimeline("1Y");
          }}
        >
          <option value="">🌾 Select Crop</option>
          {Object.keys(cropData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </section>

      {/* ================= DASHBOARD ================= */}
      {data && (
        <>
          {/* ================= SUMMARY ================= */}
          <section className="mp-summary">
            <motion.div className="card" layout>
              <span>Current Avg Price</span>
              <h2>₹ {data.price}</h2>
              {priceDelta !== null && (
                <small className={priceDelta >= 0 ? "up" : "down"}>
                  {priceDelta >= 0 ? "▲" : "▼"} ₹{Math.abs(priceDelta)} vs {timeline}
                </small>
              )}
            </motion.div>

            <motion.div className={`card trend-${data.trend.toLowerCase()}`} layout>
              <span>AI Trend</span>
              <h2>{data.trend}</h2>
              <small>Confidence: {data.confidence}%</small>
            </motion.div>

            <motion.div className="card" layout>
              <span>Best Action</span>
              <h2>{data.bestDay}</h2>
              <small>AI Recommendation</small>
            </motion.div>
          </section>

          {/* ================= TIMELINE ================= */}
          <section className="mp-timeline">
            <div className="timeline-buttons">
              {["6M", "1Y", "5Y"].map((t) => (
                <button
                  key={t}
                  className={timeline === t ? "active" : ""}
                  onClick={() => setTimeline(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.h3
                key={timeline}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Historical Avg ({timeline}): ₹ {data.history[timeline]}
              </motion.h3>
            </AnimatePresence>
          </section>

          {/* ================= MANDI COMPARISON ================= */}
          <section className="mp-mandi">
            <h2>Mandi Comparison</h2>

            <div className="mandi-grid">
              {data.mandis.map((m) => (
                <motion.div
                  key={m.name}
                  whileHover={{ scale: 1.04 }}
                  className={`mandi-card ${
                    selectedMandi === m.name ? "selected" : ""
                  }`}
                  onClick={() => setSelectedMandi(m.name)}
                >
                  <h4>{m.name}</h4>
                  <p>₹ {m.price}</p>
                  {m.name === data.mandi && (
                    <span className="best">AI Best</span>
                  )}
                </motion.div>
              ))}
            </div>

            {selectedMandi && (
              <div className="mandi-insight">
                🧠 AI Insight: {selectedMandi} offers optimal demand–supply balance.
              </div>
            )}
          </section>

          {/* ================= MIDDLEMEN ================= */}
          <section className="mp-middlemen">
            <h2>Middlemen Impact</h2>
            <p>
              Farmers lose <b>₹{data.loss}/quintal</b> via intermediaries.
            </p>
            <p className="green">
              Using Rythu Mitra AI → You retain this profit 💰
            </p>
          </section>

          {/* ================= AI EXPLAIN ================= */}
          <section className="mp-ai">
            <button onClick={() => setShowAI(true)}>
              🤖 Explain AI Market Decision
            </button>
          </section>
        </>
      )}

      {/* ================= AI MODAL ================= */}
      {showAI && data && (
        <div className="ai-modal">
          <motion.div
            className="ai-box"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3>AI Market Explanation</h3>
            <ul>
              <li>📈 Demand spike detected in {data.mandi}</li>
              <li>🌦 Weather improved crop quality</li>
              <li>🚚 Lower arrivals tightened supply</li>
              <li>🏛 MSP & policy signals evaluated</li>
            </ul>
            <button onClick={() => setShowAI(false)}>Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
