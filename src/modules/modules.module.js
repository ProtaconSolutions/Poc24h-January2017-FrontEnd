// Imports
import angular from 'angular';
import about from './about/about.module';
import home from './home/home.module';
import offerList from './offer_list/offer_list.module';
import workshop from './workshop/workshop.module';
import workshopList from './workshop-list/workshop-list.module';
import routes from './modules.routes';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules', [
    about,
    home,
    workshop,
    workshopList,
    offerList,
  ])
  .run(routes)
  .name;
