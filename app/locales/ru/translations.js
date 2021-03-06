import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';
import EmberFlexberrySecurityTranslations from 'ember-flexberry-security/locales/ru/translations';
import EmberFlexberryServiceBusTranslations from 'ember-flexberry-service-bus/locales/ru/translations';

const translations = {};
Ember.$.extend(true, translations,
                 EmberFlexberryTranslations,
                 EmberFlexberrySecurityTranslations,
                 EmberFlexberryServiceBusTranslations
               );

Ember.$.extend(true, translations, {

  'application-name': 'Flexberry service bus editor',

  'forms': {
    'loading': {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    'index': {
      'greeting': 'Добро пожаловать на Flexberry service bus editor!'
    },

    login: {
      caption: 'Войти в систему',
      personalArea: 'Личный кабинет',
      logout: 'Выйти',
      back: 'Назад',
      login: 'Логин',
      enter: 'Войти',
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

    'application': {
      'header': {
        'menu': {
          'sitemap-button': {
            'caption': '',
            'title': 'Меню'
          },
          'user-settings-service-checkbox': {
            'caption': 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            'caption': 'Показать меню'
          },
          'hide-menu': {
            'caption': 'Скрыть меню'
          },
          'language-dropdown': {
            'caption': 'Язык приложения',
            'placeholder': 'Выберите язык'
          }
        },
        'login': {
          'caption': 'Вход'
        },
        'sync-up': {
          'caption': 'Синхронизация'
        },
        'logout': {
          'caption': 'Выход'
        }
      },

      'footer': {
        'application-git': 'Flexberry service bus editor на Github',
        'application-version': {
          'caption': 'Версия {{version}}',
          'title': 'Это версия  Flexberry service bus editor' +
            '(версия npm-пакета + хэш коммита). ' +
            'Кликните, чтобы перейти на GitHub.'
        }
      },

      'sitemap': {
        'application-name': {
          'caption': 'Flexberry service bus editor',
          'title': ''
        },
        'application-version': {
          'caption': 'Версия аддона {{version}}',
          'title': 'Это версия Flexberry service bus editor' +
            '(версия npm-пакета + хэш коммита). ' +
            'Кликните, чтобы перейти на GitHub.'
        },
        'index': {
          'caption': 'Главная',
          'title': ''
        },
        'application': {
          'caption': 'Приложение',
          'title': '',
          'application-users': {
            'caption': 'Пользователи приложения',
            'title': ''
          },
          'localizations': {
            'caption': 'Локализация',
            'title': ''
          }
        },
        'user-setting-forms': {
          'caption': 'Пользовательские настройки',
          'title': '',
          'user-setting-delete': {
            'caption': 'Удаление настроек',
            'title': ''
          }
        }
      }
    }
  }
});

export default translations;
