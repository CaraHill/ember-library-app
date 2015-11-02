import Ember from 'ember';

export default Ember.Component.extend({

  atoz: Ember.computer(function() {
    return Array.apply(null, {length: 26}).map(function (x,i) {
      return String.fromCharCode(97 + i).toUpperCase();
    });
  })

});
