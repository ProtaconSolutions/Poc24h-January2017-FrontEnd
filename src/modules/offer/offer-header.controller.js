/**
 * @ngInject
 */
export default class OfferHeaderController {
  /**
   * Constructor of the class
   *
   * @param {$state}                 $state
   * @param {$stateParams}           $stateParams
   * @param {OfferInterface}         _offer
   */
  constructor($state, $stateParams, _offer) {
    this.state = $state;
    this.stateParams = $stateParams;
    this.offer = _offer;
    this.backgroundImage = require('./tausta.jpg');
  }

  back() {
    this.state.go('modules.offerList');
  }
}
