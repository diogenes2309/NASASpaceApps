export const floodZones = [
  // Bangladesh - Extensive flood zones with all divisions
  {
    id: 'bd-feni',
    name: 'Feni District',
    country: 'Bangladesh',
    division: 'Chittagong',
    severity: 'critical',
    riskScore: 94,
    populationAtRisk: 1500000,
    areaAffected: 285,
    predictedAccuracy: 94,
    floodProbability: 89,
    waterLevel: 'Rising',
    predictedPeakTime: '18-24 hours',
    coordinates: [
      [23.0239, 91.3967],
      [23.0500, 91.4500],
      [23.0000, 91.4800],
      [22.9500, 91.4200]
    ]
  },
  {
    id: 'bd-chittagong',
    name: 'Chittagong Metro',
    country: 'Bangladesh',
    severity: 'high',
    riskScore: 87,
    populationAtRisk: 3800000,
    areaAffected: 420,
    predictedAccuracy: 91,
    coordinates: [
      [22.3569, 91.7832],
      [22.4000, 91.8500],
      [22.3200, 91.8800],
      [22.3000, 91.8000]
    ]
  },
  {
    id: 'bd-sylhet',
    name: 'Sylhet Division',
    country: 'Bangladesh',
    severity: 'high',
    riskScore: 89,
    populationAtRisk: 2100000,
    areaAffected: 520,
    predictedAccuracy: 89,
    coordinates: [
      [24.8949, 91.8687],
      [24.9500, 91.9500],
      [24.8500, 91.9800],
      [24.8000, 91.9000]
    ]
  },
  {
    id: 'bd-khulna',
    name: 'Khulna Sundarbans',
    country: 'Bangladesh',
    severity: 'medium',
    riskScore: 76,
    populationAtRisk: 1900000,
    areaAffected: 650,
    predictedAccuracy: 87,
    coordinates: [
      [22.8456, 89.5403],
      [22.9000, 89.6500],
      [22.8000, 89.7000],
      [22.7500, 89.6000]
    ]
  },
  {
    id: 'bd-dhaka',
    name: 'Dhaka Metropolitan',
    country: 'Bangladesh',
    severity: 'critical',
    riskScore: 91,
    populationAtRisk: 4200000,
    areaAffected: 380,
    predictedAccuracy: 92,
    coordinates: [
      [23.8103, 90.4125],
      [23.8800, 90.5000],
      [23.7800, 90.5500],
      [23.7500, 90.4500]
    ]
  },

  // USA - Extensive flood zones
  {
    id: 'us-new-orleans',
    name: 'New Orleans Basin',
    country: 'USA',
    severity: 'critical',
    riskScore: 92,
    populationAtRisk: 1200000,
    areaAffected: 450,
    predictedAccuracy: 93,
    coordinates: [
      [29.9511, -90.0715],
      [30.0500, -90.0000],
      [29.9000, -89.9500],
      [29.8500, -90.0500]
    ]
  },
  {
    id: 'us-houston',
    name: 'Houston Coastal',
    country: 'USA',
    severity: 'high',
    riskScore: 85,
    populationAtRisk: 2800000,
    areaAffected: 890,
    predictedAccuracy: 90,
    coordinates: [
      [29.7604, -95.3698],
      [29.8500, -95.2500],
      [29.7000, -95.2000],
      [29.6500, -95.3500]
    ]
  },
  {
    id: 'us-miami',
    name: 'Miami-Dade Coastal',
    country: 'USA',
    severity: 'high',
    riskScore: 83,
    populationAtRisk: 2700000,
    areaAffected: 320,
    predictedAccuracy: 88,
    coordinates: [
      [25.7617, -80.1918],
      [25.8500, -80.1000],
      [25.7000, -80.0500],
      [25.6500, -80.1500]
    ]
  },
  {
    id: 'us-tampa',
    name: 'Tampa Bay Area',
    country: 'USA',
    severity: 'medium',
    riskScore: 78,
    populationAtRisk: 1500000,
    areaAffected: 540,
    predictedAccuracy: 89,
    coordinates: [
      [27.9506, -82.4572],
      [28.0500, -82.3500],
      [27.9000, -82.3000],
      [27.8500, -82.4000]
    ]
  },

  // Philippines - Extensive flood zones
  {
    id: 'ph-bulacan',
    name: 'Bulacan Lowlands',
    country: 'Philippines',
    severity: 'critical',
    riskScore: 90,
    populationAtRisk: 1800000,
    areaAffected: 380,
    predictedAccuracy: 91,
    coordinates: [
      [14.7943, 120.8795],
      [14.8800, 121.0000],
      [14.7500, 121.0500],
      [14.7000, 120.9500]
    ]
  },
  {
    id: 'ph-pampanga',
    name: 'Pampanga River Basin',
    country: 'Philippines',
    severity: 'high',
    riskScore: 86,
    populationAtRisk: 1600000,
    areaAffected: 420,
    predictedAccuracy: 90,
    coordinates: [
      [14.9692, 120.5700],
      [15.0500, 120.7000],
      [14.9000, 120.7500],
      [14.8500, 120.6500]
    ]
  },
  {
    id: 'ph-manila',
    name: 'Metro Manila',
    country: 'Philippines',
    severity: 'critical',
    riskScore: 93,
    populationAtRisk: 3500000,
    areaAffected: 280,
    predictedAccuracy: 92,
    coordinates: [
      [14.5995, 120.9842],
      [14.7000, 121.1000],
      [14.5500, 121.1500],
      [14.5000, 121.0500]
    ]
  },
  {
    id: 'ph-laguna',
    name: 'Laguna de Bay',
    country: 'Philippines',
    severity: 'medium',
    riskScore: 79,
    populationAtRisk: 1200000,
    areaAffected: 550,
    predictedAccuracy: 87,
    coordinates: [
      [14.2717, 121.4103],
      [14.3500, 121.5000],
      [14.2000, 121.5500],
      [14.1500, 121.4500]
    ]
  },

  // Other countries - Basic zones
  {
    id: 'in-assam',
    name: 'Assam Valley',
    country: 'India',
    severity: 'high',
    riskScore: 88,
    populationAtRisk: 2800000,
    areaAffected: 780,
    predictedAccuracy: 88,
    coordinates: [
      [26.2006, 92.9376],
      [26.3000, 93.1000],
      [26.1500, 93.1500],
      [26.1000, 93.0000]
    ]
  },
  {
    id: 'th-bangkok',
    name: 'Bangkok Metropolitan',
    country: 'Thailand',
    severity: 'high',
    riskScore: 84,
    populationAtRisk: 3200000,
    areaAffected: 620,
    predictedAccuracy: 89,
    coordinates: [
      [13.7563, 100.5018],
      [13.8500, 100.6500],
      [13.7000, 100.7000],
      [13.6500, 100.6000]
    ]
  },
  {
    id: 'id-jakarta',
    name: 'Jakarta Bay Area',
    country: 'Indonesia',
    severity: 'critical',
    riskScore: 91,
    populationAtRisk: 4100000,
    areaAffected: 450,
    predictedAccuracy: 90,
    coordinates: [
      [-6.2088, 106.8456],
      [-6.1000, 106.9500],
      [-6.2500, 107.0000],
      [-6.3000, 106.9000]
    ]
  },
  {
    id: 'cn-shanghai',
    name: 'Shanghai Delta',
    country: 'China',
    severity: 'high',
    riskScore: 82,
    populationAtRisk: 5600000,
    areaAffected: 890,
    predictedAccuracy: 91,
    coordinates: [
      [31.2304, 121.4737],
      [31.3500, 121.6000],
      [31.1800, 121.6500],
      [31.1500, 121.5500]
    ]
  },
  {
    id: 'vn-mekong',
    name: 'Mekong Delta',
    country: 'Vietnam',
    severity: 'high',
    riskScore: 87,
    populationAtRisk: 3400000,
    areaAffected: 1200,
    predictedAccuracy: 87,
    coordinates: [
      [10.0452, 105.7469],
      [10.1500, 105.9000],
      [10.0000, 105.9500],
      [9.9500, 105.8500]
    ]
  },
  {
    id: 'jp-tokyo',
    name: 'Tokyo Bay Region',
    country: 'Japan',
    severity: 'medium',
    riskScore: 74,
    populationAtRisk: 2900000,
    areaAffected: 420,
    predictedAccuracy: 89,
    coordinates: [
      [35.6762, 139.6503],
      [35.7500, 139.8000],
      [35.6200, 139.8500],
      [35.5800, 139.7500]
    ]
  },
  {
    id: 'br-rio',
    name: 'Rio de Janeiro Coast',
    country: 'Brazil',
    severity: 'medium',
    riskScore: 77,
    populationAtRisk: 1800000,
    areaAffected: 340,
    predictedAccuracy: 86,
    coordinates: [
      [-22.9068, -43.1729],
      [-22.8000, -43.0500],
      [-22.9500, -43.0000],
      [-23.0000, -43.1000]
    ]
  },
  {
    id: 'ng-lagos',
    name: 'Lagos Lagoon',
    country: 'Nigeria',
    severity: 'high',
    riskScore: 85,
    populationAtRisk: 2600000,
    areaAffected: 520,
    predictedAccuracy: 87,
    coordinates: [
      [6.5244, 3.3792],
      [6.6000, 3.5000],
      [6.4800, 3.5500],
      [6.4500, 3.4500]
    ]
  },
  {
    id: 'mx-cancun',
    name: 'Cancún Coastal Zone',
    country: 'Mexico',
    severity: 'medium',
    riskScore: 76,
    populationAtRisk: 950000,
    areaAffected: 280,
    predictedAccuracy: 88,
    coordinates: [
      [21.1619, -86.8515],
      [21.2500, -86.7500],
      [21.1200, -86.7000],
      [21.0800, -86.8000]
    ]
  },
  {
    id: 'nl-rotterdam',
    name: 'Rotterdam Port Area',
    country: 'Netherlands',
    severity: 'medium',
    riskScore: 79,
    populationAtRisk: 1100000,
    areaAffected: 240,
    predictedAccuracy: 90,
    coordinates: [
      [51.9225, 4.4792],
      [52.0000, 4.6000],
      [51.8800, 4.6500],
      [51.8500, 4.5500]
    ]
  }
];