import React from 'react';

export default function StatsBar({ floodZones }) {
  const criticalZones = floodZones.filter(z => z.severity === 'critical').length;
  const totalPopulation = floodZones.reduce((sum, z) => sum + z.populationAtRisk, 0);
  const avgAccuracy = Math.round(
    floodZones.reduce((sum, z) => sum + z.predictedAccuracy, 0) / floodZones.length
  );

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-icon" style={{ fontSize: '14px' }}>⚠️</span>
        <span className="stat-value">{criticalZones}</span>
        <span className="stat-label">Critical Zones</span>
      </div>
    
      <div className="stat-item">
        <span className="stat-icon" style={{ fontSize: '14px' }}>👥</span>
        <span className="stat-value">
          {(totalPopulation / 1000000).toFixed(1)}M
        </span>
        <span className="stat-label">At Risk</span>
      </div>
    
      <div className="stat-item">
        <span className="stat-icon" style={{ fontSize: '14px' }}>📊</span>
        <span className="stat-value">{avgAccuracy}%</span>
        <span className="stat-label">Avg Accuracy</span>
      </div>
    </div>
  );
}