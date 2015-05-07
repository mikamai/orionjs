Package.describe({
  name: 'mikamai:orionjs-s3',
  summary: 'S3 storage for orion:filesystem',
  version: '1.0.2',
  git: 'https://github.com/mikamai/orionjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'mikamai:orionjs-core@1.0.0',
    'mikamai:orionjs-filesystem@1.0.0',
    'mikamai:orionjs-config@1.0.0',
    'lepozepo:s3@5.1.1',
    ]);

  api.addFiles([
    's3.js',
    ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mikamai:orionjs-filesystem');
});
