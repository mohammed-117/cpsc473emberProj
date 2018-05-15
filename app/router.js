import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cart');
  this.route('admin', function() {
    this.route('products');
    this.route('categories');
    this.route('users');
  });
  this.route('products', function() {});
  this.route('checkout');
  this.route('productpage');
});

export default Router;
