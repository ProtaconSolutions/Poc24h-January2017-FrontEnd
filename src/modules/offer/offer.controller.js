/**
 * @ngInject
 */
export default class OfferController {
  /**
   * Constructor of the class
   *
   * @param {$timeout}                  $timeout
   * @param {LoggerService}             LoggerService
   */
  constructor($timeout, LoggerService) {
    this.timeout = $timeout;
    this.logger = LoggerService;
    this.loading = false;

    this.data = {
      phone: '',
    };
  }

  // Submit contact form
  submit() {
    this.loading = true;

    // Fake some data processing
    this.timeout(() => {
      this.logger.success('Ostettu');
      this.sharedData.action = 'information';
      this.loading = false;
    }, 1500);
  }
}
