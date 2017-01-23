export default () => {};

/**
 * @ngInject
 * @param {ServiceTypeResource} ServiceTypeResource
 * @returns {Promise.<ServiceTypeInterface[]>|*}
 */
export function serviceTypes(ServiceTypeResource) {
  return ServiceTypeResource
    .query({
      order: 'name',
    })
    .$promise
  ;
}

/**
 * @ngInject
 * @param {CarBrandResource} CarBrandResource
 * @returns {Promise.<CarBrandInterface[]>|*}
 */
export function carBrands(CarBrandResource) {
  return CarBrandResource
    .query({
      order: 'name',
    })
    .$promise
  ;
}
