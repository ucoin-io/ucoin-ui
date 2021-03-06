"use strict";

var co = require('co');

module.exports = ($scope, $http, $state, $location, Webmin, UIUtils) => {

  UIUtils.enableTabs();

  $scope.$parent.conf = $scope.$parent.conf || {};
  $scope.$parent.menu = 'settings';

  $(".dropdown-button").dropdown({ constrainwidth: false });

  $scope.fullReset = () => co(function *() {
    yield Webmin.server.services.stopAll();
    yield Webmin.server.resetData();
    $state.go('index');
  });
};
