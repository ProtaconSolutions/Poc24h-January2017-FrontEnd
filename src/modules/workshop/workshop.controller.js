/**
 * @ngInject
 */
export default class WorkshopController {
  /**
   * Constructor of the class
   *
   * @param {WorkshopSharedDataService} WorkshopSharedDataService
   * @param {WorkshopInterface}         _workshop
   * @param {CarBrandInterface[]}       _carBrands
   */
  constructor(
    WorkshopSharedDataService,
    _workshop,
    _carBrands,
  ) {
    const carBrands = [...Array(20).keys()].map(() => _carBrands[Math.floor(Math.random() * _carBrands.length)].name);

    this.sharedData = WorkshopSharedDataService;
    this.workshop = _workshop;
    this.carBrands = [...new Set(carBrands)].sort();
    this.emails = this.workshop.email.split(',').map(email => email.trim());

    this.data = {
      contactType: 'puhelin',
      licensePlateNumber: '',
    }
  }

  // Change view action to contact form
  contact() {
    this.sharedData.action = 'contact';
  }
}
