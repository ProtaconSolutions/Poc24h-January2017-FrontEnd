// Imports
import angular from 'angular';
import routes from './workshop-list.routes';

// SCSS styles
import './workshop-list.scss';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.workshopList', [])
  .run(routes)
  .name;
