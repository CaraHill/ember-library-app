import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  actions: {
    sendInvitation: function() {
      var that = this;
      var newEmail = this.get('emailAddress');
      var newInvitation = this.store.createRecord('invitation', {email: newEmail});

      newInvitation.save().then(function(response) {
        that.set('responseMessage', 'Thank you! An email was sent to ' + that.get('emailAddress'));
        that.set('emailAddress', '');
      });

    }
  }

});
