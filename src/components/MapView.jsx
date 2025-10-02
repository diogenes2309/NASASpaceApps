import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, CircleMarker, Popup, Tooltip as LeafletTooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function MapController({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const getRiskColor = (severity) => {
  switch (severity) {
    case 'critical': return '#dc2626';
    case 'high': return '#f59e0b';
    case 'medium': return '#eab308';
    default: return '#22c55e';
  }
};

const getReliefColor = (type) => {
  switch (type) {
    case 'hospital': return '#ef4444';
    case 'shelter': return '#3b82f6';
    case 'ngo': return '#10b981';
    default: return '#60a5fa';
  }
};

const getReliefIcon = (type) => {
  switch (type) {
    case 'hospital': return '🏥';
    case 'shelter': return '🏠';
    case 'ngo': return '🤝';
    default: return '📍';
  }
};

// Component to display prediction metrics on map
function PredictionLabel({ zone }) {
  const map = useMap();
  const [position, setPosition] = React.useState(null);

  React.useEffect(() => {
    if (zone.coordinates && zone.coordinates.length > 0) {
      // Calculate center of polygon
      const lats = zone.coordinates.map(coord => coord[0]);
      const lngs = zone.coordinates.map(coord => coord[1]);
      const centerLat = lats.reduce((a, b) => a + b, 0) / lats.length;
      const centerLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;
      
      const point = map.latLngToContainerPoint([centerLat, centerLng]);
      setPosition(point);
    }
  }, [zone, map]);

  if (!position) return null;

  return null; // Labels will be rendered separately in overlay
}

export default function MapView({ 
  center, 
  zoom, 
  floodZones, 
  reliefCenters, 
  onZoneClick, 
  showHeatmap = true, 
  selectedCountry, 
  mapLayer = 'satellite',
  districtBoundaries = [] // Accurate district/state boundaries
}) {
  const [mapInstance, setMapInstance] = React.useState(null);
  const [hoveredZone, setHoveredZone] = React.useState(null);

  // Determine tile layer URL based on mapLayer prop
  const tileLayerUrl = mapLayer === 'satellite'
    ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  const tileLayerAttribution = mapLayer === 'satellite'
    ? 'Esri'
    : '&copy; <a href="https://carto.com/">CARTO</a>';

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={2}
        maxZoom={18}
        maxBounds={[[-90, -180], [90, 180]]}
        maxBoundsViscosity={1.0}
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
        whenCreated={setMapInstance}
      >
        <MapController center={center} zoom={zoom} />
      
        <TileLayer
          url={tileLayerUrl}
          attribution={tileLayerAttribution}
          key={mapLayer}
        />

        {/* District/State Boundaries with Hover Tooltips */}
        {districtBoundaries.map((district, index) => (
          <Polygon
            key={`district-${index}`}
            positions={district.boundaries}
            pathOptions={{
              fillColor: 'transparent',
              fillOpacity: 0,
              color: '#3b82f6',
              weight: 2,
              opacity: 0.6,
              dashArray: '5, 5'
            }}
            eventHandlers={{
              mouseover: (e) => {
                e.target.setStyle({
                  fillOpacity: 0.1,
                  fillColor: '#3b82f6',
                  weight: 3,
                  opacity: 0.9
                });
                setHoveredZone(district);
              },
              mouseout: (e) => {
                e.target.setStyle({
                  fillOpacity: 0,
                  weight: 2,
                  opacity: 0.6
                });
                setHoveredZone(null);
              }
            }}
          >
            <LeafletTooltip sticky direction="top" opacity={0.95}>
              <div style={{ 
                minWidth: '200px', 
                padding: '8px',
                background: 'rgba(15, 23, 42, 0.95)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '11px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                <div style={{ 
                  fontSize: '13px', 
                  fontWeight: '700', 
                  marginBottom: '6px',
                  color: '#3b82f6',
                  borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
                  paddingBottom: '4px'
                }}>
                  {district.name}
                </div>
                <div style={{ marginBottom: '4px' }}>
                  <strong>Population:</strong> {(district.population / 1000000).toFixed(1)}M
                </div>
                <div style={{ marginBottom: '4px' }}>
                  <strong>Risk Level:</strong> <span style={{
                    color: district.riskLevel === 'critical' ? '#ef4444' : 
                           district.riskLevel === 'high' ? '#f59e0b' : '#22c55e',
                    fontWeight: '700'
                  }}>
                    {district.riskLevel?.toUpperCase()}
                  </span>
                </div>
                <div style={{ marginBottom: '4px' }}>
                  <strong>Estimated Damage:</strong> ${(district.estimatedDamage / 1000000).toFixed(1)}M
                </div>
                
                {/* NASA Environmental Data */}
                {district.nasaData && (
                  <div style={{ 
                    borderTop: '1px solid rgba(59, 130, 246, 0.3)',
                    paddingTop: '6px',
                    marginTop: '6px',
                    marginBottom: '6px'
                  }}>
                    <div style={{ 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      color: '#60a5fa',
                      marginBottom: '4px'
                    }}>
                      📡 NASA DATA:
                    </div>
                    <div style={{ fontSize: '11px', marginBottom: '2px' }}>
                      🌧️ Rainfall: <strong>{district.nasaData.rainfall.current}mm</strong> ({district.nasaData.rainfall.trend === 'increasing' ? '📈' : '➡️'})
                    </div>
                    <div style={{ fontSize: '11px', marginBottom: '2px' }}>
                      🌡️ Temp: <strong>{district.nasaData.temperature.current}°C</strong> (HI: {district.nasaData.temperature.heatIndex}°C)
                    </div>
                    <div style={{ fontSize: '11px' }}>
                      💧 Soil: <strong>{district.nasaData.soilMoisture.current}%</strong> 
                      <span style={{
                        marginLeft: '4px',
                        padding: '1px 4px',
                        background: district.nasaData.soilMoisture.saturationLevel === 'extreme' ? '#dc2626' :
                                   district.nasaData.soilMoisture.saturationLevel === 'critical' ? '#f97316' :
                                   district.nasaData.soilMoisture.saturationLevel === 'high' ? '#eab308' : '#22c55e',
                        color: 'white',
                        borderRadius: '2px',
                        fontSize: '10px',
                        fontWeight: '700'
                      }}>
                        {district.nasaData.soilMoisture.saturationLevel.toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
                
                <div style={{ 
                  borderTop: '1px solid rgba(59, 130, 246, 0.3)',
                  paddingTop: '6px',
                  marginTop: '6px'
                }}>
                  <strong>Redevelopment Cost:</strong> <span style={{
                    color: '#10b981',
                    fontWeight: '700',
                    fontSize: '12px'
                  }}>
                    ${(district.redevelopmentCost / 1000000).toFixed(1)}M
                  </span>
                </div>
              </div>
            </LeafletTooltip>
          </Polygon>
        ))}

        {/* Flood Zones with Heatmap Effect */}
        {floodZones.map(zone => (
          <React.Fragment key={zone.id}>
            <Polygon
              positions={zone.coordinates}
              pathOptions={{
                fillColor: getRiskColor(zone.severity),
                fillOpacity: showHeatmap ? 0.6 : 0.4,
                color: getRiskColor(zone.severity),
                weight: 2,
                opacity: 0.9,
                className: 'flood-zone-polygon'
              }}
              eventHandlers={{
                click: () => onZoneClick(zone),
                mouseover: (e) => {
                  e.target.setStyle({ 
                    fillOpacity: 0.8, 
                    weight: 3,
                    color: '#ffffff'
                  });
                },
                mouseout: (e) => {
                  e.target.setStyle({ 
                    fillOpacity: showHeatmap ? 0.6 : 0.4, 
                    weight: 2,
                    color: getRiskColor(zone.severity)
                  });
                }
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h3 className="popup-title">{zone.name}</h3>
                  <p className="popup-text"><strong>Risk Score:</strong> {zone.riskScore}%</p>
                  <p className="popup-text"><strong>Accuracy:</strong> {zone.predictedAccuracy}%</p>
                  <p className="popup-text"><strong>Flood Probability:</strong> {zone.floodProbability || zone.riskScore}%</p>
                  <p className="popup-text">
                    <strong>Population:</strong> {(zone.populationAtRisk / 1000000).toFixed(2)}M
                  </p>
                  <p className="popup-text">
                    <strong>Peak Time:</strong> {zone.predictedPeakTime || 'N/A'}
                  </p>
                  <button 
                    className="popup-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onZoneClick(zone);
                    }}
                  >
                    View Full Details
                  </button>
                </div>
              </Popup>
            </Polygon>
            
            {/* Prediction metric labels on map */}
            {showHeatmap && <PredictionLabel zone={zone} />}
          </React.Fragment>
        ))}

        {/* Relief Centers */}
        {reliefCenters.map(center => (
          <CircleMarker
            key={center.id}
            center={center.coords}
            radius={8}
            pathOptions={{
              fillColor: getReliefColor(center.type),
              fillOpacity: 0.9,
              color: '#fff',
              weight: 2
            }}
          >
            <Popup>
              <div className="popup-content">
                <div className="popup-title">
                  {getReliefIcon(center.type)} {center.name}
                </div>
                <p className="popup-text">
                  <strong>Type:</strong> {center.type.toUpperCase()}
                </p>
                <p className="popup-text">
                  <strong>Capacity:</strong> {center.capacity.toLocaleString()}
                </p>
                {center.available && (
                  <p className="popup-text">
                    <strong>Available:</strong> {center.available.toLocaleString()}
                  </p>
                )}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Prediction Metric Overlays */}
      {showHeatmap && floodZones.length > 0 && (
        <div className="map-overlays">
          {floodZones.map(zone => (
            <div
              key={`label-${zone.id}`}
              className="prediction-label"
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                zIndex: 1000
              }}
            >
              <div className="prediction-metric">
                <span className="metric-accuracy">{zone.predictedAccuracy}%</span>
                <span className="metric-risk">Risk: {zone.riskScore}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}