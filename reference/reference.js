angular
.module('lrRefMod', [])
.controller('LrReferenceController', function(){
	this.Data=Data={};
})
.directive('lrInReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_in.html',
		scope: {Data: '='}
	}
})
.directive('lrOutReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_out.html',
		scope: {Data: '='}
	}
})