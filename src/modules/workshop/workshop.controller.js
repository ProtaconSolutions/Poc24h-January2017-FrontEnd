/**
 * @ngInject
 */
export default class WorkshopController {
  /**
   * Constructor of the class
   *
   * @param {$timeout}                  $timeout
   * @param {WorkshopSharedDataService} WorkshopSharedDataService
   * @param {LoggerService}             LoggerService
   * @param {WorkshopInterface}         _workshop
   * @param {CarBrandInterface[]}       _carBrands
   */
  constructor(
    $timeout,
    WorkshopSharedDataService, LoggerService,
    _workshop,
    _carBrands,
  ) {
    const carBrands = [...Array(20).keys()].map(() => _carBrands[Math.floor(Math.random() * _carBrands.length)].name);

    this.timeout = $timeout;
    this.sharedData = WorkshopSharedDataService;
    this.logger = LoggerService;
    this.workshop = _workshop;
    this.carBrands = [...new Set(carBrands)].sort();
    this.emails = this.workshop.email.split(',').map(email => email.trim());
    this.loading = false;

    this.data = {
      contactType: 'puhelin',
      licensePlateNumber: '',
      phone: '',
      email: '',
    };
  }

  // Change view action to contact form
  contact() {
    this.sharedData.action = 'contact';

    this.data = {
      contactType: 'puhelin',
      licensePlateNumber: '',
      phone: '',
      email: '',
    };
  }

  // Submit contact form
  submit() {
    this.loading = true;

    // Fake some data processing
    this.timeout(() => {
      this.logger.success('Yhteydenottopyyntösi on välitetty korjaamolle');
      this.sharedData.action = 'information';
      this.loading = false;
    }, 1500);
  }
}
