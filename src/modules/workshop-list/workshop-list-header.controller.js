/**
 * @ngInject
 */
export default class WorkshopListHeaderController {
  constructor(
    $state, $stateParams,
    WorkshopListSharedDataService,
  ) {
    this.state = $state;
    this.stateParams = $stateParams;
    this.sharedData = WorkshopListSharedDataService;
  }

  back() {
    this.state.go(
      'modules.home',
      {
        selected: this.stateParams,
      },
    );
  }
}
