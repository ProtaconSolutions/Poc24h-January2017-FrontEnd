/**
 * @ngInject
 */
export default class TabHeaderController {
  /**
   * Constructor of the class
   *
   * @param {ui.router.state.$state}  $state
   * @param {TabInterface[]}  _tabs
   */
  constructor($state, _tabs) {
    this.state = $state;
    this.tabs = _tabs;
  }

  /**
   * @param state
   */
  changeState(state: string) {
    this.state.go(state);
  }
}
