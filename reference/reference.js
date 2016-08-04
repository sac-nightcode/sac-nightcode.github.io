angular
.module('lrRefMod', [])
.controller('LrReferenceController', function(){
	var Data = this;

});

angular
.module('lrRefMod')
.directive('lrInReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_in.html',
		controller: 'LrReferenceController',
		controllerAs: 'ctrl'
	}
});

angular
.module('lrRefMod')
.directive('lrOutReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_out.html',
		controller: 'LrReferenceController',
		controllerAs: 'ctrl'
	}
});