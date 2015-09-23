import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEmpty: Ember.computed.empty('message'),
  formValid: Ember.computed('isEmailValid', 'isMessageEmpty', function() {
    return this.get('isEmailValid') && !this.get('isMessageEmpty')
  }),
  actions: {
    sendInvite: function() {
      alert('You have sent the following message: ' + this.get('message') + ' from email address: ' + this.get('emailAddress'))
      this.set('responseMessage', 'Thank you for your message. We will respond within 24 hours.')
      this.set('emailAddress', '')
    }
  }
});
