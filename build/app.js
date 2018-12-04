/*
Below in this code, I have commented how this project can be improved
*/

var app = angular.module('App', []);

app.controller('AppController', ['$http', function ($http) {

  var apiRoute = 'http://localhost:3000/calculator';
  // var apiRoute = 'https://ag-wb-calculator.herokuapp.com/calculator';

  /*
  For next time: Just like I sain in server.js - clean up res.json. 
  I think it would be great if we tossed in all of the values into the "result" object, instead of these strange A,B,C properties I've made
  */

  var _this = this;
  _this.results = [];
  _this.operators = [];
  _this.A = []; //14GA
  _this.B = []; //18GA
  _this.C = []; //16GA 120x60
  _this.D = []; //16GA 120x48
  _this.E = []; //20GA
  _this.F = []; //14GA Aluminum

  $http.get(apiRoute)

    .then(function (res) {
      _this.operators = res.data.operators;
    }, function (res) {
      console.log(res);
    });

  _this.calculate = function (operator, value1) {
    _this.error = validate(operator, value1);

    if (!_this.error) {
      $http.post(apiRoute, { operator, value1 })
        .then(function (res) {

          _this.results.push(res.data.result)

          _this.sumA = res.data.A
          _this.sumB = res.data.B
          _this.sumC = res.data.C
          _this.sumD = res.data.D
          _this.sumE = res.data.E
          _this.sumF = res.data.F

        }, function (res) {

        });
    }
  }
}]);

function validate(operator, value1) {
  if (!operator) return 'Please select a Door.';
  if ((!value1 && value1 != 0) || (!value1 && value1 != 0)) return 'Please enter a QTY.';
  if (value1 <= 0) return 'Choose a number greater than zero.'
  if (value1 % 1 != 0) return 'Choose a whole number.'
  return null;
}
