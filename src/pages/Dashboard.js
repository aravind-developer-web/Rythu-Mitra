/* ============================================================
   Rythu Mitra — FAANG Dashboard (Clean, Error-Free Version)
============================================================ */

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

/* COMPONENTS */
import AIAssistantWidget from "../components/AIAssistantWidget";
import SearchModal from "../components/SearchModal";
import ExplainableModal from "../components/ExplainableModal";

/* CHARTS */
import WeatherChart from "../components/charts/WeatherChart";
import DiseaseRiskChart from "../components/charts/DiseaseRiskChart";
import SoilMoistureChart from "../components/charts/SoilMoistureChart";
import CropGrowthChart from "../components/charts/CropGrowthChart";

/* STYLES */
import "./Dashboard.css";

/* ============================================================ */

export default function Dashboard() {
  const navigate = useNavigate();

  /* -------------------- THEME ENGINE -------------------- */
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  /* -------------------- SEARCH MODAL -------------------- */
  const [searchOpen, setSearchOpen] = useState(false);

  const handleKeyPress = useCallback((e) => {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  /* -------------------- TOAST ALERT -------------------- */
  useEffect(() => {
    setTimeout(() => {
      toast("⚠️ Rain expected in next 12 hours — adjust irrigation.", {
        icon: "🌧",
      });
    }, 1200);
  }, []);

  /* -------------------- INSIGHT CARDS -------------------- */
  const insights = [
    {
      title: "Crop Health",
      value: "92%",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600",
      reason: "Healthy nutrient levels",
    },
    {
      title: "Disease Risk",
      value: "Low",
      img: "https://images.unsplash.com/photo-1584449937076-2c272e60f7d1?w=1600",
      reason: "No fungal signatures detected",
    },
    {
      title: "Market Trend",
      value: "Upward",
      img: "https://images.unsplash.com/photo-1602526218251-f61ba0bbf203?w=1600",
      reason: "High mandi demand",
    },
    {
      title: "Weather Index",
      value: "Stable",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600",
      reason: "Ideal climate",
    },
  ];

  /* -------------------- FEATURES / MODULES -------------------- */
  const modules = [
    {
      title: "AI Crop Recommendation",
      desc: "Soil, season & climate based suggestions.",
      img: "https://images.unsplash.com/photo-1602526218251-f61ba0bbf203?w=1600",
      route: "/crop-recommendation",
    },
    {
      title: "AI Disease Detection",
      desc: "Scan leaf images using AI Vision.",
      img: "https://images.unsplash.com/photo-1584449937076-2c272e60f7d1?w=1600",
      route: "/disease-detection",
    },
    {
      title: "Market Price Insights",
      desc: "Analyze mandi price trends.",
      img: "https://images.unsplash.com/photo-1598201385881-b940baf0b31b?w=1600",
      route: "/market-prices",
    },
    {
      title: "Weather Intelligence",
      desc: "Track micro-climate in your farm.",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600",
      route: "/weather",
    },
  ];

  /* -------------------- MODAL STATE -------------------- */
  const [modalData, setModalData] = useState(null);

  /* ============================================================
       MAIN JSX
  ============================================================ */

  return (
    <>
      {/* Floating AI Assistant */}
      <AIAssistantWidget />

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
        )}
      </AnimatePresence>

      {/* WRAPPER */}
      <motion.div
        className="rm-dashboard"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* THEME TOGGLE */}
        <button
          className="rm-dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* HERO */}
        <section className="rm-hero">
          <div className="rm-hero-left">
            <span className="rm-badge">🌾 Smart Agriculture AI</span>

            <h1 className="rm-title">
              Rythu Mitra <br />
              <span className="rm-title-gradient">
                Next-Gen Farming Dashboard
              </span>
            </h1>

            <p className="rm-subtext">
              AI crop insights, market predictions, weather intelligence,
              and disease detection — built for modern Indian farmers.
            </p>

            <div className="rm-hero-actions">
              <button onClick={() => navigate("/crop-recommendation")}>
                🌱 AI Crop Advisor
              </button>

              <button
                className="secondary"
                onClick={() => navigate("/disease-detection")}
              >
                📸 Scan Disease
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600"
            alt="Farm"
            className="rm-hero-image"
          />
        </section>

        {/* ALERT */}
        <div className="rm-alert-strip">
          ⚠️ Mild rainfall predicted — optimize irrigation for next 12 hours.
        </div>

        {/* CHARTS */}
        <section className="rm-charts">
          <WeatherChart />
          <DiseaseRiskChart />
          <SoilMoistureChart />
          <CropGrowthChart />
        </section>

        {/* INSIGHTS */}
        <section className="rm-insights">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="rm-insight"
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => setModalData(item)}
            >
              <h4>{item.title}</h4>
              <h2>{item.value}</h2>
              <small>{item.reason}</small>
            </div>
          ))}
        </section>

        {/* MODULES */}
        <section className="rm-modules">
          <h2 className="rm-section-title">AI Intelligence Tools</h2>

          <div className="rm-module-grid">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="rm-module"
                onClick={() => navigate(m.route)}
              >
                <img src={m.img} alt={m.title} />
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <span>Explore →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATIONS */}
        <section className="rm-operations">
          <div
            className="rm-op"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1528685921573-a3f1e8c0f6c4?w=1600)",
            }}
            onClick={() => navigate("/workers")}
          >
            <h3>Worker Booking</h3>
          </div>

          <div
            className="rm-op"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600)",
            }}
            onClick={() => navigate("/transport")}
          >
            <h3>Transport Services</h3>
          </div>
        </section>

        {/* MODAL */}
        <ExplainableModal
          open={Boolean(modalData)}
          data={modalData}
          onClose={() => setModalData(null)}
        />
      </motion.div>
    </>
  );
}
