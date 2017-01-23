/**
 * @ngInject
 */
export default class HomeController {
  /**
   * Constructor of the class.
   *
   * @param {$state}                  $state
   * @param {ServiceTypeInterface[]}  _serviceTypes
   * @param {CarBrandInterface[]}     _carBrands
   * @param {CityInterface[]}         _cities
   */
  constructor(
    $state,
    _serviceTypes, _carBrands, _cities,
  ) {
    this.state = $state;
    this.serviceType = null;
    this.carBrand = null;
    this.city = null;

    // Store resolved items
    this.serviceTypes = _serviceTypes;
    this.carBrands = _carBrands;
    this.cities = _cities;
  }

  // Method to submit current form and relocate user to workshop list page
  submit() {
    const parameters = {
      serviceType: this.serviceType.name,
      carBrand: this.carBrand.name,
      city: this.city,
    };

    this.state.go('modules.workshop_list', parameters);
  }
}
