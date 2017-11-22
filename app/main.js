import angular from 'angular';

// angular modules
import constants from './global/js/constants';
import onConfig  from './global/js/on_config';
import onRun     from './global/js/on_run';
import 'angular-ui-router';
import './global/templates';
import './filters';
import './views'; //controllers
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
