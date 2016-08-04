angular
.module('lrRefMod', [])
.controller('LrReferenceController', function(){
	this.Data=Data={};
})
.directive('lrInReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_in.html',
		controller: LrReferenceController,
		controllerAs: 'ctrl',
		scope: true,
		bindToController: true
	}
})
.directive('lrOutReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_out.html',
		controller: LrReferenceController,
		controllerAs: 'ctrl',
		scope: true,
		bindToController: true
	}
})