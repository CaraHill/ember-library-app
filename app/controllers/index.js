import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/)

});
