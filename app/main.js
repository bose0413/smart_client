import angular from 'angular';
import 'angularfire';

// angular modules
import constants from './global/config/constants';
import onConfig  from './global/config/on_config';
import onRun     from './global/config/on_run';
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
  'firebase',
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
