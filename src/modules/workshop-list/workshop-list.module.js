// Imports
import angular from 'angular';
import routes from './workshop-list.routes';
import WorkshopListSharedDataService from './workshop-list-shared-data.service';

// SCSS styles
import './workshop-list.scss';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.workshopList', [])
  .service('WorkshopListSharedDataService', WorkshopListSharedDataService)
  .run(routes)
  .name;
