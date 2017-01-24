// Imports
import angular from 'angular';
import routes from './workshop.routes';
import WorkshopSharedDataService from './workshop-shared-data.service';

// SCSS styles
import './workshop.scss';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.workshop', [])
  .service('WorkshopSharedDataService', WorkshopSharedDataService)
  .run(routes)
  .name;
