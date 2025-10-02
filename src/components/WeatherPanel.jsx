import React from 'react';
import { weatherData } from '../data/weatherData';

const getHazardIcon = (type) => {
  switch (type) {
    case 'cyclone': return '🌀';
    case 'tsunami': return '🌊';
    case 'flood': return '💧';
    case 'rain': return '🌧️';
    case 'wind': return '💨';
    case 'landslide': return '⛰️';
    default: return '⚠️';
  }
};

const getTrendIcon = (trend) => {
  switch (trend) {
    case 'increasing': return '📈';
    case 'decreasing': return '📉';
    default: return '➡️';
  }
};

const getSaturationColor = (level) => {
  switch (level) {
    case 'extreme': return '#dc2626';
    case 'critical': return '#f97316';
    case 'high': return '#eab308';
    case 'moderate': return '#22c55e';
    default: return '#3b82f6';
  }
};

export default function WeatherPanel({ selectedCountry, isMinimized, onToggleMinimize, selectedDistrict }) {
  const data = weatherData[selectedCountry];
  
  if (!data) return null;

  // Get NASA data from selected district
  const nasaData = selectedDistrict?.nasaData;

  return (
    <div className={`weather-panel ${isMinimized ? 'minimized' : ''}`}>
      <div className="panel-header">
        <span style={{ fontSize: '14px' }}>📊</span>
        <span>WEATHER REPORT - {selectedCountry.toUpperCase()}</span>
        <button className="minimize-btn" onClick={onToggleMinimize}>
          {isMinimized ? '▼' : '▲'}
        </button>
      </div>
      
      {!isMinimized && (
        <>
    
      {/* Active Hazards Badge */}
      {data.hazards && (
        <div className="hazards-badges">
          {data.hazards.cyclone && (
            <div className="hazard-badge critical">
              <span>🌀</span> CYCLONE ACTIVE
            </div>
          )}
          {data.hazards.tsunami && (
            <div className="hazard-badge critical">
              <span>🌊</span> TSUNAMI WARNING
            </div>
          )}
          {data.hazards.flood && (
            <div className="hazard-badge warning">
              <span>💧</span> FLOOD RISK
            </div>
          )}
          {data.hazards.heavyRain && (
            <div className="hazard-badge warning">
              <span>🌧️</span> HEAVY RAIN
            </div>
          )}
        </div>
      )}

      {/* Current Conditions */}
      <div className="weather-grid">
        <div className="weather-item">
          <span className="weather-icon" style={{ fontSize: '16px' }}>🌡️</span>
          <div className="weather-value">{data.current.temperature}°C</div>
          <div className="weather-label">Temperature</div>
        </div>
        <div className="weather-item">
          <span className="weather-icon" style={{ fontSize: '16px' }}>💧</span>
          <div className="weather-value">{data.current.humidity}%</div>
          <div className="weather-label">Humidity</div>
        </div>
        <div className="weather-item">
          <span className="weather-icon" style={{ fontSize: '16px' }}>💨</span>
          <div className="weather-value">{data.current.windSpeed}km/h</div>
          <div className="weather-label">Wind</div>
        </div>
        <div className="weather-item">
          <span className="weather-icon" style={{ fontSize: '16px' }}>🌧️</span>
          <div className="weather-value">{data.current.rainfall_24h}mm</div>
          <div className="weather-label">Rain 24h</div>
        </div>
        {data.current.pressure && (
          <div className="weather-item">
            <span className="weather-icon" style={{ fontSize: '16px' }}>🔽</span>
            <div className="weather-value">{data.current.pressure}mb</div>
            <div className="weather-label">Pressure</div>
          </div>
        )}
        {data.current.visibility && (
          <div className="weather-item">
            <span className="weather-icon" style={{ fontSize: '16px' }}>👁️</span>
            <div className="weather-value">{data.current.visibility}km</div>
            <div className="weather-label">Visibility</div>
          </div>
        )}
      </div>

      {/* Forecast */}
      {data.forecast && (
        <div className="forecast-section">
          <div className="section-subtitle">📈 FORECAST</div>
          <div className="forecast-item">
            <strong>24h:</strong> {data.forecast.next24h}
          </div>
          <div className="forecast-item">
            <strong>48h:</strong> {data.forecast.next48h}
          </div>
          <div className="forecast-item">
            <strong>72h:</strong> {data.forecast.next72h}
          </div>
        </div>
      )}

      {/* NASA Environmental Data */}
      {nasaData && (
        <div className="nasa-data-section">
          <div className="section-subtitle">📡 NASA ENVIRONMENTAL DATA</div>
          
          {/* Rainfall */}
          <div className="nasa-metric">
            <div className="nasa-metric-header">
              <span className="nasa-icon">🌧️</span>
              <span className="nasa-label">Rainfall</span>
              <span className="nasa-trend">{getTrendIcon(nasaData.rainfall.trend)}</span>
            </div>
            <div className="nasa-current">{nasaData.rainfall.current}mm</div>
            <div className="nasa-anomaly" style={{ color: '#f97316' }}>
              {nasaData.rainfall.anomaly} from baseline
            </div>
            <div className="nasa-historical">
              5yr: {nasaData.rainfall.historical.join(' → ')}mm
            </div>
          </div>

          {/* Temperature */}
          <div className="nasa-metric">
            <div className="nasa-metric-header">
              <span className="nasa-icon">🌡️</span>
              <span className="nasa-label">Temperature</span>
              <span className="nasa-trend">{getTrendIcon(nasaData.temperature.trend)}</span>
            </div>
            <div className="nasa-current">{nasaData.temperature.current}°C</div>
            <div className="nasa-anomaly" style={{ color: '#dc2626' }}>
              Heat Index: {nasaData.temperature.heatIndex}°C
            </div>
            <div className="nasa-historical">
              5yr: {nasaData.temperature.historical.join(' → ')}°C
            </div>
          </div>

          {/* Soil Moisture */}
          <div className="nasa-metric">
            <div className="nasa-metric-header">
              <span className="nasa-icon">💧</span>
              <span className="nasa-label">Soil Moisture</span>
              <span className="nasa-trend">{getTrendIcon(nasaData.soilMoisture.trend)}</span>
            </div>
            <div className="nasa-current">{nasaData.soilMoisture.current}%</div>
            <div 
              className="nasa-saturation-badge"
              style={{ 
                background: getSaturationColor(nasaData.soilMoisture.saturationLevel),
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 'bold',
                marginTop: '4px',
                display: 'inline-block'
              }}
            >
              {nasaData.soilMoisture.saturationLevel.toUpperCase()} SATURATION
            </div>
            <div className="nasa-historical" style={{ marginTop: '4px' }}>
              Infiltration: {nasaData.soilMoisture.infiltrationRate}
            </div>
          </div>

          <div className="nasa-update">
            Last updated: {nasaData.rainfall.lastUpdated}
          </div>
        </div>
      )}

      {/* Alerts */}
      {data.alerts && data.alerts.length > 0 && (
        <div className="alerts-container">
          <div className="section-subtitle">⚠️ ACTIVE ALERTS</div>
          {data.alerts.map((alert, idx) => (
            <div 
              key={idx} 
              className={`alert ${alert.severity}`}
            >
              <span style={{ fontSize: '14px' }}>{getHazardIcon(alert.type)}</span>
              <div className="alert-content">
                <div className="alert-type">{alert.type?.toUpperCase()}</div>
                <div className="alert-message">{alert.message}</div>
                <div className="alert-time">{alert.issuedAt}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      </>
      )}
    </div>
  );
}