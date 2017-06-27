import Ember from 'ember';

export default Ember.Controller.extend({

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
        },
      ]
    };
    }),

  actions: {
    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      Ember.$('.ui.sidebar.main.menu').sidebar({
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
          Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        }
      }).sidebar('toggle');
      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        Ember.$('.bgw-opacity').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-1').addClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').removeClass('hidden-menu');
        Ember.$('.bgw-opacity').removeClass('hidden');
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
    goToLoginForm() {
      this.transitionToRoute('login');
    },

    /**
    */
    goToMainPage() {
      this.transitionToRoute('index');
    },
  },
});
