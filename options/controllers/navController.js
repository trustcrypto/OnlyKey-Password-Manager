/*! CKP - KeePass integration for Chrome™, Copyright 2017 Steven Campbell
*/
"use strict";

function NavController($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}
