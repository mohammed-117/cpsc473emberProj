import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
        id: 1,
        name: 'Man of Steel',
        movie_image: 'http://icons.iconarchive.com/icons/firstline1/movie-mega-pack-4/256/Man-Of-Steel-icon.png',
        release_date: '1/1/2018',
        desc: 'name blah blah'
      },
      {
        id: 2,
        name: 'Iron Man',
        movie_image: 'http://icons.iconarchive.com/icons/firstline1/movie-mega-pack-2/256/Iron-Man-2-icon.png',
        release_date: '2/1/2018',
        desc: 'name jlskdfs fkdsjl'
      },
      {
        id: 3,
        name: 'Dark Knight',
        movie_image: 'https://c-sf.smule.com/sf/s49/arr/9a/11/4cc2c3b9-bdb5-4e69-bd9b-7dd3f9ef7269.jpg',
        release_date: '3/2/2018',
        desc: 'lksjl  blah blah'
      },
      {
        id: 4,
        name: 'Avengers',
        movie_image: 'http://icons.iconarchive.com/icons/firstline1/movie-mega-pack-3/256/The-Avengers-icon.png',
        release_date: '4/25/2018',
        desc: 'name fkdsjls akjdfdlksl'
      },
    ];
  },


  // model() {
  //  return this.store.findAll('category');
  //},

  actions: {

    addNewCategory(id, name, desc) {
      this.controller.get('model').pushObject({
        id,
        name,
        desc
      });
    },

    deleteCategory(category) {
      this.controller.get('model').removeObject(category);
    }
  }
});


/*

// app/routes/admin/categories.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('category');
  },

  actions: {

    addNewCategory(name) {
      this.store.createRecord('category', { name }).save();
    },

    addNewCategory(newCategory) {
  newCategory.save().then(
    category => {
      console.info('Response:', category);
      this.controller.set('newCategory', this.store.createRecord('category'));
    },
    error => {
      console.error('Error from server:', error);
    });
},

    deleteCategory(category) {
      category.destroyRecord();
    }
  }
});
*/
