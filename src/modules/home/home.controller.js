/**
 * @ngInject
 */
export default class HomeController {
  /**
   * Constructor of the class.
   *
   * @param {ServiceTypeInterface[]} _serviceTypes
   * @param {CarBrandInterface[]} _carBrands
   * @param {CityInterface[]} _cities
   */
  constructor(_serviceTypes, _carBrands, _cities) {
    this.serviceType = null;
    this.carBrand = null;
    this.city = null;

    // Store resolved items
    this.serviceTypes = _serviceTypes;
    this.carBrands = _carBrands;
    this.cities = _cities;
  }
}
