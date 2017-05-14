app.controller('headerController', function ($scope) {
  $scope.title = 'header';
  $scope.header = {
    title: 'Home',
    describe: 'root@-mirrors:~#',
    menus: [
      {
        id: 1,
        name: 'HOME',
        url: 'home.html'
      },
      {
        id: 2,
        name: 'NEWS',
        url: 'news.html'
      },
      {
        id: 3,
        name: 'DOCS',
        url: 'docs.html'
      }, {
        id: 4,
        name: 'ABOUT',
        url: 'about.html'
      }
    ]
  };
});
app.directive('headerDirective', function () {
  return {
    restrict: 'AE',
    templateUrl: './tpl/header.html',
    // replace: true,
    link: function (scope, element, attrs) {
      // scope.title = 'controller header 2';
      // console.log('1');
    }
  };
});