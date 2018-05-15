import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  movie_image: DS.attr('string'),
  release_date: DS.attr('string'),
  desc: DS.attr('string'),
  unitPrice: DS.attr('number'),

  isEditing: false
});
