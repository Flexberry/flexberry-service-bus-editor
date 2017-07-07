/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    jscsOptions: {
      enabled: true,
      esnext: true,
      configPath: './.jscsrc'
    },
    lessOptions: {
      paths: [
        'bower_components/semantic-ui'
      ]
    },
    outputPaths: {
      app: {
        css: {
          'app': '/assets/app.css'
        }
      }
    },
    SemanticUI: {
      import: {
        css: false,
        javascript: true,
        images: false,
        fonts: true
      }
    }

    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/font-icon.css');
  app.import('vendor/fonts/icons.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.otf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.svg', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.svg', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/serviceImages/close.png', { destDir: 'assets/themes/blue-sky/assets/images' });
  app.import('vendor/serviceImages/close-hover.png', { destDir: 'assets/themes/blue-sky/assets/images' });
  app.import('vendor/serviceImages/plus.png', { destDir: 'assets/themes/blue-sky/assets/images' });
  app.import('vendor/serviceImages/minus.png', { destDir: 'assets/themes/blue-sky/assets/images' });
  app.import('vendor/serviceImages/header-bgw.png', { destDir: 'assets/themes/orange/assets/images' });
  app.import('vendor/serviceImages/bgw-head-calendar.png', { destDir: 'assets/themes/orange/assets/images' });

  return app.toTree();
};
