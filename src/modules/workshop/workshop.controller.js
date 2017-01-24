/**
 * @ngInject
 */
export default class WorkshopController {
  /**
   * Constructor of the class
   *
   * @param {WorkshopInterface} _workshop
   */
  constructor(
    _workshop,
  ) {
    this.workshop = _workshop;

    this.emails = this.workshop.email.split(',').map(email => email.trim());
  }
}
