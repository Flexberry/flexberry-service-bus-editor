import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {

  'application-name': 'Тестовый стенд  Flexberry-security-bus-editor',

  'forms': {
    'loading': {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    'index': {
      'greeting': 'Добро пожаловать на тестовый стенд  Flexberry-security-bus-editor!'
    },

    login: {
      caption: 'Войти в систему',
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
        'application-name': 'Тестовый стенд  Flexberry-security-bus-editor',
        'application-version': {
          'caption': 'Версия {{version}}',
          'title': 'Это версия  Flexberry-security-bus-editor, которая сейчас используется в этом тестовом приложении ' +
            '(версия npm-пакета + хэш коммита). ' +
            'Кликните, чтобы перейти на GitHub.'
        }
      },

      'sitemap': {
        'application-name': {
          'caption': 'Тестовый стенд  Flexberry-security-bus-editor',
          'title': ''
        },
        'application-version': {
          'caption': 'Версия аддона {{version}}',
          'title': 'Это версия Flexberry-security-bus-editor, которая сейчас используется в этом тестовом приложении ' +
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
          },
          'suggestion-types': {
            'caption': 'Типы предложений',
            'title': ''
          },
          'suggestions': {
            'caption': 'Предложения',
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
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'user-setting-forms': {
      'user-setting-delete': {
        'caption': 'Пользовательские настройки',
        'all-del-button-name': 'Удалить все!',
        'message': 'Настройки удалены'
      }
    }
  },

  'components': {
    'settings-example': {
      'component-template-caption': 'Шаблон компонента',
      'controller-properties-caption': 'Свойства контроллера',
      'component-current-settings-caption': 'Текущие настройки компонента',
      'component-default-settings-caption': 'Настройки компонента по умолчанию',
      'component-with-applied-settings-caption': 'Компонент с примененными текущими настройками'
    }
  }
});

export default translations;
