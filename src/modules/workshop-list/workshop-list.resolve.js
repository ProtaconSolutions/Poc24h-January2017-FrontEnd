export default () => {};

/**
 * @ngInject
 * @param {$stateParams|WorkshopListRouteParameters} $stateParams
 * @param {WorkshopResource} WorkshopResource
 * @returns {Promise.<WorkshopInterface[]>|*}
 */
export function workshops(
  $stateParams,
  WorkshopResource,
) {
  return WorkshopResource
    .query({
      order: 'name',
      where: {
        city: $stateParams.city,
      },
    })
    .$promise
  ;
}
