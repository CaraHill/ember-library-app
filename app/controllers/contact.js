import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLongEnough: Ember.computed.gte('message.length', 5),
  // isMessageEmpty: Ember.computed.empty('message'),
  // formValid: Ember.computed('isEmailValid', 'isMessageEmpty', function() {
  //   return this.get('isEmailValid') && !this.get('isMessageEmpty')
  // }),
  formValid: Ember.computed.and('isEmailValid', 'isMessageLongEnough'),
  actions: {
    sendInvite: function() {
      var newEmail = this.get('emailAddress');
      var newMessage = this.get('message');
      var newContact = this.store.createRecord('contact', {email: newEmail, message: newMessage});

      newContact.save().then((response) => {
        alert('You have sent the following message: ' + this.get('message') + ' from email address: ' + this.get('emailAddress'));
        this.set('responseMessage', 'Thank you for your message. We will respond within 24 hours.');
        this.set('emailAddress', '');
        this.set('message', '');
      });
    },

    willTransition: function() {
      var contact = this.get('model');

      if (contact.get('isNew')) {
        contact.destroyRecord();
      }
    }
  }
});
