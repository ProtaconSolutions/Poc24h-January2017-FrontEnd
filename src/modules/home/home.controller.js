// Imports

/**
 * @ngInject
 */
export default class HomeController {
  /**
   * Constructor of the class.
   *
   */
  constructor() {
    this.serviceType = null;
    this.carBrand = null;
    this.location = '';

    // TODO Get service types
    this.serviceTypes = [
      { id: 1, name: 'Palvelu 1' },
      { id: 2, name: 'Palvelu 2' },
    ];

    // TODO Get car brands
    this.carBrands = [
      { id: 1, name: 'Audi' },
      { id: 2, name: 'Mazda' },
    ];
  }
}
