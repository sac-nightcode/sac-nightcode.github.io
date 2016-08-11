angular
.module('lrRefWrapMod')
.controller('LrRefWrapCntrl', function(){
	this.displayEdit = true;
})
.directive('lrRefWrap', function(){
	return {
		restrict: 'AE',
		templateUrl: '../reference_wrap.html',
		scope: true
	}
});
