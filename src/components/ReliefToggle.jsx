import React from 'react';

export default function ReliefToggle({ showReliefCenters, onToggle, centers, isMinimized, onToggleMinimize }) {
  const hospitals = centers.filter(c => c.type === 'hospital').length;
  const shelters = centers.filter(c => c.type === 'shelter').length;
  const ngos = centers.filter(c => c.type === 'ngo').length;

  return (
    <div className={`relief-toggle ${isMinimized ? 'minimized' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isMinimized ? 0 : '8px' }}>
        <label className="toggle-label" style={{ marginBottom: 0 }}>
          <input
            type="checkbox"
            checked={showReliefCenters}
            onChange={(e) => onToggle(e.target.checked)}
            className="toggle-checkbox"
          />
          <span className="toggle-icon" style={{ fontSize: '14px' }}>🏥</span>
          Relief Centers
        </label>
        <button className="minimize-btn" onClick={onToggleMinimize}>
          {isMinimized ? '▼' : '▲'}
        </button>
      </div>
    
      {!isMinimized && (
        <div className="toggle-stats">
          <span>🏥 {hospitals}</span>
          <span>🏠 {shelters}</span>
          <span>🤝 {ngos}</span>
        </div>
      )}
    </div>
  );
}