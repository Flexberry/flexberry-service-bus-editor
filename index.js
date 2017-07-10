/* jshint node: true */
'use strict';

module.exports = {
  name: 'flexberry-service-bus-editor',

  included: function(app) {
    this._super.included.apply(this._super, arguments);

    app.import('vendor/flexberry-service-bus-editor/register-version.js');
    }
};
