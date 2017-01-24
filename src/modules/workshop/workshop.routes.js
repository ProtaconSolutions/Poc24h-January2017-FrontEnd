// Imports
import UserRoles from '../../core/auth/constants/userRoles';
import WorkshopController from './workshop.controller';
import WorkshopHeaderController from './workshop-header.controller';
import { workshop } from './workshop.resolve';
import { carBrands } from '../home/home.resolve';

/**
 * @ngInject
 * @param RouterHelper
 * @param WorkshopSharedDataService
 */
export default function routing(RouterHelper, WorkshopSharedDataService) {
  const states = [{
    state: 'modules.workshop',
    config: {
      url: '/korjaamot/:id',
      title: 'Korjaamo',
      params: {
        id: null,
        selected: null,
      },
      data: {
        access: UserRoles.ROLE_ANON,
      },
      views: {
        'content@': {
          template: require('./partials/workshop.html'),
          controller: WorkshopController,
          controllerAs: 'vm',
          resolve: {
            _workshop: workshop,
            _carBrands: carBrands,
            _sharedData() {
              // Set action to information when routing to workshop details
              WorkshopSharedDataService.action = 'information';
            },
          },
        },
        'header@': {
          template: require('./partials/header.html'),
          controller: WorkshopHeaderController,
          controllerAs: 'vm',
          resolve: {
            _workshop: workshop,
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
