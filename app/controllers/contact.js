import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEmpty: Ember.computed.empty('message'),
  formValid: Ember.computed('isEmailValid', 'isMessageEmpty', function() {
    return this.get('isEmailValid') && !this.get('isMessageEmpty')
  })
});
