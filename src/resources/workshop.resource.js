/**
 * @desc  Workshop resource.
 *
 * @ngInject
 */
export default class WorkshopResource {
  /**
   * Constructor of the class.
   *
   * @param {*}       $resource
   * @param {config}  config
   * @returns {*}
   */
  constructor($resource, config) {
    return $resource(
      `${config.API_URL}workshop/:id`,
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
        getCities: {
          method: 'GET',
          params: {
            id: 'cities',
          },
          isArray: true,
        },
      },
      {
        cancellable: true,
      },
    );
  }
}
