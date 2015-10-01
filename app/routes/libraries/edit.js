import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.findRecord('library', params.library_id)
  },

  actions: {

    editLibrary: function(library) {
      var that = this;

      library.save().then(function() {
        that.transitionTo('libraries');
      })
    }
  }

});
