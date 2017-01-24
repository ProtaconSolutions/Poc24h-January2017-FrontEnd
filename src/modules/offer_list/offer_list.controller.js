/**
 * @ngInject
 */
export default class OfferListController {
  /**
   * Constructor of the class.
   *
   * @param {OfferInterface[]} _offers
   */
  constructor($stateParams, $state, _offers) {
    this.state = $state;
    // Store resolved items
    this.offers = _offers;
  }

  openOffer(offer) {
    const parameters = {
      id: offer.id,
    };

    this.state.go('modules.offer', parameters);
  }
}
