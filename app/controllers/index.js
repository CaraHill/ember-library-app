import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isValid: Ember.computed('emailAddress', function() {
    var email = this.get('emailAddress')
    return email.indexOf('@') !== -1
  })

});
