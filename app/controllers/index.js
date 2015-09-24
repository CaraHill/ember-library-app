import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  actions: {
    sendInvitation: function() {
      var newEmail = this.get('emailAddress');
      var newInvitation = this.store.createRecord('invitation', {email: newEmail});
      newInvitation.save();
      this.set('responseMessage', 'Thank you! An email was sent to ' + this.get('emailAddress'));
      this.set('emailAddress', '');
    }
  }

});
