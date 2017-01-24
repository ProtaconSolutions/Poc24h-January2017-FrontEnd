import TabInterface from './tab.interface';

/**
 * Tab class.
 *
 * @ngInject
 */
export default class Tab implements TabInterface {
  /**
   * Constructor of the class
   *
   * @param {TabInterface}  item
   */
  constructor(item: Object) {
    this.label = item.label;
    this.state = item.state;
  }
}
