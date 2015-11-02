import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', {async: true, inverse: 'author'}),

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  }
});
