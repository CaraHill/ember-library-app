import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.createRecord('library')
  },

  renderTemplate(controller, model) {
    this.render('libraries/form')
  },

  actions: {
    createLibrary: function(newLibrary) {
      var that = this;

      newLibrary.save().then(function(response) {
        that.transitionTo('libraries');
      });
    },

    willTransition: function(transition) {
     var model = this.controller.get('model');
     if (model.get('isNew')) {
       model.destroyRecord();
     }
   }
  }
});
