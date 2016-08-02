anglular
.module('fieldModule', [])
.controller('Field', function(){
	this.label = 'Label',
	this.data = ''
})
.directive('fieldIn', function(){
	return {
	templateUrl: '/field_in.html',
	restrict: 'AE',
	scope: {
	label='&',
	
}
}
}