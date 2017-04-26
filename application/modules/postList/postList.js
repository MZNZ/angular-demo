(function() {
  'use strict';

  var PostListController = function($scope, Xhr) {
    var self = this;
    this.data = null;
    this.isLoad = false;

    var postListUrl = "https://www.reddit.com/r/reactjs.json";
    var postListXhr = new Xhr(postListUrl);

    postListXhr.get().then(function(response) {
        self.data = response.data.data.children;
        self.isLoad = true;
    });
  };

  angular.module('postList', [])
  .controller('PostListController', PostListController);
})();