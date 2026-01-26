import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";

/* Pages (Lazy Loading) */
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CropRecommendation = lazy(() => import("./pages/CropRecommendation"));
const DiseaseDetection = lazy(() => import("./pages/DiseaseDetection"));
const MarketPrices = lazy(() => import("./pages/MarketPrices"));
const WeatherIntelligence = lazy(() => import("./pages/WeatherIntelligence"));
const Workers = lazy(() => import("./pages/Workers"));
const Transport = lazy(() => import("./pages/Transport"));
const Profile = lazy(() => import("./pages/Profile"));

/* Page Transition Wrapper */
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
}

/* 🔥 FINAL LAYOUT — ONLY ONE SIDEBAR */
function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-main">{children}</main>
    </div>
  );
}

/* Loader */
function LoadingScreen() {
  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        className="h-14 w-14 border-t-4 border-green-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Each Route Uses ONE Layout */}
            <Route
              path="/dashboard"
              element={
                <AppLayout>
                  <PageWrapper>
                    <Dashboard />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/crop-recommendation"
              element={
                <AppLayout>
                  <PageWrapper>
                    <CropRecommendation />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/disease-detection"
              element={
                <AppLayout>
                  <PageWrapper>
                    <DiseaseDetection />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/market-prices"
              element={
                <AppLayout>
                  <PageWrapper>
                    <MarketPrices />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/weather"
              element={
                <AppLayout>
                  <PageWrapper>
                    <WeatherIntelligence />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/workers"
              element={
                <AppLayout>
                  <PageWrapper>
                    <Workers />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/transport"
              element={
                <AppLayout>
                  <PageWrapper>
                    <Transport />
                  </PageWrapper>
                </AppLayout>
              }
            />

            <Route
              path="/profile"
              element={
                <AppLayout>
                  <PageWrapper>
                    <Profile />
                  </PageWrapper>
                </AppLayout>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </BrowserRouter>
  );
}
