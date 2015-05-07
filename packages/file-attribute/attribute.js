orion.attributes.registerAttribute('file', {
  template: 'orionAttributesFileUpload',
  previewTemplate: 'orionAttributesFileUploadColumn',
  getSchema: function(options) {
    return {
      type: String
    };
  },
  valueOut: function() {
    return Session.get('file' + this.attr('data-schema-key'));
  },
});