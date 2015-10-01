import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('library');
  },

  actions: {
    deleteLibrary: function(library) {
      var confirmation = confirm('Are you sure you want to delete this library?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }

});
