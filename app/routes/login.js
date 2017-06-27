import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    hideHeader: Ember.on('onLoad', function(){
        hideHeader();
      })
  }
});
