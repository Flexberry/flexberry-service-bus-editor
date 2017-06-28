import Ember from 'ember';
import config from '../config/environment';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
  /**
  */
  controllerName: 'login',

  /**
  */
  appController: Ember.inject.controller('application'),

  /**
  */
  login: '',

  actions: {
    /**
    */
    hideHeader() {
      Ember.$('.ui.attached.top').addClass('hidden-header');
      Ember.$('.page-header-userbar').addClass('hidden-header');
    },

    /**
    */
    login() {
      let _this = this;
      let login = _this.get('loginInput');
      let password = _this.get('password');
      if (login && password) {
        _this._resetLoginErrors();
        _this.set('tryToLogin', true);
        Ember.$.ajax({
          type: 'GET',
          xhrFields: { withCredentials: true },
          url: `${config.APP.backendUrls.api}/Login(login='${login}',password='${password}')`,
          success(result) {
            _this.set('tryToLogin', false);
            if (result.value === true) {
              _this._resetLoginData(login);
              _this.transitionToRoute('index');
              _this._sendLogin();
              _this._showHeader();
            } else {
              _this.set('errorMessage', t('forms.login.errors.incorrect-auth-data'));
            }
          },
          error() {
            _this.set('tryToLogin', false);
            _this.set('errorMessage', t('forms.login.errors.server-error'));
          },
        });
      } else {
        if (!login) {
          _this.set('emptyLogin', t('forms.login.errors.empty-login'));
        }

        if (!password) {
          _this.set('emptyPassword', t('forms.login.errors.empty-password'));
        }
      }
    },

    /**
    */
    logout() {
      let _this = this;
      Ember.$.ajax({
        type: 'GET',
        xhrFields: { withCredentials: true },
        url: `${config.APP.backendUrls.api}/Logout()`,
        success(result) {
          if (result.value === true) {
            _this.set('login', '');
            _this._sendLogin();
            _this._hideHeader();
          } else {
            _this.set('errorMessage', t('forms.login.errors.unknown-error'));
          }

          _this.transitionToRoute('index');
        },
        error() {
          _this.set('errorMessage', t('forms.login.errors.server-error'));
          _this.transitionToRoute('index');
        },
      });
    },

    /**
    */
    goToLoginForm() {
      this.transitionToRoute('login');
    },

    /**
    */
    closeLoginForm() {
      this._resetLoginErrors();
      this.transitionToRoute('index');
    },
  },

  _sendLogin() {
    let appController = this.get('appController');
    let login = this.get('login');
    appController.getLogin(login);
  },

  /**
  */
  _hideHeader() {
    Ember.$('.ui.attached.top').addClass('hidden-header');
    //Ember.$('.page-header-userbar').addClass('hidden-header')
  },

  /**
  */
  _showHeader() {
    Ember.$('.ui.attached.top').removeClass('hidden-header');
    //Ember.$('.page-header-userbar').removeClass('hidden-header')
  },

  /**
  */
  _resetLoginErrors() {
    this.setProperties({
      errorMessage: null,
      emptyLogin: null,
      emptyPassword: null,
    });
  },

  /**
  */
  _resetLoginData(login) {
    this.setProperties({
      login: login,
      loginInput: null,
      password: null,
    });
  }
});
