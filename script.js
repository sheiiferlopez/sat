var sheifer = angular.module ("sheifer",[]);
sheifer.controller('operacion',function ($scope) {
	$scope.precio = 50;
	$scope.IVA = 0.12;
	 $scope.precio = $scope.precio;
	 $scope.precio = $scope.precio * $scope.IVA;
})

