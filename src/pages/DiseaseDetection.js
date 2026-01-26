import { useState } from "react";
import { motion } from "framer-motion";
import API from "../api/api.js";
import "./DiseaseDetection.css";

export default function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ============================
        HANDLE IMAGE UPLOAD
  ============================= */
  const handleImage = (e) => {
    const imgFile = e.target.files[0];
    if (!imgFile) return;

    setImage(URL.createObjectURL(imgFile));
    setFile(imgFile);
    setResult(null);
    setError("");
  };

  /* ============================
        RUN AI DETECTION
  ============================= */
  const runDetection = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await API.post("/ai/detect/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("⚠️ Unable to analyze image. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="rm-disease-page">

      {/* ===================== HERO ===================== */}
      <motion.section
        className="rm-disease-hero"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="rm-title">AI Leaf Disease Detection</h1>
        <p className="rm-subtext">
          Upload a crop leaf image — our AI model will predict the disease with high confidence.
        </p>
      </motion.section>

      {/* ===================== UPLOAD CARD ===================== */}
      <motion.section
        className="rm-upload-card glass-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <input type="file" accept="image/*" onChange={handleImage} />

        {image && (
          <motion.img
            src={image}
            alt="Preview"
            className="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        )}

        <button className="scan-btn ripple" onClick={runDetection} disabled={!file || loading}>
          {loading ? "Analyzing..." : "🧠 Scan with AI"}
        </button>

        {error && <p className="rm-error">{error}</p>}
      </motion.section>

      {/* ===================== LOADING SKELETON ===================== */}
      {loading && (
        <motion.div
          className="rm-loading-shimmer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="shimmer-line"></div>
          <div className="shimmer-line short"></div>
          <p>AI is analyzing your image…</p>
        </motion.div>
      )}

      {/* ===================== RESULT ===================== */}
      {result && (
        <motion.section
          className="rm-result-card glass-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>🦠 Detection Result</h2>

          <div className="rm-result-grid">
            <ResultItem label="Disease" value={result.disease} />
            <ResultItem
              label="Confidence"
              value={`${(result.confidence * 100).toFixed(1)}%`}
            />
          </div>

          {/* OPTIONAL: If backend sends severity */}
          {result?.severity && (
            <ResultItem label="Severity" value={result.severity} />
          )}

          {/* OPTIONAL: If backend sends recommendations */}
          {result?.recommendation && (
            <div className="rm-recommendation">
              <h3>Recommended Treatment</h3>
              <ul>
                {result.recommendation.map((tip, i) => (
                  <li key={i}>✔ {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.section>
      )}
    </div>
  );
}

/* ============================
      SMALL COMPONENT
============================ */
function ResultItem({ label, value }) {
  return (
    <div className="rm-result-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
