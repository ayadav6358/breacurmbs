    var anup = angular.module('anup', [
        'ui.router',
        'ngSanitize',
        'uiBreadcrumbs'              
    ]);
    
    /********************************************************************************************************/
    anup.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise('/home');
        $stateProvider.state('app', {
                abstract: true,
                data: {
                  label: 'App',
                },
            })
            .state('app.home', {
                url: '/home',
                 data: {
                    label: 'Home',
                  },
                views: {
                    'content@': {
                         templateUrl: 'http://localhost/breadcrumb/views/home.htm',
                        }
                    }
                })    
                .state('app.home.usage',{
                    url: '/usage',
                    data: {
                        label: 'Usage',
                      },
                    views:{
                        'content@':{
                        templateUrl: 'http://localhost/breadcrumb/views/test.htm',
                        }
                    }
                }) 
                .state('app.home.usage.options',{
                    url: '/options',
                     data: {
                        label: 'Options',
                      },
                    views:{
                        'content@':{
                        templateUrl: 'http://localhost/breadcrumb/views/option.htm',
                        }
                    }
                })              
    }]); 

