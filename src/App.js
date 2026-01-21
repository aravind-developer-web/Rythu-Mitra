import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

/* ======================
   PAGES
====================== */

// Dashboard
import Dashboard from "./pages/Dashboard";

// AI Modules
import CropRecommendation from "./pages/CropRecommendation";
import DiseaseDetection from "./pages/DiseaseDetection";
import MarketPrices from "./pages/MarketPrices";
import WeatherIntelligence from "./pages/WeatherIntelligence";

// Operations
import Workers from "./pages/Workers";
import Transport from "./pages/Transport";

// Profile
import Profile from "./pages/Profile";

/* ======================
   LAYOUT
====================== */
function AppLayout({ children }) {
  return (
    <div className="app-layout">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main content (scrollable) */}
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}

/* ======================
   APP
====================== */
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        {/* AI Modules */}
        <Route
          path="/crop-recommendation"
          element={
            <AppLayout>
              <CropRecommendation />
            </AppLayout>
          }
        />

        <Route
          path="/disease-detection"
          element={
            <AppLayout>
              <DiseaseDetection />
            </AppLayout>
          }
        />

        <Route
          path="/market-prices"
          element={
            <AppLayout>
              <MarketPrices />
            </AppLayout>
          }
        />

        <Route
          path="/weather"
          element={
            <AppLayout>
              <WeatherIntelligence />
            </AppLayout>
          }
        />

        {/* Operations */}
        <Route
          path="/workers"
          element={
            <AppLayout>
              <Workers />
            </AppLayout>
          }
        />

        <Route
          path="/transport"
          element={
            <AppLayout>
              <Transport />
            </AppLayout>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
