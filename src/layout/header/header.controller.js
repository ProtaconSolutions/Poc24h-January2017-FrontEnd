/**
 * @ngInject
 */
export default class HeaderController {
  /**
   * Constructor of the class
   *
   * @param {ui.router.state.$state}  $state
   */
  constructor($state) {
    this.$state = $state;
  }
}
