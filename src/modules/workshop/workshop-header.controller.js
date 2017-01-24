/**
 * @ngInject
 */
export default class WorkshopHeaderController {
  /**
   * Constructor of the class
   *
   * @param {$state}                    $state
   * @param {$stateParams}              $stateParams
   * @param {WorkshopSharedDataService} WorkshopSharedDataService
   * @param {WorkshopInterface}         _workshop
   */
  constructor(
    $state, $stateParams,
    WorkshopSharedDataService,
    _workshop,
  ) {
    this.state = $state;
    this.stateParams = $stateParams;
    this.sharedData = WorkshopSharedDataService;
    this.workshop = _workshop;
    this.backgroundImage = require('./tausta.jpg');
  }

  back() {
    if (this.sharedData.action === 'contact') {
      this.sharedData.action = 'information';

      return;
    }

    if (this.stateParams.selected) {
      const parameters = {
        serviceType: this.stateParams.selected.serviceType,
        carBrand: this.stateParams.selected.carBrand,
        city: this.stateParams.selected.city,
      };

      this.state.go('modules.workshop_list', parameters);
    } else {
      this.state.go('modules.home');
    }
  }
}
