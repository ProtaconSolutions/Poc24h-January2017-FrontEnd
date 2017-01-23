// Imports
import OfferListController from './offer_list.controller';
import TabHeaderController from '../../layout/tab-header/tab-header.controller';
import UserRoles from '../../core/auth/constants/userRoles';
import { offers } from './offer_list.resolve';
import Tab from '../../entities/tab';

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
