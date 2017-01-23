// Imports
import HomeController from './home.controller';
import UserRoles from '../../core/auth/constants/userRoles';
import { serviceTypes, carBrands } from './home.resolve';

/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
  const states = [{
    state: 'modules.home',
    config: {
      url: '/',
      title: 'Palvelut',
      data: {
        access: UserRoles.ROLE_ANON,
      },
      views: {
        'content@': {
          template: require('./home.html'),
          controller: HomeController,
          controllerAs: 'vm',
          resolve: {
            _serviceTypes: serviceTypes,
            _carBrands: carBrands,
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
