angular.module('app.controllers', [])
  
.controller('mainPage', function($scope) {
	
})
   
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
	$scope.data = {};

	$scope.login = function() {
		// console.log("LOGIN user: " + $scope.data.matric + " -PW: " + $scope.data.password);
		
		LoginService.loginUser($scope.data.matric, $scope.data.password).success(function(data) {
			var alertPopup = $ionicPopup.alert({
                title: 'Login success!'
            });

            $state.go('menu.homepage');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
	}
})
   
.controller('signupCtrl', function($scope) {

})
      
.controller('informativeSectionCtrl', function($scope) {

})
   
.controller('viewScheduleCtrl', function($scope) {

	$scope.item = [{
		key1: "value1",
		key2: "value1"},
		{
		key1: "value2",
		key2: "value2"}
	];

})
   
.controller('bookCourtCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
   
.controller('homepageCtrl', function($scope) {

})

.controller('futInfoCtrl', function($scope) {

})

.controller('menuCtrl', function($scope) {
	$scope.$on('$ionicView.beforeEnter', function (e, data) {
    if (data.enableBack) {
        $scope.$root.showMenuIcon = true;
    } else {
        $scope.$root.showMenuIcon = false;
    }
});
})
 