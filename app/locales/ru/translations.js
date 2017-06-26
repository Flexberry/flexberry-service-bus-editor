import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
  },

  'application-name': 'flexberry-service-bus-editor',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на flexberry-service-bus-editor!'
    },

    login: {
      caption: 'Вход в систему',
      enter: 'Вход',
      logout: 'Выйти',
      back: 'Назад',
      login: 'Логин',
      password: 'Пароль',
      'you-logged-as': 'Вы вошли как: "{{login}}".',
      errors: {
        'empty-login': 'Логин не может быть пустым.',
        'empty-password': 'Пароль не может быть пустым.',
        'server-error': 'Не удалось получить ответ от сервера.',
        'incorrect-auth-data': 'Неверный логин или пароль.',
        'login-please': 'Пожалуйста, войдите.',
        'unknown-error': 'Ой, что то пошло не так...',
      },
    },

    application: {
      'sync-up': 'Выполнить синхронизацию',
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        }
      },

      footer: {
        'application-name': 'Dummy',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия приожения Flexberry Service-bus Editor ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry Service-bus Editor',
          title: 'Flexberry Service-bus Editor'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия приложения Flexberry Service-bus Editor ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        application: {
          caption: 'Application',
          title: 'Application'
        }
      }
    },
  },

});

export default translations;
