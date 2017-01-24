// Imports
import UserRoles from '../../core/auth/constants/userRoles';
import WorkshopController from './workshop.controller';
import { workshop } from './workshop.resolve';

/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
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
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
