angular.module('app.services', [])

.service('LoginService', function($q) {
	return {
		loginUser: function(matric, pw) {
			var deferred = $q.defer();
			var promise = deferred.promise;

			if (matric == '37248' && pw == 'asdf0987') {
				deferred.resolve('Welcome' + name + '!');
			}	else {
					deferred.reject('Wrong credentials. ');
			}
			promise.success = function(fn) {
				promise.then(fn);
				return promise;
			}
			promise.error = function(fn) {
				promise.then(null, fn);
				return promise;
			}
			return promise;
		}
	}
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

