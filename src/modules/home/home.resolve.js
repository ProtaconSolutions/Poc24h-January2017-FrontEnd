export default () => {};

/**
 * @ngInject
 * @param {ServiceTypeResource} ServiceTypeResource
 * @returns {Promise.<ServiceType>|*}
 */
export function serviceTypes(ServiceTypeResource) {
  return ServiceTypeResource
    .query()
    .$promise
  ;
}
