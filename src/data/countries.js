// Import extensive data
import { extensiveCountryData } from './extensiveCountryData';

export const countriesData = {
  // USE EXTENSIVE DATA - Bangladesh and India have complete district-level data
  'Bangladesh': extensiveCountryData['Bangladesh'],
  'India': extensiveCountryData['India'],

  // EXTENSIVE DATA - USA (Major flood-prone states with detailed data) - KEEPING ORIGINAL
  'USA_BACKUP': {
    code: 'US',
    center: [37.0902, -95.7129],
    zoom: 5,
    avgRisk: 72,
    population: 331.9, // million
    states: [
      { name: 'Florida', population: 21.5, riskLevel: 88, coordinates: [27.9944, -81.7603] },
      { name: 'Louisiana', population: 4.6, riskLevel: 92, coordinates: [30.9843, -91.9623] },
      { name: 'Texas', population: 29.1, riskLevel: 78, coordinates: [31.9686, -99.9018] },
      { name: 'California', population: 39.5, riskLevel: 75, coordinates: [36.7783, -119.4179] },
      { name: 'Mississippi', population: 3.0, riskLevel: 85, coordinates: [32.3547, -89.3985] },
      { name: 'North Carolina', population: 10.4, riskLevel: 80, coordinates: [35.7596, -79.0193] },
      { name: 'South Carolina', population: 5.1, riskLevel: 83, coordinates: [33.8361, -81.1637] },
      { name: 'New Jersey', population: 9.3, riskLevel: 76, coordinates: [40.0583, -74.4057] }
    ]
  },

  // EXTENSIVE DATA - USA (Major flood-prone states with detailed data)
  'USA': {
    code: 'US',
    center: [37.0902, -95.7129],
    zoom: 5,
    avgRisk: 72,
    population: 331.9, // million
    states: [
      { name: 'Florida', population: 21.5, riskLevel: 88, coordinates: [27.9944, -81.7603] },
      { name: 'Louisiana', population: 4.6, riskLevel: 92, coordinates: [30.9843, -91.9623] },
      { name: 'Texas', population: 29.1, riskLevel: 78, coordinates: [31.9686, -99.9018] },
      { name: 'California', population: 39.5, riskLevel: 75, coordinates: [36.7783, -119.4179] },
      { name: 'Mississippi', population: 3.0, riskLevel: 85, coordinates: [32.3547, -89.3985] },
      { name: 'North Carolina', population: 10.4, riskLevel: 80, coordinates: [35.7596, -79.0193] },
      { name: 'South Carolina', population: 5.1, riskLevel: 83, coordinates: [33.8361, -81.1637] },
      { name: 'New Jersey', population: 9.3, riskLevel: 76, coordinates: [40.0583, -74.4057] }
    ]
  },

  // EXTENSIVE DATA - Philippines (17 Regions with detailed data)
  'Philippines': {
    code: 'PH',
    center: [12.8797, 121.7740],
    zoom: 6,
    avgRisk: 85,
    population: 113.9, // million
    regions: [
      { name: 'NCR (Metro Manila)', population: 13.9, riskLevel: 86, coordinates: [14.5995, 120.9842] },
      { name: 'Ilocos Region', population: 5.3, riskLevel: 79, coordinates: [16.0833, 120.6167] },
      { name: 'Cagayan Valley', population: 3.7, riskLevel: 88, coordinates: [16.9754, 121.8107] },
      { name: 'Central Luzon', population: 12.4, riskLevel: 82, coordinates: [15.4833, 120.7] },
      { name: 'CALABARZON', population: 16.2, riskLevel: 84, coordinates: [14.1008, 121.0794] },
      { name: 'MIMAROPA', population: 3.2, riskLevel: 77, coordinates: [12.5, 121.0] },
      { name: 'Bicol Region', population: 6.1, riskLevel: 91, coordinates: [13.4209, 123.4139] },
      { name: 'Western Visayas', population: 7.9, riskLevel: 83, coordinates: [11.0, 122.5] },
      { name: 'Central Visayas', population: 8.1, riskLevel: 85, coordinates: [10.3157, 123.8854] },
      { name: 'Eastern Visayas', population: 4.5, riskLevel: 93, coordinates: [11.2465, 125.0076] },
      { name: 'Zamboanga Peninsula', population: 3.8, riskLevel: 80, coordinates: [8.5, 123.25] },
      { name: 'Northern Mindanao', population: 5.0, riskLevel: 81, coordinates: [8.4833, 124.6472] },
      { name: 'Davao Region', population: 5.4, riskLevel: 78, coordinates: [7.0731, 125.6128] },
      { name: 'SOCCSKSARGEN', population: 4.9, riskLevel: 79, coordinates: [6.25, 124.75] },
      { name: 'Caraga', population: 2.8, riskLevel: 87, coordinates: [9.0, 125.5] }
    ]
  },

  // BASIC DATA - Other countries
  'India': {
    code: 'IN',
    center: [20.5937, 78.9629],
    zoom: 5,
    avgRisk: 78,
    population: 1393.4,
    majorRegions: ['Assam', 'Bihar', 'West Bengal', 'Maharashtra', 'Kerala']
  },

  'Thailand': {
    code: 'TH',
    center: [15.8700, 100.9925],
    zoom: 6,
    avgRisk: 75,
    population: 69.8,
    majorRegions: ['Bangkok', 'Ayutthaya', 'Nakhon Ratchasima']
  },

  'Vietnam': {
    code: 'VN',
    center: [14.0583, 108.2772],
    zoom: 6,
    avgRisk: 79,
    population: 97.3,
    majorRegions: ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Mekong Delta']
  },

  'China': {
    code: 'CN',
    center: [35.8617, 104.1954],
    zoom: 4,
    avgRisk: 73,
    population: 1439.3,
    majorRegions: ['Shanghai', 'Guangdong', 'Hubei', 'Yangtze Basin']
  },

  'Japan': {
    code: 'JP',
    center: [36.2048, 138.2529],
    zoom: 5,
    avgRisk: 69,
    population: 125.8,
    majorRegions: ['Tokyo', 'Osaka', 'Fukuoka', 'Kyushu']
  },

  'Indonesia': {
    code: 'ID',
    center: [-0.7893, 113.9213],
    zoom: 5,
    avgRisk: 82,
    population: 273.5,
    majorRegions: ['Jakarta', 'West Java', 'Central Java', 'Sumatra']
  },

  'Brazil': {
    code: 'BR',
    center: [-14.2350, -51.9253],
    zoom: 4,
    avgRisk: 71,
    population: 212.6,
    majorRegions: ['Rio de Janeiro', 'São Paulo', 'Amazonas', 'Paraná']
  },

  'Nigeria': {
    code: 'NG',
    center: [9.0820, 8.6753],
    zoom: 6,
    avgRisk: 76,
    population: 206.1,
    majorRegions: ['Lagos', 'Rivers', 'Delta', 'Kano']
  },

  'Pakistan': {
    code: 'PK',
    center: [30.3753, 69.3451],
    zoom: 5,
    avgRisk: 81,
    population: 220.9,
    majorRegions: ['Sindh', 'Punjab', 'Balochistan', 'Khyber Pakhtunkhwa']
  },

  'Myanmar': {
    code: 'MM',
    center: [21.9162, 95.9560],
    zoom: 5,
    avgRisk: 80,
    population: 54.4,
    majorRegions: ['Yangon', 'Mandalay', 'Ayeyarwady', 'Rakhine']
  },

  'Mexico': {
    code: 'MX',
    center: [23.6345, -102.5528],
    zoom: 5,
    avgRisk: 68,
    population: 128.9,
    majorRegions: ['Veracruz', 'Tabasco', 'Chiapas', 'Tamaulipas']
  },

  'Pakistan': {
    code: 'PK',
    center: [30.3753, 69.3451],
    zoom: 5,
    avgRisk: 81,
    provinces: ['Sindh', 'Punjab', 'Khyber Pakhtunkhwa']
  },

  'Mexico': {
    code: 'MX',
    center: [23.6345, -102.5528],
    zoom: 5,
    avgRisk: 68,
    states: ['Veracruz', 'Tabasco', 'Chiapas']
  },

  'Netherlands': {
    code: 'NL',
    center: [52.1326, 5.2913],
    zoom: 7,
    avgRisk: 74,
    provinces: ['Zuid-Holland', 'Noord-Holland', 'Zeeland']
  },

  'Germany': {
    code: 'DE',
    center: [51.1657, 10.4515],
    zoom: 6,
    avgRisk: 62,
    states: ['North Rhine-Westphalia', 'Bavaria', 'Lower Saxony']
  },

  'UK': {
    code: 'GB',
    center: [55.3781, -3.4360],
    zoom: 6,
    avgRisk: 65,
    regions: ['England', 'Wales', 'Scotland']
  }
};