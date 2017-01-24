// Imports
import angular from 'angular';
import routes from './offer.routes';

// SCSS styles
import './offer.scss';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.offer', [])
  .run(routes)
  .name;
