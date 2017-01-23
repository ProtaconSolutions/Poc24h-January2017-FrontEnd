/**
 * @ngInject
 */
export default class WorkshopListController {
  /**
   * Constructor of the class
   *
   * @param {$stateParams|WorkshopListRouteParameters} $stateParams
   * @param {WorkshopListSharedDataService} WorkshopListSharedDataService
   * @param {WorkshopInterface[]} _workshops
   */
  constructor(
    $stateParams,
    WorkshopListSharedDataService,
    _workshops,
  ) {
    this.serviceType = $stateParams.serviceType;
    this.carBrand = $stateParams.carBrand;
    this.city = $stateParams.city;
    this.sharedData = WorkshopListSharedDataService;
    this.workshops = _workshops;
  }
}
