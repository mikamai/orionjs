Package.describe({
  name: 'mikamai:orionjs-attributes',
  summary: 'Orion attributes',
  version: '1.0.1',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-base@1.0.0',
    'aldeed:collection2@2.0.0',
    'aldeed:autoform@5.1.1',
    'momentjs:moment@2.10.3'
    ]);

  api.imply([
    'aldeed:collection2',
    'aldeed:autoform',
    ]);

  api.addFiles([
    'attributes.js'
    ]);

  // Created by attribute
  api.addFiles('created-by/created-by.html', 'client');
  api.addFiles('created-by/created-by.js');

  // Created at attribute
  api.addFiles('created-at/created-at.html', 'client');
  api.addFiles('created-at/created-at.js');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
