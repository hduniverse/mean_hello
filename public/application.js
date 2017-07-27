var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, []);

angular.element(document)Ready(function () {
	angular.bootstrap(document,
		[mainApplicationModuleName]);
});