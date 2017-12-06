/*! CKP - KeePass integration for Chrome™, Copyright 2017 Steven Campbell
*/

"use strict";

function SettingsLinkController($scope, $location, optionsLink) {
  $scope.showSettingsPage = function() {
    optionsLink.go();
  }
}
