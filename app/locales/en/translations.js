import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
  },

  'application-name': 'Flexberry service bus editor',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait...'
    },
    index: {
      greeting: 'Welcome to Flexberry service bus editor application!'
    },

    login: {
      caption: 'Login',
      personalArea: 'Personal Area',
      logout: 'Logout',
      back: 'Back',
      login: 'Login',
      enter: 'Login',
      password: 'Password',
      'you-logged-as': 'You logged as: "{{login}}".',
      errors: {
        'empty-login': 'Login can not be empty.',
        'empty-password': 'Password can not be empty.',
        'server-error': 'Not response from server.',
        'incorrect-auth-data': 'Wrong login or password.',
        'login-please': 'Please, login.',
        'unknown-error': 'Oh, something went wrong...',
      },
    },

    'application': {
      'header': {
        'menu': {
          'sitemap-button': {
            'caption': '',
            'title': 'Menu'
          },
          'user-settings-service-checkbox': {
            'caption': 'Use service to save user settings'
          },
          'show-menu': {
            'caption': 'Show menu'
          },
          'hide-menu': {
            'caption': 'Hide menu'
          },
          'language-dropdown': {
            'caption': 'Application language',
            'placeholder': 'Choose language'
          }
        },
        'login': {
          'caption': 'Login'
        },
        'sync-up': {
          'caption': 'Sync Up'
        },
        'logout': {
          'caption': 'Logout'
        }
      },

      'footer': {
        'application-git': 'Flexberry service bus editor on Github',
        'application-version': {
          'caption': 'Addon version {{version}}',
          'title': 'It is version of Flexberry service bus editor' +
            '(npm version + commit sha). ' +
            'Click to open commit on GitHub.'
        }
      },

      'sitemap': {
        'application-name': {
          'caption': 'Flexberry service bus editor',
          'title': ''
        },
        'application-version': {
          'caption': 'Addon version {{version}}',
          'title': 'It is version of Flexberry service bus editor, which uses in this dummy application ' +
            '(npm version + commit sha). ' +
            'Click to open commit on GitHub.'
        },
        'index': {
          'caption': 'Home',
          'title': ''
        },
        'application': {
          'caption': 'Application',
          'title': '',
          'application-users': {
            'caption': 'Application users',
            'title': ''
          },
          'localizations': {
            'caption': 'Localizations',
            'title': ''
          }
        },
        'user-setting-forms': {
          'caption': 'User settings',
          'title': '',
          'user-setting-delete': {
            'caption': 'Delete settings',
            'title': ''
          }
        }
      }
    }
  },

});

export default translations;
