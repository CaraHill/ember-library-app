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
    },

    willTransition: function(transition) {

      var model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        var confirmation = confirm("Your changed were not saved. Are you sure you want to leave this page?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }

});
