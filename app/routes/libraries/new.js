import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.createRecord('library')
  },
  actions: {
    createLibrary: function(newLibrary) {
      newLibrary.save();
    }
  }
});
