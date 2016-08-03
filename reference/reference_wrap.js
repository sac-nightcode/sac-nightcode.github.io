angular
.module('lrRefWrapMod', ['lrRefMod'])
.controller('LrRefWrapCntrl', function(){
	this.displayEdit = true;
})
.directive('lrRefWrap', function(){
	return {
		restrict: 'AE',
		templateUrl: 'reference_wrap.html',
		scope: {Data: '='}
	}
})