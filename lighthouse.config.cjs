const baseUrl = process.env.LHCI_BASE_URL || 'http://localhost:4321/';

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 2,
      url: [
        `${baseUrl}/`,
        `${baseUrl}/careers`,
        `${baseUrl}/legal`,
      ],
      settings: {
        chromeFlags: '--headless --no-sandbox --disable-dev-shm-usage',
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['warn', { minScore: 0.85 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 4000 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.15 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
