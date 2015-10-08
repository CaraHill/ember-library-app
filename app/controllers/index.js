import Ember from 'ember';

export default Ember.Controller.extend({

  //Homework: move stuff from the index controller into an index route (create one) - like contact.

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  actions: {
    sendInvitation: function() {
      // var that = this;
      var newEmail = this.get('emailAddress');
      var newInvitation = this.store.createRecord('invitation', {email: newEmail});

      newInvitation.save().then((response) => {
        this.set('responseMessage', 'Thank you! An email was sent to ' + this.get('emailAddress'));
        this.set('emailAddress', '');
      });

    }
  }

});
