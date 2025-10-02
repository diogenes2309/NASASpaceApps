// Dynamic Countries Data - Loads from JSON files
import { getAvailableCountries, loadCountryData, getCountryCenter, getCountryZoom } from './countryDataLoader';

// This object will be populated dynamically
let countriesDataCache = {};
let isInitialized = false;

/**
 * Initialize countries data from JSON files
 * This loads basic info for all countries
 */
async function initializeCountriesData() {
  if (isInitialized) return countriesDataCache;
  
  const availableCountries = getAvailableCountries();
  
  // Create basic structure for each country
  for (const country of availableCountries) {
    const data = await loadCountryData(country.id);
    
    if (data) {
      countriesDataCache[country.name] = {
        code: data.country.code,
        center: data.country.center,
        zoom: data.country.zoom,
        bounds: data.country.bounds,
        ...data.statistics,
        ...data.geography
      };
    }
  }
  
  isInitialized = true;
  return countriesDataCache;
}

// Initialize on module load
const initPromise = initializeCountriesData();

/**
 * Get countries data (async)
 * @returns {Promise<Object>} Countries data object
 */
export async function getCountriesData() {
  await initPromise;
  return countriesDataCache;
}

/**
 * Get specific country data
 * @param {string} countryName - The country name
 * @returns {Promise<Object|null>} Country data or null
 */
export async function getCountryData(countryName) {
  await initPromise;
  return countriesDataCache[countryName] || null;
}

// Export synchronous version for backward compatibility
// This will be populated after initialization
export const countriesData = new Proxy({}, {
  get(target, prop) {
    if (isInitialized) {
      return countriesDataCache[prop];
    }
    // Return a default object while loading
    console.warn(`Country data not yet loaded. Use getCountriesData() for async access.`);
    return null;
  }
});

// Initialize and populate the sync object
initPromise.then(() => {
  Object.assign(countriesData, countriesDataCache);
});

export default countriesData;
