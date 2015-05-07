Package.describe({
  name: 'mikamai:orionjs-file-attribute',
  summary: "File attribute for orion",
  version: "1.0.0"
  // git: "http://github.com/mikamai/orionjs"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'mikamai:orionjs-base@1.0.0',
    'mikamai:orionjs-attributes@1.0.0',
    'mikamai:orionjs-filesystem@1.0.0',
    'less'
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'file.html',
    'file.less',
    'file.js',
    ], 'client');
});
