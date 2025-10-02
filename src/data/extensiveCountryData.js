// EXTENSIVE COUNTRY DATA - Bangladesh and India with complete divisions, districts, and detailed information

export const extensiveCountryData = {
  'Bangladesh': {
    code: 'BD',
    center: [23.8103, 90.4125],
    zoom: 7,
    avgRisk: 88,
    population: 169.4, // million
    area: 147570, // km²
    coastline: 580, // km
    riverSystems: ['Ganges-Brahmaputra-Meghna', 'Padma', 'Jamuna', 'Surma'],
    boundaries: [
      [26.6318, 88.0086], [26.6318, 92.6734], [20.7430, 92.6734], 
      [20.7430, 88.0086], [26.6318, 88.0086]
    ],
    divisions: [
      {
        name: 'Dhaka',
        population: 44.9,
        riskLevel: 85,
        coordinates: [23.8103, 90.4125],
        area: 20593.74,
        districts: [
          { 
            name: 'Dhaka', 
            population: 12000000, 
            riskLevel: 'critical', 
            coordinates: [23.8103, 90.4125], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.2,
            estimatedDamage: 1500000000,
            redevelopmentCost: 2200000000,
            rainfall: 450,
            cloudCover: 82,
            boundaries: [[23.95, 90.25], [23.95, 90.58], [23.65, 90.58], [23.65, 90.25], [23.95, 90.25]]
          },
          { 
            name: 'Gazipur', 
            population: 3400000, 
            riskLevel: 'high', 
            coordinates: [24.0022, 90.4264], 
            floodFrequency: 'Bi-Annual', 
            avgWaterLevel: 3.1,
            estimatedDamage: 420000000,
            redevelopmentCost: 680000000,
            rainfall: 380,
            cloudCover: 75,
            boundaries: [[24.15, 90.28], [24.15, 90.58], [23.88, 90.58], [23.88, 90.28], [24.15, 90.28]]
          },
          { 
            name: 'Narayanganj', 
            population: 2900000, 
            riskLevel: 'critical', 
            coordinates: [23.6238, 90.5000], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.8,
            estimatedDamage: 680000000,
            redevelopmentCost: 950000000,
            rainfall: 425,
            cloudCover: 80,
            boundaries: [[23.72, 90.42], [23.72, 90.62], [23.52, 90.62], [23.52, 90.42], [23.72, 90.42]]
          },
          { 
            name: 'Tangail', 
            population: 3600000, 
            riskLevel: 'high', 
            coordinates: [24.2513, 89.9167], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.5,
            estimatedDamage: 520000000,
            redevelopmentCost: 780000000,
            rainfall: 360,
            cloudCover: 72,
            boundaries: [[24.48, 89.72], [24.48, 90.12], [24.05, 90.12], [24.05, 89.72], [24.48, 89.72]]
          },
          { 
            name: 'Kishoreganj', 
            population: 2900000, 
            riskLevel: 'critical', 
            coordinates: [24.4260, 90.7765], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.9,
            estimatedDamage: 590000000,
            redevelopmentCost: 850000000,
            rainfall: 410,
            cloudCover: 78,
            boundaries: [[24.68, 90.58], [24.68, 91.02], [24.18, 91.02], [24.18, 90.58], [24.68, 90.58]]
          },
          { 
            name: 'Manikganj', 
            population: 1400000, 
            riskLevel: 'high', 
            coordinates: [23.8644, 90.0047], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.2,
            estimatedDamage: 280000000,
            redevelopmentCost: 420000000,
            rainfall: 340,
            cloudCover: 68,
            boundaries: [[23.98, 89.82], [23.98, 90.18], [23.72, 90.18], [23.72, 89.82], [23.98, 89.82]]
          },
          { 
            name: 'Munshiganj', 
            population: 1400000, 
            riskLevel: 'critical', 
            coordinates: [23.5422, 90.5305], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.7,
            estimatedDamage: 380000000,
            redevelopmentCost: 560000000,
            rainfall: 395,
            cloudCover: 76,
            boundaries: [[23.68, 90.38], [23.68, 90.68], [23.42, 90.68], [23.42, 90.38], [23.68, 90.38]]
          },
          { 
            name: 'Rajbari', 
            population: 1100000, 
            riskLevel: 'medium', 
            coordinates: [23.7574, 89.6444], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 2.9,
            estimatedDamage: 210000000,
            redevelopmentCost: 340000000,
            rainfall: 315,
            cloudCover: 65,
            boundaries: [[23.92, 89.48], [23.92, 89.82], [23.58, 89.82], [23.58, 89.48], [23.92, 89.48]]
          },
          { 
            name: 'Faridpur', 
            population: 1900000, 
            riskLevel: 'high', 
            coordinates: [23.6070, 89.8429], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.4,
            estimatedDamage: 420000000,
            redevelopmentCost: 630000000,
            rainfall: 370,
            cloudCover: 71,
            boundaries: [[23.82, 89.62], [23.82, 90.05], [23.38, 90.05], [23.38, 89.62], [23.82, 89.62]]
          },
          { 
            name: 'Gopalganj', 
            population: 1200000, 
            riskLevel: 'high', 
            coordinates: [23.0050, 89.8266], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.1,
            estimatedDamage: 260000000,
            redevelopmentCost: 410000000,
            rainfall: 350,
            cloudCover: 70,
            boundaries: [[23.22, 89.62], [23.22, 90.05], [22.82, 90.05], [22.82, 89.62], [23.22, 89.62]]
          },
          { 
            name: 'Madaripur', 
            population: 1200000, 
            riskLevel: 'high', 
            coordinates: [23.1641, 90.1897], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.6,
            estimatedDamage: 310000000,
            redevelopmentCost: 480000000,
            rainfall: 385,
            cloudCover: 74,
            boundaries: [[23.32, 90.02], [23.32, 90.38], [23.02, 90.38], [23.02, 90.02], [23.32, 90.02]]
          },
          { 
            name: 'Shariatpur', 
            population: 1100000, 
            riskLevel: 'high', 
            coordinates: [23.2423, 90.4348], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.5,
            estimatedDamage: 290000000,
            redevelopmentCost: 450000000,
            rainfall: 375,
            cloudCover: 73,
            boundaries: [[23.38, 90.28], [23.38, 90.62], [23.12, 90.62], [23.12, 90.28], [23.38, 90.28]]
          },
          { 
            name: 'Narsingdi', 
            population: 2200000, 
            riskLevel: 'high', 
            coordinates: [23.9232, 90.7175], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.6,
            estimatedDamage: 460000000,
            redevelopmentCost: 690000000,
            rainfall: 390,
            cloudCover: 76,
            boundaries: [[24.05, 90.58], [24.05, 90.88], [23.78, 90.88], [23.78, 90.58], [24.05, 90.58]]
          }
        ]
      },
      {
        name: 'Chittagong',
        population: 33.2,
        riskLevel: 92,
        coordinates: [22.3569, 91.7832],
        area: 33771.18,
        districts: [
          { 
            name: 'Chittagong', 
            population: 8200000, 
            riskLevel: 'critical', 
            coordinates: [22.3569, 91.7832], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.8,
            estimatedDamage: 1800000000,
            redevelopmentCost: 2600000000,
            rainfall: 480,
            cloudCover: 85,
            boundaries: [[22.58, 91.58], [22.58, 92.02], [22.12, 92.02], [22.12, 91.58], [22.58, 91.58]]
          },
          { 
            name: 'Cox\'s Bazar', 
            population: 2900000, 
            riskLevel: 'critical', 
            coordinates: [21.4272, 92.0058], 
            floodFrequency: 'Annual + Cyclone', 
            avgWaterLevel: 5.2,
            estimatedDamage: 920000000,
            redevelopmentCost: 1350000000,
            rainfall: 520,
            cloudCover: 88,
            boundaries: [[21.72, 91.82], [21.72, 92.22], [21.18, 92.22], [21.18, 91.82], [21.72, 91.82]]
          },
          { 
            name: 'Rangamati', 
            population: 600000, 
            riskLevel: 'critical', 
            coordinates: [22.6533, 92.1753], 
            floodFrequency: 'Monsoon', 
            avgWaterLevel: 3.8,
            estimatedDamage: 180000000,
            redevelopmentCost: 290000000,
            rainfall: 410,
            cloudCover: 77,
            boundaries: [[23.05, 91.92], [23.05, 92.48], [22.28, 92.48], [22.28, 91.92], [23.05, 91.92]]
          },
          { 
            name: 'Bandarban', 
            population: 400000, 
            riskLevel: 'high', 
            coordinates: [22.1953, 92.2184], 
            floodFrequency: 'Landslide Risk', 
            avgWaterLevel: 3.2,
            estimatedDamage: 135000000,
            redevelopmentCost: 230000000,
            rainfall: 395,
            cloudCover: 79,
            boundaries: [[22.48, 91.98], [22.48, 92.58], [21.82, 92.58], [21.82, 91.98], [22.48, 91.98]]
          },
          { 
            name: 'Khagrachari', 
            population: 600000, 
            riskLevel: 'critical', 
            coordinates: [23.1193, 91.9847], 
            floodFrequency: 'Monsoon', 
            avgWaterLevel: 3.5,
            estimatedDamage: 175000000,
            redevelopmentCost: 280000000,
            rainfall: 385,
            cloudCover: 76,
            boundaries: [[23.38, 91.72], [23.38, 92.28], [22.88, 92.28], [22.88, 91.72], [23.38, 91.72]]
          },
          { 
            name: 'Feni', 
            population: 1500000, 
            riskLevel: 'critical', 
            coordinates: [23.0159, 91.3976], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.3,
            estimatedDamage: 410000000,
            redevelopmentCost: 620000000,
            rainfall: 435,
            cloudCover: 81,
            boundaries: [[23.18, 91.22], [23.18, 91.58], [22.88, 91.58], [22.88, 91.22], [23.18, 91.22]]
          },
          { 
            name: 'Lakshmipur', 
            population: 1700000, 
            riskLevel: 'critical', 
            coordinates: [22.9447, 90.8286], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.6,
            estimatedDamage: 480000000,
            redevelopmentCost: 710000000,
            rainfall: 455,
            cloudCover: 83,
            boundaries: [[23.08, 90.68], [23.08, 91.02], [22.82, 91.02], [22.82, 90.68], [23.08, 90.68]]
          },
          { 
            name: 'Comilla', 
            population: 5400000, 
            riskLevel: 'critical', 
            coordinates: [23.4607, 91.1809], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.9,
            estimatedDamage: 1100000000,
            redevelopmentCost: 1650000000,
            rainfall: 405,
            cloudCover: 78,
            boundaries: [[23.72, 90.95], [23.72, 91.48], [23.22, 91.48], [23.22, 90.95], [23.72, 91.48]]
          },
          { 
            name: 'Noakhali', 
            population: 3100000, 
            riskLevel: 'critical', 
            coordinates: [22.8696, 91.0995], 
            floodFrequency: 'Annual + Cyclone', 
            avgWaterLevel: 4.9,
            estimatedDamage: 850000000,
            redevelopmentCost: 1250000000,
            rainfall: 490,
            cloudCover: 86,
            boundaries: [[23.12, 90.88], [23.12, 91.38], [22.62, 91.38], [22.62, 90.88], [23.12, 91.38]]
          },
          { 
            name: 'Brahmanbaria', 
            population: 2900000, 
            riskLevel: 'critical', 
            coordinates: [23.9571, 91.1119], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.7,
            estimatedDamage: 620000000,
            redevelopmentCost: 920000000,
            rainfall: 390,
            cloudCover: 75,
            boundaries: [[24.18, 90.88], [24.18, 91.38], [23.72, 91.38], [23.72, 90.88], [24.18, 91.38]]
          },
          { 
            name: 'Chandpur', 
            population: 2400000, 
            riskLevel: 'critical', 
            coordinates: [23.2332, 90.6712], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.2,
            estimatedDamage: 560000000,
            redevelopmentCost: 830000000,
            rainfall: 425,
            cloudCover: 80,
            boundaries: [[23.42, 90.48], [23.42, 90.88], [23.05, 90.88], [23.05, 90.48], [23.42, 90.88]]
          }
        ]
      },
      {
        name: 'Sylhet',
        population: 10.7,
        riskLevel: 94,
        coordinates: [24.8949, 91.8687],
        area: 12635.22,
        districts: [
          { 
            name: 'Sylhet', 
            population: 3400000, 
            riskLevel: 'critical', 
            coordinates: [24.8949, 91.8687], 
            floodFrequency: 'Annual + Flash', 
            avgWaterLevel: 5.1,
            estimatedDamage: 980000000,
            redevelopmentCost: 1450000000,
            rainfall: 510,
            cloudCover: 87,
            boundaries: [[25.12, 91.68], [25.12, 92.12], [24.68, 92.12], [24.68, 91.68], [25.12, 91.68]]
          },
          { 
            name: 'Moulvibazar', 
            population: 1900000, 
            riskLevel: 'critical', 
            coordinates: [24.4829, 91.7774], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.7,
            estimatedDamage: 540000000,
            redevelopmentCost: 800000000,
            rainfall: 475,
            cloudCover: 84,
            boundaries: [[24.72, 91.58], [24.72, 92.02], [24.28, 92.02], [24.28, 91.58], [24.72, 91.58]]
          },
          { 
            name: 'Habiganj', 
            population: 2100000, 
            riskLevel: 'critical', 
            coordinates: [24.3745, 91.4152], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.5,
            estimatedDamage: 610000000,
            redevelopmentCost: 900000000,
            rainfall: 460,
            cloudCover: 82,
            boundaries: [[24.62, 91.22], [24.62, 91.68], [24.12, 91.68], [24.12, 91.22], [24.62, 91.22]]
          },
          { 
            name: 'Sunamganj', 
            population: 2500000, 
            riskLevel: 'critical', 
            coordinates: [25.0657, 91.3950], 
            floodFrequency: 'Annual + Flash', 
            avgWaterLevel: 5.3,
            estimatedDamage: 750000000,
            redevelopmentCost: 1100000000,
            rainfall: 530,
            cloudCover: 89,
            boundaries: [[25.35, 91.18], [25.35, 91.72], [24.82, 91.72], [24.82, 91.18], [25.35, 91.18]]
          }
        ]
      },
      {
        name: 'Khulna',
        population: 15.9,
        riskLevel: 87,
        coordinates: [22.8456, 89.5403],
        area: 22284.22,
        districts: [
          { 
            name: 'Khulna', 
            population: 2300000, 
            riskLevel: 'critical', 
            coordinates: [22.8456, 89.5403], 
            floodFrequency: 'Seasonal + Storm Surge', 
            avgWaterLevel: 4.1,
            estimatedDamage: 620000000,
            redevelopmentCost: 920000000,
            rainfall: 420,
            cloudCover: 79,
            boundaries: [[23.02, 89.38], [23.02, 89.72], [22.68, 89.72], [22.68, 89.38], [23.02, 89.38]]
          },
          { 
            name: 'Bagerhat', 
            population: 1500000, 
            riskLevel: 'critical', 
            coordinates: [22.6602, 89.7895], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.4,
            estimatedDamage: 440000000,
            redevelopmentCost: 660000000,
            rainfall: 445,
            cloudCover: 81,
            boundaries: [[22.88, 89.58], [22.88, 89.98], [22.42, 89.98], [22.42, 89.58], [22.88, 89.58]]
          },
          { 
            name: 'Satkhira', 
            population: 2000000, 
            riskLevel: 'critical', 
            coordinates: [22.7185, 89.0700], 
            floodFrequency: 'Cyclone + Storm Surge', 
            avgWaterLevel: 4.7,
            estimatedDamage: 680000000,
            redevelopmentCost: 1000000000,
            rainfall: 465,
            cloudCover: 84,
            boundaries: [[22.95, 88.88], [22.95, 89.28], [22.48, 89.28], [22.48, 88.88], [22.95, 89.28]]
          },
          { 
            name: 'Jessore', 
            population: 2800000, 
            riskLevel: 'high', 
            coordinates: [23.1634, 89.2182], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.3,
            estimatedDamage: 480000000,
            redevelopmentCost: 720000000,
            rainfall: 355,
            cloudCover: 71,
            boundaries: [[23.38, 89.02], [23.38, 89.42], [22.95, 89.42], [22.95, 89.02], [23.38, 89.42]]
          },
          { 
            name: 'Jhenaidah', 
            population: 1800000, 
            riskLevel: 'high', 
            coordinates: [23.5450, 89.1539], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.1,
            estimatedDamage: 360000000,
            redevelopmentCost: 550000000,
            rainfall: 335,
            cloudCover: 69,
            boundaries: [[23.72, 88.95], [23.72, 89.38], [23.38, 89.38], [23.38, 88.95], [23.72, 89.38]]
          },
          { 
            name: 'Magura', 
            population: 900000, 
            riskLevel: 'high', 
            coordinates: [23.4855, 89.4198], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.2,
            estimatedDamage: 210000000,
            redevelopmentCost: 340000000,
            rainfall: 345,
            cloudCover: 70,
            boundaries: [[23.65, 89.25], [23.65, 89.58], [23.32, 89.58], [23.32, 89.25], [23.65, 89.58]]
          },
          { 
            name: 'Narail', 
            population: 700000, 
            riskLevel: 'high', 
            coordinates: [23.1163, 89.5840], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.4,
            estimatedDamage: 180000000,
            redevelopmentCost: 290000000,
            rainfall: 365,
            cloudCover: 72,
            boundaries: [[23.28, 89.42], [23.28, 89.75], [22.95, 89.75], [22.95, 89.42], [23.28, 89.75]]
          },
          { 
            name: 'Chuadanga', 
            population: 1100000, 
            riskLevel: 'medium', 
            coordinates: [23.6401, 88.8410], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.8,
            estimatedDamage: 190000000,
            redevelopmentCost: 310000000,
            rainfall: 305,
            cloudCover: 64,
            boundaries: [[23.82, 88.68], [23.82, 89.02], [23.48, 89.02], [23.48, 88.68], [23.82, 89.02]]
          },
          { 
            name: 'Kushtia', 
            population: 1900000, 
            riskLevel: 'high', 
            coordinates: [23.9013, 89.1205], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.5,
            estimatedDamage: 410000000,
            redevelopmentCost: 620000000,
            rainfall: 375,
            cloudCover: 73,
            boundaries: [[24.08, 88.92], [24.08, 89.32], [23.72, 89.32], [23.72, 88.92], [24.08, 89.32]]
          },
          { 
            name: 'Meherpur', 
            population: 700000, 
            riskLevel: 'medium', 
            coordinates: [23.7624, 88.6318], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.6,
            estimatedDamage: 145000000,
            redevelopmentCost: 250000000,
            rainfall: 290,
            cloudCover: 62,
            boundaries: [[23.92, 88.48], [23.92, 88.78], [23.62, 88.78], [23.62, 88.48], [23.92, 88.78]]
          }
        ]
      },
      {
        name: 'Rajshahi',
        population: 18.8,
        riskLevel: 72,
        coordinates: [24.3745, 88.6042],
        area: 18153.08,
        districts: [
          { 
            name: 'Rajshahi', 
            population: 2600000, 
            riskLevel: 'medium', 
            coordinates: [24.3745, 88.6042], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.5,
            estimatedDamage: 380000000,
            redevelopmentCost: 580000000,
            rainfall: 275,
            cloudCover: 60,
            boundaries: [[24.55, 88.42], [24.55, 88.78], [24.18, 88.78], [24.18, 88.42], [24.55, 88.78]]
          },
          { 
            name: 'Bogra', 
            population: 3400000, 
            riskLevel: 'medium', 
            coordinates: [24.8465, 89.3770], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 2.9,
            estimatedDamage: 480000000,
            redevelopmentCost: 720000000,
            rainfall: 310,
            cloudCover: 66,
            boundaries: [[25.05, 89.18], [25.05, 89.58], [24.62, 89.58], [24.62, 89.18], [25.05, 89.58]]
          },
          { 
            name: 'Pabna', 
            population: 2600000, 
            riskLevel: 'medium', 
            coordinates: [24.0064, 89.2372], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.1,
            estimatedDamage: 420000000,
            redevelopmentCost: 630000000,
            rainfall: 330,
            cloudCover: 68,
            boundaries: [[24.22, 89.02], [24.22, 89.45], [23.78, 89.45], [23.78, 89.02], [24.22, 89.45]]
          },
          { 
            name: 'Sirajganj', 
            population: 3100000, 
            riskLevel: 'high', 
            coordinates: [24.4533, 89.7006], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.3,
            estimatedDamage: 530000000,
            redevelopmentCost: 790000000,
            rainfall: 355,
            cloudCover: 71,
            boundaries: [[24.68, 89.48], [24.68, 89.92], [24.22, 89.92], [24.22, 89.48], [24.68, 89.92]]
          },
          { 
            name: 'Natore', 
            population: 1700000, 
            riskLevel: 'medium', 
            coordinates: [24.4206, 89.0008], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.4,
            estimatedDamage: 290000000,
            redevelopmentCost: 450000000,
            rainfall: 265,
            cloudCover: 59,
            boundaries: [[24.62, 88.82], [24.62, 89.22], [24.22, 89.22], [24.22, 88.82], [24.62, 89.22]]
          },
          { 
            name: 'Chapainawabganj', 
            population: 1700000, 
            riskLevel: 'low', 
            coordinates: [24.7413, 88.2912], 
            floodFrequency: 'Rare', 
            avgWaterLevel: 2.1,
            estimatedDamage: 240000000,
            redevelopmentCost: 390000000,
            rainfall: 240,
            cloudCover: 55,
            boundaries: [[24.92, 88.12], [24.92, 88.48], [24.52, 88.48], [24.52, 88.12], [24.92, 88.48]]
          },
          { 
            name: 'Naogaon', 
            population: 2600000, 
            riskLevel: 'low', 
            coordinates: [24.7936, 88.9318], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.3,
            estimatedDamage: 360000000,
            redevelopmentCost: 550000000,
            rainfall: 260,
            cloudCover: 58,
            boundaries: [[25.02, 88.72], [25.02, 89.12], [24.55, 89.12], [24.55, 88.72], [25.02, 89.12]]
          },
          { 
            name: 'Joypurhat', 
            population: 900000, 
            riskLevel: 'low', 
            coordinates: [25.0968, 89.0227], 
            floodFrequency: 'Rare', 
            avgWaterLevel: 2.0,
            estimatedDamage: 150000000,
            redevelopmentCost: 260000000,
            rainfall: 230,
            cloudCover: 54,
            boundaries: [[25.28, 88.88], [25.28, 89.18], [24.92, 89.18], [24.92, 88.88], [25.28, 89.18]]
          }
        ]
      },
      {
        name: 'Barisal',
        population: 8.3,
        riskLevel: 89,
        coordinates: [22.7010, 90.3535],
        area: 13225.20,
        districts: [
          { 
            name: 'Barisal', 
            population: 2300000, 
            riskLevel: 'critical', 
            coordinates: [22.7010, 90.3535], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 4.2,
            estimatedDamage: 610000000,
            redevelopmentCost: 910000000,
            rainfall: 430,
            cloudCover: 80,
            boundaries: [[22.88, 90.18], [22.88, 90.52], [22.52, 90.52], [22.52, 90.18], [22.88, 90.52]]
          },
          { 
            name: 'Patuakhali', 
            population: 1500000, 
            riskLevel: 'critical', 
            coordinates: [22.3596, 90.3298], 
            floodFrequency: 'Cyclone + Storm Surge', 
            avgWaterLevel: 4.8,
            estimatedDamage: 530000000,
            redevelopmentCost: 790000000,
            rainfall: 485,
            cloudCover: 85,
            boundaries: [[22.58, 90.12], [22.58, 90.55], [22.12, 90.55], [22.12, 90.12], [22.58, 90.55]]
          },
          { 
            name: 'Bhola', 
            population: 1800000, 
            riskLevel: 'critical', 
            coordinates: [22.6859, 90.6482], 
            floodFrequency: 'Annual + Cyclone', 
            avgWaterLevel: 5.0,
            estimatedDamage: 640000000,
            redevelopmentCost: 950000000,
            rainfall: 500,
            cloudCover: 87,
            boundaries: [[22.95, 90.42], [22.95, 90.88], [22.42, 90.88], [22.42, 90.42], [22.95, 90.88]]
          },
          { 
            name: 'Pirojpur', 
            population: 1100000, 
            riskLevel: 'critical', 
            coordinates: [22.5791, 89.9759], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.9,
            estimatedDamage: 320000000,
            redevelopmentCost: 490000000,
            rainfall: 405,
            cloudCover: 77,
            boundaries: [[22.75, 89.78], [22.75, 90.18], [22.38, 90.18], [22.38, 89.78], [22.75, 90.18]]
          },
          { 
            name: 'Jhalokati', 
            population: 700000, 
            riskLevel: 'critical', 
            coordinates: [22.6406, 90.1987], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.8,
            estimatedDamage: 220000000,
            redevelopmentCost: 360000000,
            rainfall: 395,
            cloudCover: 76,
            boundaries: [[22.78, 90.02], [22.78, 90.38], [22.48, 90.38], [22.48, 90.02], [22.78, 90.38]]
          },
          { 
            name: 'Barguna', 
            population: 900000, 
            riskLevel: 'critical', 
            coordinates: [22.1590, 90.1119], 
            floodFrequency: 'Cyclone + Storm Surge', 
            avgWaterLevel: 4.5,
            estimatedDamage: 340000000,
            redevelopmentCost: 520000000,
            rainfall: 455,
            cloudCover: 83,
            boundaries: [[22.35, 89.92], [22.35, 90.32], [21.95, 90.32], [21.95, 89.92], [22.35, 90.32]]
          }
        ]
      },
      {
        name: 'Rangpur',
        population: 16.2,
        riskLevel: 78,
        coordinates: [25.7439, 89.2752],
        area: 16317.45,
        districts: [
          { 
            name: 'Rangpur', 
            population: 2900000, 
            riskLevel: 'medium', 
            coordinates: [25.7439, 89.2752], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.0,
            estimatedDamage: 460000000,
            redevelopmentCost: 690000000,
            rainfall: 320,
            cloudCover: 67,
            boundaries: [[25.92, 89.08], [25.92, 89.48], [25.55, 89.48], [25.55, 89.08], [25.92, 89.48]]
          },
          { 
            name: 'Dinajpur', 
            population: 3000000, 
            riskLevel: 'medium', 
            coordinates: [25.6217, 88.6354], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.7,
            estimatedDamage: 410000000,
            redevelopmentCost: 620000000,
            rainfall: 295,
            cloudCover: 63,
            boundaries: [[25.88, 88.42], [25.88, 88.85], [25.38, 88.85], [25.38, 88.42], [25.88, 88.85]]
          },
          { 
            name: 'Lalmonirhat', 
            population: 1300000, 
            riskLevel: 'high', 
            coordinates: [25.9923, 89.2847], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.2,
            estimatedDamage: 290000000,
            redevelopmentCost: 450000000,
            rainfall: 345,
            cloudCover: 70,
            boundaries: [[26.15, 89.12], [26.15, 89.48], [25.82, 89.48], [25.82, 89.12], [26.15, 89.48]]
          },
          { 
            name: 'Nilphamari', 
            population: 1900000, 
            riskLevel: 'high', 
            coordinates: [25.9317, 88.8560], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.1,
            estimatedDamage: 370000000,
            redevelopmentCost: 560000000,
            rainfall: 335,
            cloudCover: 69,
            boundaries: [[26.12, 88.68], [26.12, 89.05], [25.75, 89.05], [25.75, 88.68], [26.12, 89.05]]
          },
          { 
            name: 'Gaibandha', 
            population: 2400000, 
            riskLevel: 'high', 
            coordinates: [25.3287, 89.5281], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.3,
            estimatedDamage: 450000000,
            redevelopmentCost: 680000000,
            rainfall: 360,
            cloudCover: 72,
            boundaries: [[25.55, 89.32], [25.55, 89.72], [25.12, 89.72], [25.12, 89.32], [25.55, 89.72]]
          },
          { 
            name: 'Thakurgaon', 
            population: 1400000, 
            riskLevel: 'medium', 
            coordinates: [26.0336, 88.4616], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.6,
            estimatedDamage: 240000000,
            redevelopmentCost: 390000000,
            rainfall: 280,
            cloudCover: 61,
            boundaries: [[26.22, 88.28], [26.22, 88.65], [25.85, 88.65], [25.85, 88.28], [26.22, 88.65]]
          },
          { 
            name: 'Panchagarh', 
            population: 1000000, 
            riskLevel: 'medium', 
            coordinates: [26.3411, 88.5541], 
            floodFrequency: 'Occasional', 
            avgWaterLevel: 2.5,
            estimatedDamage: 180000000,
            redevelopmentCost: 300000000,
            rainfall: 270,
            cloudCover: 60,
            boundaries: [[26.52, 88.38], [26.52, 88.72], [26.18, 88.72], [26.18, 88.38], [26.52, 88.72]]
          },
          { 
            name: 'Kurigram', 
            population: 2100000, 
            riskLevel: 'high', 
            coordinates: [25.8072, 89.6297], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.6,
            estimatedDamage: 480000000,
            redevelopmentCost: 720000000,
            rainfall: 380,
            cloudCover: 75,
            boundaries: [[26.02, 89.42], [26.02, 89.85], [25.58, 89.85], [25.58, 89.42], [26.02, 89.85]]
          }
        ]
      },
      {
        name: 'Mymensingh',
        population: 12.0,
        riskLevel: 81,
        coordinates: [24.7471, 90.4203],
        area: 10584.06,
        districts: [
          { 
            name: 'Mymensingh', 
            population: 5100000, 
            riskLevel: 'high', 
            coordinates: [24.7471, 90.4203], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.4,
            estimatedDamage: 820000000,
            redevelopmentCost: 1210000000,
            rainfall: 365,
            cloudCover: 73,
            boundaries: [[24.95, 90.22], [24.95, 90.62], [24.52, 90.62], [24.52, 90.22], [24.95, 90.62]]
          },
          { 
            name: 'Jamalpur', 
            population: 2300000, 
            riskLevel: 'high', 
            coordinates: [24.9375, 89.9372], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.7,
            estimatedDamage: 510000000,
            redevelopmentCost: 760000000,
            rainfall: 385,
            cloudCover: 76,
            boundaries: [[25.15, 89.72], [25.15, 90.15], [24.72, 90.15], [24.72, 89.72], [25.15, 90.15]]
          },
          { 
            name: 'Netrokona', 
            population: 2200000, 
            riskLevel: 'high', 
            coordinates: [24.8104, 90.7275], 
            floodFrequency: 'Annual', 
            avgWaterLevel: 3.8,
            estimatedDamage: 540000000,
            redevelopmentCost: 800000000,
            rainfall: 395,
            cloudCover: 77,
            boundaries: [[25.05, 90.52], [25.05, 90.95], [24.58, 90.95], [24.58, 90.52], [25.05, 90.95]]
          },
          { 
            name: 'Sherpur', 
            population: 1400000, 
            riskLevel: 'medium', 
            coordinates: [25.0204, 90.0152], 
            floodFrequency: 'Seasonal', 
            avgWaterLevel: 3.0,
            estimatedDamage: 310000000,
            redevelopmentCost: 480000000,
            rainfall: 325,
            cloudCover: 68,
            boundaries: [[25.22, 89.82], [25.22, 90.22], [24.82, 90.22], [24.82, 89.82], [25.22, 90.22]]
          }
        ]
      }
    ]
  },

  'India': {
    code: 'IN',
    center: [23.5937, 78.9629],
    zoom: 5,
    avgRisk: 76,
    population: 1408.0, // million
    area: 3287263, // km²
    coastline: 7516, // km
    riverSystems: ['Ganges', 'Brahmaputra', 'Indus', 'Godavari', 'Krishna', 'Mahanadi', 'Narmada'],
    divisions: [
      {
        name: 'West Bengal',
        population: 91.3,
        riskLevel: 88,
        coordinates: [22.9868, 87.8550],
        area: 88752,
        districts: [
          { name: 'Kolkata', population: 4500000, riskLevel: 'critical', coordinates: [22.5726, 88.3639], floodFrequency: 'Annual', avgWaterLevel: 4.0, estimatedDamage: 2200000000, redevelopmentCost: 3500000000, rainfall: 420, cloudCover: 82, boundaries: [[22.68, 88.26], [22.68, 88.48], [22.46, 88.48], [22.46, 88.26], [22.68, 88.26]] },
          { name: 'Howrah', population: 4800000, riskLevel: 'critical', coordinates: [22.5958, 88.2636], floodFrequency: 'Annual', avgWaterLevel: 3.8, estimatedDamage: 1850000000, redevelopmentCost: 2900000000, rainfall: 410, cloudCover: 80, boundaries: [[22.72, 88.16], [22.72, 88.38], [22.48, 88.38], [22.48, 88.16], [22.72, 88.16]] },
          { name: 'North 24 Parganas', population: 10000000, riskLevel: 'critical', coordinates: [22.6157, 88.4332], floodFrequency: 'Annual + Cyclone', avgWaterLevel: 4.3, estimatedDamage: 1950000000, redevelopmentCost: 2900000000, rainfall: 445, cloudCover: 85, boundaries: [[22.88, 88.28], [22.88, 88.72], [22.42, 88.72], [22.42, 88.28], [22.88, 88.28]] },
          { name: 'South 24 Parganas', population: 8200000, riskLevel: 'critical', coordinates: [22.1667, 88.4333], floodFrequency: 'Annual + Cyclone', avgWaterLevel: 4.6, estimatedDamage: 1680000000, redevelopmentCost: 2650000000, rainfall: 460, cloudCover: 87, boundaries: [[22.35, 88.28], [22.35, 88.68], [21.98, 88.68], [21.98, 88.28], [22.35, 88.28]] },
          { name: 'Nadia', population: 5.1, riskLevel: 85, coordinates: [23.4713, 88.5571], floodFrequency: 'Seasonal', avgWaterLevel: 3.6 },
          { name: 'Murshidabad', population: 7.1, riskLevel: 86, coordinates: [24.1833, 88.2667], floodFrequency: 'Seasonal', avgWaterLevel: 3.7 },
          { name: 'Malda', population: 4.0, riskLevel: 83, coordinates: [25.0096, 88.1410], floodFrequency: 'Seasonal', avgWaterLevel: 3.4 },
          { name: 'Jalpaiguri', population: 3.9, riskLevel: 84, coordinates: [26.5167, 88.7167], floodFrequency: 'Seasonal', avgWaterLevel: 3.5 },
          { name: 'Darjeeling', population: 1.8, riskLevel: 81, coordinates: [26.7271, 88.3953], floodFrequency: 'Flash Floods', avgWaterLevel: 3.2 },
          { name: 'Cooch Behar', population: 2.8, riskLevel: 82, coordinates: [26.3157, 89.4491], floodFrequency: 'Seasonal', avgWaterLevel: 3.3 },
          { name: 'Birbhum', population: 3.5, riskLevel: 78, coordinates: [24.0356, 87.6139], floodFrequency: 'Occasional', avgWaterLevel: 2.9 },
          { name: 'Burdwan (Bardhaman)', population: 7.7, riskLevel: 80, coordinates: [23.2324, 87.8615], floodFrequency: 'Seasonal', avgWaterLevel: 3.1 },
          { name: 'Hooghly', population: 5.5, riskLevel: 84, coordinates: [22.9089, 88.3967], floodFrequency: 'Seasonal', avgWaterLevel: 3.5 },
          { name: 'Bankura', population: 3.6, riskLevel: 76, coordinates: [23.2324, 87.0696], floodFrequency: 'Occasional', avgWaterLevel: 2.7 },
          { name: 'Purulia', population: 2.9, riskLevel: 74, coordinates: [23.3321, 86.3644], floodFrequency: 'Rare', avgWaterLevel: 2.4 },
          { name: 'Midnapore (Paschim)', population: 5.9, riskLevel: 79, coordinates: [22.4295, 87.3210], floodFrequency: 'Seasonal', avgWaterLevel: 3.0 },
          { name: 'Midnapore (Purba)', population: 5.0, riskLevel: 81, coordinates: [22.2855, 87.8327], floodFrequency: 'Seasonal', avgWaterLevel: 3.2 }
        ]
      },
      {
        name: 'Bihar',
        population: 104.0,
        riskLevel: 92,
        coordinates: [25.0961, 85.3131],
        area: 94163,
        districts: [
          { name: 'Patna', population: 5800000, riskLevel: 'critical', coordinates: [25.5941, 85.1376], floodFrequency: 'Annual', avgWaterLevel: 4.2, estimatedDamage: 1150000000, redevelopmentCost: 1750000000, rainfall: 385, cloudCover: 78, boundaries: [[25.75, 84.98], [25.75, 85.32], [25.42, 85.32], [25.42, 84.98], [25.75, 84.98]] },
          { name: 'Darbhanga', population: 3900000, riskLevel: 'critical', coordinates: [26.1542, 85.8918], floodFrequency: 'Annual', avgWaterLevel: 4.8, estimatedDamage: 780000000, redevelopmentCost: 1250000000, rainfall: 405, cloudCover: 82, boundaries: [[26.32, 85.72], [26.32, 86.08], [25.98, 86.08], [25.98, 85.72], [26.32, 85.72]] },
          { name: 'Muzaffarpur', population: 4800000, riskLevel: 'critical', coordinates: [26.1225, 85.3906], floodFrequency: 'Annual', avgWaterLevel: 4.6, estimatedDamage: 920000000, redevelopmentCost: 1420000000, rainfall: 395, cloudCover: 80, boundaries: [[26.28, 85.22], [26.28, 85.58], [25.95, 85.58], [25.95, 85.22], [26.28, 85.22]] },
          { name: 'Sitamarhi', population: 3.4, riskLevel: 95, coordinates: [26.5948, 85.4830], floodFrequency: 'Annual + Severe', avgWaterLevel: 5.1 },
          { name: 'Madhubani', population: 4.5, riskLevel: 94, coordinates: [26.3543, 86.0737], floodFrequency: 'Annual', avgWaterLevel: 4.9 },
          { name: 'Samastipur', population: 4.3, riskLevel: 91, coordinates: [25.8625, 85.7824], floodFrequency: 'Annual', avgWaterLevel: 4.4 },
          { name: 'Bhagalpur', population: 3.0, riskLevel: 89, coordinates: [25.2425, 86.9842], floodFrequency: 'Seasonal', avgWaterLevel: 4.0 },
          { name: 'Begusarai', population: 3.0, riskLevel: 90, coordinates: [25.4182, 86.1339], floodFrequency: 'Annual', avgWaterLevel: 4.3 },
          { name: 'Purnia', population: 3.3, riskLevel: 88, coordinates: [25.7771, 87.4753], floodFrequency: 'Seasonal', avgWaterLevel: 3.9 },
          { name: 'Araria', population: 2.8, riskLevel: 91, coordinates: [26.1489, 87.5178], floodFrequency: 'Annual', avgWaterLevel: 4.5 },
          { name: 'Kishanganj', population: 1.7, riskLevel: 90, coordinates: [26.1046, 87.9486], floodFrequency: 'Seasonal', avgWaterLevel: 4.2 },
          { name: 'Katihar', population: 3.1, riskLevel: 89, coordinates: [25.5394, 87.5678], floodFrequency: 'Seasonal', avgWaterLevel: 4.1 },
          { name: 'Supaul', population: 2.2, riskLevel: 93, coordinates: [26.1260, 86.6050], floodFrequency: 'Annual', avgWaterLevel: 4.7 },
          { name: 'Saharsa', population: 1.9, riskLevel: 92, coordinates: [25.8746, 86.5963], floodFrequency: 'Annual', avgWaterLevel: 4.6 },
          { name: 'Madhepura', population: 2.0, riskLevel: 91, coordinates: [25.9210, 86.7933], floodFrequency: 'Seasonal', avgWaterLevel: 4.4 }
        ]
      },
      {
        name: 'Assam',
        population: 31.2,
        riskLevel: 95,
        coordinates: [26.2006, 92.9376],
        area: 78438,
        districts: [
          { name: 'Guwahati', population: 1000000, riskLevel: 'critical', coordinates: [26.1445, 91.7362], floodFrequency: 'Annual', avgWaterLevel: 4.7, estimatedDamage: 850000000, redevelopmentCost: 1280000000, rainfall: 580, cloudCover: 88, boundaries: [[26.28, 91.62], [26.28, 91.86], [26.02, 91.86], [26.02, 91.62], [26.28, 91.62]] },
          { name: 'Dibrugarh', population: 1300000, riskLevel: 'critical', coordinates: [27.4728, 94.9120], floodFrequency: 'Annual + Severe', avgWaterLevel: 5.2, estimatedDamage: 680000000, redevelopmentCost: 1050000000, rainfall: 620, cloudCover: 90, boundaries: [[27.62, 94.78], [27.62, 95.08], [27.32, 95.08], [27.32, 94.78], [27.62, 94.78]] },
          { name: 'Dhemaji', population: 700000, riskLevel: 'critical', coordinates: [27.4833, 94.5833], floodFrequency: 'Annual + Flash', avgWaterLevel: 5.5, estimatedDamage: 420000000, redevelopmentCost: 680000000, rainfall: 650, cloudCover: 92, boundaries: [[27.62, 94.45], [27.62, 94.72], [27.35, 94.72], [27.35, 94.45], [27.62, 94.45]] },
          { name: 'Lakhimpur', population: 1.0, riskLevel: 95, coordinates: [27.2333, 94.1000], floodFrequency: 'Annual', avgWaterLevel: 5.0 },
          { name: 'Barpeta', population: 1.7, riskLevel: 94, coordinates: [26.3231, 91.0052], floodFrequency: 'Annual', avgWaterLevel: 4.8 },
          { name: 'Bongaigaon', population: 0.7, riskLevel: 92, coordinates: [26.4833, 90.5500], floodFrequency: 'Seasonal', avgWaterLevel: 4.5 },
          { name: 'Goalpara', population: 1.0, riskLevel: 93, coordinates: [26.1667, 90.6167], floodFrequency: 'Annual', avgWaterLevel: 4.6 },
          { name: 'Jorhat', population: 1.1, riskLevel: 94, coordinates: [26.7509, 94.2037], floodFrequency: 'Annual', avgWaterLevel: 4.9 },
          { name: 'Morigaon', population: 0.9, riskLevel: 95, coordinates: [26.2520, 92.3433], floodFrequency: 'Annual + Severe', avgWaterLevel: 5.1 },
          { name: 'Nagaon', population: 2.8, riskLevel: 94, coordinates: [26.3484, 92.6856], floodFrequency: 'Annual', avgWaterLevel: 4.8 }
        ]
      },
      {
        name: 'Uttar Pradesh',
        population: 199.8,
        riskLevel: 81,
        coordinates: [26.8467, 80.9462],
        area: 240928,
        districts: [
          { name: 'Lucknow', population: 4.6, riskLevel: 79, coordinates: [26.8467, 80.9462], floodFrequency: 'Seasonal', avgWaterLevel: 3.1 },
          { name: 'Varanasi', population: 3.7, riskLevel: 82, coordinates: [25.3176, 82.9739], floodFrequency: 'Seasonal', avgWaterLevel: 3.4 },
          { name: 'Allahabad (Prayagraj)', population: 5.9, riskLevel: 84, coordinates: [25.4358, 81.8463], floodFrequency: 'Annual', avgWaterLevel: 3.7 },
          { name: 'Gorakhpur', population: 4.4, riskLevel: 86, coordinates: [26.7606, 83.3732], floodFrequency: 'Seasonal', avgWaterLevel: 3.8 },
          { name: 'Ballia', population: 3.2, riskLevel: 85, coordinates: [25.7556, 84.1497], floodFrequency: 'Seasonal', avgWaterLevel: 3.7 },
          { name: 'Ghazipur', population: 3.6, riskLevel: 83, coordinates: [25.5800, 83.5780], floodFrequency: 'Seasonal', avgWaterLevel: 3.5 },
          { name: 'Bahraich', population: 3.5, riskLevel: 87, coordinates: [27.5743, 81.5943], floodFrequency: 'Seasonal', avgWaterLevel: 3.9 },
          { name: 'Lakhimpur Kheri', population: 4.0, riskLevel: 86, coordinates: [27.9465, 80.7787], floodFrequency: 'Seasonal', avgWaterLevel: 3.8 },
          { name: 'Barabanki', population: 3.3, riskLevel: 80, coordinates: [26.9244, 81.1857], floodFrequency: 'Occasional', avgWaterLevel: 3.2 },
          { name: 'Faizabad (Ayodhya)', population: 2.5, riskLevel: 81, coordinates: [26.7751, 82.1240], floodFrequency: 'Seasonal', avgWaterLevel: 3.3 }
        ]
      },
      {
        name: 'Odisha',
        population: 42.0,
        riskLevel: 90,
        coordinates: [20.9517, 85.0985],
        area: 155707,
        districts: [
          { name: 'Bhubaneswar', population: 0.9, riskLevel: 87, coordinates: [20.2961, 85.8245], floodFrequency: 'Cyclone', avgWaterLevel: 3.9 },
          { name: 'Cuttack', population: 2.6, riskLevel: 89, coordinates: [20.5124, 85.8830], floodFrequency: 'Annual', avgWaterLevel: 4.1 },
          { name: 'Puri', population: 1.7, riskLevel: 93, coordinates: [19.8135, 85.8312], floodFrequency: 'Annual + Cyclone', avgWaterLevel: 4.8 },
          { name: 'Balasore', population: 2.3, riskLevel: 91, coordinates: [21.4934, 86.9336], floodFrequency: 'Annual + Cyclone', avgWaterLevel: 4.5 },
          { name: 'Kendrapara', population: 1.4, riskLevel: 94, coordinates: [20.5020, 86.4220], floodFrequency: 'Annual + Severe Cyclone', avgWaterLevel: 5.0 },
          { name: 'Jagatsinghpur', population: 1.1, riskLevel: 92, coordinates: [20.2634, 86.1715], floodFrequency: 'Annual + Cyclone', avgWaterLevel: 4.7 },
          { name: 'Ganjam', population: 3.5, riskLevel: 90, coordinates: [19.3903, 84.7979], floodFrequency: 'Cyclone', avgWaterLevel: 4.3 },
          { name: 'Khordha', population: 2.2, riskLevel: 88, coordinates: [20.1809, 85.6160], floodFrequency: 'Seasonal', avgWaterLevel: 4.0 },
          { name: 'Jajpur', population: 1.8, riskLevel: 87, coordinates: [20.8503, 86.3316], floodFrequency: 'Seasonal', avgWaterLevel: 3.8 },
          { name: 'Bhadrak', population: 1.5, riskLevel: 89, coordinates: [21.0542, 86.4916], floodFrequency: 'Annual', avgWaterLevel: 4.2 }
        ]
      },
      {
        name: 'Kerala',
        population: 33.4,
        riskLevel: 85,
        coordinates: [10.8505, 76.2711],
        area: 38852,
        districts: [
          { name: 'Thiruvananthapuram', population: 3.3, riskLevel: 82, coordinates: [8.5241, 76.9366], floodFrequency: 'Monsoon', avgWaterLevel: 3.3 },
          { name: 'Kottayam', population: 2.0, riskLevel: 87, coordinates: [9.5916, 76.5222], floodFrequency: 'Annual + Flash', avgWaterLevel: 3.9 },
          { name: 'Alappuzha', population: 2.1, riskLevel: 89, coordinates: [9.4981, 76.3388], floodFrequency: 'Annual', avgWaterLevel: 4.1 },
          { name: 'Ernakulam', population: 3.3, riskLevel: 84, coordinates: [9.9816, 76.2999], floodFrequency: 'Seasonal', avgWaterLevel: 3.5 },
          { name: 'Thrissur', population: 3.1, riskLevel: 83, coordinates: [10.5276, 76.2144], floodFrequency: 'Seasonal', avgWaterLevel: 3.4 },
          { name: 'Idukki', population: 1.1, riskLevel: 88, coordinates: [9.9188, 77.1025], floodFrequency: 'Flash Floods', avgWaterLevel: 4.0 },
          { name: 'Pathanamthitta', population: 1.2, riskLevel: 86, coordinates: [9.2648, 76.7870], floodFrequency: 'Monsoon + Flash', avgWaterLevel: 3.7 },
          { name: 'Kollam', population: 2.6, riskLevel: 85, coordinates: [8.8932, 76.6141], floodFrequency: 'Seasonal', avgWaterLevel: 3.6 },
          { name: 'Palakkad', population: 2.8, riskLevel: 80, coordinates: [10.7867, 76.6548], floodFrequency: 'Occasional', avgWaterLevel: 3.1 },
          { name: 'Malappuram', population: 4.1, riskLevel: 81, coordinates: [11.0510, 76.0711], floodFrequency: 'Seasonal', avgWaterLevel: 3.2 }
        ]
      },
      {
        name: 'Maharashtra',
        population: 112.4,
        riskLevel: 78,
        coordinates: [19.7515, 75.7139],
        area: 307713,
        districts: [
          { name: 'Mumbai', population: 12.4, riskLevel: 86, coordinates: [19.0760, 72.8777], floodFrequency: 'Monsoon', avgWaterLevel: 3.8 },
          { name: 'Thane', population: 11.0, riskLevel: 84, coordinates: [19.2183, 72.9781], floodFrequency: 'Monsoon', avgWaterLevel: 3.6 },
          { name: 'Pune', population: 9.4, riskLevel: 76, coordinates: [18.5204, 73.8567], floodFrequency: 'Occasional', avgWaterLevel: 2.8 },
          { name: 'Nashik', population: 6.1, riskLevel: 75, coordinates: [19.9975, 73.7898], floodFrequency: 'Occasional', avgWaterLevel: 2.7 },
          { name: 'Ratnagiri', population: 1.6, riskLevel: 82, coordinates: [16.9902, 73.3120], floodFrequency: 'Monsoon', avgWaterLevel: 3.4 },
          { name: 'Sindhudurg', population: 0.8, riskLevel: 81, coordinates: [16.0236, 73.6703], floodFrequency: 'Monsoon', avgWaterLevel: 3.3 },
          { name: 'Raigad', population: 2.6, riskLevel: 83, coordinates: [18.5184, 73.0188], floodFrequency: 'Monsoon', avgWaterLevel: 3.5 },
          { name: 'Kolhapur', population: 3.9, riskLevel: 79, coordinates: [16.7050, 74.2433], floodFrequency: 'Seasonal', avgWaterLevel: 3.0 },
          { name: 'Sangli', population: 2.8, riskLevel: 80, coordinates: [16.8524, 74.5815], floodFrequency: 'Seasonal', avgWaterLevel: 3.1 },
          { name: 'Satara', population: 3.0, riskLevel: 77, coordinates: [17.6805, 73.9869], floodFrequency: 'Occasional', avgWaterLevel: 2.9 }
        ]
      },
      {
        name: 'Gujarat',
        population: 60.4,
        riskLevel: 80,
        coordinates: [22.2587, 71.1924],
        area: 196244,
        districts: [
          { name: 'Ahmedabad', population: 7.2, riskLevel: 78, coordinates: [23.0225, 72.5714], floodFrequency: 'Occasional', avgWaterLevel: 2.9 },
          { name: 'Surat', population: 6.1, riskLevel: 84, coordinates: [21.1702, 72.8311], floodFrequency: 'Seasonal', avgWaterLevel: 3.5 },
          { name: 'Vadodara', population: 4.2, riskLevel: 81, coordinates: [22.3072, 73.1812], floodFrequency: 'Seasonal', avgWaterLevel: 3.2 },
          { name: 'Rajkot', population: 3.8, riskLevel: 76, coordinates: [22.3039, 70.8022], floodFrequency: 'Rare', avgWaterLevel: 2.6 },
          { name: 'Bhavnagar', population: 2.9, riskLevel: 79, coordinates: [21.7645, 72.1519], floodFrequency: 'Occasional', avgWaterLevel: 3.0 },
          { name: 'Kutch', population: 2.1, riskLevel: 82, coordinates: [23.7337, 69.8597], floodFrequency: 'Cyclone Risk', avgWaterLevel: 3.3 },
          { name: 'Navsari', population: 1.3, riskLevel: 83, coordinates: [20.9509, 72.9233], floodFrequency: 'Seasonal', avgWaterLevel: 3.4 },
          { name: 'Valsad', population: 1.7, riskLevel: 82, coordinates: [20.5992, 72.9342], floodFrequency: 'Seasonal', avgWaterLevel: 3.3 },
          { name: 'Bharuch', population: 1.5, riskLevel: 80, coordinates: [21.7051, 72.9959], floodFrequency: 'Seasonal', avgWaterLevel: 3.1 },
          { name: 'Anand', population: 2.1, riskLevel: 77, coordinates: [22.5645, 72.9289], floodFrequency: 'Occasional', avgWaterLevel: 2.8 }
        ]
      },
      {
        name: 'Andhra Pradesh',
        population: 49.5,
        riskLevel: 83,
        coordinates: [15.9129, 79.7400],
        area: 160205,
        districts: [
          { name: 'Visakhapatnam', population: 4.3, riskLevel: 85, coordinates: [17.6868, 83.2185], floodFrequency: 'Cyclone', avgWaterLevel: 3.7 },
          { name: 'Vijayawada', population: 2.5, riskLevel: 86, coordinates: [16.5062, 80.6480], floodFrequency: 'Seasonal', avgWaterLevel: 3.8 },
          { name: 'Guntur', population: 4.9, riskLevel: 84, coordinates: [16.3067, 80.4365], floodFrequency: 'Seasonal', avgWaterLevel: 3.6 },
          { name: 'Nellore', population: 2.9, riskLevel: 87, coordinates: [14.4426, 79.9865], floodFrequency: 'Cyclone', avgWaterLevel: 3.9 },
          { name: 'Kurnool', population: 4.0, riskLevel: 79, coordinates: [15.8281, 78.0373], floodFrequency: 'Occasional', avgWaterLevel: 3.0 },
          { name: 'Kadapa', population: 2.9, riskLevel: 78, coordinates: [14.4673, 78.8242], floodFrequency: 'Occasional', avgWaterLevel: 2.9 },
          { name: 'East Godavari', population: 5.2, riskLevel: 88, coordinates: [17.0005, 81.8040], floodFrequency: 'Annual', avgWaterLevel: 4.0 },
          { name: 'West Godavari', population: 3.9, riskLevel: 87, coordinates: [16.7500, 81.1667], floodFrequency: 'Seasonal', avgWaterLevel: 3.9 },
          { name: 'Krishna', population: 4.5, riskLevel: 85, coordinates: [16.5382, 80.6209], floodFrequency: 'Seasonal', avgWaterLevel: 3.7 },
          { name: 'Prakasam', population: 3.4, riskLevel: 82, coordinates: [15.3500, 79.5833], floodFrequency: 'Occasional', avgWaterLevel: 3.3 }
        ]
      },
      {
        name: 'Tamil Nadu',
        population: 72.1,
        riskLevel: 79,
        coordinates: [11.1271, 78.6569],
        area: 130060,
        districts: [
          { name: 'Chennai', population: 4.7, riskLevel: 84, coordinates: [13.0827, 80.2707], floodFrequency: 'Monsoon + Cyclone', avgWaterLevel: 3.6 },
          { name: 'Coimbatore', population: 3.5, riskLevel: 74, coordinates: [11.0168, 76.9558], floodFrequency: 'Rare', avgWaterLevel: 2.4 },
          { name: 'Madurai', population: 3.0, riskLevel: 76, coordinates: [9.9252, 78.1198], floodFrequency: 'Occasional', avgWaterLevel: 2.7 },
          { name: 'Tiruchirappalli', population: 2.7, riskLevel: 78, coordinates: [10.7905, 78.7047], floodFrequency: 'Seasonal', avgWaterLevel: 2.9 },
          { name: 'Salem', population: 3.5, riskLevel: 75, coordinates: [11.6643, 78.1460], floodFrequency: 'Occasional', avgWaterLevel: 2.6 },
          { name: 'Tirunelveli', population: 3.1, riskLevel: 80, coordinates: [8.7139, 77.7567], floodFrequency: 'Seasonal', avgWaterLevel: 3.1 },
          { name: 'Vellore', population: 3.9, riskLevel: 77, coordinates: [12.9165, 79.1325], floodFrequency: 'Occasional', avgWaterLevel: 2.8 },
          { name: 'Cuddalore', population: 2.6, riskLevel: 82, coordinates: [11.7480, 79.7714], floodFrequency: 'Cyclone', avgWaterLevel: 3.4 },
          { name: 'Kanchipuram', population: 4.0, riskLevel: 81, coordinates: [12.8342, 79.7036], floodFrequency: 'Monsoon', avgWaterLevel: 3.2 },
          { name: 'Thanjavur', population: 2.4, riskLevel: 79, coordinates: [10.7870, 79.1378], floodFrequency: 'Seasonal', avgWaterLevel: 3.0 }
        ]
      }
    ]
  }
};

// Helper function to get country boundary
export const getCountryBoundary = (countryName) => {
  return extensiveCountryData[countryName]?.boundaries || null;
};

// Helper function to get all districts for a country
export const getAllDistricts = (countryName) => {
  const country = extensiveCountryData[countryName];
  if (!country) return [];
  
  const divisions = country.divisions || country.states || country.regions || [];
  return divisions.flatMap(div => 
    (div.districts || []).map(district => ({
      ...district,
      division: div.name
    }))
  );
};

// Helper function to get high-risk areas
export const getHighRiskAreas = (countryName, threshold = 85) => {
  const districts = getAllDistricts(countryName);
  return districts.filter(d => d.riskLevel >= threshold);
};
