export const reliefCenters = {
  'Bangladesh': [
    // Dhaka Division
    { id: 'bd-r1', name: 'Dhaka Medical College Hospital', type: 'hospital', coords: [23.7257, 90.3966], capacity: 2300, division: 'dhaka' },
    { id: 'bd-r2', name: 'National Disaster Response Center', type: 'shelter', coords: [23.8103, 90.4125], capacity: 15000, division: 'dhaka' },
    { id: 'bd-r3', name: 'Red Crescent Bangladesh HQ', type: 'ngo', coords: [23.7465, 90.3762], capacity: 8000, division: 'dhaka' },
    
    // Chittagong Division
    { id: 'bd-r4', name: 'Chittagong Medical College', type: 'hospital', coords: [22.3384, 91.8317], capacity: 1850, division: 'chittagong' },
    { id: 'bd-r5', name: 'Chittagong Emergency Shelter', type: 'shelter', coords: [22.3569, 91.7832], capacity: 12000, division: 'chittagong' },
    { id: 'bd-r6', name: 'BRAC Disaster Center - Chittagong', type: 'ngo', coords: [22.3475, 91.8163], capacity: 5500, division: 'chittagong' },
    
    // Sylhet Division
    { id: 'bd-r7', name: 'Sylhet MAG Osmani Medical', type: 'hospital', coords: [24.8998, 91.8667], capacity: 1150, division: 'sylhet' },
    { id: 'bd-r8', name: 'Sylhet Relief Camp', type: 'shelter', coords: [24.8949, 91.8687], capacity: 9000, division: 'sylhet' },
    
    // Feni District
    { id: 'bd-r9', name: 'Feni Sadar Hospital', type: 'hospital', coords: [23.0159, 91.4004], capacity: 850, division: 'chittagong' },
    { id: 'bd-r10', name: 'Feni Emergency Center', type: 'shelter', coords: [23.0239, 91.3967], capacity: 6500, division: 'chittagong' },
    
    // Khulna Division
    { id: 'bd-r11', name: 'Khulna Medical College', type: 'hospital', coords: [22.8184, 89.5625], capacity: 1450, division: 'khulna' },
    { id: 'bd-r12', name: 'Sundarbans Relief Station', type: 'shelter', coords: [22.8456, 89.5403], capacity: 8000, division: 'khulna' },
    { id: 'bd-r13', name: 'Coastal Aid Bangladesh', type: 'ngo', coords: [22.8312, 89.5518], capacity: 4200, division: 'khulna' },
    { id: 'bd-r14', name: 'Oxfam Bangladesh - Khulna', type: 'ngo', coords: [22.8093, 89.5530], capacity: 3200, division: 'khulna' }
  ],

  'USA': [
    // Florida
    { id: 'us-r1', name: 'Jackson Memorial Hospital', type: 'hospital', coords: [25.7789, -80.2143], capacity: 1550, state: 'florida' },
    { id: 'us-r2', name: 'Miami-Dade Emergency Center', type: 'shelter', coords: [25.7617, -80.1918], capacity: 25000, state: 'florida' },
    { id: 'us-r3', name: 'American Red Cross - Miami', type: 'ngo', coords: [25.7743, -80.1937], capacity: 18000, state: 'florida' },
    { id: 'us-r4', name: 'Tampa General Hospital', type: 'hospital', coords: [27.9445, -82.4617], capacity: 1100, state: 'florida' },
    { id: 'us-r5', name: 'Tampa Bay Evacuation Center', type: 'shelter', coords: [27.9506, -82.4572], capacity: 20000, state: 'florida' },
    
    // Louisiana
    { id: 'us-r6', name: 'Ochsner Medical Center', type: 'hospital', coords: [29.9584, -90.1803], capacity: 1350, state: 'louisiana' },
    { id: 'us-r7', name: 'Superdome Emergency Shelter', type: 'shelter', coords: [29.9511, -90.0812], capacity: 30000, state: 'louisiana' },
    { id: 'us-r8', name: 'FEMA New Orleans', type: 'ngo', coords: [29.9647, -90.0640], capacity: 15000, state: 'louisiana' },
    
    // Texas
    { id: 'us-r9', name: 'Texas Medical Center', type: 'hospital', coords: [29.7092, -95.3982], capacity: 1800, state: 'texas' },
    { id: 'us-r10', name: 'Houston Convention Center Shelter', type: 'shelter', coords: [29.7520, -95.3598], capacity: 28000, state: 'texas' },
    { id: 'us-r11', name: 'Salvation Army - Houston', type: 'ngo', coords: [29.7633, -95.3632], capacity: 7500, state: 'texas' }
  ],

  'Philippines': [
    // NCR
    { id: 'ph-r1', name: 'Philippine General Hospital', type: 'hospital', coords: [14.5781, 120.9850], capacity: 1500, region: 'ncr' },
    { id: 'ph-r2', name: 'Ultra Mega Evacuation Center', type: 'shelter', coords: [14.5995, 120.9842], capacity: 35000, region: 'ncr' },
    { id: 'ph-r3', name: 'Philippine Red Cross HQ', type: 'ngo', coords: [14.5844, 120.9846], capacity: 12000, region: 'ncr' },
    
    // Bulacan
    { id: 'ph-r4', name: 'Bulacan Medical Center', type: 'hospital', coords: [14.8553, 120.8812], capacity: 950, region: 'region3' },
    { id: 'ph-r5', name: 'Bulacan Provincial Shelter', type: 'shelter', coords: [14.7943, 120.8795], capacity: 18000, region: 'region3' },
    
    // Pampanga
    { id: 'ph-r6', name: 'Jose B. Lingad Hospital', type: 'hospital', coords: [15.0794, 120.6200], capacity: 850, region: 'region3' },
    { id: 'ph-r7', name: 'Angeles City Relief Center', type: 'shelter', coords: [15.1450, 120.5886], capacity: 16000, region: 'region3' },
    
    // Laguna
    { id: 'ph-r8', name: 'Calamba Medical Center', type: 'hospital', coords: [14.2118, 121.1653], capacity: 750, region: 'region4a' },
    { id: 'ph-r9', name: 'Laguna Lake Evacuation Site', type: 'shelter', coords: [14.2717, 121.4103], capacity: 14000, region: 'region4a' },
    { id: 'ph-r10', name: 'Caritas Philippines - Laguna', type: 'ngo', coords: [14.2717, 121.4103], capacity: 5500, region: 'region4a' }
  ],

  'India': [
    { id: 'in-r1', name: 'Assam Medical College', type: 'hospital', coords: [27.4728, 94.9120], capacity: 950, state: 'assam' },
    { id: 'in-r2', name: 'Guwahati Flood Relief Center', type: 'shelter', coords: [26.1445, 91.7362], capacity: 22000, state: 'assam' },
    { id: 'in-r3', name: 'National Disaster Response Force - Assam', type: 'ngo', coords: [26.1844, 91.7458], capacity: 8000, state: 'assam' },
    { id: 'in-r4', name: 'Mumbai Central Hospital', type: 'hospital', coords: [19.0176, 72.8561], capacity: 1200, state: 'maharashtra' }
  ],

  'Thailand': [
    { id: 'th-r1', name: 'Ramathibodi Hospital', type: 'hospital', coords: [13.7590, 100.5260], capacity: 1350, city: 'bangkok' },
    { id: 'th-r2', name: 'Bangkok Flood Shelter Complex', type: 'shelter', coords: [13.7563, 100.5018], capacity: 28000, city: 'bangkok' },
    { id: 'th-r3', name: 'Thai Red Cross', type: 'ngo', coords: [13.7446, 100.5342], capacity: 10000, city: 'bangkok' }
  ],

  'Indonesia': [
    { id: 'id-r1', name: 'RSUPN Dr. Cipto Mangunkusumo', type: 'hospital', coords: [-6.1862, 106.8310], capacity: 950, city: 'jakarta' },
    { id: 'id-r2', name: 'Jakarta Flood Emergency Center', type: 'shelter', coords: [-6.2088, 106.8456], capacity: 25000, city: 'jakarta' },
    { id: 'id-r3', name: 'PMI (Indonesian Red Cross)', type: 'ngo', coords: [-6.1944, 106.8222], capacity: 12000, city: 'jakarta' }
  ],

  'China': [
    { id: 'cn-r1', name: 'Shanghai General Hospital', type: 'hospital', coords: [31.2397, 121.4737], capacity: 1800, city: 'shanghai' },
    { id: 'cn-r2', name: 'Shanghai Emergency Center', type: 'shelter', coords: [31.2165, 121.4365], capacity: 25000, city: 'shanghai' }
  ],

  'Vietnam': [
    { id: 'vn-r1', name: 'Cho Ray Hospital', type: 'hospital', coords: [10.7555, 106.6572], capacity: 1600, city: 'ho-chi-minh' },
    { id: 'vn-r2', name: 'HCMC Relief Center', type: 'shelter', coords: [10.7769, 106.7009], capacity: 16000, city: 'ho-chi-minh' }
  ],

  'Japan': [
    { id: 'jp-r1', name: 'Tokyo Medical University Hospital', type: 'hospital', coords: [35.6938, 139.7036], capacity: 1050, city: 'tokyo' },
    { id: 'jp-r2', name: 'Tokyo Dome Evacuation Center', type: 'shelter', coords: [35.7056, 139.7519], capacity: 30000, city: 'tokyo' }
  ],

  'Brazil': [
    { id: 'br-r1', name: 'Hospital das Clínicas', type: 'hospital', coords: [-22.8705, -43.2287], capacity: 850, city: 'rio' },
    { id: 'br-r2', name: 'Maracanã Stadium Shelter', type: 'shelter', coords: [-22.9122, -43.2302], capacity: 35000, city: 'rio' }
  ],

  'Nigeria': [
    { id: 'ng-r1', name: 'Lagos University Teaching Hospital', type: 'hospital', coords: [6.5027, 3.3639], capacity: 750, city: 'lagos' },
    { id: 'ng-r2', name: 'Lagos Emergency Camp', type: 'shelter', coords: [6.5244, 3.3792], capacity: 12000, city: 'lagos' }
  ],

  'Pakistan': [
    { id: 'pk-r1', name: 'Karachi Civil Hospital', type: 'hospital', coords: [24.8615, 67.0099], capacity: 1100, city: 'karachi' },
    { id: 'pk-r2', name: 'Karachi Relief Center', type: 'shelter', coords: [24.8607, 67.0011], capacity: 18000, city: 'karachi' }
  ],

  'Mexico': [
    { id: 'mx-r1', name: 'Hospital General de Cancún', type: 'hospital', coords: [21.1619, -86.8515], capacity: 650, state: 'quintana-roo' },
    { id: 'mx-r2', name: 'Cancún Emergency Shelter', type: 'shelter', coords: [21.1743, -86.8466], capacity: 12000, state: 'quintana-roo' }
  ],

  'Netherlands': [
    { id: 'nl-r1', name: 'Erasmus MC', type: 'hospital', coords: [51.9107, 4.4673], capacity: 1300, province: 'zuid-holland' },
    { id: 'nl-r2', name: 'Rotterdam Emergency Center', type: 'shelter', coords: [51.9225, 4.4792], capacity: 15000, province: 'zuid-holland' }
  ],

  'Germany': [
    { id: 'de-r1', name: 'Charité Hospital', type: 'hospital', coords: [52.5200, 13.4050], capacity: 1450, state: 'berlin' },
    { id: 'de-r2', name: 'Berlin Flood Relief', type: 'shelter', coords: [52.5170, 13.3889], capacity: 18000, state: 'berlin' }
  ],

  'UK': [
    { id: 'uk-r1', name: 'Guy\'s Hospital', type: 'hospital', coords: [51.5034, -0.0869], capacity: 1250, region: 'england' },
    { id: 'uk-r2', name: 'London Emergency Center', type: 'shelter', coords: [51.5074, -0.1278], capacity: 20000, region: 'england' }
  ]
};