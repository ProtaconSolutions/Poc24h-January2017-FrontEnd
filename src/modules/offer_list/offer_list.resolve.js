export default () => {};

/**
 * @ngInject
 * @param {OfferResource} OfferResource
 * @returns {Promise.<OfferInterface[]>|*}
 */
export function offers(OfferResource) {
  return OfferResource
    .query({
      order: 'name',
    })
    .$promise
  ;
}
