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
    $stateParams, $state,
    WorkshopListSharedDataService,
    _workshops,
  ) {
    this.state = $state;
    this.serviceType = $stateParams.serviceType;
    this.carBrand = $stateParams.carBrand;
    this.city = $stateParams.city;
    this.sharedData = WorkshopListSharedDataService;
    this.workshops = _workshops;
  }

  openWorkshop(workshop) {
    const parameters = {
      id: workshop.id,
      selected: {
        serviceType: this.serviceType,
        carBrand: this.carBrand,
        city: this.city,
      },
    };

    this.state.go('modules.workshop', parameters);
  }
}
