import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  actions: {
    sendInvitation: function() {
      alert("Invitation sent to this address: " + this.get('emailAddress'))
      this.set('emailAddress', '')
    }
  }

});
