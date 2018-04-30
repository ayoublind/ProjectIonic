// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('moncontrolleur', function ($scope,$timeout,$ionicPopup,$window) {
    $scope.gnumber;
    $scope.number;
    $scope.message;
    $scope.time = 0;
    $scope.timereel = 0;
    $scope.anime = "";
    $scope.ic;

    $scope.generatenumber = function () {
      $scope.gnumber = Math.round((Math.random() * 10) * 10);
    }

    $scope.generatenumber();

    $scope.checknumber = function () {
      if ($scope.number != null) {
        if ($scope.number > $scope.gnumber) {

          $scope.message = "Plus Grand"
          $scope.ic="ion-arrow-down-a"
          navigator.vibrate(500);

        }

        else if ($scope.number < $scope.gnumber) {
          $scope.message = "Plus petit"
          $scope.ic="ion-arrow-up-a"
          navigator.vibrate(1000);
        }
        else {
          $scope.showpopup();
          $scope.time=20000;
          $scope.ic="ion-checkmark-round"
          $scope.message = "Parfait votre nombre est : " + $scope.gnumber.toString()
        }
      }
      else
        $scope.message = "Ajouter un nombre"
        $scope.showpopup();
    }

    //la fonction qui fait le calcule du time
    var timer = function() {
      if( $scope.time < 20000 ) {
        $scope.time += 1000;
        $scope.timereel+=1;
        if($scope.time>10000)
        { 
            $scope.anime="animated infinite tada";
            navigator.vibrate(500);
        }
        if($scope.time==20000)
        {
            $scope.anime="animated rotateOut ";
            $scope.showpopup();
        }

        $timeout(timer, 1000);
      }
    }
    $timeout(timer, 1000);

    //show popup 
    $scope.showpopup = function () {
        $scope.anime = "animated rotateOut ";
        var alertPopup = $ionicPopup.alert({
          title: 'Thank you for playing',
          buttons: null,
          templateUrl: "templates/popup.html"
        });
        alertPopup.then(function (res) {
          console.log(' cone');
        });
    }

    $scope.reloadapp = function(){
        $window.location.reload(true);
    }
    $scope.exitapp = function(){
        navigator.app.exitApp();
    }



});

