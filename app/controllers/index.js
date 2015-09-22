import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,
  headerMessage: 'Coming Soon',
  emailAddress: '',
  actualEmailAddress: function() {
    console.log('actualEmailAddress is called', this.get('emailAddress'))
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
