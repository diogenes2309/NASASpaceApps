import React, { useState } from 'react';
import MapView from './components/MapView';
import RegionSelector from './components/RegionSelector';
import WeatherPanel from './components/WeatherPanel';
import ReliefToggle from './components/ReliefToggle';
import DetailPanel from './components/DetailPanel';
import StatsBar from './components/StatsBar';
import { countriesData } from './data/countries';
import { floodZones } from './data/floodZones';
import { reliefCenters } from './data/reliefCenters';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [showReliefCenters, setShowReliefCenters] = useState(false);

  const mapCenter = selectedCountry 
    ? countriesData[selectedCountry].center 
    : [20, 0];
  const mapZoom = selectedCountry 
    ? countriesData[selectedCountry].zoom 
    : 2;
  
  const currentFloodZones = selectedCountry 
    ? floodZones.filter(zone => zone.country === selectedCountry)
    : floodZones;

  const currentReliefCenters = selectedCountry && reliefCenters[selectedCountry]
    ? reliefCenters[selectedCountry]
    : [];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedZone(null);
  };

  const handleClearSelection = () => {
    setSelectedCountry(null);
    setSelectedZone(null);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div className="app-header">
        <div className="title-container">
          <h1 className="app-title">GLOBAL FLOOD PREDICTION SYSTEM</h1>
          <p className="app-subtitle">
            NASA Machine Learning • Real-Time Analytics • Worldwide Coverage
          </p>
        </div>
      </div>

      {/* Region Selector */}
      <RegionSelector
        selectedCountry={selectedCountry}
        onCountrySelect={handleCountrySelect}
        onClearSelection={handleClearSelection}
      />

      {/* Weather Panel */}
      {selectedCountry && (
        <WeatherPanel selectedCountry={selectedCountry} />
      )}

      {/* Relief Centers Toggle */}
      {selectedCountry && currentReliefCenters.length > 0 && (
        <ReliefToggle
          showReliefCenters={showReliefCenters}
          onToggle={setShowReliefCenters}
          centers={currentReliefCenters}
        />
      )}

      {/* Map */}
      <MapView
        center={mapCenter}
        zoom={mapZoom}
        floodZones={currentFloodZones}
        reliefCenters={showReliefCenters ? currentReliefCenters : []}
        onZoneClick={setSelectedZone}
      />

      {/* Detail Panel */}
      {selectedZone && (
        <DetailPanel
          zone={selectedZone}
          onClose={() => setSelectedZone(null)}
        />
      )}

      {/* Stats Bar */}
      <StatsBar floodZones={currentFloodZones} />
    </div>
  );
}