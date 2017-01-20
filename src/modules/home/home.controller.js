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

    // TODO Get service types
    this.serviceTypes = [
      { id: 1, name: 'Palvelu 1' },
      { id: 2, name: 'Palvelu 2' },
    ];
  }

}
