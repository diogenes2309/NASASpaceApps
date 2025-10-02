import React from 'react';
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import {
  floodProbabilityData,
  damageDistribution,
  waterLevelData,
  economicImpactData,
  historicalComparison,
  regionalAnalysisData,
  redevelopmentCosts,
} from '../data/chartData';

export default function AnalyticsPanel({ selectedCountry, districtBoundaries, floodZones }) {
  
  // Generate real analytics from NASA data
  const generateAnalytics = () => {
    if (!districtBoundaries || districtBoundaries.length === 0) {
      return {
        regionalData: selectedCountry ? regionalAnalysisData[selectedCountry] : [],
        redevelopmentData: selectedCountry ? redevelopmentCosts[selectedCountry] : null,
        floodProbability: floodProbabilityData,
        waterLevel: waterLevelData,
        historicalData: historicalComparison
      };
    }

    const districtsWithNASA = districtBoundaries.filter(d => d.nasaData);
    
    if (districtsWithNASA.length === 0) {
      return {
        regionalData: selectedCountry ? regionalAnalysisData[selectedCountry] : [],
        redevelopmentData: selectedCountry ? redevelopmentCosts[selectedCountry] : null,
        floodProbability: floodProbabilityData,
        waterLevel: waterLevelData,
        historicalData: historicalComparison
      };
    }

    // Generate Regional Analysis from district data
    const regionalData = districtsWithNASA.map(district => {
      const rainfall = district.nasaData.rainfall.current;
      const soilMoisture = district.nasaData.soilMoisture.current;
      const saturation = district.nasaData.soilMoisture.saturationLevel;
      
      // Calculate risk score based on multiple factors
      let riskScore = 50; // Base
      if (rainfall > 400) riskScore += 20;
      if (rainfall > 600) riskScore += 10;
      if (soilMoisture > 80) riskScore += 15;
      if (saturation === 'critical' || saturation === 'extreme') riskScore += 20;
      
      riskScore = Math.min(riskScore, 98);

      // Estimate population and impact (demo values)
      const population = (Math.random() * 3 + 0.5).toFixed(1);
      const predictedAffected = (population * (riskScore / 100)).toFixed(1);
      const estimatedDamage = (predictedAffected * 2.5).toFixed(1);

      return {
        region: district.name,
        risk: riskScore,
        population: parseFloat(population),
        predictedAffected: parseFloat(predictedAffected),
        estimatedDamage: parseFloat(estimatedDamage)
      };
    }).sort((a, b) => b.risk - a.risk); // Highest risk first

    // Generate Flood Probability based on rainfall trends
    const avgRainfall = districtsWithNASA.reduce((sum, d) => sum + d.nasaData.rainfall.current, 0) / districtsWithNASA.length;
    const floodProbability = Array.from({ length: 12 }, (_, i) => {
      const baseProb = Math.min((avgRainfall / 400) * 60, 85);
      const variation = Math.sin(i / 2) * 15;
      return {
        hour: `${i * 2}h`,
        probability: Math.max(20, Math.min(95, baseProb + variation)),
        threshold: 70,
        critical: 85
      };
    });

    // Generate Water Level based on soil moisture
    const avgSoilMoisture = districtsWithNASA.reduce((sum, d) => sum + d.nasaData.soilMoisture.current, 0) / districtsWithNASA.length;
    const waterLevel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
      const baseLevel = avgSoilMoisture * 0.8;
      const trend = i * 2;
      return {
        day,
        level: Math.min(100, baseLevel + trend),
        warning: 70,
        danger: 85
      };
    });

    // Generate Historical Data from NASA 5-year progressions
    const firstDistrict = districtsWithNASA[0];
    const historicalData = firstDistrict.nasaData.rainfall.historical.map((rainfall, idx) => ({
      year: 2020 + idx,
      affected: (rainfall / 100).toFixed(1),
      damage: (rainfall / 50).toFixed(1),
      deaths: Math.max(10, Math.round(rainfall / 20))
    }));

    // Calculate Redevelopment Costs
    const totalEstimatedDamage = regionalData.reduce((sum, r) => sum + r.estimatedDamage, 0);
    const redevelopmentData = {
      total: (totalEstimatedDamage * 1.5).toFixed(1),
      timeline: `${Math.ceil(totalEstimatedDamage / 2)}-${Math.ceil(totalEstimatedDamage / 2) + 2} years`,
      breakdown: {
        infrastructure: (totalEstimatedDamage * 0.4).toFixed(1),
        housing: (totalEstimatedDamage * 0.3).toFixed(1),
        agriculture: (totalEstimatedDamage * 0.2).toFixed(1),
        healthcare: (totalEstimatedDamage * 0.1).toFixed(1)
      },
      fundingSecured: (totalEstimatedDamage * 0.35).toFixed(1)
    };

    return {
      regionalData,
      redevelopmentData,
      floodProbability,
      waterLevel,
      historicalData
    };
  };

  const analytics = generateAnalytics();
  const regionalData = analytics.regionalData;
  const redevelopmentData = analytics.redevelopmentData;

  return (
    <div className="analytics-panel">
      {/* NASA Environmental Overview */}
      {districtBoundaries && districtBoundaries.length > 0 && (
        <div className="nasa-overview-section">
          <div className="section-title">🌍 NASA ENVIRONMENTAL OVERVIEW - {selectedCountry?.toUpperCase()}</div>
          <div className="nasa-overview-grid">
            <div className="overview-card">
              <div className="overview-icon">🌧️</div>
              <div className="overview-label">Avg Rainfall</div>
              <div className="overview-value">
                {districtBoundaries.filter(d => d.nasaData).length > 0
                  ? Math.round(districtBoundaries
                      .filter(d => d.nasaData)
                      .reduce((sum, d) => sum + d.nasaData.rainfall.current, 0) /
                      districtBoundaries.filter(d => d.nasaData).length)
                  : 0}mm
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">🌡️</div>
              <div className="overview-label">Avg Temperature</div>
              <div className="overview-value">
                {districtBoundaries.filter(d => d.nasaData).length > 0
                  ? (districtBoundaries
                      .filter(d => d.nasaData)
                      .reduce((sum, d) => sum + d.nasaData.temperature.current, 0) /
                      districtBoundaries.filter(d => d.nasaData).length).toFixed(1)
                  : 0}°C
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">💧</div>
              <div className="overview-label">Avg Soil Moisture</div>
              <div className="overview-value">
                {districtBoundaries.filter(d => d.nasaData).length > 0
                  ? (districtBoundaries
                      .filter(d => d.nasaData)
                      .reduce((sum, d) => sum + d.nasaData.soilMoisture.current, 0) /
                      districtBoundaries.filter(d => d.nasaData).length).toFixed(1)
                  : 0}%
              </div>
            </div>
            <div className="overview-card critical">
              <div className="overview-icon">⚠️</div>
              <div className="overview-label">Critical Zones</div>
              <div className="overview-value">
                {districtBoundaries.filter(d =>
                  d.nasaData?.soilMoisture?.saturationLevel === 'critical' ||
                  d.nasaData?.soilMoisture?.saturationLevel === 'extreme'
                ).length}
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">📊</div>
              <div className="overview-label">Districts</div>
              <div className="overview-value">{districtBoundaries.length}</div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">📡</div>
              <div className="overview-label">NASA Coverage</div>
              <div className="overview-value">
                {districtBoundaries.filter(d => d.nasaData).length}/{districtBoundaries.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flood Probability Forecast */}
      <div className="chart-section-wide">
        <div className="section-title">📈 FLOOD PROBABILITY FORECAST (Based on NASA Rainfall)</div>
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={analytics.floodProbability}>
            <defs>
              <linearGradient id="probGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="hour" stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(59, 130, 246, 0.5)",
                borderRadius: "6px",
                fontSize: "10px",
              }}
            />
            <Line
              type="monotone"
              dataKey="threshold"
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="critical"
              stroke="#dc2626"
              strokeWidth={1}
              strokeDasharray="5 5"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="probability"
              stroke="#3b82f6"
              fill="url(#probGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Damage Distribution Pie Chart */}
      <div className="chart-section-half">
        <div className="section-title">💰 DAMAGE DISTRIBUTION</div>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={damageDistribution}
              cx="50%"
              cy="50%"
              outerRadius={60}
              dataKey="value"
              label={({ name, value }) => `${name} ${value}%`}
              labelLine={{ stroke: "#94a3b8", strokeWidth: 1 }}
            >
              {damageDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(59, 130, 246, 0.5)",
                borderRadius: "6px",
                fontSize: "10px",
              }}
              formatter={(value, name, props) => [
                `${value}% ($${props.payload.cost}M)`,
                name
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Water Level Trend */}
      <div className="chart-section-half">
        <div className="section-title">💧 WATER LEVEL TREND (Based on Soil Moisture)</div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={analytics.waterLevel}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(59, 130, 246, 0.5)",
                borderRadius: "6px",
                fontSize: "10px",
              }}
            />
            <Line
              type="monotone"
              dataKey="danger"
              stroke="#dc2626"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="warning"
              stroke="#f59e0b"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="level"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Economic Impact Timeline */}
      <div className="chart-section-wide">
        <div className="section-title">💵 ECONOMIC IMPACT TIMELINE</div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={economicImpactData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="phase" stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(59, 130, 246, 0.5)",
                borderRadius: "6px",
                fontSize: "10px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            <Bar dataKey="infrastructure" stackId="a" fill="#3b82f6" />
            <Bar dataKey="agriculture" stackId="a" fill="#10b981" />
            <Bar dataKey="housing" stackId="a" fill="#f59e0b" />
            <Bar dataKey="healthcare" stackId="a" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Historical Comparison */}
      <div className="chart-section-wide">
        <div className="section-title">📊 HISTORICAL COMPARISON (NASA 5-Year Data)</div>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={analytics.historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 8 }} />
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(59, 130, 246, 0.5)",
                borderRadius: "6px",
                fontSize: "10px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            <Line
              type="monotone"
              dataKey="affected"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Affected (M)"
            />
            <Line
              type="monotone"
              dataKey="damage"
              stroke="#f59e0b"
              strokeWidth={2}
              name="Damage ($B)"
            />
            <Line
              type="monotone"
              dataKey="deaths"
              stroke="#ef4444"
              strokeWidth={2}
              name="Deaths"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Regional Analysis */}
      {selectedCountry && regionalData.length > 0 && (
        <div className="regional-analysis-section">
          <div className="section-title">🗺️ REGIONAL ANALYSIS - {selectedCountry.toUpperCase()}</div>
          {regionalData.map((region) => (
            <div key={region.region} className="regional-item-detailed">
              <div className="regional-header">
                <span className="regional-name">{region.region}</span>
                <span
                  className={`risk-badge ${
                    region.risk >= 85 ? "critical" : region.risk >= 75 ? "high" : "medium"
                  }`}
                >
                  {region.risk >= 85 ? "CRITICAL" : region.risk >= 75 ? "HIGH" : "MEDIUM"}
                </span>
              </div>
              <div className="regional-stats">
                <span>👥 {region.population}M population</span>
                <span>⚠️ {region.predictedAffected}M predicted affected</span>
                <span>� ${region.estimatedDamage}B estimated damage</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${region.risk}%`,
                    background: region.risk >= 85 ? "#dc2626" : region.risk >= 75 ? "#f59e0b" : "#eab308",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Redevelopment Cost Estimate */}
      {redevelopmentData && (
        <div className="redevelopment-section">
          <div className="section-title">🏗️ REDEVELOPMENT COST ESTIMATE</div>
          <div className="redevelopment-grid">
            <div className="redevelopment-card total">
              <div className="card-label">TOTAL ESTIMATED COST</div>
              <div className="card-value-large">${redevelopmentData.total}B</div>
              <div className="card-sublabel">
                Timeline: {redevelopmentData.timeline}
              </div>
            </div>
            <div className="redevelopment-card">
              <div className="card-label">Infrastructure</div>
              <div className="card-value">${redevelopmentData.breakdown.infrastructure}B</div>
            </div>
            <div className="redevelopment-card">
              <div className="card-label">Housing</div>
              <div className="card-value">${redevelopmentData.breakdown.housing}B</div>
            </div>
            <div className="redevelopment-card">
              <div className="card-label">Agriculture</div>
              <div className="card-value">${redevelopmentData.breakdown.agriculture}B</div>
            </div>
            <div className="redevelopment-card">
              <div className="card-label">Healthcare</div>
              <div className="card-value">${redevelopmentData.breakdown.healthcare}B</div>
            </div>
            <div className="redevelopment-card funding">
              <div className="card-label">Funding Secured</div>
              <div className="card-value">${redevelopmentData.fundingSecured}B</div>
              <div className="card-progress">
                <div
                  className="card-progress-fill"
                  style={{
                    width: `${(redevelopmentData.fundingSecured / redevelopmentData.total) * 100}%`,
                  }}
                />
              </div>
              <div className="card-sublabel">
                {((redevelopmentData.fundingSecured / redevelopmentData.total) * 100).toFixed(1)}% funded
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
