// Imports
import angular from 'angular';

import ServiceTypeResource from './service_type.resource';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.resources', [])
  .service('ServiceTypeResource', ServiceTypeResource)
  .name;
