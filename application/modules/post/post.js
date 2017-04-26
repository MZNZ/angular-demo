(function() {
  'use strict';

  var PostController = function($scope, $stateParams, Xhr) {
    var self = this;
    var postId = $stateParams.postId;
    this.post = null;
    this.comments = null;
    this.sortBy = '';
    this.postBody = null;
    self.isLoad = false;

    var postUrl = "https://www.reddit.com/r/reactjs/" + postId + ".json";
    var postXhr = new Xhr(postUrl);
    postXhr.get().then(function(response) {
      self.post = response.data[0].data.children[0].data;
      self.comments = response.data[1].data.children;
      self.isLoad = true;
    });

    this.selections = [
      {name: 'best', value: 'data.ups'},
      {name: 'new', value: 'data.created'},
      {name: 'upvote ratio', value: 'data.upvote_ratio'}
    ];

    this.sortItemChange = function(propertyName) {
      switch (propertyName) {
        case 'data.created':
          this.sortBy = 'data.created';
          break;
        case 'data.ups':
          this.sortBy = 'data.ups';
          break;
        case 'data.upvote_ratio':
          this.comments.sort(function(a, b) {
            if (a.data.upvote_ratio) {
              return b.data.upvote_ratio - a.data.upvote_ratio;
            } else {
              return ((b.data.ups) / (b.data.ups + b.data.downs)) - ((a.data.ups) / (a.data.ups + a.data.downs));
            }
          });
          break;
        default:
          break;
      }
    };
  };

  angular.module('post', [])
  .controller('PostController', PostController);
})();