// Imports
import HomeController from './home.controller';
import TabHeaderController from '../../layout/tab-header/tab-header.controller';
import UserRoles from '../../core/auth/constants/userRoles';
import { serviceTypes, carBrands, cities } from './home.resolve';
import Tab from '../../entities/tab';

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
            _cities: cities,
          },
        },
        'header@': {
          template: require('../../layout/tab-header/tab-header.html'),
          controller: TabHeaderController,
          controllerAs: 'vm',
          resolve: {
            _tabs() {
              return [
                new Tab({ label: 'PALVELUT', state: 'modules.home' }),
                new Tab({ label: 'TARJOUKSET', state: 'modules.offerList' }),
              ];
            },
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
