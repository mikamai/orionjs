Package.describe({
  name: 'mikamai:orionjs',
  summary: 'Orion',
  version: '1.0.0',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-core@1.0.0',
    'mikamai:orionjs-filesystem@1.0.0',
    'mikamai:orionjs-file-attribute@1.0.0',
    'mikamai:orionjs-pages@1.0.0',
    'mikamai:orionjs-relationships@1.0.0',
    'mikamai:orionjs-s3@1.0.0',
    'mikamai:orionjs-summernote@1.0.0',
    'mikamai:orionjs-bootstrap@1.0.0',
    ]);

  api.imply([
    'mikamai:orionjs-core',
    'mikamai:orionjs-filesystem',
    'mikamai:orionjs-file-attribute',
    'mikamai:orionjs-pages',
    'mikamai:orionjs-relationships',
    'mikamai:orionjs-s3',
    'mikamai:orionjs-summernote',
    'mikamai:orionjs-bootstrap',
    ]);

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
