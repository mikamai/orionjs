Package.describe({
  name: 'mikamai:orionjs-core',
  summary: 'Orion',
  version: '1.0.0',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-base@1.0.0',
    'mikamai:orionjs-accounts@1.0.0',
    'mikamai:orionjs-config@1.0.0',
    'mikamai:orionjs-collections@1.0.0',
    'mikamai:orionjs-dictionary@1.0.0',
    'mikamai:orionjs-attributes@1.0.0',
    ]);

  api.imply([
    'mikamai:orionjs-base',
    'mikamai:orionjs-accounts',
    'mikamai:orionjs-config',
    'mikamai:orionjs-collections',
    'mikamai:orionjs-dictionary',
    'mikamai:orionjs-attributes',
    ]);

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
