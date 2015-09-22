import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,
  headerMessage: 'Coming Soon',
  emailAddress: '',
  kiwiEmailAddress: function() {
    console.log('actualEmailAddress is called', this.get('emailAddress'))
    return this.get('emailAddress') + '.nz'
  }.property('emailAddress'),
  emailAddressChanged: function() {
    console.log('observer is called', this.get('emailAddress'))
    if (this.get('emailAddress') == '') {
      this.set('isDisabled', true)
    } else {
      this.set('isDisabled', false)
    }
  }.observes('emailAddress')

});
