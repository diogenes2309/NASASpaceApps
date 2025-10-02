export const weatherData = {
  'Bangladesh': {
    current: {
      temperature: 32,
      humidity: 89,
      windSpeed: 18,
      rainfall_24h: 145,
      pressure: 1008,
      visibility: 4.5
    },
    hazards: {
      cyclone: false,
      tsunami: false,
      flood: true,
      heavyRain: true
    },
    forecast: {
      next24h: 'Heavy rainfall continuing, flood risk increasing',
      next48h: 'Monsoon expected to intensify',
      next72h: 'Conditions may improve by end of week'
    },
    alerts: [
      {
        type: 'flood',
        severity: 'critical',
        message: 'Heavy monsoon rains expected - Flash flood warning active',
        issuedAt: '2 hours ago'
      },
      {
        type: 'rain',
        severity: 'warning',
        message: 'River water levels rising rapidly in northern districts',
        issuedAt: '5 hours ago'
      }
    ]
  },

  'USA': {
    current: {
      temperature: 28,
      humidity: 78,
      windSpeed: 45,
      rainfall_24h: 85,
      pressure: 985,
      visibility: 6.2
    },
    hazards: {
      cyclone: true,
      tsunami: false,
      flood: true,
      heavyRain: true
    },
    forecast: {
      next24h: 'Hurricane making landfall - Category 3',
      next48h: 'Heavy rainfall and storm surge continuing',
      next72h: 'Storm weakening, but flood risk remains'
    },
    alerts: [
      {
        type: 'cyclone',
        severity: 'critical',
        message: 'Hurricane warning - Category 3 storm approaching Gulf Coast',
        issuedAt: '1 hour ago'
      },
      {
        type: 'flood',
        severity: 'critical',
        message: 'Storm surge of 8-12 feet predicted for coastal areas',
        issuedAt: '3 hours ago'
      },
      {
        type: 'wind',
        severity: 'warning',
        message: 'Sustained winds 111-129 mph expected',
        issuedAt: '2 hours ago'
      }
    ]
  },

  'Philippines': {
    current: {
      temperature: 31,
      humidity: 85,
      windSpeed: 52,
      rainfall_24h: 195,
      pressure: 975,
      visibility: 3.0
    },
    hazards: {
      cyclone: true,
      tsunami: true,
      flood: true,
      heavyRain: true
    },
    forecast: {
      next24h: 'Super Typhoon making landfall - Catastrophic conditions',
      next48h: 'Life-threatening storm surge and flooding',
      next72h: 'Typhoon moving inland, severe flooding continues'
    },
    alerts: [
      {
        type: 'cyclone',
        severity: 'critical',
        message: 'Super Typhoon approaching - Signal No. 5 in Metro Manila',
        issuedAt: '30 minutes ago'
      },
      {
        type: 'tsunami',
        severity: 'critical',
        message: 'Tsunami watch issued for eastern coastal areas',
        issuedAt: '45 minutes ago'
      },
      {
        type: 'flood',
        severity: 'critical',
        message: 'Evacuate low-lying areas immediately - Life-threatening floods expected',
        issuedAt: '1 hour ago'
      },
      {
        type: 'landslide',
        severity: 'warning',
        message: 'Landslide warnings in mountain provinces',
        issuedAt: '4 hours ago'
      }
    ]
  },

  'India': {
    current: {
      temperature: 34,
      humidity: 82,
      windSpeed: 22,
      rainfall_24h: 120
    },
    alerts: [
      {
        severity: 'warning',
        message: 'Monsoon flooding in Assam - Brahmaputra river above danger level',
        issuedAt: '3 hours ago'
      }
    ]
  },

  'Thailand': {
    current: {
      temperature: 33,
      humidity: 76,
      windSpeed: 15,
      rainfall_24h: 95
    },
    alerts: [
      {
        severity: 'warning',
        message: 'Bangkok flooding alert - Heavy rainfall continues',
        issuedAt: '6 hours ago'
      }
    ]
  },

  'Indonesia': {
    current: {
      temperature: 30,
      humidity: 88,
      windSpeed: 20,
      rainfall_24h: 165
    },
    alerts: [
      {
        severity: 'critical',
        message: 'Jakarta severe flooding - Multiple districts underwater',
        issuedAt: '2 hours ago'
      }
    ]
  },

  'China': {
    current: {
      temperature: 29,
      humidity: 74,
      windSpeed: 28,
      rainfall_24h: 78
    },
    alerts: []
  },

  'Vietnam': {
    current: {
      temperature: 32,
      humidity: 81,
      windSpeed: 25,
      rainfall_24h: 110
    },
    alerts: [
      {
        severity: 'warning',
        message: 'Mekong Delta flooding - Rice fields affected',
        issuedAt: '8 hours ago'
      }
    ]
  },

  'Japan': {
    current: {
      temperature: 26,
      humidity: 68,
      windSpeed: 32,
      rainfall_24h: 65
    },
    alerts: []
  },

  'Brazil': {
    current: {
      temperature: 27,
      humidity: 79,
      windSpeed: 18,
      rainfall_24h: 88
    },
    alerts: []
  },

  'Nigeria': {
    current: {
      temperature: 31,
      humidity: 83,
      windSpeed: 16,
      rainfall_24h: 125
    },
    alerts: [
      {
        severity: 'warning',
        message: 'Lagos coastal flooding risk - High tide combined with heavy rain',
        issuedAt: '4 hours ago'
      }
    ]
  },

  'Pakistan': {
    current: {
      temperature: 35,
      humidity: 71,
      windSpeed: 24,
      rainfall_24h: 92
    },
    alerts: []
  },

  'Mexico': {
    current: {
      temperature: 29,
      humidity: 77,
      windSpeed: 38,
      rainfall_24h: 72
    },
    alerts: []
  },

  'Netherlands': {
    current: {
      temperature: 18,
      humidity: 84,
      windSpeed: 42,
      rainfall_24h: 55
    },
    alerts: [
      {
        severity: 'warning',
        message: 'North Sea storm surge warning - Coastal defenses on alert',
        issuedAt: '5 hours ago'
      }
    ]
  },

  'Germany': {
    current: {
      temperature: 16,
      humidity: 78,
      windSpeed: 35,
      rainfall_24h: 48
    },
    alerts: []
  },

  'UK': {
    current: {
      temperature: 15,
      humidity: 82,
      windSpeed: 40,
      rainfall_24h: 52
    },
    alerts: []
  }
};