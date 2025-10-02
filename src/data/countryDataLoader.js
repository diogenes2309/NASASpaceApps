// Dynamic Country Data Loader
// This module loads country data from JSON files dynamically

import countriesIndex from './config/countries-index.json';

// Dynamic import mapping for country data files
const countryModules = {
  'bangladesh.json': () => import('./countries/bangladesh.json'),
  'india.json': () => import('./countries/india.json'),
  'usa.json': () => import('./countries/usa.json'),
  'philippines.json': () => import('./countries/philippines.json'),
  'china.json': () => import('./countries/china.json'),
  'thailand.json': () => import('./countries/thailand.json'),
  'vietnam.json': () => import('./countries/vietnam.json'),
  'indonesia.json': () => import('./countries/indonesia.json'),
  'pakistan.json': () => import('./countries/pakistan.json'),
  'myanmar.json': () => import('./countries/myanmar.json'),
  'brazil.json': () => import('./countries/brazil.json'),
  'japan.json': () => import('./countries/japan.json'),
};

// Cache for loaded country data
const countryDataCache = new Map();

/**
 * Get list of all available countries
 * @returns {Array} Array of country objects with id, name, code, enabled status
 */
export function getAvailableCountries() {
  return countriesIndex.countries
    .filter(country => country.enabled)
    .sort((a, b) => a.priority - b.priority)
    .map(({ id, name, code }) => ({ id, name, code }));
}

/**
 * Load country data dynamically
 * @param {string} countryId - The country ID (e.g., 'bangladesh', 'india')
 * @returns {Promise<Object|null>} Country data or null if not found
 */
export async function loadCountryData(countryId) {
  // Check cache first
  if (countryDataCache.has(countryId)) {
    return countryDataCache.get(countryId);
  }

  // Find country in index
  const countryInfo = countriesIndex.countries.find(c => c.id === countryId);
  
  if (!countryInfo || !countryInfo.enabled) {
    console.warn(`Country '${countryId}' not found or disabled`);
    return null;
  }

  // Load the JSON file
  const loader = countryModules[countryInfo.dataFile];
  
  if (!loader) {
    console.warn(`Data file '${countryInfo.dataFile}' not found for country '${countryId}'`);
    return null;
  }

  try {
    const module = await loader();
    const data = module.default;
    
    // Cache the data
    countryDataCache.set(countryId, data);
    
    return data;
  } catch (error) {
    console.error(`Error loading country data for '${countryId}':`, error);
    return null;
  }
}

/**
 * Get country center coordinates
 * @param {string} countryId - The country ID
 * @returns {Promise<Array|null>} [lat, lng] or null
 */
export async function getCountryCenter(countryId) {
  const data = await loadCountryData(countryId);
  return data?.country?.center || null;
}

/**
 * Get country zoom level
 * @param {string} countryId - The country ID
 * @returns {Promise<number>} Zoom level (default 5)
 */
export async function getCountryZoom(countryId) {
  const data = await loadCountryData(countryId);
  return data?.country?.zoom || 5;
}

/**
 * Get all divisions/states for a country
 * @param {string} countryId - The country ID
 * @returns {Promise<Array>} Array of divisions
 */
export async function getCountryDivisions(countryId) {
  const data = await loadCountryData(countryId);
  return data?.divisions || [];
}

/**
 * Get all districts from all divisions for a country
 * @param {string} countryId - The country ID
 * @returns {Promise<Array>} Array of districts with division name included
 */
export async function getCountryDistricts(countryId) {
  const divisions = await getCountryDivisions(countryId);
  
  const districts = [];
  divisions.forEach(division => {
    (division.districts || []).forEach(district => {
      districts.push({
        ...district,
        divisionName: division.name
      });
    });
  });
  
  return districts;
}

/**
 * Get country statistics
 * @param {string} countryId - The country ID
 * @returns {Promise<Object|null>} Statistics object or null
 */
export async function getCountryStatistics(countryId) {
  const data = await loadCountryData(countryId);
  return data?.statistics || null;
}

/**
 * Get country geography info
 * @param {string} countryId - The country ID
 * @returns {Promise<Object|null>} Geography object or null
 */
export async function getCountryGeography(countryId) {
  const data = await loadCountryData(countryId);
  return data?.geography || null;
}

/**
 * Get flood zones for a country
 * @param {string} countryId - The country ID
 * @returns {Promise<Array>} Array of flood zones with damage estimates
 */
export async function getCountryFloodZones(countryId) {
  const data = await loadCountryData(countryId);
  return data?.floodZones || [];
}

/**
 * Get districts by risk level
 * @param {string} countryId - The country ID
 * @param {string} riskLevel - 'critical', 'high', 'medium', or 'low'
 * @returns {Promise<Array>} Filtered districts
 */
export async function getDistrictsByRisk(countryId, riskLevel) {
  const districts = await getCountryDistricts(countryId);
  return districts.filter(d => d.riskLevel === riskLevel);
}

/**
 * Clear the data cache (useful for development/testing)
 */
export function clearCache() {
  countryDataCache.clear();
}

/**
 * Preload all country data (optional performance optimization)
 * @returns {Promise<void>}
 */
export async function preloadAllCountries() {
  const countries = getAvailableCountries();
  await Promise.all(countries.map(c => loadCountryData(c.id)));
}

// Export for backward compatibility
export default {
  getAvailableCountries,
  loadCountryData,
  getCountryCenter,
  getCountryZoom,
  getCountryDivisions,
  getCountryDistricts,
  getCountryStatistics,
  getCountryGeography,
  getCountryFloodZones,
  getDistrictsByRisk,
  clearCache,
  preloadAllCountries
};
