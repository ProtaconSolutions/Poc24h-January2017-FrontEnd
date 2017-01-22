/**
 * @desc  Service type resource.
 *
 * @ngInject
 */
export default class ServiceTypeResource {
  /**
   * Constructor of the class.
   *
   * @param {*}       $resource
   * @param {config}  config
   * @returns {*}
   */
  constructor($resource, config) {
    return $resource(
      `${config.API_URL}service_type/:id`,
      {
        id: '@id',
      },
    );
  }
}
