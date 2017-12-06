/*! CKP - KeePass integration for Chrome™, Copyright 2017 Steven Campbell
*/
"use strict";

function StartupController($scope, settings) {

  settings.getCurrentDatabaseChoice().then(function(choice) {
    $scope.alreadyChoseDb = (choice == null ? false : true);
  }).then(function() {
    $scope.$apply();
  });
}
