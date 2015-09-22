import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  emailAddress: '',
  isDisabled: Ember.computed('emailAddress', function() {
    console.log('The computed property isDisabled is called', 'Email is:', this.get('emailAddress'))
    return this.get('emailAddress') == ''
  })

});
