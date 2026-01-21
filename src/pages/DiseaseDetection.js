import { useState } from "react";
import { motion } from "framer-motion";
import "./DiseaseDetection.css";

export default function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setResult(null);
  };

  const runDetection = () => {
    setLoading(true);

    // Simulated AI response (replace with backend later)
    setTimeout(() => {
      setResult({
        disease: "Leaf Blight",
        confidence: "91%",
        severity: "Medium",
        treatment: [
          "Use Mancozeb fungicide",
          "Avoid over-irrigation",
          "Remove infected leaves"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="rm-disease">

      {/* HERO */}
      <section className="rm-disease-hero">
        <h1>AI Disease Detection</h1>
        <p>
          Upload crop images to detect diseases using deep learning & computer vision.
        </p>
      </section>

      {/* UPLOAD */}
      <section className="rm-upload-card">
        <input type="file" accept="image/*" onChange={handleImage} />

        {image && (
          <motion.img
            src={image}
            alt="Crop"
            className="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        <button onClick={runDetection} disabled={!image}>
          🧠 Scan with AI
        </button>
      </section>

      {/* LOADING */}
      {loading && (
        <div className="rm-loading">
          🔍 AI analyzing crop image...
        </div>
      )}

      {/* RESULT */}
      {result && (
        <motion.section
          className="rm-result-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>🦠 Disease Detected</h2>

          <div className="rm-result-grid">
            <ResultItem label="Disease" value={result.disease} />
            <ResultItem label="Confidence" value={result.confidence} />
            <ResultItem label="Severity" value={result.severity} />
          </div>

          <h3>Recommended Treatment</h3>
          <ul>
            {result.treatment.map((t, i) => (
              <li key={i}>✔ {t}</li>
            ))}
          </ul>
        </motion.section>
      )}

    </div>
  );
}

/* COMPONENT */
function ResultItem({ label, value }) {
  return (
    <div className="rm-result-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
