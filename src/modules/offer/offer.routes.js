// Imports
import UserRoles from '../../core/auth/constants/userRoles';
import OfferController from './offer.controller';
import OfferHeaderController from './offer-header.controller';
import { offer } from './offer.resolve';

/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
  const states = [{
    state: 'modules.offer',
    config: {
      url: '/tarjoukset/:id',
      title: 'Tarjous',
      params: {
        id: null,
        selected: null,
      },
      data: {
        access: UserRoles.ROLE_ANON,
      },
      views: {
        'content@': {
          template: require('./partials/offer.html'),
          controller: OfferController,
          controllerAs: 'vm',
          resolve: {
            _offer: offer,
          },
        },
        'header@': {
          template: require('./partials/header.html'),
          controller: OfferHeaderController,
          controllerAs: 'vm',
          resolve: {
            _offer: offer,
          },
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
