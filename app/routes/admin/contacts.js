import Ember from 'ember';

export default Ember.Route.extend({

  //Homework: add a check box to the contacts which saves to the contact model (add a new field) if you have read/responded to the contact enquiry.

  model: function() {
    return this.store.findAll('contact');
  },

  actions: {
    deleteContact: function(contact) {
      var confirmation = confirm('Are you sure you want to delete this contact?');

      if (confirmation) {
        contact.destroyRecord();
      }
    }
  }

});
