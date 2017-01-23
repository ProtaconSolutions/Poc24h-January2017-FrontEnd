// Imports
import UserRoles from '../../core/auth/constants/userRoles';
import WorkshopListController from './workshop-list.controller';
import { workshops } from './workshop-list.resolve';

/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
  const states = [{
    state: 'modules.workshop_list',
    config: {
      url: '/palvelut/:serviceType/:carBrand/:city',
      title: 'Korjaamot',
      data: {
        access: UserRoles.ROLE_ANON,
      },
      views: {
        'content@': {
          template: require('./partials/list.html'),
          controller: WorkshopListController,
          controllerAs: 'vm',
          resolve: {
            _workshops: workshops,
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
