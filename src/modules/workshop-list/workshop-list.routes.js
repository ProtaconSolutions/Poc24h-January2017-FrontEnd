// Imports
import UserRoles from '../../core/auth/constants/userRoles';
import WorkshopListController from './workshop-list.controller';
import WorkshopListHeaderController from './workshop-list-header.controller';
import { workshops } from './workshop-list.resolve';

/**
 * @ngInject
 * @param RouterHelper
 * @param WorkshopListSharedDataService
 */
export default function routing(RouterHelper, WorkshopListSharedDataService) {
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
            _sharedData() {
              // Set order to distance when coming to page
              WorkshopListSharedDataService.order = 'distance';
            },
          },
        },
        'header@': {
          template: require('./partials/header.html'),
          controller: WorkshopListHeaderController,
          controllerAs: 'vm',
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
