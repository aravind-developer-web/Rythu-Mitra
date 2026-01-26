// -----------------------------------------------
//  ULTRA-ADVANCED AI CROP RECOMMENDATION ENGINE
//  BY CHATGPT (Full Overdrive Mode for Aravind)
// -----------------------------------------------

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CropRecommendation.css";

// --------------------------------------------------
//  BACKGROUND MODES (A, B, C, D)
// --------------------------------------------------

const BACKGROUND_MODES = {
  A: {
    id: "agri-image",
    label: "🌾 Agriculture Image Mode",
    type: "image",
    url: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=1600&q=80"
  },

  B: {
    id: "agri-video",
    label: "🎥 Agriculture Video Mode",
    type: "video",
    url: "https://cdn.coverr.co/videos/coverr-wheat-field-1080p.mp4"
  },

  C: {
    id: "sci-fi",
    label: "🟢 Sci-Fi AI Mode",
    type: "image",
    url: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1600&q=80"
  },

  D: {
    id: "hybrid",
    label: "🌌 Hybrid (AI + Nature)",
    type: "image",
    url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
  }
};

// --------------------------------------------------
//  MASSIVE AI CROP PREDICTION ENGINE (Dummy Data)
// --------------------------------------------------

const AI_PREDICTION_SETS = [
  {
    title: "🌟 High Profit Premium Crops (AI Set 1)",
    crops: [
      {
        crop: "Avocado",
        img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
        yieldVal: "3.9 tons/acre",
        profit: "₹85,000 – ₹120,000",
        risk: "Low",
        climate: "Warm & Humid",
        soil: "Black Soil",
        water: "Medium",
        confidence: "95%"
      },
      {
        crop: "Dragon Fruit",
        img: "https://images.unsplash.com/photo-1622034214204-3be898c758b3",
        yieldVal: "2.5 tons/acre",
        profit: "₹90,000 – ₹140,000",
        risk: "Low",
        climate: "Tropical",
        soil: "Sandy Loam",
        water: "Low",
        confidence: "92%"
      },
      {
        crop: "Hybrid Cotton",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
        yieldVal: "3.3 tons/acre",
        profit: "₹70,000 – ₹95,000",
        risk: "Medium",
        climate: "Dry & Warm",
        soil: "Black Soil",
        water: "Medium",
        confidence: "88%"
      },
      {
        crop: "Premium Maize",
        img: "https://images.unsplash.com/photo-1598514982845-ecb2d1dc2f86",
        yieldVal: "4.4 tons/acre",
        profit: "₹40,000 – ₹55,000",
        risk: "Low",
        climate: "Moderate",
        soil: "Alluvial",
        water: "Medium",
        confidence: "96%"
      },
      {
        crop: "Hybrid Paddy",
        img: "https://images.unsplash.com/photo-1605474668366-5b3aa2189f50",
        yieldVal: "5.0 tons/acre",
        profit: "₹50,000 – ₹70,000",
        risk: "Medium",
        climate: "Humid",
        soil: "Clayey",
        water: "High",
        confidence: "89%"
      }
    ]
  },

  // --------------------------------------------------
  // SET 2 — LOW RISK STABLE CROPS
  // --------------------------------------------------

  {
    title: "🛡️ Low Risk Stable Crops (AI Set 2)",
    crops: [
      {
        crop: "Wheat",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        yieldVal: "3.1 tons/acre",
        profit: "₹35,000 – ₹45,000",
        risk: "Very Low",
        climate: "Cool & Dry",
        soil: "Loamy",
        water: "Medium",
        confidence: "93%"
      },
      {
        crop: "Chickpea",
        img: "https://images.unsplash.com/photo-1506807803488-8eafc15316c8",
        yieldVal: "1.8 tons/acre",
        profit: "₹25,000 – ₹35,000",
        risk: "Very Low",
        climate: "Dry",
        soil: "Black Soil",
        water: "Low",
        confidence: "90%"
      },
      {
        crop: "Groundnut",
        img: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
        yieldVal: "2.6 tons/acre",
        profit: "₹38,000 – ₹48,000",
        risk: "Low",
        climate: "Dry Warm",
        soil: "Sandy",
        water: "Low",
        confidence: "88%"
      },
      {
        crop: "Mustard",
        img: "https://images.unsplash.com/photo-1570045654818-88b62d24970e",
        yieldVal: "1.3 tons/acre",
        profit: "₹28,000 – ₹40,000",
        risk: "Low",
        climate: "Cold",
        soil: "Loamy",
        water: "Low",
        confidence: "86%"
      },
      {
        crop: "Jowar",
        img: "https://images.unsplash.com/photo-1620714584507-36d7b4d57c05",
        yieldVal: "2.1 tons/acre",
        profit: "₹22,000 – ₹32,000",
        risk: "Very Low",
        climate: "Dry",
        soil: "Red Soil",
        water: "Low",
        confidence: "89%"
      }
    ]
  },

  // --------------------------------------------------
  // SET 3 — CLIMATE SMART FUTURE CROPS
  // --------------------------------------------------

  {
    title: "🌍 Climate-Smart Future Crops (AI Set 3)",
    crops: [
      {
        crop: "Quinoa",
        img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
        yieldVal: "1.5 tons/acre",
        profit: "₹45,000 – ₹65,000",
        risk: "Low",
        climate: "Dry & Cold",
        soil: "Sandy Loam",
        water: "Low",
        confidence: "88%"
      },
      {
        crop: "Millet (Pearl)",
        img: "https://images.unsplash.com/photo-1620714584507-36d7b4d57c05",
        yieldVal: "1.8 tons/acre",
        profit: "₹38,000 – ₹55,000",
        risk: "Very Low",
        climate: "Hot & Dry",
        soil: "Red Soil",
        water: "Low",
        confidence: "91%"
      },
      {
        crop: "Spirulina Ponds",
        img: "https://images.unsplash.com/photo-1483422166410-1d4f0bf86f88",
        yieldVal: "8.0 tons/year",
        profit: "₹90,000 – ₹140,000",
        risk: "Medium",
        climate: "Warm",
        soil: "Water-based system",
        water: "High",
        confidence: "85%"
      },
      {
        crop: "Climate Hybrid Sunflower",
        img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        yieldVal: "2.0 tons/acre",
        profit: "₹40,000 – ₹60,000",
        risk: "Low",
        climate: "Warm",
        soil: "Loamy",
        water: "Medium",
        confidence: "92%"
      },
      {
        crop: "Agroforestry Bamboo",
        img: "https://images.unsplash.com/photo-1593508911547-315b2a8f1a21",
        yieldVal: "12 tons/year",
        profit: "₹100,000 – ₹180,000",
        risk: "Low",
        climate: "Any",
        soil: "Any",
        water: "Low",
        confidence: "94%"
      }
    ]
  },

  // --------------------------------------------------
  // SET 4 — YIELD MAXIMIZERS
  // --------------------------------------------------

  {
    title: "🚀 AI Yield Maximizer Crops (AI Set 4)",
    crops: [
      {
        crop: "Sugarcane",
        img: "https://images.unsplash.com/photo-1583137480769-1c4db7b3529a",
        yieldVal: "50 tons/acre",
        profit: "₹80,000 – ₹120,000",
        risk: "Medium",
        climate: "Humid Warm",
        soil: "Clay Loam",
        water: "High",
        confidence: "90%"
      },
      {
        crop: "Banana",
        img: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
        yieldVal: "16 tons/acre",
        profit: "₹70,000 – ₹100,000",
        risk: "Medium",
        climate: "Humid",
        soil: "Loamy",
        water: "High",
        confidence: "87%"
      },
      {
        crop: "Potato",
        img: "https://images.unsplash.com/photo-1506806728577-2f6f1a6a8ee2",
        yieldVal: "10 tons/acre",
        profit: "₹60,000 – ₹80,000",
        risk: "Low",
        climate: "Cold",
        soil: "Black Soil",
        water: "Medium",
        confidence: "93%"
      },
      {
        crop: "Onion",
        img: "https://images.unsplash.com/photo-1528830849151-2f18cc281928",
        yieldVal: "9 tons/acre",
        profit: "₹55,000 – ₹75,000",
        risk: "Low",
        climate: "Warm",
        soil: "Sandy",
        water: "Low",
        confidence: "89%"
      },
      {
        crop: "Hybrid Brinjal",
        img: "https://images.unsplash.com/photo-1629381778698-d36216dd75d1",
        yieldVal: "7 tons/acre",
        profit: "₹40,000 – ₹60,000",
        risk: "Medium",
        climate: "Warm",
        soil: "Loamy",
        water: "Medium",
        confidence: "86%"
      }
    ]
  }
];

// --------------------------------------------------
// REUSABLE COMPONENT
// --------------------------------------------------

function CropCard({ crop }) {
  return (
    <motion.div
      className="ultra-crop-card"
      whileHover={{ scale: 1.06 }}
      style={{ backgroundImage: `url(${crop.img})` }}
    >
      <div className="card-overlay">
        <h3>{crop.crop}</h3>
        <p>🌾 Yield: {crop.yieldVal}</p>
        <p>💰 Profit: {crop.profit}</p>
        <p>🧪 Risk: {crop.risk}</p>
        <p>🌤️ Climate: {crop.climate}</p>
        <p>🧱 Soil: {crop.soil}</p>
        <p>💧 Water: {crop.water}</p>
        <span>🤖 AI Confidence: {crop.confidence}</span>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------
//    MAIN COMPONENT
// --------------------------------------------------

export default function CropRecommendation() {
  const [submitted, setSubmitted] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState("A");

  return (
    <div className={`ultra-container mode-${backgroundMode}`}>
      
      {/* ---------------------------------------------- */}
      {/* BACKGROUND SYSTEM */}
      {/* ---------------------------------------------- */}

      {BACKGROUND_MODES[backgroundMode].type === "video" && (
        <video autoPlay loop muted className="video-bg">
          <source src={BACKGROUND_MODES[backgroundMode].url} />
        </video>
      )}

      {BACKGROUND_MODES[backgroundMode].type === "image" && (
        <div
          className="image-bg"
          style={{
            backgroundImage: `url(${BACKGROUND_MODES[backgroundMode].url})`
          }}
        />
      )}

      {/* ---------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ---------------------------------------------- */}

      <section className="ultra-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>🌾 AI Crop Recommendation Engine</h1>
          <p>
            Experience the world’s most advanced agriculture intelligence
            system powered by ML, satellite data, soil analytics and AI.
          </p>
        </motion.div>
      </section>

      {/* ---------------------------------------------- */}
      {/* BACKGROUND SWITCHER */}
      {/* ---------------------------------------------- */}

      <div className="background-switch-container">
        {Object.entries(BACKGROUND_MODES).map(([key, mode]) => (
          <button
            key={key}
            className={key === backgroundMode ? "switch-btn active" : "switch-btn"}
            onClick={() => setBackgroundMode(key)}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* ---------------------------------------------- */}
      {/* FORM SECTION */}
      {/* ---------------------------------------------- */}

      <motion.div
        className="ultra-form-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>🌱 Enter Farm Details</h2>

        <div className="form-grid">
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
            <option>Water Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <motion.button
          className="ultra-ai-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setSubmitted(true)}
        >
          🚀 Run AI Prediction
        </motion.button>
      </motion.div>

      {/* ---------------------------------------------- */}
      {/* PREDICTION SECTION */}
      {/* ---------------------------------------------- */}

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="prediction-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {AI_PREDICTION_SETS.map((set, index) => (
              <div key={index} className="prediction-set">
                <h2>{set.title}</h2>
                <div className="prediction-grid">
                  {set.crops.map((crop, idx) => (
                    <CropCard key={idx} crop={crop} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
