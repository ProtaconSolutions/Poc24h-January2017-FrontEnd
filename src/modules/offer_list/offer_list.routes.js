// Imports
import OfferListController from './offer_list.controller';
import UserRoles from '../../core/auth/constants/userRoles';
import { offers } from './offer_list.resolve';

/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
  const states = [{
    state: 'modules.offerList',
    config: {
      url: '/tarjoukset',
      title: 'Tarjoukset',
      data: {
        access: UserRoles.ROLE_ANON,
      },
      views: {
        'content@': {
          template: require('./offer_list.html'),
          controller: OfferListController,
          controllerAs: 'vm',
          resolve: {
            _offers: offers,
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
