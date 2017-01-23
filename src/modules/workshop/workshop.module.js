// Imports
import angular from 'angular';
import routes from './workshop.routes';

// SCSS styles
import './workshop.scss';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.workshop', [])
  .run(routes)
  .name;
