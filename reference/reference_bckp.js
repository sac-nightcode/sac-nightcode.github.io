angular
.module('lrRefMod', [])
.controller('LrReferenceController', function(){
	this.Data={
		Title: '',
		Url: '',
		Description: ''
	};
})
.directive('lrInReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_in.html',
		scope: true
	}
})
.directive('lrOutReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_out.html',
		scope: true
	}
})