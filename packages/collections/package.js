Package.describe({
  name: 'mikamai:orionjs-collections',
  summary: 'Meteor collection with some magic',
  version: '1.0.1',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-base@1.0.0',
    'underscore',
    'aldeed:simple-schema@1.3.2',
    'aldeed:collection2@2.3.3',
    'dburles:collection-helpers@1.0.3',
    ]);

  api.imply([
    'aldeed:simple-schema',
    'aldeed:collection2',
    'dburles:collection-helpers'
    ]);

  api.addFiles([
    'init.js',
    'new.js',
    'permissions.js',
    'admin.js',
    ]);

  api.addFiles([
    'publications.js',
    ], 'server');

  api.addFiles([
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mikamai:orionjs-core');
});
