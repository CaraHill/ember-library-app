import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('number'),

  library: DS.belongsTo('library', {inverse: 'books', async: true}),
  author: DS.belongsTo('author', {inverse: 'books', async: true}),

  randomize(author, library) {
    this.set('title', this._bookTitle());
    this.set('author', author);
    this.set('releaseYear', this._getRandomArbitrary(1900, 2015));
    this.set('library', library);

    return this;
  },

  _bookTitle() {
    return `${Faker.commerce.productName()} Cookbook`;
  },

  _getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
