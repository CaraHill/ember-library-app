import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  responded: DS.attr('boolean', { defaultValue: false }),

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageLongEnough: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isEmailValid', 'isMessageLongEnough'),
  isChecked: Ember.computed(function() {
    this.set('responded', true);
  })
});
