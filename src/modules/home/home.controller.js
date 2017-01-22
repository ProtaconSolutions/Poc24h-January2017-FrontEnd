/**
 * @ngInject
 */
export default class HomeController {
  /**
   * Constructor of the class.
   *
   * @param {ServiceType[]} _serviceTypes
   */
  constructor(_serviceTypes) {
    this.serviceType = null;
    this.carBrand = null;
    this.location = '';

    this.serviceTypes = _serviceTypes;

    // TODO Get car brands
    this.carBrands = [
      { id: 1, name: 'Audi' },
      { id: 2, name: 'Mazda' },
    ];
  }
}
