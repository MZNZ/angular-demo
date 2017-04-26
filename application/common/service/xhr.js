(function () {
    'use strict';

    angular.module('mollyRedditPost').factory('Xhr', function ($http) {

        var Xhr = function (endpoint, data) {
            this.endpoint = endpoint;
            this.data = data;
        };

        Xhr.prototype.get = function () {
            return $http({url: this.endpoint, method: 'GET'});
        };

        return Xhr;
    });
})();
