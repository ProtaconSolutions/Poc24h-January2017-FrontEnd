export default () => {};

/**
 * @ngInject
 * @param {$stateParams|OfferRouteParameters} $stateParams
 * @param {OfferResource} OfferResource
 * @returns {Promise.<OfferInterface[]>|*}
 */
export function offer(
  $stateParams,
  OfferResource,
) {
  return OfferResource
    .get({
      id: $stateParams.id,
    })
    .$promise
    ;
}
