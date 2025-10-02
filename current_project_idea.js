import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Play,
  Pause,
  SkipForward,
  Users,
  DollarSign,
  Home,
  Droplets,
  AlertTriangle,
  Activity,
  MapPin,
  Wind,
  Cloud,
  Thermometer,
} from "lucide-react";
import "leaflet/dist/leaflet.css";

// Data
const rainfallData = [
  { day: "210", rain: 45 },
  { day: "220", rain: 380 },
  { day: "230", rain: 120 },
  { day: "240", rain: 450 },
  { day: "250", rain: 280 },
  { day: "260", rain: 520 },
  { day: "270", rain: 180 },
  { day: "280", rain: 420 },
  { day: "290", rain: 340 },
  { day: "300", rain: 480 },
];

const temperatureData = [
  { time: "00:00", temp: 28 },
  { time: "04:00", temp: 26 },
  { time: "08:00", temp: 30 },
  { time: "12:00", temp: 35 },
  { time: "16:00", temp: 33 },
  { time: "20:00", temp: 29 },
];

const soilMoistureData = [
  { location: "Zone A", moisture: 78 },
  { location: "Zone B", moisture: 92 },
  { location: "Zone C", moisture: 65 },
  { location: "Zone D", moisture: 88 },
];

const riskAssessmentData = [
  { category: "Flood", value: 85 },
  { category: "Landslide", value: 72 },
  { category: "Infrastructure", value: 68 },
  { category: "Population", value: 91 },
  { category: "Agriculture", value: 78 },
];

const damageDistribution = [
  { name: "Housing", value: 35, color: "#3b82f6" },
  { name: "Agriculture", value: 28, color: "#10b981" },
  { name: "Infrastructure", value: 22, color: "#f59e0b" },
  { name: "Healthcare", value: 15, color: "#ef4444" },
];

const floodProbabilityData = Array.from({ length: 35 }, (_, i) => ({
  hour: i * 4,
  probability: i < 20 ? Math.random() * 40 + 10 : Math.random() * 150 + 50,
  threshold: 70,
}));

const regionalData = [
  { region: "Dhaka", population: 4.2, risk: 78, damage: 1.2 },
  { region: "Chittagong", population: 3.8, risk: 92, damage: 2.1 },
  { region: "Sylhet", population: 2.1, risk: 88, damage: 0.9 },
  { region: "Rajshahi", population: 1.5, risk: 65, damage: 0.5 },
  { region: "Khulna", population: 1.9, risk: 81, damage: 0.8 },
];

const evacuationData = [
  { time: 0, completed: 0, target: 5000 },
  { time: 6, completed: 1200, target: 5000 },
  { time: 12, completed: 2800, target: 5000 },
  { time: 18, completed: 4200, target: 5000 },
  { time: 24, completed: 4900, target: 5000 },
];

const riskLocations = [
  {
    id: 1,
    name: "Feni District",
    coords: [23.0239, 91.3967],
    risk: "critical",
    population: 1.5,
    predictedDamage: 850,
  },
  {
    id: 2,
    name: "Cox's Bazar",
    coords: [21.4272, 92.0058],
    risk: "high",
    population: 2.3,
    predictedDamage: 620,
  },
  {
    id: 3,
    name: "Sylhet City",
    coords: [24.8949, 91.8687],
    risk: "high",
    population: 0.5,
    predictedDamage: 340,
  },
  {
    id: 4,
    name: "Khulna Port",
    coords: [22.8456, 89.5403],
    risk: "medium",
    population: 0.8,
    predictedDamage: 210,
  },
  {
    id: 5,
    name: "Chittagong",
    coords: [22.3569, 91.7832],
    risk: "critical",
    population: 3.8,
    predictedDamage: 1250,
  },
];

export default function DisasterDashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [mapLayer, setMapLayer] = useState("satellite");

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev + 1) % 168);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const bangladeshCenter = [23.8103, 90.4125];

  const getRiskColor = (risk) => {
    switch (risk) {
      case "critical":
        return "#dc2626";
      case "high":
        return "#f59e0b";
      case "medium":
        return "#eab308";
      default:
        return "#22c55e";
    }
  };

  return (
    <div className="dashboard">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          overflow: hidden;
        }

        .dashboard {
          width: 100vw;
          height: 100vh;
          position: relative;
          background: #0a0e27;
        }

        .leaflet-container {
          width: 100%;
          height: 100%;
          background: #0a0e27;
        }

        /* Overlays Container */
        .hud-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 1000;
        }

        .hud-container > * {
          pointer-events: auto;
        }

        /* Text with shadow for readability */
        .hud-text {
          text-shadow: 0 0 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(0, 0, 0, 0.7), 
                       0 2px 4px rgba(0, 0, 0, 1);
        }

        /* Main Title */
        .main-title {
          position: absolute;
          top: 1vh;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .title-primary {
          font-size: clamp(16px, 2vw, 28px);
          font-weight: 900;
          letter-spacing: 0.2em;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.6));
        }

        .title-secondary {
          font-size: clamp(8px, 0.7vw, 11px);
          color: #e2e8f0;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-shadow: 0 0 10px rgba(0, 0, 0, 1), 0 2px 4px rgba(0, 0, 0, 1);
          margin-top: 0.3vh;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(9px, 0.75vw, 12px);
          color: #f1f5f9;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.8vh;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          border-bottom: 2px solid rgba(255, 255, 255, 0.5);
          padding-bottom: 0.4vh;
        }

        /* Top Left - Control & Alerts */
        .top-left-group {
          position: absolute;
          top: 6vh;
          left: 1vw;
          width: 16vw;
          min-width: 180px;
        }

        .control-panel {
          margin-bottom: 2vh;
        }

        .time-display {
          text-align: center;
          margin-bottom: 1vh;
        }

        .time-value {
          font-size: clamp(20px, 2.2vw, 32px);
          font-weight: 900;
          color: #3b82f6;
          text-shadow: 0 0 15px rgba(59, 130, 246, 1), 0 0 25px rgba(59, 130, 246, 0.7), 0 2px 6px rgba(0, 0, 0, 1);
          line-height: 1;
        }

        .time-label {
          font-size: clamp(8px, 0.7vw, 10px);
          color: #e0f2fe;
          margin-top: 0.4vh;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .controls {
          display: flex;
          gap: 0.5vw;
          margin-bottom: 1vh;
        }

        .control-btn {
          flex: 1;
          background: rgba(255, 255, 255, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: #f1f5f9;
          padding: 0.7vh 0;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3vw;
          font-size: clamp(9px, 0.75vw, 11px);
          font-weight: 700;
          transition: all 0.2s;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.45);
          border-color: rgba(255, 255, 255, 0.8);
          color: #fff;
        }

        .layer-toggle {
          display: flex;
          gap: 0.4vw;
        }

        .layer-btn {
          flex: 1;
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #e0f2fe;
          padding: 0.6vh 0;
          border-radius: 5px;
          cursor: pointer;
          font-size: clamp(8px, 0.7vw, 10px);
          font-weight: 600;
          transition: all 0.2s;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .layer-btn.active {
          background: rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.8);
          color: #fff;
        }

        /* Alert Items */
        .alerts-section {
          margin-top: 2vh;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          padding: 1vh 1vw;
          border-radius: 8px;
          border: 1px solid rgba(30, 41, 59, 0.8);
        }

        .alert-item {
          margin-bottom: 0.8vh;
          padding: 0.7vh 0.8vw;
          border-left: 3px solid;
          background: rgba(30, 41, 59, 0.75);
          border-radius: 0 4px 4px 0;
        }

        .alert-item.critical {
          border-left-color: #dc2626;
          background: rgba(220, 38, 38, 0.7);
        }

        .alert-item.warning {
          border-left-color: #f59e0b;
          background: rgba(245, 158, 11, 0.7);
        }

        .alert-item.info {
          border-left-color: #3b82f6;
          background: rgba(30, 41, 59, 0.75);
        }

        .alert-header {
          display: flex;
          align-items: center;
          gap: 0.5vw;
          margin-bottom: 0.4vh;
        }

        .alert-icon {
          font-size: 13px;
        }

        .alert-time {
          margin-left: auto;
          color: #cbd5e1;
          font-size: clamp(7px, 0.65vw, 9px);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .alert-message {
          color: #f1f5f9;
          font-size: clamp(8px, 0.7vw, 10px);
          line-height: 1.4;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Bottom Left - Stats */
        .bottom-left-stats {
          position: absolute;
          bottom: 1.5vh;
          left: 1vw;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1vw;
          width: 38vw;
          min-width: 400px;
        }

        .stat-card {
          text-align: center;
          padding: 1vh 0.8vw;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 6px;
          border: 1px solid rgba(30, 41, 59, 0.8);
          transition: all 0.2s;
        }

        .stat-card:hover {
          background: rgba(15, 23, 42, 0.85);
          border-color: rgba(59, 130, 246, 0.7);
          transform: translateY(-2px);
        }

        .stat-icon {
          color: #60a5fa;
          margin-bottom: 0.5vh;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
        }

        .stat-label {
          color: #cbd5e1;
          font-size: clamp(7px, 0.65vw, 9px);
          text-transform: uppercase;
          margin-bottom: 0.4vh;
          letter-spacing: 0.1em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .stat-value {
          color: #fff;
          font-size: clamp(16px, 1.6vw, 24px);
          font-weight: 900;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(0, 0, 0, 0.7);
        }

        /* Middle Bottom - Charts */
        .bottom-center-charts {
          position: absolute;
          bottom: 1.5vh;
          left: 40vw;
          width: 42vw;
          display: flex;
          gap: 1vw;
        }

        .chart-panel {
          flex: 1;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          padding: 1vh 1vw;
          border-radius: 8px;
          border: 1px solid rgba(30, 41, 59, 0.8);
        }

        /* Right Side - Regional & More */
        .right-side-group {
          position: absolute;
          top: 6vh;
          right: 1vw;
          width: 16vw;
          min-width: 180px;
          max-height: 92vh;
          overflow-y: auto;
        }

        .right-side-group::-webkit-scrollbar {
          width: 4px;
        }

        .right-side-group::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .right-side-group::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 2px;
        }

        .regional-item {
          margin-bottom: 1vh;
          padding: 0.7vh 0.8vw;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 6px;
          border: 1px solid rgba(30, 41, 59, 0.8);
        }

        .regional-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5vh;
        }

        .regional-name {
          color: #fff;
          font-weight: 700;
          font-size: clamp(10px, 0.85vw, 12px);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .risk-badge {
          padding: 2px 6px;
          border-radius: 3px;
          font-size: clamp(7px, 0.65vw, 9px);
          font-weight: 700;
          text-transform: uppercase;
        }

        .risk-badge.critical { 
          background: rgba(220, 38, 38, 0.4); 
          color: #fca5a5; 
          box-shadow: 0 0 8px rgba(220, 38, 38, 0.6);
        }
        .risk-badge.high { 
          background: rgba(245, 158, 11, 0.4); 
          color: #fcd34d; 
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);
        }
        .risk-badge.medium { 
          background: rgba(234, 179, 8, 0.4); 
          color: #fde047; 
          box-shadow: 0 0 8px rgba(234, 179, 8, 0.6);
        }

        .regional-stats {
          display: flex;
          gap: 1vw;
          color: #cbd5e1;
          font-size: clamp(8px, 0.7vw, 10px);
          margin-bottom: 0.5vh;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .progress-bar {
          height: 4px;
          background: rgba(15, 23, 42, 0.4);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          box-shadow: 0 0 8px currentColor;
        }

        /* Additional metric sections */
        .metric-section {
          margin-bottom: 2vh;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          padding: 1vh 1vw;
          border-radius: 8px;
          border: 1px solid rgba(30, 41, 59, 0.8);
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5vh 0.6vw;
          margin-bottom: 0.5vh;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 4px;
        }

        .metric-label {
          color: #cbd5e1;
          font-size: clamp(8px, 0.7vw, 10px);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .metric-value {
          color: #fff;
          font-size: clamp(10px, 0.85vw, 13px);
          font-weight: 700;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Charts transparent styling */
        .recharts-surface {
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.8));
        }

        .recharts-text {
          fill: #e2e8f0;
          font-size: 9px;
          font-weight: 600;
        }

        .recharts-cartesian-grid line {
          stroke: rgba(255, 255, 255, 0.1);
        }

        .recharts-tooltip-wrapper {
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8));
        }

        /* Top Right - Weather */
        .top-right-weather {
          position: absolute;
          top: 6vh;
          right: 18vw;
          width: 14vw;
          min-width: 160px;
        }

        .weather-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8vh 0.8vw;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          padding: 1vh 1vw;
          border-radius: 8px;
          border: 1px solid rgba(30, 41, 59, 0.8);
        }

        .weather-item {
          text-align: center;
          padding: 0.7vh 0.6vw;
          background: rgba(30, 41, 59, 0.75);
          border-radius: 5px;
          border: 1px solid rgba(30, 41, 59, 0.8);
        }

        .weather-icon {
          color: #60a5fa;
          margin-bottom: 0.3vh;
          filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.6));
        }

        .weather-value {
          color: #fff;
          font-size: clamp(12px, 1.2vw, 16px);
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .weather-label {
          color: #cbd5e1;
          font-size: clamp(7px, 0.65vw, 9px);
          text-transform: uppercase;
          margin-top: 0.2vh;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Map */}
      <MapContainer
        center={bangladeshCenter}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          url={
            mapLayer === "satellite"
              ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          }
        />

        {riskLocations.map((location) => (
          <CircleMarker
            key={location.id}
            center={location.coords}
            radius={15 + (location.risk === "critical" ? 10 : 0)}
            fillColor={getRiskColor(location.risk)}
            fillOpacity={0.6}
            color={getRiskColor(location.risk)}
            weight={2}
          >
            <Popup>
              <div style={{ color: "#000", minWidth: "180px" }}>
                <h3 style={{ marginBottom: "6px", fontSize: "13px" }}>
                  {location.name}
                </h3>
                <p style={{ fontSize: "11px", margin: "3px 0" }}>
                  <strong>Risk:</strong> {location.risk.toUpperCase()}
                </p>
                <p style={{ fontSize: "11px", margin: "3px 0" }}>
                  <strong>Population:</strong> {location.population}M
                </p>
                <p style={{ fontSize: "11px", margin: "3px 0" }}>
                  <strong>Damage:</strong> ${location.predictedDamage}M
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* HUD Overlays */}
      <div className="hud-container">
        {/* Main Title */}
        <div className="main-title">
          <div className="title-primary">DISASTER PREDICTION SYSTEM</div>
          <div className="title-secondary">
            NASA Machine Learning • Real-Time Analytics
          </div>
        </div>

        {/* Top Left - Control & Alerts */}
        <div className="top-left-group">
          <div className="control-panel">
            <div className="section-title">MISSION CONTROL</div>
            <div className="time-display">
              <div className="time-value">T+{currentTime}h</div>
              <div className="time-label">
                {Math.floor(currentTime / 24)}d {currentTime % 24}h
              </div>
            </div>

            <div className="controls">
              <button
                className="control-btn"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>
              <button
                className="control-btn"
                onClick={() => setCurrentTime((currentTime + 24) % 168)}
              >
                <SkipForward size={12} />
                +24H
              </button>
            </div>

            <div className="layer-toggle">
              <button
                className={`layer-btn ${
                  mapLayer === "satellite" ? "active" : ""
                }`}
                onClick={() => setMapLayer("satellite")}
              >
                SATELLITE
              </button>
              <button
                className={`layer-btn ${mapLayer === "dark" ? "active" : ""}`}
                onClick={() => setMapLayer("dark")}
              >
                DARK MAP
              </button>
            </div>
          </div>

          <div className="alerts-section">
            <div className="section-title">🚨 CRITICAL ALERTS</div>
            <div className="alert-item critical">
              <div className="alert-header">
                <span className="alert-icon">🚨</span>
                <span className="alert-time">2 min ago</span>
              </div>
              <div className="alert-message">
                Feni District - Flood imminent in 24hrs
              </div>
            </div>
            <div className="alert-item warning">
              <div className="alert-header">
                <span className="alert-icon">⚠️</span>
                <span className="alert-time">15 min ago</span>
              </div>
              <div className="alert-message">
                Chittagong - Rising water levels detected
              </div>
            </div>
            <div className="alert-item info">
              <div className="alert-header">
                <span className="alert-icon">ℹ️</span>
                <span className="alert-time">1 hr ago</span>
              </div>
              <div className="alert-message">
                Satellite pass completed - New data available
              </div>
            </div>
          </div>

          <div className="metric-section" style={{ marginTop: "2vh" }}>
            <div className="section-title">ML RISK ASSESSMENT</div>
            <ResponsiveContainer width="100%" height={150}>
              <RadarChart data={riskAssessmentData}>
                <PolarGrid stroke="rgba(255, 255, 255, 0.15)" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: "#e2e8f0", fontSize: 8 }}
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  tick={{ fill: "#94a3b8", fontSize: 7 }}
                />
                <Radar
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Right - Weather */}
        <div className="top-right-weather">
          <div className="section-title">WEATHER CONDITIONS</div>
          <div className="weather-grid">
            <div className="weather-item">
              <Thermometer className="weather-icon" size={16} />
              <div className="weather-value">35°C</div>
              <div className="weather-label">Temp</div>
            </div>
            <div className="weather-item">
              <Droplets className="weather-icon" size={16} />
              <div className="weather-value">92%</div>
              <div className="weather-label">Humidity</div>
            </div>
            <div className="weather-item">
              <Wind className="weather-icon" size={16} />
              <div className="weather-value">24km/h</div>
              <div className="weather-label">Wind</div>
            </div>
            <div className="weather-item">
              <Cloud className="weather-icon" size={16} />
              <div className="weather-value">420mm</div>
              <div className="weather-label">Rain 24h</div>
            </div>
          </div>

          <div className="metric-section" style={{ marginTop: "2vh" }}>
            <div className="section-title">TEMPERATURE TREND</div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={temperatureData}>
                <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    borderRadius: "6px",
                    fontSize: "10px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ fill: "#ef4444", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="metric-section" style={{ marginTop: "2vh" }}>
            <div className="section-title">DAMAGE DISTRIBUTION</div>
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie
                  data={damageDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                  labelLine={{ stroke: "#94a3b8", strokeWidth: 1 }}
                >
                  {damageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    borderRadius: "6px",
                    fontSize: "10px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Left - Stats */}
        <div className="bottom-left-stats">
          <div className="stat-card">
            <Users className="stat-icon" size={16} />
            <div className="stat-label">At Risk</div>
            <div className="stat-value">15M</div>
          </div>
          <div className="stat-card">
            <Home className="stat-icon" size={16} />
            <div className="stat-label">Displaced</div>
            <div className="stat-value">5M</div>
          </div>
          <div className="stat-card">
            <DollarSign className="stat-icon" size={16} />
            <div className="stat-label">Damage</div>
            <div className="stat-value">$5.2B</div>
          </div>
          <div className="stat-card">
            <Activity className="stat-icon" size={16} />
            <div className="stat-label">Confidence</div>
            <div className="stat-value">94%</div>
          </div>
        </div>

        {/* Bottom Center - Charts */}
        <div className="bottom-center-charts">
          <div className="chart-panel">
            <div className="section-title">NASA RAINFALL DATA (mm/hr)</div>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart data={rainfallData}>
                <XAxis dataKey="day" stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    borderRadius: "6px",
                    fontSize: "10px",
                  }}
                />
                <Bar dataKey="rain" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-panel">
            <div className="section-title">FLOOD PROBABILITY FORECAST</div>
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={floodProbabilityData}>
                <XAxis dataKey="hour" stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    borderRadius: "6px",
                    fontSize: "10px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="threshold"
                  stroke="#dc2626"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Area
                  type="monotone"
                  dataKey="probability"
                  stroke="#f59e0b"
                  fill="url(#probGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="probGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.6} />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side - Regional Data */}
        <div className="right-side-group">
          <div className="section-title">REGIONAL ANALYSIS</div>
          {regionalData.map((region) => (
            <div key={region.region} className="regional-item">
              <div className="regional-header">
                <span className="regional-name">{region.region}</span>
                <span
                  className={`risk-badge ${
                    region.risk >= 80
                      ? "critical"
                      : region.risk >= 65
                      ? "high"
                      : "medium"
                  }`}
                >
                  {region.risk >= 80
                    ? "CRITICAL"
                    : region.risk >= 65
                    ? "HIGH"
                    : "MEDIUM"}
                </span>
              </div>
              <div className="regional-stats">
                <span>👥 {region.population}M</span>
                <span>💰 ${region.damage}B</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${region.risk}%`,
                    background:
                      region.risk >= 80
                        ? "#dc2626"
                        : region.risk >= 65
                        ? "#f59e0b"
                        : "#eab308",
                  }}
                />
              </div>
            </div>
          ))}

          <div className="metric-section" style={{ marginTop: "2vh" }}>
            <div className="section-title">SOIL MOISTURE LEVELS</div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={soilMoistureData} layout="vertical">
                <XAxis type="number" stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <YAxis
                  type="category"
                  dataKey="location"
                  stroke="#94a3b8"
                  tick={{ fontSize: 8 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    borderRadius: "6px",
                    fontSize: "10px",
                  }}
                />
                <Bar dataKey="moisture" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="metric-section" style={{ marginTop: "2vh" }}>
            <div className="section-title">EVACUATION PROGRESS</div>
            <ResponsiveContainer width="100%" height={110}>
              <LineChart data={evacuationData}>
                <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.5)",
                    borderRadius: "6px",
                    fontSize: "10px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#94a3b8"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ fill: "#22c55e", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="metric-section" style={{ marginTop: "2vh" }}>
            <div className="section-title">KEY METRICS</div>
            <div className="metric-row">
              <span className="metric-label">Model Accuracy</span>
              <span className="metric-value">94.2%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Data Points Analyzed</span>
              <span className="metric-value">2.8M</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Prediction Lead Time</span>
              <span className="metric-value">72hrs</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Satellite Passes</span>
              <span className="metric-value">48/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}