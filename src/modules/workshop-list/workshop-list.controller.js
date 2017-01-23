/**
 * @ngInject
 */
export default class WorkshopListController {
  /**
   * Constructor of the class
   *
   * @param {$stateParams|WorkshopListRouteParameters} $stateParams
   * @param {WorkshopInterface[]} _workshops
   */
  constructor(
    $stateParams,
    _workshops,
  ) {
    this.serviceType = $stateParams.serviceType;
    this.carBrand = $stateParams.carBrand;
    this.city = $stateParams.city;

    this.workshops = _workshops;
  }
}
