/**
 * @ngInject
 */
export default class WorkshopController {
  /**
   * Constructor of the class
   *
   * @param {WorkshopInterface}   _workshop
   * @param {CarBrandInterface[]} _carBrands
   */
  constructor(_workshop, _carBrands) {
    const carBrands = [...Array(20).keys()].map(() => _carBrands[Math.floor(Math.random() * _carBrands.length)].name);

    this.workshop = _workshop;
    this.carBrands = [...new Set(carBrands)].sort();
    this.emails = this.workshop.email.split(',').map(email => email.trim());
  }
}
