import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.createRecord('library')
  },
  actions: {
    createLibrary: function(newLibrary) {
      var that = this;

      newLibrary.save().then(function(response) {
        that.transitionTo('libraries');
      });
    }
  }
});
