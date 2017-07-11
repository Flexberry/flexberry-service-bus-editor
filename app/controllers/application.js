import Ember from 'ember';
import config from '../config/environment';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
  controllerName: 'application',

  /**
  */
  login: '',

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  /**
  */
  synchronizes: false,

  /**
      Flag: indicates that form to which controller is related designed for acceptance tests &
      all additional markup in application.hbs mustn't be rendered.

      @property isInAcceptanceTestMode
      @type Boolean
      @default false
  */
  isInAcceptanceTestMode: false,

  /**
    Flag: indicates whether current browser is internet explorer.

    @property browserIsInternetExplorer
    @type Boolean
  */
  browserIsInternetExplorer: Ember.computed(function() {
    let userAgent = window.navigator.userAgent;

    return userAgent.indexOf('MSIE ') > 0 || userAgent.indexOf('Trident/') > 0 || userAgent.indexOf('Edge/') > 0;
  }),

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
  */
  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.routing.caption'),
          title: i18n.t('forms.application.sitemap.routing.title'),
          children: [{
            link: 'new-platform-flexberry-service-bus-client-list-form',
            caption: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-client-list-form.caption'),
            title: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-client-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-message-type-list-form',
            caption: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-message-type-list-form.caption'),
            title: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-message-type-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-subscription-list-form',
            caption: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-subscription-list-form.caption'),
            title: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-subscription-list-form.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.state.caption'),
          title: i18n.t('forms.application.sitemap.state.title'),
          children: [{
            link: 'new-platform-flexberry-service-bus-message-list-form',
            caption: i18n.t('forms.application.sitemap.state.new-platform-flexberry-service-bus-message-list-form.caption'),
            title: i18n.t('forms.application.sitemap.state.new-platform-flexberry-service-bus-message-list-form.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.statistics.caption'),
          title: i18n.t('forms.application.sitemap.statistics.title'),
          children: [{
            link: 'new-platform-flexberry-service-bus-statistics-monitor-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-monitor-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-monitor-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-statistics-record-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-record-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-record-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-statistics-setting-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-setting-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-setting-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-statistics-compression-setting-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-compression-setting-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-compression-setting-list-form.title'),
            children: null
          },
          ]
        },
        {
        link: null,
        caption: i18n.t('forms.application.sitemap.audit-forms.caption'),
        title: i18n.t('forms.application.sitemap.audit-forms.title'),
        children: [{
          link: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l',
          caption: i18n.t('forms.application.sitemap.audit-forms.i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l.caption'),
          title: i18n.t('forms.application.sitemap.audit-forms.i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l.title'),
          children: null
        }]
      },
      {
        link: null,
        caption: i18n.t('forms.application.sitemap.полномочия.caption'),
        title: i18n.t('forms.application.sitemap.полномочия.title'),
        children: [{
          link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l',
          caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l.caption'),
          title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l.title'),
          children: null
        }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l.title'),
            children: null
          }, {
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l.title'),
            children: null
          }]
      },
      ]
    };
    }),

  actions: {
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
            _this.send('checkLogoutView');
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

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = Ember.$('.ui.sidebar');
      sidebar.sidebar({
        closable: false,
        dimPage: false,
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
          Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        }
      }).sidebar('toggle');
      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
      } else {
        Ember.$('.sidebar.icon.text-menu-1').addClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').removeClass('hidden-menu');
      }
      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.full.height').animate({ 'width' : '100%'}, 500);
      } else {
        let newWidth = Ember.$('.full.height').css( 'width', 'calc(100% - ' + sidebar.width() + 'px)');
        Ember.$('.full.height').animate({ 'width' : newWidth}, 400);
      }
    },

    /**
      Close sidebar if user logout.

      @method actions.checkLogoutView
    */
    checkLogoutView() {
      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        this.send('toggleSidebar');
      }
    },

    /**
    */
    syncUp() {
      let _this = this;
      _this.set('synchronizes', true);
      let syncer = Ember.getOwner(this).lookup('service:syncer');
      syncer.syncUp().then(() => {
        _this.set('synchronizes', false);
      }).catch((reason) => {
        Ember.Logger.debug(reason);
      });
    },

    /**
    */
    goToMainPage() {
      this.transitionToRoute('index');
    },
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
