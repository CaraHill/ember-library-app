import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('book');
  },

  actions: {
    deleteBook: function(book) {
      var confirmation = confirm('Are you sure you want to delete this book?');

      if (confirmation) {
        book.destroyRecord();
      }
    }
  }

});
