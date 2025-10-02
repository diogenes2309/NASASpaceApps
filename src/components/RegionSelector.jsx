import React, { useState, useEffect } from 'react';
import { getAvailableCountries } from '../data/countryDataLoader';

export default function RegionSelector({ selectedCountry, onCountrySelect, onClearSelection, isMinimized, onToggleMinimize }) {
  const [expandedRegion, setExpandedRegion] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load available countries on mount
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const availableCountries = getAvailableCountries();
        setCountries(availableCountries);
      } catch (error) {
        console.error('Error loading countries:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  // Group countries by region (continents)
  const groupedCountries = countries.reduce((acc, country) => {
    // Simple region mapping based on country
    let region = 'Asia';
    if (['usa'].includes(country.id)) region = 'North America';
    if (['brazil'].includes(country.id)) region = 'South America';
    
    if (!acc[region]) acc[region] = [];
    acc[region].push(country);
    return acc;
  }, {});

  return (
    <div className={`region-selector ${isMinimized ? 'minimized' : ''}`}>
      <div className="selector-header">
        <span className="selector-icon" style={{ fontSize: '16px' }}>📍</span>
        <span className="selector-title">SELECT REGION</span>
        <button className="minimize-btn" onClick={onToggleMinimize}>
          {isMinimized ? '▼' : '▲'}
        </button>
      </div>
      
      {!isMinimized && (
        <>
          {loading ? (
            <div className="loading-message">Loading countries...</div>
          ) : countries.length === 0 ? (
            <div className="no-data-message">No countries available</div>
          ) : (
            <>
              {Object.entries(groupedCountries).map(([regionName, regionCountries]) => (
                <div key={regionName} className="region-group">
                  <div 
                    className="region-name"
                    onClick={() => setExpandedRegion(expandedRegion === regionName ? null : regionName)}
                  >
                    {expandedRegion === regionName ? '▼' : '▶'} {regionName}
                  </div>
                
                  {expandedRegion === regionName && (
                    <div className="country-list">
                      {regionCountries.map(country => (
                        <div
                          key={country.id}
                          className={`country-item ${selectedCountry === country.id ? 'active' : ''}`}
                          onClick={() => onCountrySelect(country.id)}
                        >
                          <span>{country.name}</span>
                          <span className="risk-badge">
                            {country.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {selectedCountry && (
            <button className="clear-button" onClick={onClearSelection}>
              ✕ Clear Selection
            </button>
          )}
        </>
      )}
    </div>
  );
}