angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('main', {
      url: '/main',
      templateUrl: 'templates/mainPage.html'
    })
        
    
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
        
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html'
    }) 

        
    .state('fInfo', {
      url: '/fInfo',
      templateUrl: 'templates/futInfo.html'
    })


    .state('bInfo', {
      url: '/bInfo',
      templateUrl: 'templates/badInfo.html'
    })
        
          
    
      
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
      
        
    .state('menu.informativeSection', {
      url: '/info',
      views: {
        'side-menu': {
      templateUrl: 'templates/informativeSection.html'
          }
        }
    })
        
    
    
      
        
    .state('menu.viewSchedule', {
      url: '/viewSch',
      views: {
        'side-menu': {
          templateUrl: 'templates/viewSchedule.html',
          controller: 'viewScheduleCtrl'
          }
        }
    })
        
      
    
      
        
    .state('menu.bookCourt', {
      url: '/booking',
      views: {
        'side-menu': {
      templateUrl: 'templates/bookCourt.html'
          }
        }
    })
        
      
    
      
        
    .state('menu.profile', {
      url: '/profile',
      views: {
        'side-menu': {
      templateUrl: 'templates/profile.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.homepage', {
      url: '/home',
      views: {
        'side-menu': {
          templateUrl: 'templates/homepage.html'
        }
      } 
    })

   
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  // $urlRouterProvider.otherwise('/main');

  $urlRouterProvider.otherwise('/login');
  

  

});