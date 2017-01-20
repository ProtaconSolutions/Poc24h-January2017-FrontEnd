/**
 * MenuItem class.
 *
 * @ngInject
 */
export default class ServiceType {
  /**
   * Constructor of the class
   *
   * @param {{}}  item
   */
  constructor(item: Object) {
    this.id = item.id;
    this.name = item.name;
  }
}
