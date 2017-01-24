// Imports
import angular from 'angular';
import routes from './home.routes';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.home', [])
  .run(routes)
  .name;
