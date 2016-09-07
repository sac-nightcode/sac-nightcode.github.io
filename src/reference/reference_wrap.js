angular
.module('lrRefWrapMod')
.controller('LrRefWrapCntrl', function(){
	this.displayEdit = true;
})
.directive('lrRefWrap', function(){
	return {
		templateUrl: '../templates/reference_wrap.html',
		scope: true
	}
});
