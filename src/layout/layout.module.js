// Imports
import angular from 'angular';
import headerModule from './header/header.module';
import tabHeaderModule from './tab-header/tab-header.module';
import routes from './layout.routes';

/**
 * @ngInject
 */
export default angular
  .module('app.layout', [
    headerModule,
    tabHeaderModule,
  ])
  .run(routes)
  .name;
