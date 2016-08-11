angular
.module('lrRefMod', [])
.controller('LrReferenceController', function(){
	var vm = this;

});

angular
.module('lrRefMod')
.directive('lrInReference', dataIn);

function dataIn(){
	return {
		restrict: 'AE',
		templateUrl: '../reference_in.html',
		controller: 'LrReferenceController',
		controllerAs: 'ctrl'
	}
}

angular
.module('lrRefMod')
.directive('lrOutReference', dataOut);

function dataOut(){
	return {
		restrict: 'AE',
		templateUrl: '../reference_out.html',
		controller: 'LrReferenceController',
		controllerAs: 'ctrl'
	}
}