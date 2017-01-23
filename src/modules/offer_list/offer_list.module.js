// Imports
import angular from 'angular';
import routes from './offer_list.routes';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.offerList', [])
  .run(routes)
  .name;
