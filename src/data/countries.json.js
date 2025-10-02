// Map Data - Dynamically loaded from JSON
import mapDataJSON from './mapData.json';

export const extensiveCountryData = mapDataJSON;

// Helper function to get country boundary (removed - no more square boundaries)
export const getCountryBoundary = (countryName) => {
  return null; // No longer showing square boundaries
};

// Helper function to get all districts for a country
export const getAllDistricts = (countryName) => {
  const country = extensiveCountryData[countryName];
  if (!country) return [];
  
  const divisions = country.divisions || [];
  return divisions.flatMap(div => 
    (div.districts || []).map(district => ({
      ...district,
      divisionName: div.name
    }))
  );
};

// Helper function to get high-risk areas
export const getHighRiskAreas = (countryName, threshold = 85) => {
  const districts = getAllDistricts(countryName);
  return districts.filter(d => {
    const riskValue = typeof d.riskLevel === 'string' 
      ? (d.riskLevel === 'critical' ? 90 : d.riskLevel === 'high' ? 80 : 70)
      : d.riskLevel;
    return riskValue >= threshold;
  });
};

// Export for backward compatibility
export default extensiveCountryData;
