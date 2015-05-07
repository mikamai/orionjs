Package.describe({
  name: 'mikamai:orionjs-filesystem',
  summary: 'Orion Filesystem',
  version: '1.0.0',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-base@1.0.0'
    ]);

  api.addFiles([
    'filesystem.js',
    'helpers.js',
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mikamai:orionjs-core');
});
