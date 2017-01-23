/**
 * @ngInject
 */
export default class WorkshopController {
  /**
   * Constructor of the class
   *
   * @param {WorkshopInterface} _workshop
   */
  constructor(
    $stateParams,
    _workshop,
  ) {
    this.workshop = _workshop;

    console.log($stateParams);
  }
}
