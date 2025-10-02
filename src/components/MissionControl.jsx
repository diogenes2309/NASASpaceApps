import React from 'react';
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  rainfallData,
  getTemperatureData,
  getSoilMoistureData,
  riskAssessmentData,
  damageDistribution,
  floodProbabilityData,
  waterLevelData,
  economicImpactData,
  historicalComparison,
} from '../data/chartData';

export default function MissionControl({ 
  isPlaying, 
  onPlayPause, 
  currentTime, 
  onTimeChange, 
  selectedCountry,
  districtBoundaries,
  isMinimized,
  onToggleMinimize,
  mapLayer,
  onMapLayerToggle
}) {
  // Generate NASA data from actual district data
  const generateNASAChartData = () => {
    if (!districtBoundaries || districtBoundaries.length === 0) {
      return {
        rainfall: rainfallData,
        temperature: getTemperatureData(selectedCountry),
        soilMoisture: getSoilMoistureData(selectedCountry)
      };
    }

    // Extract NASA data from districts
    const districtsWithNASA = districtBoundaries.filter(d => d.nasaData);
    
    if (districtsWithNASA.length === 0) {
      return {
        rainfall: rainfallData,
        temperature: getTemperatureData(selectedCountry),
        soilMoisture: getSoilMoistureData(selectedCountry)
      };
    }

    // Generate Rainfall Chart Data (top 7 districts by current rainfall)
    const rainfallChartData = districtsWithNASA
      .sort((a, b) => b.nasaData.rainfall.current - a.nasaData.rainfall.current)
      .slice(0, 7)
      .map(d => ({
        day: d.name.split(' ')[0].substring(0, 8), // Short name
        rain: d.nasaData.rainfall.current,
        forecast: Math.round(d.nasaData.rainfall.current * 1.1) // 10% higher forecast
      }));

    // Generate Temperature Chart Data (historical progression of first district)
    const firstDistrict = districtsWithNASA[0];
    const temperatureChartData = firstDistrict.nasaData.temperature.historical.map((temp, idx) => ({
      time: `Y${idx + 1}`,
      temp: temp,
      humidity: 100 - Math.round(temp * 2) // Inverse correlation for demo
    }));

    // Generate Soil Moisture Chart Data (top 5 districts)
    const soilMoistureChartData = districtsWithNASA
      .sort((a, b) => b.nasaData.soilMoisture.current - a.nasaData.soilMoisture.current)
      .slice(0, 5)
      .map(d => ({
        location: d.name.substring(0, 10),
        moisture: d.nasaData.soilMoisture.current
      }));

    return {
      rainfall: rainfallChartData,
      temperature: temperatureChartData,
      soilMoisture: soilMoistureChartData
    };
  };

  const nasaChartData = generateNASAChartData();
  const temperatureData = nasaChartData.temperature;
  const soilMoistureData = nasaChartData.soilMoisture;

  return (
    <div className={`mission-control-panel ${isMinimized ? 'minimized' : ''}`}>
      {/* Header with minimize button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid rgba(59, 130, 246, 0.5)' }}>
        <div className="section-title" style={{ marginBottom: 0 }}>🗺️ MAP CONTROL</div>
        <button className="minimize-btn" onClick={onToggleMinimize}>
          {isMinimized ? '▼' : '▲'}
        </button>
      </div>
        
      {!isMinimized && (
        <>
          {/* Map Layer Toggle */}
          <div className="control-section">
            <div className="section-subtitle" style={{ fontSize: '10px', fontWeight: '700', color: '#60a5fa', marginBottom: '10px', letterSpacing: '0.1em' }}>
              MAP LAYER
            </div>

            <div className="layer-toggle" style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <button 
                className={`layer-btn ${mapLayer === 'satellite' ? 'active' : ''}`}
                onClick={() => onMapLayerToggle('satellite')}
                style={{
                  flex: 1,
                  background: mapLayer === 'satellite' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${mapLayer === 'satellite' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.3)'}`,
                  color: mapLayer === 'satellite' ? '#fff' : '#cbd5e1',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: '700',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                🛰️ Satellite
              </button>
              <button 
                className={`layer-btn ${mapLayer === 'dark' ? 'active' : ''}`}
                onClick={() => onMapLayerToggle('dark')}
                style={{
                  flex: 1,
                  background: mapLayer === 'dark' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${mapLayer === 'dark' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.3)'}`,
                  color: mapLayer === 'dark' ? '#fff' : '#cbd5e1',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: '700',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                🌙 Dark Map
              </button>
            </div>
          </div>

      {/* ML Risk Assessment */}
      <div className="chart-section">
        <div className="section-title">🤖 ML RISK ASSESSMENT</div>
        <ResponsiveContainer width="100%" height={180}>
          <RadarChart data={riskAssessmentData}>
            <PolarGrid stroke="rgba(255, 255, 255, 0.15)" />
            <PolarAngleAxis
              dataKey="category"
              tick={{ fill: "#e2e8f0", fontSize: 9 }}
            />
            <PolarRadiusAxis
              domain={[0, 100]}
              tick={{ fill: "#94a3b8", fontSize: 8 }}
            />
            <Radar
              dataKey="value"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.5}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Rainfall Chart */}
      <div className="chart-section">
        <div className="section-title">🌧️ NASA RAINFALL DATA (Top Districts)</div>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={nasaChartData.rainfall}>
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
            <Bar dataKey="forecast" fill="#60a5fa" radius={[4, 4, 0, 0]} opacity={0.5} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Temperature Trend */}
      <div className="chart-section">
        <div className="section-title">🌡️ TEMPERATURE TREND</div>
        <ResponsiveContainer width="100%" height={120}>
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
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: "#3b82f6", r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Soil Moisture */}
      <div className="chart-section">
        <div className="section-title">🌱 SOIL MOISTURE LEVELS</div>
        <ResponsiveContainer width="100%" height={140}>
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

          {/* Key Metrics */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Districts Monitored</div>
              <div className="metric-value">{districtBoundaries?.length || 0}</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">NASA Data Coverage</div>
              <div className="metric-value">
                {districtBoundaries?.filter(d => d.nasaData).length || 0}/{districtBoundaries?.length || 0}
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Avg Rainfall</div>
              <div className="metric-value">
                {districtBoundaries?.length > 0 
                  ? Math.round(districtBoundaries
                      .filter(d => d.nasaData)
                      .reduce((sum, d) => sum + d.nasaData.rainfall.current, 0) / 
                      districtBoundaries.filter(d => d.nasaData).length || 0)
                  : 0}mm
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Critical Zones</div>
              <div className="metric-value">
                {districtBoundaries?.filter(d => 
                  d.nasaData?.soilMoisture?.saturationLevel === 'critical' || 
                  d.nasaData?.soilMoisture?.saturationLevel === 'extreme'
                ).length || 0}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
