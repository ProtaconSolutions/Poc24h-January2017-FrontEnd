/**
 * @desc  Offer resource.
 *
 * @ngInject
 */
export default class OfferResource {
  /**
   * Constructor of the class.
   *
   * @param {*}       $resource
   * @param {config}  config
   * @returns {*}
   */
  constructor($resource, config) {
    return $resource(
      `${config.API_URL}offer/:id`,
      {
        id: '@id',
      },
      {
        count: {
          method: 'GET',
          params: {
            id: 'count',
          },
        },
        ids: {
          method: 'GET',
          params: {
            id: 'ids',
          },
          isArray: true,
        },
        update: {
          method: 'PUT',
        },
      },
      {
        cancellable: true,
      },
    );
  }
}
