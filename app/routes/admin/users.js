import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
        id: 283,
        user_name: 'John Doe',
        password: 'pass123',
        email: 'jdoe@gmail.com'
      },
      {
        id: 362,
        user_name: 'Jane Smith',
        password: 'netflixIsBetter',
        email: 'jsmith@yoember.com'
      },
    ];
  },

  actions: {

    addNewCategory(id, user_name, email) {
      this.controller.get('model').pushObject({
        id,
        user_name,
        email
      });
    },

    deleteCategory(category) {
      this.controller.get('model').removeObject(category);
    }
  }
});
