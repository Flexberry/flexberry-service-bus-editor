import Ember from 'ember';
import config from '../config/environment';
import { translationMacro as t } from 'ember-i18n';

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
  offlineGlobals: Ember.inject.service('offline-globals'),

  /**
  */
  onlineStatus: Ember.computed('offlineGlobals.isOnline', {
    get() {
      return this.get('offlineGlobals.isOnline');
    },
    set(key, newValue, oldValue) {
      if (newValue !== oldValue) {
        this.get('offlineGlobals').setOnlineAvailable(newValue);
      }

      return newValue;
    },
  }),

  /**
  */
  synchronizes: false,

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
      }
    }),

  actions: {
    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      Ember.$('.ui.sidebar').sidebar('toggle');
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
  },
});
