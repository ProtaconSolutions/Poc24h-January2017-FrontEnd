// Imports
import HeaderController from './header/header.controller';

/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
  const states = [{
    state: 'layout',
    config: {
      abstract: true,
      views: {
        header: {
          template: require('./header/header.html'),
          controller: HeaderController,
          controllerAs: 'vm',
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
