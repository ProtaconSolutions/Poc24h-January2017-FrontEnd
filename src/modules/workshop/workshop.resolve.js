export default () => {};

/**
 * @ngInject
 * @param {$stateParams|WorkshopRouteParameters} $stateParams
 * @param {WorkshopResource} WorkshopResource
 * @returns {Promise.<WorkshopInterface[]>|*}
 */
export function workshop(
  $stateParams,
  WorkshopResource,
) {
  return WorkshopResource
    .get({
      id: $stateParams.id,
    })
    .$promise
  ;
}
