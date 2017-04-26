(function() {
  'use strict';

  angular.module('mollyRedditPost', [
    'ui.router',
    'ngSanitize',

    'postList',
    'post'
  ]);

  angular.module('mollyRedditPost').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('postList', {
        url: '/postList',
        templateUrl : 'modules/postList/postList.html',
        controller: 'PostListController as postList'
    })
    .state('post', {
        url: '/post/:postId',
        templateUrl : 'modules/post/post.html',
        controller: 'PostController as post'
    });

    $urlRouterProvider.otherwise('/postList');
  });
})();
