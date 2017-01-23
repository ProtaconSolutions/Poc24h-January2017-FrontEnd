/**
 * @ngInject
 */
export default class HomeController {
  /**
   * Constructor of the class.
   *
   * @param {ServiceTypeInterface[]} _serviceTypes
   * @param {CarBrandInterface[]} _carBrands
   */
  constructor(_serviceTypes, _carBrands) {
    this.serviceType = null;
    this.carBrand = null;
    this.location = '';

    // Store resolved items
    this.serviceTypes = _serviceTypes;
    this.carBrands = _carBrands;
  }
}
