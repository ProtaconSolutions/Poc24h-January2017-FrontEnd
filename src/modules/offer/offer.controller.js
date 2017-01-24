/**
 * @ngInject
 */
export default class OfferController {
  /**
   * Constructor of the class
   *
   * @param {$timeout}                  $timeout
   * @param {LoggerService}             LoggerService
   * @param {OfferInterface}         _offer
   */
  constructor($timeout, LoggerService, _offer) {
    this.timeout = $timeout;
    this.logger = LoggerService;
    this.loading = false;
    this.offer = _offer;
  }

  // Submit contact form
  submit() {
    this.loading = true;

    // Fake some data processing
    this.timeout(() => {
      this.logger.success('Ostettu');
      this.loading = false;
    }, 1500);
  }
}
