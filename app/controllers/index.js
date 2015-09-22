import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isDisabled: Ember.computed.empty('emailAddress')

});
