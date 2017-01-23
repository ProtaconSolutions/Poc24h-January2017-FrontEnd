/**
 * @ngInject
 */
export default class OfferListController {
  /**
   * Constructor of the class.
   *
   * @param {OfferInterface[]} _offers
   */
  constructor(_offers) {
    // Store resolved items
    this.offers = _offers;
  }
}
