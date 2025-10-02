import React from 'react';

const getRiskColor = (severity) => {
  switch (severity) {
    case 'critical': return '#dc2626';
    case 'high': return '#f59e0b';
    case 'medium': return '#eab308';
    default: return '#22c55e';
  }
};

export default function DetailPanel({ zone, onClose }) {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="detail-panel">
        <div className="detail-header">
          <div>
            <h2 className="detail-title">{zone.name}</h2>
            <p className="detail-subtitle">{zone.country}</p>
          </div>
          <button className="close-button" onClick={onClose}>
            ✕ CLOSE
          </button>
        </div>

        <div className="detail-grid">
          <div className="detail-card">
            <div className="detail-card-title">Risk Assessment</div>
            <div className="detail-card-value">{zone.riskScore}%</div>
            <div className="detail-card-label">Flood Probability</div>
          </div>
        
          <div className="detail-card">
            <div className="detail-card-title">ML Accuracy</div>
            <div className="detail-card-value">{zone.predictedAccuracy}%</div>
            <div className="detail-card-label">Model Confidence</div>
          </div>
        
          <div className="detail-card">
            <div className="detail-card-title">Area Affected</div>
            <div className="detail-card-value">{zone.areaAffected}</div>
            <div className="detail-card-label">Square Kilometers</div>
          </div>
        
          <div className="detail-card">
            <div className="detail-card-title">Population</div>
            <div className="detail-card-value">
              {(zone.populationAtRisk / 1000000).toFixed(2)}M
            </div>
            <div className="detail-card-label">At Risk</div>
          </div>
        </div>

        <div className="severity-bar">
          <div className="severity-label">Severity Level:</div>
          <div 
            className="severity-badge"
            style={{ background: getRiskColor(zone.severity) }}
          >
            {zone.severity.toUpperCase()}
          </div>
        </div>

        {/* NASA Environmental Data */}
        {zone.nasaData && (
          <div className="detail-nasa-section">
            <h3 className="detail-section-title">📡 NASA Environmental Data</h3>
            
            <div className="detail-nasa-grid">
              {/* Rainfall */}
              <div className="detail-nasa-card">
                <div className="detail-nasa-icon">🌧️</div>
                <div className="detail-nasa-label">Rainfall</div>
                <div className="detail-nasa-value">{zone.nasaData.rainfall.current}mm</div>
                <div className="detail-nasa-trend">
                  {zone.nasaData.rainfall.trend === 'increasing' ? '📈' : '➡️'} {zone.nasaData.rainfall.anomaly}
                </div>
              </div>

              {/* Temperature */}
              <div className="detail-nasa-card">
                <div className="detail-nasa-icon">🌡️</div>
                <div className="detail-nasa-label">Temperature</div>
                <div className="detail-nasa-value">{zone.nasaData.temperature.current}°C</div>
                <div className="detail-nasa-trend">
                  Heat Index: {zone.nasaData.temperature.heatIndex}°C
                </div>
              </div>

              {/* Soil Moisture */}
              <div className="detail-nasa-card">
                <div className="detail-nasa-icon">💧</div>
                <div className="detail-nasa-label">Soil Moisture</div>
                <div className="detail-nasa-value">{zone.nasaData.soilMoisture.current}%</div>
                <div className="detail-nasa-badge" style={{
                  background: zone.nasaData.soilMoisture.saturationLevel === 'extreme' ? '#dc2626' :
                             zone.nasaData.soilMoisture.saturationLevel === 'critical' ? '#f97316' :
                             zone.nasaData.soilMoisture.saturationLevel === 'high' ? '#eab308' : '#22c55e'
                }}>
                  {zone.nasaData.soilMoisture.saturationLevel.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Historical Trends */}
            <div className="detail-nasa-trends">
              <div className="detail-nasa-trend-item">
                <span className="trend-label">🌧️ 5-Year Rainfall:</span>
                <span className="trend-values">{zone.nasaData.rainfall.historical.join(' → ')}mm</span>
              </div>
              <div className="detail-nasa-trend-item">
                <span className="trend-label">🌡️ 5-Year Temperature:</span>
                <span className="trend-values">{zone.nasaData.temperature.historical.join(' → ')}°C</span>
              </div>
              <div className="detail-nasa-trend-item">
                <span className="trend-label">💧 Infiltration Rate:</span>
                <span className="trend-values">{zone.nasaData.soilMoisture.infiltrationRate}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}