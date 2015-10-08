import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    buttonClicked(item) {
      this. sendAction('action', item);
    }
  }
});
