class TestCtrl {
    constructor($scope) {
        this.$scope = $scope;

        this.test = 'test';
    }
}

const app = angular.module('myApp', []);
app.controller('TestCtrl', TestCtrl);