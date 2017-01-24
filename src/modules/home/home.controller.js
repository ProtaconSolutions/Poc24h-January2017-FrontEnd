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
    $state, $stateParams,
    _serviceTypes, _carBrands, _cities,
  ) {
    this.state = $state;
    this.serviceType = $stateParams.selected ? $stateParams.selected.serviceType || null : null;
    this.carBrand = $stateParams.selected ? $stateParams.selected.carBrand || null : null;
    this.city = $stateParams.selected ? $stateParams.selected.city || null : null;

    // Store resolved items
    this.serviceTypes = _serviceTypes;
    this.carBrands = _carBrands;
    this.cities = _cities;
  }

  // Method to submit current form and relocate user to workshop list page
  submit() {
    const parameters = {
      serviceType: this.serviceType,
      carBrand: this.carBrand,
      city: this.city,
    };

    this.state.go('modules.workshop_list', parameters);
  }
}
