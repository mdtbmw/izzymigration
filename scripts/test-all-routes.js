const http = require('http');

const routes = [
  '/',
  '/about',
  '/why-izzy',
  '/expertise',
  '/citizenship',
  '/residency',
  '/programmes',
  '/real-estate',
  '/ancestry',
  '/cruise-travel',
  '/countries',
  '/compare',
  '/visas',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/programmes/st-kitts-citizenship',
  '/programmes/antigua-citizenship',
  '/programmes/dominica-citizenship',
  '/programmes/grenada-citizenship',
  '/programmes/saint-lucia-citizenship',
  '/programmes/vanuatu-dsp',
  '/programmes/turkiye-citizenship',
  '/programmes/cyprus-pr',
  '/programmes/greece-golden-visa',
  '/programmes/italy-golden-visa',
  '/programmes/malta-permanent-residency',
  '/programmes/portugal-golden-visa',
  '/programmes/uk-innovator-founder',
  '/programmes/canada-startup',
  '/programmes/us-eb5',
  '/programmes/singapore-pr',
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3001${path}`, (res) => {
      resolve({ path, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ path, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Testing all routes on http://localhost:3001 ...');
  let passed = 0;
  let failed = 0;

  for (const r of routes) {
    const result = await checkRoute(r);
    if (result.status === 200) {
      console.log(`[PASS] ${result.status} - ${r}`);
      passed++;
    } else {
      console.log(`[FAIL] ${result.status} - ${r}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} Passed, ${failed} Failed`);
  process.exit(failed > 0 ? 1 : 0);
}

run();
