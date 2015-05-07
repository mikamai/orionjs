Package.describe({
  name: 'mikamai:orionjs-froala',
  summary: 'Froala editor for orion',
  version: '1.0.0',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-base@1.0.0',
    'mikamai:orionjs-attributes@1.0.0',
    'less',
    'mikamai:orionjs-filesystem@1.0.0',
    'froala:editor@1.2.4',
    ]);

  api.imply([
    'froala:editor',
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'froala.html',
    'froala.js',
    'froala.less',
    ], 'client');
});
