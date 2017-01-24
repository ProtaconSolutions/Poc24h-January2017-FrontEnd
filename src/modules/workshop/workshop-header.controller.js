/**
 * @ngInject
 */
export default class WorkshopHeaderController {
  /**
   * Constructor of the class
   *
   * @param {$state}            $state
   * @param {$stateParams}      $stateParams
   * @param {WorkshopInterface} _workshop
   */
  constructor(
    $state, $stateParams,
    _workshop,
  ) {
    this.state = $state;
    this.stateParams = $stateParams;
    this.workshop = _workshop;

    this.backgroundImage = require('./tausta.jpg');
  }
}
