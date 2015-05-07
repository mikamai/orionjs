Package.describe({
  name: 'mikamai:orionjs-summernote',
  summary: 'Summernote editor for orion',
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
    'summernote:standalone@0.6.0',
    'jquery@1.0.0'
    ]);

  api.imply([
    'summernote:standalone',
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'summernote.html',
    'summernote.js',
    'summernote.less',
    ], 'client');
});
