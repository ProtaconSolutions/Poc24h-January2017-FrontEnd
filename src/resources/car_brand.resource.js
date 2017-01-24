/**
 * @desc  Car brand resource.
 *
 * @ngInject
 */
export default class CarBrandResource {
  /**
   * Constructor of the class.
   *
   * @param {*}       $resource
   * @param {config}  config
   * @returns {*}
   */
  constructor($resource, config) {
    return $resource(
      `${config.API_URL}car_brand/:id`,
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
