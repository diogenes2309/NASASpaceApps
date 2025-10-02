// Global Flood Prediction System with Dynamic Data Loading
import React, { useState, useEffect } from 'react';
import MapView from './components/MapView';
import RegionSelector from './components/RegionSelector';
import WeatherPanel from './components/WeatherPanel';
import ReliefToggle from './components/ReliefToggle';
import DetailPanel from './components/DetailPanel';
import StatsBar from './components/StatsBar';
import MissionControl from './components/MissionControl';
import AnalyticsPanel from './components/AnalyticsPanel';
import { loadCountryData, getCountryCenter, getCountryZoom, getCountryDistricts, getCountryFloodZones } from './data/countryDataLoader';
import { reliefCenters } from './data/reliefCenters';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [showReliefCenters, setShowReliefCenters] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [mapLayer, setMapLayer] = useState('satellite'); // 'satellite' or 'dark'
  
  // Dynamic data loading states
  const [countryData, setCountryData] = useState(null);
  const [districtBoundaries, setDistrictBoundaries] = useState([]);
  const [currentFloodZones, setCurrentFloodZones] = useState([]);
  const [mapCenter, setMapCenter] = useState([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);
  const [loading, setLoading] = useState(false);
  
  // Panel state for minimizing/expanding
  const [panels, setPanels] = useState({
    regionSelector: { minimized: false, position: null },
    weatherPanel: { minimized: false, position: null },
    missionControl: { minimized: false, position: null },
    reliefToggle: { minimized: false, position: null }
  });

  // Load country data when selectedCountry changes
  useEffect(() => {
    const loadData = async () => {
      if (!selectedCountry) {
        setCountryData(null);
        setDistrictBoundaries([]);
        setCurrentFloodZones([]);
        setMapCenter([20, 0]);
        setMapZoom(2);
        return;
      }

      setLoading(true);
      
      try {
        // Load all data in parallel
        const [data, center, zoom, districts, floodZones] = await Promise.all([
          loadCountryData(selectedCountry),
          getCountryCenter(selectedCountry),
          getCountryZoom(selectedCountry),
          getCountryDistricts(selectedCountry),
          getCountryFloodZones(selectedCountry)
        ]);

        setCountryData(data);
        setMapCenter(center || [20, 0]);
        setMapZoom(zoom || 2);
        setDistrictBoundaries(districts || []);
        setCurrentFloodZones(floodZones || []);
      } catch (error) {
        console.error('Error loading country data:', error);
        setCountryData(null);
        setDistrictBoundaries([]);
        setCurrentFloodZones([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCountry]);

  const currentReliefCenters = selectedCountry && reliefCenters[selectedCountry]
    ? reliefCenters[selectedCountry]
    : [];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedZone(null);
    setSelectedDistrict(null);
    setShowHeatmap(true); // Enable heatmap when country is selected
  };

  const handleClearSelection = () => {
    setSelectedCountry(null);
    setSelectedZone(null);
    setSelectedDistrict(null);
    setShowHeatmap(false);
  };
  
  // Set first district as default when districts are loaded
  useEffect(() => {
    if (districtBoundaries && districtBoundaries.length > 0) {
      setSelectedDistrict(districtBoundaries[0]);
    }
  }, [districtBoundaries]);

  // Time control effect (removed countdown timer)
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev + 1) % 168);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMapLayerToggle = (layer) => {
    setMapLayer(layer);
  };

  const togglePanelMinimize = (panelName) => {
    setPanels(prev => ({
      ...prev,
      [panelName]: { ...prev[panelName], minimized: !prev[panelName].minimized }
    }));
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
        <div className="header-controls">
          <button
            className={`analytics-toggle ${showAnalytics ? 'active' : ''}`}
            onClick={() => setShowAnalytics(!showAnalytics)}
          >
            <span style={{ fontSize: '12px' }}>📊</span>
            {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
          </button>
        </div>
      </div>

      {/* Region Selector - Top Right */}
      <RegionSelector
        selectedCountry={selectedCountry}
        onCountrySelect={handleCountrySelect}
        onClearSelection={handleClearSelection}
        isMinimized={panels.regionSelector.minimized}
        onToggleMinimize={() => togglePanelMinimize('regionSelector')}
      />

      {/* Weather Panel - Below Region Selector */}
      {selectedCountry && (
        <WeatherPanel 
          selectedCountry={selectedCountry}
          selectedDistrict={selectedDistrict}
          isMinimized={panels.weatherPanel.minimized}
          onToggleMinimize={() => togglePanelMinimize('weatherPanel')}
        />
      )}

      {/* Relief Centers Toggle - Below Weather Panel */}
      {selectedCountry && currentReliefCenters.length > 0 && (
        <ReliefToggle
          showReliefCenters={showReliefCenters}
          onToggle={setShowReliefCenters}
          centers={currentReliefCenters}
          isMinimized={panels.reliefToggle.minimized}
          onToggleMinimize={() => togglePanelMinimize('reliefToggle')}
        />
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading country data...</div>
        </div>
      )}

      {/* Map with Boundaries */}
      <MapView
        center={mapCenter}
        zoom={mapZoom}
        floodZones={currentFloodZones}
        reliefCenters={showReliefCenters ? currentReliefCenters : []}
        onZoneClick={setSelectedZone}
        showHeatmap={showHeatmap && selectedCountry !== null}
        selectedCountry={selectedCountry}
        mapLayer={mapLayer}
        districtBoundaries={districtBoundaries}
      />

      {/* Detail Panel */}
      {selectedZone && (
        <DetailPanel
          zone={selectedZone}
          onClose={() => setSelectedZone(null)}
        />
      )}

      {/* Mission Control Panel - Left Side */}
      <MissionControl
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        currentTime={currentTime}
        onTimeChange={setCurrentTime}
        selectedCountry={selectedCountry}
        districtBoundaries={districtBoundaries}
        isMinimized={panels.missionControl.minimized}
        onToggleMinimize={() => togglePanelMinimize('missionControl')}
        mapLayer={mapLayer}
        onMapLayerToggle={handleMapLayerToggle}
      />

      {/* Analytics Panel (Toggle) - Bottom Center */}
      {showAnalytics && (
        <AnalyticsPanel 
          selectedCountry={selectedCountry} 
          districtBoundaries={districtBoundaries}
          floodZones={currentFloodZones}
        />
      )}

      {/* Stats Bar - Bottom Left */}
      <StatsBar floodZones={currentFloodZones} currentTime={currentTime} />
    </div>
  );
}