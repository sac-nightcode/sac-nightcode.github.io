angular
.module('myApp', [])
.factory('Data', function(){
	return {
		Url:'',
		Title: '',
		Description: ''}
	}
	)
.controller('LrReferenceController', function(Data){
	this.Data = Data;
})
.directive('lrInReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_in.html',
		scope: true,
		require: '^LrReferenceController',
		link:function(scope, element, attrs, injectedController){}
	}
})
.directive('lrOutReference', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_out.html',
		scope: true,
		require: '^LrReferenceController',
		link:function(scope, element, attrs, injectedController){}
	}
})