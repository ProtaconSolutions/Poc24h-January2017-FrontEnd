// Imports
import angular from 'angular';
import PhoneNumberFilter from './phone-number.filter';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
    .module('app.filters', [])
    .filter('phoneNumber', () => PhoneNumberFilter.Factory)
    .name;
