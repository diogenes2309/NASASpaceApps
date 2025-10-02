const fs = require('fs');

const files = [
  'bangladesh', 'india', 'usa', 'indonesia', 'pakistan', 
  'philippines', 'brazil', 'japan', 'myanmar', 'thailand', 
  'vietnam', 'china'
];

console.log('🔍 Validating JSON files...\n');

let errors = 0;
let totalDistricts = 0;
let districtsWithNASA = 0;

files.forEach(f => {
  try {
    const data = JSON.parse(fs.readFileSync(`src/data/countries/${f}.json`, 'utf8'));
    console.log(`✅ ${f}.json - Valid`);
    
    // Count districts and NASA data
    if (data.divisions) {
      data.divisions.forEach(division => {
        if (division.districts) {
          totalDistricts += division.districts.length;
          division.districts.forEach(district => {
            if (district.nasaData) {
              districtsWithNASA++;
            }
          });
        }
      });
    }
  } catch (e) {
    console.log(`❌ ${f}.json - ERROR: ${e.message}`);
    errors++;
  }
});

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Summary:`);
console.log(`   Total Files: ${files.length}`);
console.log(`   Valid Files: ${files.length - errors}`);
console.log(`   Total Districts: ${totalDistricts}`);
console.log(`   Districts with NASA Data: ${districtsWithNASA}`);
console.log(`   Coverage: ${((districtsWithNASA/totalDistricts)*100).toFixed(1)}%`);
console.log(`\n${errors === 0 ? '🎉 ALL FILES VALID!' : '⚠️  Some files have errors'}\n`);
